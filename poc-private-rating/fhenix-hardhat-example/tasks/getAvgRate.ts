import { RestaurantRating } from "../types";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

task("task:getAvgRate").setAction(async function (
  _taskArguments: TaskArguments,
  hre,
) {

  // TODO :: Maybe need to have another function testing the expected behaviour
  
  const { fhenixjs, ethers, deployments } = hre;
  const [signer] = await ethers.getSigners();

  const RestaurantRating = await deployments.get("RestaurantRating");

  console.log(`Running getCount, targeting contract at: ${RestaurantRating.address}`);

  const contract = (await ethers.getContractAt(
    "RestaurantRating",
    RestaurantRating.address,
  )) as unknown as unknown as RestaurantRating;

  const result = await contract.getPreviousRatingRound();
  console.log(`got rate: ${result.toString()}`);
});
