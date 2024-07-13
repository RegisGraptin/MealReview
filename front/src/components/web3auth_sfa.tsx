import { Web3Auth, decodeToken } from "@web3auth/single-factor-auth";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { CredentialResponse, googleLogout } from "@react-oauth/google";

const SfaWeb3Auth = async (response: CredentialResponse) => {

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
  
  // Initialize Modal
  await web3auth.init();
  
  // Login with Google
  const idToken = response.credential;
    const { payload  } = decodeToken(idToken);
    console.log((payload as any)?.email);
    await web3auth.connect({
      verifier: "w3a-google-demo",
      verifierId: (payload as any)?.email,
      idToken: idToken!,
    });

}

export default SfaWeb3Auth;