import React from 'react'
import Image from "next/image"
import { banner } from "@/assets"

const Banner = () => {
  return (
    <div className="w-full h-[250px] border-[2px] mb-[40px] border-[#000] rounded-[15px] overflow-hidden">
        <Image src={banner} alt="banner" className="w-full h-full object-cover" />
    </div>
  )
}

export default Banner