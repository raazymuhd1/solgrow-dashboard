"use client"
import React from 'react'
import Image from "next/image"
import { banner, solgrow_banner } from "@/assets"

const Banner = () => {

  return (
    <div className="w-full flex justify-center xl:h-[330px] h-auto mb-[40px] rounded-[15px] overflow-hidden">
        <Image 
          src={solgrow_banner} 
          alt="banner" 
          className="max-w-[100%] xl:w-full rouned-[15px] h-auto object-cover" 
        />
    </div>
  )
}

export default Banner