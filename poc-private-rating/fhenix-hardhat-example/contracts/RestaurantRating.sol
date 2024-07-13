// SPDX-License-Identifier: MIT

pragma solidity >=0.8.13 <0.9.0;

import "@fhenixprotocol/contracts/FHE.sol";

contract RestaurantRating {
  
  // After 10 persons, we are updating the rate of the restaurant
  uint256 immutable NUMBER_OF_VOTES = 10;

  // ID of the restaurant
  uint256 public restaurantId;

  // Total rates - Private state
  euint32 private totalRates;
  
  // Public rate - Updated after n-th participants
  uint32 public publicRateRestaurant;

  // Count the number of voters
  uint32 totalUsers;

  // Keep a trace of the user who have voted for this restaurant
  mapping (address => bool) voters;

  constructor(uint256 _restaurantId) {
    restaurantId = _restaurantId;
    totalUsers = 0;

    totalRates = FHE.asEuint32(0);
  }


  // Add a new rate to the restaurant
  function rate(inEuint32 calldata encryptedRate) public {
    require(!voters[msg.sender], "USER_HAS_ALREADY_VOTED");
    voters[msg.sender] = true;

    // Increase the total number of voters
    totalUsers++;

    // Add the encrypted rate to the total one
    euint32 value = FHE.asEuint32(encryptedRate);
    totalRates = totalRates + value;

    // Update the public rate if we have pass the next level
    if (totalUsers % NUMBER_OF_VOTES == 0) {
      publicRateRestaurant = FHE.decrypt(totalRates) / totalUsers;
    }
  }

  function getPreviousRatingRound() public view returns (uint32) {
    return publicRateRestaurant;
  }

}
