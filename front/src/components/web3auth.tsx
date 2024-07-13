import { Web3Auth } from "@web3auth/modal";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";

const web3auth = async () => {

    const clientId =
    "BJhn9PinJyqJCmli9UC4mFPpJ4Mrsi7WxRCcFqmzrr5fpvoi6WeD3wYKtMDZc6kAfRQPTSgpDU13d4gTnJAgUSc";
  // get it from https://dashboard.web3auth.io by creating a Plug n Play project.
  
  const chainConfig = {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0x14A34", // hex of 84532
    rpcTarget: "https://sepolia.base.org",
    // Avoid using public rpcTarget in production.
    // Use services like Infura, Quicknode etc
    displayName: "Base Sepolia",
    blockExplorerUrl: "https://sepolia-explorer.base.org",
    ticker: "ETH",
    tickerName: "ETH",
    logo: "https://github.com/base-org/brand-kit/blob/main/logo/symbol/Base_Symbol_Blue.svg",
  };
  
  const privateKeyProvider = new EthereumPrivateKeyProvider({
    config: { chainConfig },
  });
  
  const web3auth = new Web3Auth({
    clientId,
    web3AuthNetwork: "sapphire_devnet",
    privateKeyProvider: privateKeyProvider,
  });
  
  const openloginAdapter = new OpenloginAdapter({
    adapterSettings: {
      loginConfig: {
        // Google login
        google: {
          verifier: "meal-review", // Pass the Verifier name here
          typeOfLogin: "google", // Pass on the login provider of the verifier you've created
          clientId: "1046892215060-qjd2lc3prshlu4df38hn6oge82na4a97.apps.googleusercontent.com", // Pass on the Google `Client ID` here
        },
      },
    },
  });
  
  web3auth.configureAdapter(openloginAdapter);
  
  // Initialize Modal
  await web3auth.initModal();
  
  // Login with Google
  await web3auth.connect();

}

export default web3auth;