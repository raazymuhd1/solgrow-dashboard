"use client"
import { createContext, useContext, ReactNode } from "react"
import { connection, serverUrl, testWallet } from "@/utils/helper"

interface IData {
    balance: string;
    associatedTokenAccounts: string[];
}

interface IContext {
    fetchHold: (wallet: string) => Promise<IData>;
}

const initialContext: IContext = {
    fetchHold: async(wallet: string): Promise<IData> => ({ balance: "0", associatedTokenAccounts: ['']})
}

const ReflectContext = createContext(initialContext);

const ReflectProvider = ({children}: { children: ReactNode }) => {


    const fetchHold = async(wallet: string): Promise<IData> => {
         let data;

           try {
              const res = await fetch(`${serverUrl}/holding?walletAddress=${wallet}`)
              data = await res.json();
              console.log(data)
            } catch(err) {
            console.log(err)
           }
           return data
    }
    

    return (
        <ReflectContext.Provider value={{
            fetchHold
        }}>
           { children }
        </ReflectContext.Provider>
    )
}

export default ReflectProvider


export const useReflectContext = () => useContext(ReflectContext)