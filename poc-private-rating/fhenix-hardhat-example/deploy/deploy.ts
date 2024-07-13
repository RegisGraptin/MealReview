import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import chalk from "chalk";

const hre = require("hardhat");

const func: DeployFunction = async function () {
  const { fhenixjs, ethers } = hre;
  const { deploy } = hre.deployments;
  const [signer] = await ethers.getSigners();

  if ((await ethers.provider.getBalance(signer.address)).toString() === "0") {
    if (hre.network.name === "localfhenix") {
      await fhenixjs.getFunds(signer.address);
    } else {
        console.log(
            chalk.red("Please fund your account with testnet FHE from https://faucet.fhenix.zone"));
        return;
    }
  }

  const counter = await deploy("RestaurantRating", {
    from: signer.address,
    args: [1], // Default, let's say it is restaurant ID 1
    log: true,
    skipIfAlreadyDeployed: false,
  });

  console.log(`RestaurantRating contract: `, counter.address);
};

export default func;
func.id = "deploy_restaurant_rating";
func.tags = ["RestaurantRating"];
