import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const RestaurantModule = buildModule("RestaurantModule", (m) => {

  // Base Sepolia address for pyth
  const EntropyAddress = "0x41c9e39574F40Ad34c79f1C99B66A45eFB830d4c";
  const ProviderAddress = "0x6CC14824Ea2918f5De5C2f75A9Da968ad4BD6344";

  // Create smart contract
  const restaurantContract = m.contract("Restaurant", [EntropyAddress, ProviderAddress]);
  
  return { restaurantContract };
});

module.exports = RestaurantModule;
