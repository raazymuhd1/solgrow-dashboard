import React from 'react'

const Button = ({ styles, title, parentStyles }: { styles: string; title: string, parentStyles: string }) => {

  return (
    <div className={`md:w-[250px] ${parentStyles} sm:w-[180px] w-[fit-content] p-[2px] rounded-[10px]`}>
      <button
        className={`w-full text-[#fff] hover:opacity-[0.8] transition-all duration-[600] md:text-[16px] text-[14px] border-none ${styles} outline-none md:py-[8px] md:px-[10px] py-[5px] px-[8px] rounded-[10px] text-center`}>
          { title }
      </button>
    </div>
  )
}

export default Button