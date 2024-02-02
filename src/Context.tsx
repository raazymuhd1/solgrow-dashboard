"use client"
import { createContext, useContext, ReactNode, useState } from "react"
import { connection, serverUrl, serverUrl2, testWallet } from "@/utils/helper"

interface IData {
    balance: string;
    associatedTokenAccounts: string[];
}

interface IContext {
    fetchHold: (wallet: string) => Promise<string>;
    loading: boolean;
    fetchTokenPrice: () => Promise<string>;
    fetchRewards: (wallet: string) => Promise<string>;
    fetchTotalRewards: () => Promise<string>
}

const initialContext: IContext = {
    fetchHold: async(wallet: string): Promise<string> => "",
    fetchTokenPrice: async() => "",
    fetchRewards: async(wallet: string) => "",
    fetchTotalRewards: async() => "",
    loading: false,
}

const ReflectContext = createContext(initialContext);

const ReflectProvider = ({children}: { children: ReactNode }) => {
    const [loading, setLoading] = useState(true)

     const fetchTokenPrice = async(): Promise<string> => {
         let data, priceInUsd_;

          try {
                const res = await fetch(`${serverUrl2}/get-price`)
                data = await res.json();
                
            } catch(err) {
                console.log(err)
            }

          if(data) {
              const { priceInUsd, marketCap } = data;
              priceInUsd_ = priceInUsd;
          }

            return priceInUsd_;
    }

    /**
     * @dev fetch total solana22 token held in an account
     * @params wallet => user wallet 
     */
    const fetchHold = async(wallet: string): Promise<string> => {
         let data;

           try {
                const res = await fetch(`${serverUrl2}/holding?walletAddress=${wallet}`)
                data = await res.json();
                
            } catch(err) {
                console.log(err)
            }
           return data.balance
    }

    const fetchTotalRewards = async(): Promise<string> => {
          let data;

           try {
                const res = await fetch(`${serverUrl2}/total-rewards`)
                data = await res.json();
                
            } catch(err) {
                console.log(err)
            }
           return data.totalRewards;
    }

    const fetchRewards = async(wallet: string): Promise<string> => {
         let data;

           try {
                const res = await fetch(`${serverUrl2}/rewards?walletAddress=${wallet}`)
                data = await res.json();
                
            } catch(err) {
                console.log(err)
            }
           return data.rewards;
    }
    

    return (
        <ReflectContext.Provider value={{
            fetchHold,
            loading,
            fetchTokenPrice,
            fetchRewards,
            fetchTotalRewards
        }}>
           { children }
        </ReflectContext.Provider>
    )
}

export default ReflectProvider


export const useReflectContext = () => useContext(ReflectContext)