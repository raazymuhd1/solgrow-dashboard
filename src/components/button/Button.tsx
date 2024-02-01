import React from 'react'

const Button = ({ styles, title, parentStyles, link }: { styles: string; title: string, parentStyles: string; link: string }) => {

  return (
    <div className={`md:w-[230px] ${parentStyles} sm:w-[180px] w-[fit-content] p-[2px] rounded-[10px]`}>
      <a 
        href={link} target='_blank'
        className={`w-full inline-block text-[#fff] hover:opacity-[0.8] transition-all duration-[600] md:text-[16px] text-[14px] border-none ${styles} outline-none md:py-[8px] md:px-[10px] py-[5px] px-[8px] rounded-[10px] text-center`}>
          {/* <a href={link} target='_blank'> */}
            { title }
          {/* </a> */}
      </a>
    </div>
  )
}

export default Button