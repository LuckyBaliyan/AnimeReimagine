import React from 'react'
import Button from './Button';

const Card = ({src,title,description,isCommingSoon=true}) => {
  return (
    <div className='relative size-full'>
        <video  
        src={src} 
        loop 
        muted 
        autoPlay
        className='absolute top-0 left-0 size-full object-cover
        object-center'
        />
        <div className='relative size-full z-10 flex flex-col 
        justify-start p-5 text-[var(--blue-50)]'>
          <h1 className='bento-title special-font'>
            {title}
          </h1>
          {description && (
            <p className='mt-3 max-w-84 text-xs
            md:text-base'>
              {description}
            </p>
          )}
          {isCommingSoon && (
            <Button title={isCommingSoon} 
            classContainer={
              `bg-black border-hsla text-xs  md:text-base !text-[var(--blue-50)] hover:bg-[var(--yellow-300)]
               px-10 md:px-15 lg:px-25 mt-auto  hover:!text-[#121212] !transition-all !ease !duration:200 hover:opacity-60`
              }/>
          )}
        </div>
        {title}
    </div>
  )
}

export default Card;