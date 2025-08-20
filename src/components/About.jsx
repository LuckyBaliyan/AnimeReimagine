import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(()=>{
        gsap.set('#span-up',{y:"100%"});

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
        },'v')

        clipAnimation.to('#span-up',{
            y:0,
            opacity:1,
            duration:0.5,
            stagger:0.035,
        },'v')
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
            <h2 className='text-base font-["general"] mt-4  text-[#0077ff]  uppercase md:text-[10px]'>
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
            <div className="about-subtext leading-[1] font-light text-[#0077ff] font-['zentry'] w-full h-fit 
            absolute bottom-0 left-0 pt-20 mb-2">
                    <p className='text-sm'>From anime dreams to digital realms shaping stories that move and inspire.</p>
                    <p className='text-sm'>Breathing life into pixels with the spirit of anime — every frame a story, every motion a dream.</p>
            </div>
        </div>
        <div className='h-dvh w-screen' id='clip'>
            <div className="mask-clip-path scale-y-110 md:scale-y-100  about-image relative">
                <div className="overlay absolute top-0 left-0 w-full h-full z-[10]">
                    <div className='absolute top-0 left-5 mask overflow-hidden'>
                            {'Explore'.split('').map((w,i)=>(
                               <span key={i} id='span-up' className='text-[var(--blue-50)] inline-block
                               hover:text-[#0077ff] opacity-0 hero-heading cursor-pointer translate-y-[100%]  
                               transition-colors duration-200 ease-in-out'>{w}</span>
                            ))}
                    </div>
                    <div className='absolute bottom-10 right-5'>
                        <div className='mask ml-auto'>
                              {'The'.split('').map((w,i)=>(
                               <span key={i} id='span-up' className='text-[var(--blue-50)] inline-block
                               hover:text-[#0077ff] opacity-0 hero-heading cursor-pointer translate-y-[100%]  
                               transition-colors duration-200 ease-in-out'>{w}</span>
                            ))}
                        </div>
                        <div className='mask'>
                              {'Gallery'.split('').map((w,i)=>(
                               <span key={i} id='span-up' className='text-[var(--blue-50)] inline-block
                               hover:text-[#0077ff] opacity-0 hero-heading cursor-pointer translate-y-[100%]  
                               transition-colors duration-200 ease-in-out'>{w}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <img src="img/about.webp" alt="Backgorund" 
                className='absolute left-0 top-0 size-full object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default About;