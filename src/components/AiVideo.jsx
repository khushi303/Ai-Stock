import React, { useState } from 'react'
import aiStock from '../assets/video/aiStock.mp4'
import whiteMan from '../assets/images/webp/whiteMan.webp'
import { PlayBtn, WhiteRange } from './common/Icons'

const AiVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsPlaying(true);
    };
    const handleVideoEnded = () => {
        setIsPlaying(false);
    };
    return (
        <div className='bg-videoBorderGradient p-[1.80px] max-w-[628px] w-full rounded-[8px] inline-block relative'>
            <div className='h-[354px] max-w-[628px] w-full object-cover mx-auto rounded-[7.36px] relative'>
                {isPlaying ? (
                    <div className='h-[354px] max-w-[628px] w-full object-cover mx-auto rounded-[7.36px] relative'>
                        <video
                            className="h-[354px] max-w-[628px] w-full object-cover mx-auto rounded-[7.36px]"
                            autoPlay
                            loop
                            onEnded={handleVideoEnded}
                            muted
                            playsInline>
                            <source src={aiStock} type="video/mp4" />
                        </video>
                        <div className='bg-guardsmanRed py-1.5 px-2 inline-flex gap-2 items-center absolute top-4 right-4'>
                            <WhiteRange />
                            <p className='text-xl text-white font-bold !leading-[120%]'>LIVE</p>
                        </div>
                    </div>
                ) : (
                    <div onClick={handlePlayVideo} className='h-[354px] cursor-pointer max-w-[628px] w-full object-cover mx-auto rounded-[7.36px] absolute inset-0 z-10'>
                        <div className='relative w-full h-full'>
                            <img src={whiteMan} alt="whiteman" className='w-full h-full object-cover object-center' />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <PlayBtn />
                            </div>
                            <div className='bg-guardsmanRed py-1.5 px-2 inline-flex gap-2 items-center absolute top-4 right-4'>
                                <WhiteRange />
                                <p className='text-xl text-white font-bold !leading-[120%]'>LIVE</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AiVideo