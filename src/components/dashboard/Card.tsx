import React, { FC } from 'react'
import Image from "next/image"
import { ICard } from "@/constants"
import { logo, solgrow } from "@/assets"
import millify from "millify"

interface IProps {
  title: string;
  tokenHeld: string;
  valueInUsd: string; 
}

const Card: FC<IProps> = ({ title, tokenHeld, valueInUsd }) => {

   console.log(valueInUsd)
   console.log(tokenHeld)

  return (
    <div className="h-[150px] md:w-[50%] w-[100%] bg-bg-card rounded-[15px] text-[#fff] p-[15px] border-none">

       {/* <div className="flex items-start gap-[10px] justify-center"> */}

        <aside className="flex items-center flex-col">
            <div className="flex items-center justify-center gap-[10px]">
                 <Image src={solgrow} alt="logo" className="w-[30px] h-[30px] rounded-[50%] object-contain" />
                <h3 className="lg:text-[18px] md:text-[16px] text-[14px] font-semibold whitespace-nowrap"> { title } </h3>
            </div>

            <div className="flex flex-col items-start gap-[5px] mt-[20px]">
                {  tokenHeld && <h2 className="text-[22px] font-bold"> {  millify(Number(tokenHeld)) || 0} </h2> } 
                {/* {  rewards && <h2 className="text-[22px] font-bold"> {  millify(Number(rewards)) || 0} </h2> }  */}
                {/* <p className={`text-[16px]`}> ${ millify(Number(valueInUsd)) || 0}  </p> */}
            </div>
        </aside>
       {/* </div> */}

    </div>
  )
}

export default Card