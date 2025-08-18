import React, { useState,useRef } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

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

    const handleMiniVideoClick = contextSafe(()=>{
        setIsClick(true);
        setCurrentIndex(upcomingVideoIndex);
    })

    const handleVideoLoad = ()=>{
        setLoadedVideo((prev)=>prev+1)
    }

    const getVidSource = (index)=> `videos/hero-${index}.mp4`;

    useGSAP(()=>{
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

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
        <div id="video-frame" className='relative z-10 h-dvh w-screen
        overflow-hidden bg-[var(--blue-75)] bg-[url("/images/about.webp")] bg-cover bg-center'>
            <div>
                <div className="mask-clip-path absolute-center absolute
                z-50 size-64 cursor-pointer overflow-hidden rounded-lg"
               >
                 <div onClick={handleMiniVideoClick} className='hidden md:block origin-center
                 scale-50 opacity-0 transition-all duration-500 ease-in-out
                 hover:scale-100 hover:opacity-100'>
                   <div className='origin-center'>
                     <video ref={currentVidRef} 
                     src={getVidSource(upcomingVideoIndex)}
                     loop id='current-video'
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
           <div className='mask absolute bottom-5 right-5 z-40'>
            <h1 className='hero-heading
             text-[var(--blue-75)] translate-y-[0%]'>
                G<b className='text-orange-500'>a</b>ming
            </h1>
            </div>

            <div className='absolute left-0 top-0 z-40 size-full'>
                <div className='hero-heading mt-24 px-5 sm:px-10'>
                <div className='mask'>
                    <h1 className='text-[var(--blue-75)] translate-y-[0%]'>Reim<b className='text-orange-500'>a</b>gine</h1>
                </div>
                <p className='mb-5 mt-2 max-w-64 text-base lg:text-2xl font-["robert-regular"]
                text-[var(--blue-75)] leading-[1.1]'>
                    Enter The Meta Game Layer <br />
                    Unleash The Play Economy
                </p>
                <Button id="watch-trailer" title={"Watch Trailer"}
                leftIcon={<TiLocationArrow className='text-xl' />} classContainer=
                {'bg-[var(--yellow-300)] flex flex-center gap-1'}
                />
                </div>
            </div>
        </div>
        <div className='mask absolute bottom-5 right-5'>
            <h1 className='hero-heading
              text-black translate-y-[0%]'>
                G<b className='text-orange-500'>a</b>ming
            </h1>
        </div>
    </div>
  )
}

export default Hero