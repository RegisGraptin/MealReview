import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  base,
  sepolia,
  scrollSepolia
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    scrollSepolia,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [scrollSepolia] : []),
  ],
  ssr: true,
});