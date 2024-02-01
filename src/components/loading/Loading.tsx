import React from 'react'
import Image from "next/image"
import {logo} from "@/assets"

const LoadingSkeleton = () => {
  return (
    <div className="h-screen fixed top-0 z-[9] w-[100vw] loading text-[#000]">
        <div className="flex w-[100%] h-full flex-col justify-center items-center gap-[20px]">
          <h2 className="text-center text-[18px] text-[#fff] font-semibold"> please wait </h2>
          <Image src={logo} alt="loading-logo" className="w-[50px] h-[50px] spin-logo rounded-[15px]" />
        </div>
    </div>
  )
}

export default LoadingSkeleton