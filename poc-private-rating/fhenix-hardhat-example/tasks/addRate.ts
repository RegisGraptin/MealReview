import { RestaurantRating } from "../types";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

task("task:addRate")
  .addParam("amount", "Rate a restaurant (plaintext number)", "4")
  .setAction(async function (taskArguments: TaskArguments, hre) {
    
    const { fhenixjs, ethers, deployments } = hre;
    const [signer] = await ethers.getSigners();

    if ((await ethers.provider.getBalance(signer.address)).toString() === "0") {
      await fhenixjs.getFunds(signer.address);
    }

    const amountToAdd = Number(taskArguments.amount);
    const RestaurantRating = await deployments.get("RestaurantRating");

    console.log(
      `Running addCount(${amountToAdd}), targeting contract at: ${RestaurantRating.address}`,
    );

    const contract = await ethers.getContractAt("RestaurantRating", RestaurantRating.address);

    const encyrptedAmount = await fhenixjs.encrypt_uint32(amountToAdd);

    let contractWithSigner = contract.connect(signer) as unknown as RestaurantRating;

    try {
      // add() gets `bytes calldata encryptedValue`
      // therefore we need to pass in the `data` property
      await contractWithSigner.rate(encyrptedAmount);
    } catch (e) {
      console.log(`Failed to rate a restaurant: ${e}`);
      return;
    }
  });
