"use client"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { endpoint } from "@/utils/helper";
import "@solana/wallet-adapter-react-ui/styles.css";
import {ReactNode} from 'react'


const Provider = ({ children }: { children: ReactNode }) => {
    const phantomWallet = new PhantomWalletAdapter();

  return (
     <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[phantomWallet]}>
           <WalletModalProvider>
               { children }
           </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
  )
}

export default Provider