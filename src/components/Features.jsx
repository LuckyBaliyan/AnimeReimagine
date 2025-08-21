import React from 'react'
import Card from './Card';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';

const Features = () => {
  return (
    <section className='bg-black pb-52'>
        <div className="container mx-auto px-3 md:px-10">
            <div className='px-5 py-32'>
                <p className='font-["circular-web"] text-lg 
                text-[var(--blue-50)]'>
                    Into The Meta Layer
                </p>
                <p className='max-w-md font-["circular-web"] text-lg text-[var(--blue-50)] opacity-50'>
                    Guided by the spirit of passion, we craft worlds where passion fuels every motion, 
                    stories breathe with emotion, and pixels rise as legends in timeless journeys.
                </p>
            </div>
        <div className='border-hsla relative mb-7 h-96 w-full overflow-hidden 
        rounded-md md:h-[65vh]'>
            <Card 
            src='videos/video.mp4'
            title={<>radi<b>n</b>t</>}
            description="Radiant is a cross-platform anime streaming service built for dreamers, 
            wanderers, and otakus alike. From timeless classics to the latest simulcasts, Radiant delivers high-quality, 
            ad-free anime across every device — web, mobile, and TV."
            isCommingSoon={false}
            />
        </div>
        <div className='flex flex-wrap lg:flex-nowrap h-auto
        gap-7'>
            <div className="lg:w-1/3 w-full h-[50vh] lg:h-[80vh] rounded-md border-hsla overflow-hidden card">
                <Card 
                src={'videos/feature-2.mp4'}
                title={<>Ke<b>n</b>to Na<b>n</b>ami</>}
                description="Kento Nanami, a man of quiet intensity, 
                serves as a major supporting character in Jujutsu Kaisen. 
                Once a student at Tokyo Jujutsu High, he walked the halls as an underclassman 
                alongside the legendary Satoru Gojo and Suguru Geto. But Nanami's journey diverged early."
                isCommingSoon={"JJK"}
                />
            </div>
            <div className="lg:w-2/3 w-full h-[60vh] lg:h-[80vh] rounded-md border-hsla overflow-hidden card">
                <Card 
                src={'videos/anim2.mp4'}
                title={<>Mad<b>a</b>ra uchih<b>a</b></>}
                description="Madara Uchiha is a fictional character and one of the main 
                antagonists in Masashi Kishimoto's manga Naruto. 
                He appears for the first time in 'Part II' 
                of the manga and the Shippuden anime adaptation"
                isCommingSoon={"Naruto Shippuden"}
                />
            </div>
        </div>
        <div className='flex flex-wrap mt-7 lg:flex-nowrap h-auto
        gap-7'>
            <div className="lg:w-1/3 w-full h-[50vh] lg:h-[80vh] rounded-md border-hsla overflow-hidden card">
                <Card 
                src={'videos/anim6.mp4'}
                title={<>Kiyota<b>k</b>a Ayan<b>k</b>oji</>}
                description="Kiyotaka Ayanokoji is more than just a student of the Advanced Nurturing High 
                School — he is a mystery wrapped in silence. With his calm demeanor and unreadable expressions, 
                he blends into the background."
                isCommingSoon={"Classroom Of Elites"}
                />
            </div>
            <div className="w-full gap-7 flex">
              <div className="w-1/2 hidden lg:flex flex-col h-full gap-7">
              <div className='h-1/2 border-hsla overflow-hidden rounded-md card'>
                 <Card 
                src={'videos/anim3.mp4'}
                title={<>Sa<b>n</b>ji</>}
                description="Sanji, the Black Leg, fights with fiery kicks and a chef’s heart — a warrior who defends his crew with flavor and fury."
                isCommingSoon={"One Piece"}
                />
               </div>
               <div className='h-1/2 border-hsla overflow-hidden rounded-md card'>
                 <Card 
                src={'videos/feature-4.mp4'}
                title={"BTUG"}
                description=""
                isCommingSoon={""}
                />
               </div>
               </div>
               <div className="w-2/2 min-h-[60vh] lg:h-full rounded-md border-hsla overflow-hidden card">
                <Card 
                src={'videos/anim4.mp4'}
                title={<>Kujo<b>r</b>o Re<b>n</b>goku</>}
                description="Kyojuro Rengoku, the Flame Hashira, embodies unwavering spirit and boundless passion. 
                With his blazing sword and radiant smile, he inspires courage even in despair, standing as a beacon of hope against the darkness."
                isCommingSoon={"Demon Slayer"}
                />
               </div>
            </div>
        </div>
         <div className='flex  lg:flex-row flex-col-reverse mt-7  w-full gap-7'>
                <div className='w-full relative lg:w-[40%] h-[60vh] card border-hsla bg-[var(--voilet-300)] 
                rounded-md px-2 py-3 overflow-hidden'>
                    <h1 className='hero-heading  !text-6xl text-[#121212]'>
                      <b>M</b>ore <br/>  Co<b>m</b>ming<br/> S<b>o</b>on
                    </h1>
                    <div className='absolute bottom-2 right-3'>
                        <Button leftIcon={<TiLocationArrow className='text-4xl md:text-5xl lg:text-7xl' />} />
                    </div>
                </div>
                <div className='w-full lg:w-[60%] h-[60vh] card border-hsla rounded-md overflow-hidden'>
                    <Card src={'/videos/animLast.mp4'}
                    title={<>Rev<b>e</b>ge G<b>i</b>rl</>}
                    description="闇に溶け込むような黒髪と、赤い瞳に宿る静かな狂気。白い百合が添える純潔は、胸元に散る紅で汚され、
                    儚さと美しさが同時に咲き乱れる。煙草の煙は虚無を描き、沈黙の中に残酷な美学を漂わせる――まるで「愛」と「死」
                    を同時に纏う存在のように。"
                    isCommingSoon={<><b>ダークギャザリング</b></>}
                    />
                </div>
            </div>
       </div>
    </section>
  )
}

export default Features;