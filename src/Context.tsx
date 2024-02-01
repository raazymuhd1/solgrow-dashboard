"use client"
import { createContext, useContext, ReactNode, useState } from "react"
import { connection, serverUrl, serverUrl2, testWallet } from "@/utils/helper"

interface IData {
    balance: string;
    associatedTokenAccounts: string[];
}

interface IContext {
    fetchHold: (wallet: string) => Promise<IData>;
    loading: boolean;
}

const initialContext: IContext = {
    fetchHold: async(wallet: string): Promise<IData> => ({ balance: "0", associatedTokenAccounts: ['']}),
    loading: false
}

const ReflectContext = createContext(initialContext);

const ReflectProvider = ({children}: { children: ReactNode }) => {
    const [loading, setLoading] = useState(true)

    /**
     * @dev fetch total solana22 token held in an account
     * @params wallet => user wallet 
     */
    const fetchHold = async(wallet: string): Promise<IData> => {
         let data;

           try {
                const res = await fetch(`${serverUrl2}/holding?walletAddress=${wallet}`)
                data = await res.json();
                
            } catch(err) {
                console.log(err)
            }
           return data
    }

    const fetchTotalRewards = async(wallet: string) => {
        
    }

    const fetchRewards = async(wallet: string) => {

    }

    const fetchTotalBurned = async(wallet: string) => {

    }
    

    return (
        <ReflectContext.Provider value={{
            fetchHold,
            loading
        }}>
           { children }
        </ReflectContext.Provider>
    )
}

export default ReflectProvider


export const useReflectContext = () => useContext(ReflectContext)