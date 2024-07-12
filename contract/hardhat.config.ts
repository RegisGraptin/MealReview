import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const { vars } = require("hardhat/config");

const PRIVATE_KEY = vars.get("PRIVATE_KEY");

require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/oV3hmnASOLZEC-vYMOtBDdk_meyvFKa4",
      accounts: [PRIVATE_KEY],
    },
    scroll: {
      url: "https://sepolia-rpc.scroll.io/",
      accounts: [PRIVATE_KEY],
    }
  }
};

export default config;
