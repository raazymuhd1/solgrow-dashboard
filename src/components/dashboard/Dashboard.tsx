import React from "react"
import { cards } from '@/constants'
import Card from "./Card"
import InputField from "./InputField"
import BigCard from "./BigCard"
import Button from "../button/Button"

const Dashboard = () => {

    return (
        <div className="w-[90%] h-full mt-[40px] md:mb-0 mb-[60px] mx-auto"> 
            <h2 className="lg:text-[24px] text-[#fff] md:text-[18] text-[16px] font-bold uppercase">
                {/* logo */}
                Reflect Finance - dashboard
            </h2>
                
            <aside className="flex xl:flex-row mt-[35px] min-h-[500px] flex-col-reverse w-[100%] md:items-start items-center gap-[8px]">
                <div className="lg:w-[50%] h-[600px] xl:w-full w-full">
                    <div className="flex w-full lg:flex-nowrap flex-wrap items-center md:justify-start justify-center gap-[45px]">
                        { cards.map(card => (
                            <Card key={card.id} { ...card } />
                        )) }
                    </div>
                    <InputField />
                    <div className="md:mt-[20px] mt-[-15px] md:mb-0 mb-[10px] h-[130px] flex flex-row items-center gap-[8px]">
                        <Button styles="btn-gradient border-[#b524fd]" title="BUY $REFLECT" />
                        <Button styles="border-[#771aec]" title="WHITEPAPER" />
                    </div>
                </div>

                <BigCard />
            </aside>
         </div>
    )
}

export default Dashboard