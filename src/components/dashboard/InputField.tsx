"use client"
import React, { useRef, FC, ChangeEvent, KeyboardEvent } from 'react'

interface IProps {
   handleInput: (event: KeyboardEvent<HTMLInputElement>) => void; 
   handleChange: (event: ChangeEvent<HTMLInputElement>) => void; 
   value: string;
}

const InputField: FC<IProps> = ({ handleInput, handleChange, value }) => {

  
  //#44298c
  return (
    <fieldset className="lg:w-[100%] w-[100%] bg-bg-card h-[85px] mt-[15px] overflow-hidden rounded-[15px]">
        <legend className="text-[#fff] w-full text-center font-bold md:text-[16px] text-[14px]"> Check your rewards </legend>
        <input
            className="p-[10px] text-[#7c6baa] input-field bg-bg-card border-[2px] border-[#353853] focus:border-[#44298c] rounded-[15px] placeholder:text-center placeholder:text-[#7c6baa] placeholder:font-semibold focus:placeholder:text-[#fff] text-center font-semibold outline-none w-full h-full"
            placeholder='Paste wallet' 
            name="wallet" 
            id=""
            value={value}
            onChange={handleChange}
            onKeyDown={handleInput} 
        />
    </fieldset >
  )
}

export default InputField