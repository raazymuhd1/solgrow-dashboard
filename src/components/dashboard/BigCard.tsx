import React from 'react'
import Image from "next/image"
import { logo } from "@/assets"

const BigCard = () => {
  return (
    <div className="xl:h-[480px] h-[300px] xl:w-[30%] mt-[20px] md:w-[90%] w-[80%] md:mb-0 mb-[30px] border-none text-[#fff] bg-bg-card p-[10px] rounded-[10px]">

        <div className="h-[80%] mt-[30px] flex flex-col justify-between items-center w-full">
            <aside className="flex items-start gap-[8px]">
                <Image src={logo} width={30} height={30} alt="reflect logo" className="rounded-[50%]" />

                <div>
                    <h3 className="text-[18px]"> Total Rewards </h3>
                    <p className="text-[22px] font-semibold"> $142.323 </p>
                </div>
            </aside>

            <button className="border-none btn-gradient hover:opacity-[0.8] transition-all duration-[600] outline-none py-[8px] px-[10px] rounded-[25px] w-[80%] mx-auto text-center">
                Share Your Rewards
            </button>
        </div>

    </div>
  )
}

export default BigCard