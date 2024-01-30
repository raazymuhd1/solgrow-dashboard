import React, { FC } from 'react'
import Image from "next/image"
import { ICard } from "@/constants"

const Card: FC<ICard> = ({ title, logo, tokenAmount, valueInUsd }) => {
  return (
    <div className="h-[200px] w-[260px] bg-bg-card rounded-[15px] text-[#fff] p-[15px] border-none">

        <aside className="flex flex-col items-center">
            <div className="flex items-center gap-[15px]">
                <h3 className="text-[14px] font-semibold"> { title } </h3>
            </div>

            <div className="flex flex-col items-center gap-[5px] mt-[35px]">
                <h2 className="text-[22px]"> {tokenAmount} </h2>
                <p className="text-[16px]"> { valueInUsd }  </p>
            </div>
        </aside>
    </div>
  )
}

export default Card