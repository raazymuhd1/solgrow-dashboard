"use client"
import React, { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { useAnchorWallet, AnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { web3, Program, AnchorProvider } from "@project-serum/anchor"
import { connection, getProgramId } from "@/utils/helper";
import { PublicKey } from "@solana/web3.js"

import { cards } from '@/constants'
import { logo } from "@/assets"
import Card from "./Card"
import InputField from "./InputField"
import BigCard from "./BigCard"
import Button from "../button/Button"

const Dashboard = () => {
     const [mounted, setMounted] = useState(false);
     const wallet = useAnchorWallet()
     const contractAddr = "4CvBHXkcZHTsxoJSkjy47ebxtqviuHSVmfCCArekTXXa"

     const networkConfig = useMemo(() => {
         const provider = new AnchorProvider(connection, wallet as AnchorWallet, { preflightCommitment: "processed" })
         const reflectContract = new PublicKey(contractAddr)
         
         return { provider, reflectContract } 
     }, [wallet])

     useEffect(() => {
        const handleMounted = async() => {
            setMounted(true)
            const { provider, reflectContract } = networkConfig

            try {
                const idl = await Program.fetchIdl(reflectContract, provider)
                console.log(idl)
                await getProgramId()
            } catch(err) {
                console.log(err)
            }
        }
        handleMounted()



     }, [networkConfig])

    return (
        <div className="w-[75%] h-full mt-[40px] md:mb-0 mb-[60px] mx-auto"> 
            <div className="flex items-center md:flex-row flex-col justify-between gap-[15px]">
                <aside className="flex items-center gap-[15px]">
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
                
            <aside className="flex xl:flex-row lg:gap-[14px] mt-[35px] flex-col-reverse w-[100%] md:items-start items-center gap-[8px]">
                <div className="mt-[20px] lg:w-[60%] w-full">
                    <div className="flex w-full lg:flex-nowrap flex-wrap items-center md:justify-start justify-center gap-[45px]">
                        { cards.map(card => (
                            <Card key={card.id} { ...card } />
                        )) }
                        {/* <Card { ...{ id: 0, title: "$REFLECT Marketcap", logo, tokenAmount: "", valueInUsd: "$29M", isMcCap: true  }} /> */}
                    </div>
                    <InputField />
                    <div className="md:mt-[2px] mt-[-15px] md:mb-0 mb-[10px] h-[130px] flex flex-row items-center gap-[8px]">
                        <Button styles="btn-gradient" parentStyles='btn-gradient' title="BUY $REFLECT" />
                        <Button styles="bg-[#2a2e43]" parentStyles='btn-gradient' title="WHITEPAPER" />
                    </div>
                </div>

                <BigCard />
            </aside>
         </div>
    )
}

export default Dashboard