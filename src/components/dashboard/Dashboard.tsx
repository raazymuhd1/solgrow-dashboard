"use client"
import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react"
import Image from "next/image"
import { useAnchorWallet, AnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { web3, Program, AnchorProvider } from "@project-serum/anchor"
import { connection,  serverUrl, testWallet } from "@/utils/helper";
import { PublicKey } from "@solana/web3.js"
import { TOKEN_PROGRAM_ID, AccountLayout } from '@solana/spl-token'
import { useReflectContext } from "@/Context"
import { cards } from '@/constants'
import { logo } from "@/assets"
import Card from "./Card"
import InputField from "./InputField"
import BigCard from "./BigCard"
import Button from "../button/Button"
import Banner from "../banner/Banner"
import LoadingSkeleton from "../loading/Loading"

import { whitepaperLink, buyReflectLink } from '@/constants';

const Dashboard = () => {
     const [mounted, setMounted] = useState(false);
     const [tokenHeld, setTokenHeld] = useState("0")
     const [isLoading, setIsLoading] = useState(false)
     const [inputValue, setInputValue] = useState("");

     const { fetchHold } = useReflectContext();
     const wallet = useAnchorWallet()

     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        console.log(inputValue)
     }

    const handleInputWallet = async(e: KeyboardEvent<HTMLInputElement>) => {
        let data, balance, associatedTokenAccounts;
        const keyCode = e.keyCode

        console.log(keyCode)
        
        try {
            // only fetch the data if the input box is not empty
            if(inputValue && inputValue.length > 0 && keyCode == 13) {
                setIsLoading(true)
                console.log(isLoading)

                const data =  await fetchHold(inputValue)
                balance = data.balance;
                associatedTokenAccounts = data.associatedTokenAccounts;
               
            }
            
            if(balance) {
                setTokenHeld(balance)
                setIsLoading(false)
                console.log(isLoading)
            }

        } catch(err) {
            console.log(err)
             setIsLoading(false)
        } finally {
             setIsLoading(false)
        }
    }

  
    return (
        <>
            { isLoading && inputValue.length > 0 && <LoadingSkeleton /> }
        
            <div className="w-[75%] min-h-[600px] mt-[40px] md:mb-0 mb-[60px] mx-auto"> 
                <div className="flex items-center md:flex-row flex-col justify-between gap-[15px]">
                    <aside className="flex md:flex-row flex-col items-center gap-[15px]">
                        <Image 
                            className="lg:w-[50px] lg:h-[50px] w-[35px] h-[35px] rounded-[50%]"
                            src={logo} 
                            alt="logo" 
                        />
                        <h2 className="lg:text-[24px] text-[#fff] md:text-[22] text-[14px] font-bold uppercase">
                            Reflect Finance - dashboard
                        </h2>
                    </aside>
                    

                    { mounted && <WalletMultiButton className="rounded-[10px] connect-wallet-btn" /> }
                </div> 
                    
                <aside className="flex lg:flex-row lg:gap-[14px] mt-[35px] mb-[30px] flex-col-reverse w-[100%] md:items-start items-center gap-[8px]">
                    <div className="mt-[20px] lg:w-[60%] w-full">
                        <div className="flex w-full lg:flex-nowrap flex-wrap items-center md:justify-start justify-center gap-[45px]">
                            {/* { cards.map(card => (
                                <Card key={card.id} { ...card } />
                            )) } */}
                            <Card { ...{title: "$REFLECT Rewards", tokenHeld: "", valueInUsd: "$5400", isMcCap: true  }} />
                            <Card { ...{ title: "$REFLECT Held", tokenHeld: Number(tokenHeld).toFixed(2), valueInUsd: "$4500" }} />
                        </div>
                        <InputField value={inputValue} handleChange={handleChange} handleInput={handleInputWallet} />
                        <div className="md:mt-[2px] mt-[-15px] md:mb-0 mb-[10px] h-[100px] flex flex-row items-center gap-[8px]">
                            <Button link={whitepaperLink} styles="btn-gradient" parentStyles='btn-gradient' title="BUY $REFLECT" />
                            <Button link={buyReflectLink} styles="bg-[#2a2e43]" parentStyles='btn-gradient' title="WHITEPAPER" />
                        </div>
                    </div>

                    <BigCard />
                </aside>

                <Banner />
            </div>

        </>
    )
}

export default Dashboard