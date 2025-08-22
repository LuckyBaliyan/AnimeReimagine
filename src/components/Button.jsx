import React from 'react'

const Button = ({title,id,leftIcon,classContainer}) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer
    overflow-hidden rounded-full text-base md:text-xl px-7 py-3
    text-black active:scale-95 ${classContainer}`}>
        {leftIcon}
        <span className='
        relative inline-flex overflow-hidden font-["general"]
        text-xs uppercase'>
            <div>
                {title}
            </div>
        </span>
    </button>
  )
}

export default Button