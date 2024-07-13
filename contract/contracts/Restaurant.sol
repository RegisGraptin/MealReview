// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


import { IEntropyConsumer } from "@pythnetwork/entropy-sdk-solidity/IEntropyConsumer.sol";
import { IEntropy } from "@pythnetwork/entropy-sdk-solidity/IEntropy.sol";


struct RestaurantInfo {
    string name;
    string place;
}

struct Review {
    uint256 time;
    uint256 rating;
    address owner;
    string message;
}

struct RandomRequest {
    address sender;
    uint256 timestamp;
}

contract Restaurant is ERC721, IEntropyConsumer {

    IEntropy entropy;
    address entropyProvider;

    uint256 private _nextTokenId;
    uint256 private _nextReviewId;
    

    uint256 public lastWinnerTimestamp;
    address public lastWinnerAddress;

    uint256 public n_restaurants;

    mapping(uint256 => RestaurantInfo) restaurant_details;

 
    // Restaurant ID => User address => Review ID
    mapping(uint256 => mapping(address => uint256)) restaurant_user_review;

    // Review detail
    mapping(uint256 => Review) reviews_details;

    address[] elligible_addresses;
    mapping(address => bool) in_raffle;



    mapping(uint64 => RandomRequest) public pendingRandomRequests;

    constructor(address _entropy, address _provider) ERC721("Restaurant", "RST") {
        entropy = IEntropy(_entropy);
        entropyProvider = _provider;
    }

    function createRestaurant(
        string memory name, 
        string memory place
    )
        public
        returns (uint256)
    {
        uint256 tokenId = _nextTokenId++;
        
        restaurant_details[n_restaurants] = RestaurantInfo({
            name: name,
            place: place
        });

        n_restaurants++;

        _mint(msg.sender, tokenId);
        // _setTokenURI(tokenId, tokenURI);

        return tokenId;
    }

    function addReview(
        uint256 restaurant_id,
        uint256 rating,
        string memory message
    ) public returns (uint256) {

        if (!in_raffle[msg.sender]) {
            in_raffle[msg.sender] = true;   
            elligible_addresses.push(msg.sender);
        }

        uint256 reviewId = _nextReviewId++;

        Review memory review = Review({
            time: block.timestamp,
            rating: rating,
            owner: msg.sender,
            message: message
        });

        restaurant_user_review[restaurant_id][msg.sender] = reviewId;
        reviews_details[reviewId] = review;

        return reviewId;
    }

    function run_contest(bytes32 userRandomNumber) public payable {
        // Verify enough fee for randomness
        uint128 requestFee = entropy.getFee(entropyProvider);
        require(msg.value >= requestFee, "Not enough fees");

        // Get random number
        uint64 sequenceNumber = entropy.requestWithCallback{value: requestFee}(
            entropyProvider,
            userRandomNumber
        );

        pendingRandomRequests[sequenceNumber] = RandomRequest({
            sender: msg.sender,
            timestamp: block.timestamp
        });
    }


    function entropyCallback(
        uint64 sequenceNumber,
        address,
        bytes32 randomNumber
    ) internal override {
        RandomRequest memory request = pendingRandomRequests[sequenceNumber];
        require(request.sender != address(0), "Request not found");

        // Select randomly the user, based on the number of user in the list
        uint randomUser = uint(randomNumber) % elligible_addresses.length;

        // At the moment sent some eth, but later give a free restaurant ticket/NFT
        address selectedAddress = elligible_addresses[randomUser];
        (bool sent, bytes memory _data) = payable(selectedAddress).call{value: 0.001 ether}("");


        // Update last winner data
        lastWinnerTimestamp = block.timestamp;
        lastWinnerAddress = selectedAddress;

        require(sent, "Failed to send Ether");
    }

    function getEntropy() internal view override returns (address) {
        return address(entropy);
    }

}
