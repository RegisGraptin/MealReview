// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


import { IEntropyConsumer } from "@pythnetwork/entropy-sdk-solidity/IEntropyConsumer.sol";
import { IEntropy } from "@pythnetwork/entropy-sdk-solidity/IEntropy.sol";

contract Restaurant is ERC721 {

    uint256 private _nextTokenId;
    uint256 private _nextReviewId;
    
    struct Review {
        uint256 time;
        uint256 rating;
        address owner;
        string message;
    }

    // Restaurant ID => User address => Review ID
    mapping(uint256 => mapping(address => uint256)) restaurant_user_review;

    // Review detail
    mapping(uint256 => Review) reviews_details;

    constructor() ERC721("Restaurant", "RST") {}

    function createRestaurant()
        public
        returns (uint256)
    {
        uint256 tokenId = _nextTokenId++;
        
        _mint(msg.sender, tokenId);
        // _setTokenURI(tokenId, tokenURI);

        return tokenId;
    }

    function addReview(
        uint256 restaurant_id,
        uint256 rating,
        string memory message
    ) public returns (uint256) {

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

}
