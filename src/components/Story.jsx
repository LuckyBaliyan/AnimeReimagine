import React from 'react'
import AnimatedTitle from './AnimatedTitle';

const Story = () => {
  return (
    <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
        <div className='flex size-full flex-col items-center py-10 border-0
        pb-24 '>
            <p className='font-["general"] text-center border-0 text-sm uppercase md:text-[10px]"]
            '>The Multiversal World Of Infinite Possibilities</p>
            <div className='relative size-full'>
                <h1 className='hero-heading !leading-[0.9] mt-5 lg:tracking-tight lg:!text-9xl text-center'>
                    The Sto<b>r</b>y Of A <br />
                    Hidden Realm
                </h1>
            </div>
        </div>
    </section>
  )
}

export default Story;