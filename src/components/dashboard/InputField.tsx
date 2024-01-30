"use client"
import React, { useRef } from 'react'

const InputField = () => {
     const inputRef = useRef<HTMLTextAreaElement>(null)

    //  const handleFocus = () => {
    //      if(inputRef?.current && document.hasFocus()) {
    //           inputRef?.current.classList.add("add-border");
    //      } else if(inputRef?.current && document.hasFocus() != true) {
    //           inputRef?.current.classList.remove("add-border")
    //      }
    //  }
  //#44298c
  return (
    <div className="w-[95%] h-[250px] mt-[30px] overflow-hidden rounded-[15px]">
        <textarea
            ref={inputRef}
            className="p-[20px] text-[#7c6baa] bg-bg-card border-[2px] border-[#353853] focus:border-[#44298c] rounded-[15px] placeholder:leading-[150px] placeholder:text-center placeholder:text-[#7c6baa] placeholder:font-semibold font-semibold outline-none w-full h-full mt-[30px]"
            placeholder='Paste Wallet' 
            name="wallet" 
            id="" 
            // onFocus={handleFocus}
            cols={30} 
            rows={10} 
        />
    </div >
  )
}

export default InputField