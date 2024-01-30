import React from 'react'

const Button = ({ styles, title }: { styles: string; title: string }) => {
  return (
    <button className={`text-[#fff] md:text-[18px] text-[14px] border-[2px] ${styles} outline-none md:py-[8px] md:px-[10px] py-[5px] px-[8px] rounded-[10px] md:w-[250px] sm:w-[180px] w-[fit-content] text-center`}>
        { title }
    </button>
  )
}

export default Button