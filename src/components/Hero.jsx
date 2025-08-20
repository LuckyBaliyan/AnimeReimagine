import React, { useState,useRef, useEffect } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Loader from './Loader';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [currentIndex,setCurrentIndex] = useState(1);
    const [isClicked,setIsClick] = useState(false);
    const [loading,setLoading] = useState(true);
    const [loadedVideo,setLoadedVideo] = useState(0);
    
    const totalVideos = 4;
    const {contextSafe} = useGSAP();
    
    // 0%4 = 0 + 1 = 1
    // 4 % 4 = 0 + 1 = 1
    const upcomingVideoIndex = (currentIndex%totalVideos)+1;
    const nextVidRef = useRef(null);
    const currentVidRef = useRef(null);
    const headingRef = useRef([]);


    const handleMiniVideoClick = contextSafe(()=>{
        setIsClick(true);
        setCurrentIndex(upcomingVideoIndex);
    })

    const handleVideoLoad = ()=>{
        setLoadedVideo((prev)=>prev+1)
    }

    const getVidSource = (index)=> `videos/${index}.mp4`;

    useEffect(()=>{
        if(loadedVideo === totalVideos - 1){
            setLoading(false);
        }
    },[loadedVideo])

    useGSAP(()=>{
        gsap.to(headingRef.current,{
            y:0,
            stagger:0.08,
            duration:0.8,
            ease:'bounce.out',
            delay:0.5,  
        },[]);

        if(window.innerWidth < 1024) return;
        if(isClicked){
            let tl = gsap.timeline({});

            tl.set('#next-video',{opacity:1});
            tl.to('#next-video',{
                transformOrigin:'center center',
                scale:1,
                width:'100%',
                height:'100%',
                duration:1,
                ease:'power1.inOut',
                onStart: () => {
                    if (nextVidRef.current) {
                      nextVidRef.current.currentTime = 0; // force ready frame
                      nextVidRef.current.play();
                    }
                }
            })
            .from(currentVidRef.current,{
            transformOrigin:'center center',
            scale:0,
            duration:1.5,
            ease:'power1.inOut',
        },"-=0.5")
    }

    },{dependencies:[currentIndex],revertOnUpdate:true});


    useGSAP(()=>{
        /*if(window.innerWidth < 1024){
            gsap.set('#video-frame',{
                //clipPath:'polygon(0 0, 100% 0, 84% 78%, 15% 77%)',
                //clipPath:'polygon(18% 8%, 95% 23%, 80% 92%, 14% 64%)'
                clipPath:'polygon(14% 0, 100% 0, 82% 100%, 9% 74%)'
            })
        }*/
        //else{
       gsap.set('#video-frame',{
        clipPath:"polygon(14% 0%,70% 0%,90% 90%,0% 100%)",
        borderRadius:'24px',
        scale:1,
       })
     // }

       gsap.from('#video-frame',{
        clipPath:'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
        borderRadius:'0 0 0 0',
        ease:"power1.inOut",
        scrollTrigger:{
            trigger:'#main',
            start:'center center',
            end:'bottom center',
            scrub:true,
            pin:true,
        },
       })
    })


  return (
    <>
    <div className='fixed flex-center z-[100] h-dvh w-screen overflow-hidden pointer-events-none'>
       <Loader loadingState={loading}/>
    </div>
    <div id="main" className='relative h-dvh w-screen overflow-x-hidden'>
        <h1 className='hero-heading text-[var(--blue-50)] absolute top-0 left-0 mt-2 ml-3'>Reimagine</h1>
        <div id="video-frame" className='relative top-0 z-10 h-dvh w-screen
        overflow-hidden bg-[#121212] will-change-[clip-path]'>
            <div>
                <div className="mask-clip-path absolute-center absolute
                z-50 size-64 cursor-pointer overflow-hidden rounded-lg object-cover object-center"
               >
                 <div onClick={handleMiniVideoClick} className='hidden md:block origin-center
                 scale-50 opacity-0 transition-all duration-500 ease-in-out
                    hover:scale-100 hover:opacity-100'>
                   <div className='origin-center'>
                     <video ref={currentVidRef} 
                     src={getVidSource(upcomingVideoIndex)}
                     loop id='current-video'
                     preload='auto'
                     className='size-64 object-cover origin-center
                     scale-150 object-center will-change-[transform,opacity]'
                     onLoadedData={handleVideoLoad}/>
                   </div>
                  </div>
                </div>
                <video
                ref={nextVidRef}
                src={getVidSource(currentIndex)}
                loop
                muted
                id='next-video'
                preload='metadata'
                className='absolute-center absolute
                z-20 size-64 object-cover object-center
                opacity-0 will-change-[transform,opacity]'
                onLoadedData={handleVideoLoad}/> 
                <video
                src={getVidSource(currentIndex === totalVideos -1?
                    1:currentIndex
                )}
                loop
                muted
                autoPlay
                className='absolute top-0 left-0 size-full object-cover
                object-center'
                onLoadedData={handleVideoLoad}
                />
            </div>
           <div  className='mask absolute bottom-5 right-5 z-40 mix-blend-difference'>
            <h1   ref={(el)=>headingRef.current[0] = el} className='hero-heading
             text-[var(--blue-75)] translate-y-[100%]  will-change-[transform]'>
                A<b className='text-orange-500'>N</b>IME
            </h1>
            </div>

            <div className='absolute left-0 top-0 z-40 size-full mix-blend-difference'>
                <div className='hero-heading mt-24 px-5 sm:px-10 '>
                <div className='mask mix-blend-difference'>
                    <h1 ref={(el)=>headingRef.current[1] = el} className='text-white translate-y-[-100%] '>
                        Reim<b className='text-orange-500'>a</b>gine</h1>
                </div>
                <p className='mb-5 mt-2 max-w-64 text-base lg:text-2xl font-["robert-regular"]
                text-[var(--blue-75)] leading-[1.1]'>
                    ENTER THE META ANIME UNIVERSE <br />
                    UNLEASH THE ART OF STORYTELLING
                </p>
                <Button id="watch-trailer" title={"Watch Trailer"}
                leftIcon={<TiLocationArrow className='text-xl' />} classContainer=
                {'bg-orange-500 flex flex-center gap-1'}
                />
                </div>
            </div>
        </div>
        <div  className='mask absolute bottom-5 right-5'>
            <h1 className='hero-heading
              text-[var(--blue-50)]  will-change-[transform]'>
                ANIME
            </h1>
        </div>
    </div>
   </>
  )
}

export default Hero