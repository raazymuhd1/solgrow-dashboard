import React from 'react'
import Image from "next/image"
import { logo } from "@/assets"

const BigCard = () => {
  return (
    <div className="xl:h-[250px] h-[250px] xl:w-[40%] mt-[20px] md:w-[90%] w-[80%] md:mb-0 mb-[30px] border-none text-[#fff] bg-bg-card p-[10px] rounded-[10px]">

        <div className="h-[90%] flex flex-col justify-between items-center w-full">
            <aside className="flex items-start gap-[8px]">
                <Image src={logo} width={20} height={20} alt="reflect logo" className="rounded-[50%]" />

                <div>
                    <h3 className="lg:text-[16px] text-[14px]"> Total Rewards </h3>
                    <p className="lg:text-[18px] text-[16px] font-semibold"> $142.323 </p>
                </div>
            </aside>

            <aside className="flex items-start gap-[8px]">
                <Image src={logo} width={20} height={20} alt="reflect logo" className="rounded-[50%]" />

                <div>
                    <h3 className="lg:text-[16px] text-[14px]"> Total Burned </h3>
                    <p className="lg:text-[18px] text-[16px] font-semibold"> $142.323 </p>
                </div>
            </aside>

            <button className="border-none btn-gradient hover:opacity-[0.8] transition-all duration-[600] outline-none py-[8px] px-[10px] rounded-[25px] w-[fit-content] md:text-[16px] text-[12px] whitespace-nowrap mx-auto text-center">
                Share your rewards
            </button>
        </div>

    </div>
  )
}

export default BigCard