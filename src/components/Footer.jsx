import React from 'react'
import { FaGithub, FaInstagram, FaMailBulk, FaWhatsapp } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { CardTilt } from './Features'

const links = [
    {
        href:'https://github.com/LuckyBaliyan',icon:<FaGithub />,name:'Github',
    },
    {
        href:'https://www.instagram.com/luckybaliyan3507/',icon:<FaInstagram />,name:'Instagram'
    },
    {
        href:'https://www.linkedin.com/in/lucky-baliyan-67b487299/',icon:<FaLinkedin />,name:'Linkdin'
    },
    {
        href:'mailTo:baliyanlucky85@gmail.com',icon:<FaMailBulk />,name:'Main'
    }
]

const Footer = () => {
  return (
    <footer className='w-screen rounded-t-4xl h-dvh bg-[var(--voilet-300)]
    py-4 text-black flex flex-col justify-between'>
        <div className="footer-head flex flex-col gap-10 items-center py-10  lg:py-20 relative">
            <div className=''>
                <h1 className='hero-heading text-center md:scale-x-150 lg:scale-x-225 scale-x-200 z-[50]'>
                Reimagine
               </h1>
            </div>
            <CardTilt offsetMargin={30} className='clip-footer cursor-pointer sm:w-90 rounded-xl overflow-hidden  px-5  lg:w-fit lg:absolute  size-120'>
               <img src="/img/anim1.png" alt="" className='object-cover rounded-xl w-full h-full z-[40]'/>
            </CardTilt>
        </div>
        <div className="container mx-auto flex flex-col items-center
        justify-between gap-4 px-4 md:flex-row font-['zentry'] font-light tracking-wide">
            <p className='text-center text-sm md:text-left'>
                &copy; LB 2025. All rights reserved
            </p>
            <div className='flex justify-center gap-4 md:justify-start'>
                {links.map((l,i)=>(
                    <a key={i} href={l.href} target='_blank'
                    rel='noopener noreferrer' className='text-black
                    transition-colors duration-500 ease-in-out
                     hover:text-white flex'>
                        {l.icon}&nbsp;
                        <p className='text-sm hidden lg:block'>{l.name}</p>
                    </a>
                ))}
            </div>
            <a href="#privacy-policy" className='text-center text-sm
            hover:underline md:text-right'>
                Privacy Policy
            </a>
        </div>
    </footer>
  )
}

export default Footer