import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from 'gsap';

const About = () => {


    useGSAP(()=>{
        gsap.to('#showText',{
            opacity:1,
            duration:1.3,
            stagger:0.08,
            ease:'elastic.out',
            scrollTrigger:{
                trigger:'#showText',
                start:"top 80%",
                end:"bottom center",
                scrub:true,
            }
        })
    },[])

  return (
    <div id="about" className='min-h-screen  w-screen'>
        <div className="relative mb-8 mt-42 flex flex-col items-center gap-5">
            <h2 className='textsm font-["general"] mt-4  font-bold text-orange-500  uppercase md:text-[10px]'>
                Welcome To Reimagine
            </h2>
            <div className='mt-5 text-center text-3xl uppercase leading-0.8 md:text-[5rem]'>
                {'Discover the world shared advanture'.split('').map((item,index)=>(
                    <div id='showText' key={index} className='opacity-0 font-light inline-block'>{item}</div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default About;