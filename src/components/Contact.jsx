import React from 'react'
import Button from './Button';

const ImageClipdiv = ({src,clipClass})=>(
    <div className={clipClass}>
       <img src={src} alt="" />
    </div>
)

const Contact = () => {
  return (
    <div id='contact' className='my-20 min-h-96 w-screen px-10'>
        <div className="relative rounded-lg bg-black py-24 text-[var(--blue-50)] sm:overflow-hidden">
            <div className="absolute -left-20 top-0 hidden h-full w-72
            overflow-hidden sm:block lg:left-20 lg:w-96">
            <ImageClipdiv src='img/contact-1.webp' 
            clipClass="contact-clip-path-1"
            />
            <ImageClipdiv src='img/about5.webp' 
            clipClass="contact-clip-path-2 lg:translate-y-40 
            translate-y-60"
            />
            </div>
            <div className="absolute -top-40 left-20 w-60 sm:top-1/2
            md:left-auto md:right-10 lg:top-20 lg:w-80">
            <ImageClipdiv src='img/swordman-partial.webp' 
            clipClass="absolute md:scale-125"
            />
            <ImageClipdiv src='img/swordman.webp' 
            clipClass="sword-man-clip-path md:scale-125"
            />
            </div>
            <div className="flex flex-col items-center text-center">
                <p className='font-["general"] text-[10px] uppercase'>
                    did i cook
                </p>
                <p className='special-font mt-10 w-full font-["zentry"]
                text-5xl leading-[0.95] md:text-[6rem] z-[50]'>
                    Let's B<b>u</b>ilt A <br/> new Er<b>a</b> of <br/> Developme<b>n</b>t 
                    T<b>o</b>gether
                </p>

                <Button title="Contact Me" 
                classContainer={"mt-10 cursor-pointer bg-[var(--blue-50)]"}/>
            </div>
        </div>
    </div>
  )
}

export default Contact;