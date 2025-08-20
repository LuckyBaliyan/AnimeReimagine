import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(()=>{
        const clipAnimation = gsap.timeline({
            scrollTrigger:{
                trigger:"#clip",
                start:"center center",
                end:"+=800 center",
                scrub:0.5,
                pin:true,
                pinSpacing:true,
            }
        })

        clipAnimation.to('.mask-clip-path',{
            width:'100vw',
            height:'100vh',
            borderRadius:0,
        })

        clipAnimation.to('.h-up',{
            y:0,
        })
    })


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
    <div id="about" className='min-h-screen w-screen'>
        <div className="relative mb-8 mt-42 flex flex-col justify-start items-center gap-5 w-full h-full">
            <h2 className='text-base font-["general"] mt-4  text-orange-500  uppercase md:text-[10px]'>
                Welcome To Reimagine
            </h2>
            <div className='mt-5 text-center  font-["zentry"]'>
                {'Discover the world shared advanture'.split('').map((item,index)=>(
                    <div id='showText' key={index} className='opacity-0 font-light text-6xl uppercase
                     leading-0.8 md:text-[9rem] lg:text-[12rem] inline-block'>
                        {item+" "}
                    </div>
                ))}
            </div>
            <div className="about-subtext leading-[1] font-light text-orange-500 font-['zentry'] w-full h-fit 
            absolute bottom-0 left-0 pt-20 mb-2">
                    <p className='text-sm'>From anime dreams to digital realms shaping stories that move and inspire.</p>
                    <p className='text-sm'>Breathing life into pixels with the spirit of anime — every frame a story, every motion a dream.</p>
            </div>
        </div>
        <div className='h-dvh w-screen' id='clip'>
            <div className="mask-clip-path  about-image relative">
                <div className="overlay absolute top-0 left-0 w-full h-full z-[10]">
                    <div className='absolute top-0 left-5 mask'>
                        <h1 className='hero-heading text-[#121212]  mask translate-y-[100%] h-up'>Explore</h1>
                    </div>
                    <div className='absolute bottom-0 right-5'>
                        <div className='mask ml-auto'><h1 className='text-[#121212] translate-y-[100%] hero-heading  h-up text-end'>The</h1></div>
                        <div className='mask'><h1 className='text-[#121212] translate-y-[100%] hero-heading h-up'>Collection</h1></div>
                    </div>
                </div>
                <img src="img/about4.webp" alt="Backgorund" 
                className='absolute left-0 top-0 size-full object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default About;