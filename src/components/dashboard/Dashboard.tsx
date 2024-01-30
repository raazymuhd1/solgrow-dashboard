import React from "react"
import Image from "next/image"
import { cards } from '@/constants'
import { logo } from "@/assets"
import Card from "./Card"
import InputField from "./InputField"
import BigCard from "./BigCard"
import Button from "../button/Button"

const Dashboard = () => {

    return (
        <div className="w-[90%] h-full mt-[40px] md:mb-0 mb-[60px] mx-auto"> 
            <div className="flex items-center gap-[15px]">
                <Image 
                    className="w-[50px] h-[50px] rounded-[50%]"
                    src={logo} 
                    alt="logo" 
                 />
                <h2 className="lg:text-[24px] text-[#fff] md:text-[22] text-[16px] font-bold uppercase">
                    Reflect Finance - dashboard
                </h2>
             </div> 
                
            <aside className="flex xl:flex-row lg:gap-[14px] mt-[35px] min-h-[500px] flex-col-reverse w-[100%] md:items-start items-center gap-[8px]">
                <div className="h-[600px] mt-[20px] w-full">
                    <div className="flex w-full lg:flex-nowrap flex-wrap items-center md:justify-start justify-center gap-[45px]">
                        { cards.map(card => (
                            <Card key={card.id} { ...card } />
                        )) }
                    </div>
                    <InputField />
                    <div className="md:mt-[10px] mt-[-15px] md:mb-0 mb-[10px] h-[130px] flex flex-row items-center gap-[8px]">
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