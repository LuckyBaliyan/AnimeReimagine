import React,{useRef} from 'react'
import AnimatedTitle from './AnimatedTitle';
import gsap from 'gsap';
import RoundedCorners from './RoundedCorners';
import Button from './Button';

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
                <div className="story-img-container mix-blend-difference -mt-10">
                    <div className="story-img-mask">
                        <div ref={frameRef} className="story-img-content rounded-2xl">
                            <img src="/img/entrance.webp" alt="entrance" className='object-contain'
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseLeave}
                            onMouseEnter={handleMouseLeave}
                            onMouseMove={handleMouseMove}/>
                        </div>
                    </div>
                    <RoundedCorners />
                </div>
            </div>

            <div className="-mt-70 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
                <div className="flex h-full w-fit flex-col items-center md:items-start">
                    <p className='mt-3 max-w-sm text-center font-["circular-web"] text-[var(--blue-50)] md:text-start'>
                      Beyond the veil of reality lies a hidden realm where shadows breathe and secrets whisper.
                      Forgotten legends stir in silence, waiting for those brave enough to uncover them.
                      Every step deeper unravels mysteries that blur the line between myth and truth.
                    </p>

                   <Button id="relm-btn" title={"Enter The Realm"} 
                   classContainer={"mt-5 bg-[var(--blue-50)] py-1 active:bg-[var(--voilet-300)] active:text-bg[var(--blue-50)] hover:bg-[var(--voilet-300)] hover:text-[var(--blue-50)] transition"}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story;