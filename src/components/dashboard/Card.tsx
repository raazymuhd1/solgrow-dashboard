import React, { FC } from 'react'
import Image from "next/image"
import { ICard } from "@/constants"
import { logo } from "@/assets"

const Card: FC<ICard> = ({ title, logo, tokenAmount, valueInUsd, isMcCap }) => {
  return (
    <div className="h-[150px] w-[260px] bg-bg-card rounded-[15px] text-[#fff] p-[15px] border-none">

       {/* <div className="flex items-start gap-[10px] justify-center"> */}

        <aside className="flex items-center flex-col">
            <div className="flex items-center justify-center gap-[10px]">
                 <Image src={logo} alt="logo" className="w-[30px] h-[30px] rounded-[50%]" />
                <h3 className="lg:text-[18px] md:text-[16px] text-[14px] font-semibold whitespace-nowrap"> { title } </h3>
            </div>

            <div className="flex flex-col items-start gap-[5px] mt-[20px]">
                <h2 className="text-[22px] font-bold"> {tokenAmount} </h2>
                <p className={`${isMcCap ? "text-[34px]" : "text-[16px]"}`}> { valueInUsd }  </p>
            </div>
        </aside>
       {/* </div> */}

    </div>
  )
}

export default Card