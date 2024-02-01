"use client"
import React, { useRef, FC, ChangeEvent } from 'react'

interface IProps {
   handleInput: (e: ChangeEvent<HTMLInputElement>) => void; 
}

const InputField: FC<IProps> = ({ handleInput }) => {

  
  //#44298c
  return (
    <div className="lg:w-[93%] w-[95%] h-[100px] mt-[2px] overflow-hidden rounded-[15px]">
        <input
            className="p-[20px] text-[#7c6baa] input-field bg-bg-card border-[2px] border-[#353853] focus:border-[#44298c] rounded-[15px] placeholder:text-center placeholder:text-[#7c6baa] placeholder:font-semibold placeholder:leading-[250px] font-semibold outline-none w-full h-full mt-[30px]"
            placeholder='Paste Wallet' 
            name="wallet" 
            id=""
            onInput={handleInput} 
        />
    </div >
  )
}

export default InputField