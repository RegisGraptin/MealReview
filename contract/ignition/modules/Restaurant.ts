import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const RestaurantModule = buildModule("RestaurantModule", (m) => {
  const restaurantContract = m.contract("Restaurant");
  return { restaurantContract };
});

module.exports = RestaurantModule;
