"use client"
import React, { useEffect } from 'react'
import Image from "next/image"
import { banner, mobileBanner } from "@/assets"

const Banner = () => {
   const isWindow = typeof window != "undefined";
  //  isWindow && window.innerWidth < 700 ? banner : mobileBanner
  console.log(isWindow)

  return (
    <div className="w-full xl:h-[280px] h-auto border-[2px] mb-[40px] border-[#000] rounded-[15px] overflow-hidden">
        <Image src={banner} alt="banner" className="max-w-[100%] xl:h-full h-auto object-cover" />
    </div>
  )
}

export default Banner