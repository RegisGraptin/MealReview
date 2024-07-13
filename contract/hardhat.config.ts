import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("@nomicfoundation/hardhat-verify");

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
    },
    base: {
      url: 'https://sepolia.base.org',
      accounts: [PRIVATE_KEY],
      gasPrice: 1000000000,
    },
  },
  etherscan: {
    apiKey: {
      // Is not required by blockscout. Can be any non-empty string
      base: "base"
    },
    customChains: [
      {
        network: "base",
        chainId: 84532,
        urls: {
          apiURL: "https://base-sepolia.blockscout.com//api",
          browserURL: "https://base-sepolia.blockscout.com/",
        }
      }
    ]
  },
};

export default config;
