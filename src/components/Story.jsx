import React,{useRef} from 'react'
import AnimatedTitle from './AnimatedTitle';
import gsap from 'gsap';

const Story = () => {

    const frameRef = useRef('null');

    const handleMouseLeave = ()=>{
        const element = frameRef.current;

        gsap.to(element,{
            duration:0.3,
            rotateX:0,
            rotateY:0,
            ease:"power1.inOut",
        })
    }

    const handleMouseMove = (e)=> {
        const {clientX,clientY} = e;
        const element = frameRef.current;

        if(!element) return;

        const rect =  element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width/2;
        const centerY = rect.height/2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY= ((x - centerX) / centerX) * 10;

        gsap.to(element,{
            duration:0.3,
            rotateX:rotateX,
            rotateY:rotateY,
            transformPerspective:500,
            ease:"power1.inOut",
        })
    }

  return (
    <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
        <div className='flex size-full flex-col items-center py-10 border-0
        pb-24'>
            <p className='font-["general"] text-center border-0 text-sm uppercase md:text-[10px]"]
            '>The Multiversal World Of Infinite Possibilities</p>
            <div className='relative size-full'>
                <h1 className='hero-heading !leading-[0.9] !text-[4rem] md:!text-9xl mt-5 md:tracking-tight text-center '>
                    The St<b>o</b>ry Of A <br />
                    Hidden Realm
                </h1>
                <div className="story-img-container mix-blend-difference -mt-5">
                    <div className="story-img-mask">
                        <div ref={frameRef} className="story-img-content rounded-2xl">
                            <img src="/img/entrance.webp" alt="entrance"  className='object-contain'
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseLeave}
                            onMouseEnter={handleMouseLeave}
                            onMouseMove={handleMouseMove}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story;