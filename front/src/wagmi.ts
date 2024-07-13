import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import {
  baseSepolia
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    baseSepolia,
  ],
  transports: {
    [baseSepolia.id]: http('https://eth-mainnet.g.alchemy.com/v2/oV3hmnASOLZEC-vYMOtBDdk_meyvFKa4'),
  },
  ssr: true,
});