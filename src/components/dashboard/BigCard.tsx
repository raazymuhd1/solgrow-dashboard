import React from 'react'
import Image from "next/image"

const BigCard = () => {
  return (
    <div className="lg:h-[480px] h-[300px] lg:w-[30%] w-[80%] md:mb-0 mb-[30px] border-none text-[#fff] bg-bg-card p-[10px] rounded-[10px]">

        <div className="h-[80%] mt-[30px] flex flex-col justify-between items-center w-full">
            <aside className="flex items-center gap-[4px]">
                <Image src="" width={30} height={30} alt="reflect logo" />

                <div>
                    <h3 className="text-[16px]"> Total Rewards </h3>
                    <p className="text-[22px] font-semibold"> $142.323 </p>
                </div>
            </aside>

            <button className="border-none btn-gradient outline-none py-[8px] px-[10px] rounded-[25px] w-[80%] mx-auto text-center">
                Share Your Rewards
            </button>
        </div>

    </div>
  )
}

export default BigCard