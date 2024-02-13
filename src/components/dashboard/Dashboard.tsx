"use client"
import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react"
import Image from "next/image"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useReflectContext } from "@/Context"
import { logo, solgrow } from "@/assets"
import Card from "./Card"
import InputField from "./InputField"
import BigCard from "./BigCard"
import Button from "../button/Button"
import Banner from "../banner/Banner"
import LoadingSkeleton from "../loading/Loading"

import { toast, Toaster } from "react-hot-toast"; 
import { whitepaperLink, buySolgrowLink } from '@/constants';

const Dashboard = () => {
     const [mounted, setMounted] = useState(false);
     const [tokenHeld, setTokenHeld] = useState("0")
     const [tokenRewards, setTokenRewards] = useState("0")
     const [totalRewards, setTotalRewards] = useState("0")
     const [isLoading, setIsLoading] = useState(false)
     const [inputValue, setInputValue] = useState("");
     const [tokenPriceUsd, setTokenPriceUsd] = useState('0');

     const usdPriceHeld = Number(tokenHeld) * Number(tokenPriceUsd)
     const usdPriceRewards =  Number(tokenRewards) * Number(tokenPriceUsd) //tokenRewards != null && tokenPriceUsd != null ?
     const totRewardsUsd = Number(totalRewards) * Number(tokenPriceUsd)

     const { fetchHold, fetchTokenPrice, fetchRewards, fetchTotalRewards } = useReflectContext();

     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        setInputValue(value)
        console.log(inputValue)
     }

     useEffect(() => {
        const fetchPriceAndTotalRewards = async() => {
            try {
                const priceInUsd = await fetchTokenPrice();

                setTokenPriceUsd(priceInUsd)
            } catch(err) {
                console.log(err)
            }
        }

        fetchPriceAndTotalRewards()

     }, [fetchTotalRewards, fetchTokenPrice])

    const handleInputWallet = async(e: KeyboardEvent<HTMLInputElement>) => {
        let data;
        const keyCode = e.keyCode

          if(inputValue.length <= 0 || !inputValue && keyCode == 13) {
              toast.error("input cannot be empty", { duration: 1000 })
              return;
          }
        
        try {
            // only fetch the data if the input box is not empty
            if(inputValue && inputValue.length > 0 && keyCode == 13) {
                setIsLoading(true)
                console.log(isLoading)
                const balance: string =  await fetchHold(inputValue)
                const rewards: string = await fetchRewards(inputValue);
                const totRewards: string = await fetchTotalRewards();

                setTokenRewards(rewards)
                setTotalRewards(totRewards)

                console.log("total rewards", totRewards)
               
                if(balance) {
                    setTokenHeld(balance)
                    setIsLoading(false)
                    toast.success("data successfully fetched")
                } else {
                    setIsLoading(false)
                    toast.error("no data for this user")
                }
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
            <Toaster />
            { isLoading && inputValue.length > 0 && <LoadingSkeleton /> }
        
            <div className="w-[70%] h-full mt-[40px] md:mb-0 mb-[60px] mx-auto"> 
                <div className="flex items-center md:flex-row flex-col justify-between gap-[15px]">
                    <aside className="flex md:flex-row flex-col items-center gap-[15px]">
                        <Image 
                            className="lg:w-[50px] lg:h-[50px] w-[35px] object-contain h-[35px] rounded-[50%]"
                            src={solgrow} 
                            alt="logo" 
                        />
                        <h2 className="lg:text-[24px] text-[#fff] md:text-[22] text-[14px] font-bold uppercase whitespace-nowrap">
                           Solgrow - dashboard
                        </h2>
                    </aside>
                    

                    { mounted && <WalletMultiButton className="rounded-[10px] connect-wallet-btn" /> }
                </div> 
                    
                <aside className="flex lg:flex-row lg:justify-between lg:gap-[14px] mt-[35px] mb-[30px] flex-col-reverse w-[100%] md:items-start items-center gap-[8px]">
                    <div className="lg:mt-[20px] mt-[10px] lg:w-[60%] w-full">
                        <div className="flex w-full md:flex-nowrap flex-wrap items-center md:justify-between justify-center lg:gap-[20px] gap-[20px]">
                            <Card { ...{title: "$SOLGROW Rewards", tokenHeld: Number(tokenRewards).toFixed(2), valueInUsd: usdPriceRewards.toFixed(2), isMcCap: true  }} />
                            <Card { ...{ title: "$SOLGROW Held", tokenHeld: Number(tokenHeld).toFixed(2), valueInUsd: usdPriceHeld.toFixed(2) }} />
                        </div>

                        <InputField value={inputValue} handleChange={handleChange} handleInput={handleInputWallet} />

                        <div className="md:mt-[2px] mt-[-15px] md:mb-0 mb-[10px] h-[100px] flex flex-row items-center gap-[8px]">
                            <Button link={buySolgrowLink} styles="btn-gradient" parentStyles='btn-gradient' title="BUY $REFLECT" />
                            <Button link={whitepaperLink} styles="bg-[#2a2e43]" parentStyles='btn-gradient' title="WHITEPAPER" />
                        </div>
                    </div>

                    <BigCard totalRewards={totRewardsUsd.toFixed(2)} />
                </aside>

                <div className="md:h-[300px] sm:h-[200px] h-[150px] lg:h-[330px] xl:h-[390px] w-full">
                    <Banner />
                </div>
            </div>

        </>
    )
}

export default Dashboard