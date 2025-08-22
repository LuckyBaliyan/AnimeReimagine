import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react';
import gsap from 'gsap';


const Loader = ({param = "HOME",loadingState}) => {

    const clipRef = useRef(null);
    const loaderRef = useRef(null);
    const paraRef = useRef(null);

    const preLoaders = [
      "Great things take a little time — hang tight!",
      "Replaying those epic moments… almost there!",
      "Patience is power — your experience is loading.",
      "Hold on, we’re fine-tuning the magic for you.",
      "One last touch… perfection is on the way!"
    ];

    //Need to use another hook since the cipPath will run at once and have some overWritting issues 
    //with the repaetedly used stagger-up animation 

    useGSAP(()=>{
         gsap.to(clipRef.current,{
        clipPath:"inset(0 0 0 100%)",
        duration:1.5,
        ease:"ease.inOut",
        delay:1,
       })
    },[])

   useGSAP(() => {
       if (!loadingState) return;
     
       let index = 0;
       let tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
       
       tl.fromTo(paraRef.current, 
         { y: "100%", opacity: 0 },
         { y: "0%", opacity: 1, duration: 1, ease: "power3.inOut" }
       )
       .to(paraRef.current, 
         { y: "-100%", opacity: 0, duration: 1, ease: "power3.inOut",
           onComplete: () => {
             index = (index + 1) % preLoaders.length;
             paraRef.current.innerText = preLoaders[index]; 
           }
         }
       );
     
       return () => tl.kill();
    }, [loadingState]);


   useGSAP(()=>{
     let tl = gsap.timeline({repeat:-1,yoyo:true});
     tl.to('#stagger-up',{
        y:0,
        delay:1,
        duration:0.5,
        ease:"power3.inOut",
        stagger:0.03,
     }) 
     
    if(!loadingState){
        tl.to(loaderRef.current,{
            clipPath:"inset(0 0 0 100%)",
            duration:1.5,
            ease:"power3.out",
            onComplete:()=>{
                gsap.set(loaderRef.current,{display:"none"})
            }
        })
        return ()=>{
        tl.kill(); 
        gsap.globalTimeline.clear();
      } 
    }
   },[loadingState])

  return (
    <div ref={loaderRef} className='absolute top-0 left-0 w-full h-full overflow-hidden bg-[var(--voilet-300)]'>
       <div ref={clipRef} className='absolute top-0 left-0  w-full h-full bg-[#000] loderMask overflow-hidden'>
       </div>
       <div className="mask px-8 py-12">
           <h1 className='mask hero-heading text-[var(--blue-50)]'>{param.split('').
            map((letter,index)=>(
                <span id='stagger-up' className='inline-block text-[var(--blue-50)] translate-y-[100%]' key={index}>{letter}</span>
            ))}
            </h1>
        </div>
        <div className='mask absolute-center w-fit h-fit flex-center flex flex-col'>
           <p ref={paraRef} className='text-sm capitalize will-change-transform text-[var(--blue-50)]'>
           </p>
        </div>
    </div>
  )
}

export default Loader;