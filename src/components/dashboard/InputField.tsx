import React from 'react'

const InputField = () => {
  return (
    <div className="w-[95%] h-[250px] mt-[30px] border-[#44298c] border-[2px] overflow-hidden rounded-[15px]">
        <textarea
            className="p-[20px] w-full bg-bg-card rounded-[15px] placeholder:leading-[150px] placeholder:text-center h-full border-none outline-none"
            placeholder='Paste Wallet' 
            name="wallet" 
            id="" 
            cols={30} 
            rows={10} 
        />
    </div>
  )
}

export default InputField