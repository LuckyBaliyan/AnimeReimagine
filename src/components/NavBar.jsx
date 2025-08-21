import React, { useEffect, useState } from 'react'
import {useRef} from 'react';
import Button from './Button';
import { TiLocation, TiLocationArrow } from 'react-icons/ti';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

const NavBar = () => {

    const [isAudioPlaying,setIsAudioPlaying] = useState(false);
    const [isIndicatorActive,setIsIndicatorActive] = useState(false);

    const navContainerRef = useRef(null);
    const navItems = ['Home','About','Contact','Github'];

    const audioElement = useRef(null);

    const toggleAudioIndicator  = ()=>{
        setIsAudioPlaying(prev=>!prev)
        setIsIndicatorActive(prev=>!prev);
    }

    useEffect(()=>{
      if(isAudioPlaying){
        audioElement.current.play();
      }else{
        audioElement.current.pause();
      }
    },[isAudioPlaying])

    const [lastScrollY,setLastScrollY] = useState(0);
    const [isNavVisible,setIsNavVisible] = useState(true);

    const { y: currentScrollY } = useWindowScroll();

    useEffect(()=>{
      if(currentScrollY === 0){
        setIsNavVisible(true);
      }else if(currentScrollY > lastScrollY){
        setIsNavVisible(false);
      }else if(currentScrollY < lastScrollY){
        setIsNavVisible(true);
      }
      setLastScrollY(currentScrollY)
    },[currentScrollY])

    useEffect(()=>{
     gsap.to(navContainerRef.current,{
      y:isNavVisible ? 0:-100,
      opacity:isNavVisible ? 1:0,
      duration:0.2,
     })
    },[isNavVisible])

  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all
    duration-700 sm:inset-x-6 mix-blend-difference'>
       <header className='absolute top-1/2 w-full -translate-y-1/2 '>
       <nav className="flex size-full items-center justify-between p-4">
        <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className='w-10'/>
            <Button id="products-btn"
            title="Works"
            rightIcon={<TiLocationArrow/>}
            classContainer={"bg-[var(--blue-50)] flex items-center justify-center gap-1"}
            />
        </div>
        <div className="flex h-full items-center">
            <div className='hidden md:block'>
                {
                    navItems.map((item,index)=>(
                        <a key={index} href={item !=='Github'?`#${item.toLowerCase()}`:
                        `https://github.com/LuckyBaliyan`} target={item === 'Github'?'_blank':''} className='nav-hover-btn'>
                            {item}
                        </a>
                    ))
                }
            </div>
            <button className='ml-10 flex items-center space-x-0.5' onClick={toggleAudioIndicator}>
                <audio ref={audioElement} src='/audio/1.mp3'
                loop />
                {[1,2,3,4].map((bar)=>(
                    <div key={bar}className={`indicator-line cursor-pointer ${isIndicatorActive?'active':''}`}
                    style={{animationDelay:`${bar*0.2}s`}} />
                ))}
            </button>
        </div>
       </nav>
       </header>
    </div>
  )
}

export default NavBar