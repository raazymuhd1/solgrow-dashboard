import React, { FC } from 'react'
import Image from "next/image"
import { ICard } from "@/constants"
import { logo } from "@/assets"

const Card: FC<ICard> = ({ title, logo, tokenAmount, valueInUsd }) => {
  return (
    <div className="h-[200px] w-[260px] bg-bg-card rounded-[15px] text-[#fff] p-[15px] border-none">

       <div className="flex items-start gap-[10px] justify-center">
        <Image src={logo} alt="logo" className="w-[30px] h-[30px] rounded-[50%]" />

        <aside className="flex items-center flex-col">
            <div className="">
                <h3 className="text-[18px] font-semibold whitespace-nowrap"> { title } </h3>
            </div>

            <div className="flex flex-col items-start gap-[5px] mt-[35px]">
                <h2 className="text-[22px]"> {tokenAmount} </h2>
                <p className="text-[16px]"> { valueInUsd }  </p>
            </div>
        </aside>
       </div>

    </div>
  )
}

export default Card