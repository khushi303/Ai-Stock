import React, { useState } from 'react'
import Navbar from './common/Navbar'
import aiStock from '../assets/video/ai-stock.mp4'
import whiteMan from '../assets/webp/whiteMan.webp'
import { PlayBtn } from './common/Icons'
import Timer from './common/Timer'

const Hero = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsPlaying(true);
    };

    const handleVideoEnded = () => {
        setIsPlaying(false);
    };
    return (
        <div>
            <Navbar />
            <div className='mt-12 container xl:max-w-[1176px]'>
                <h1 className='text-custom-xxl font-bold !leading-[120%] text-center text-white max-w-[958px] mx-auto'>Dive into the Explosive Momentum of 2024 with the <span className='bg-clip-text text-transparent bg-blueBtnGradient'>Top 7</span> Fastest-Growing AI Stocks!</h1>
                <p className='mt-7 text-white text-base font-normal text-opacity-80 max-w-[665px] text-center mx-auto'>Major AI Stocks such as Microsoft and Nvidia have surged over <span className='!text-opacity-100 font-bold'>80%</span> in the past year. This giants are expected to grow <span className='text-white !text-opacity-100'>130.66%</span> in 2024</p>
                <div className='flex flex-wrap justify-between mt-[39px]'>
                    <div className='lg:w-7/12 w-full '>
                        <div className='lg:max-w-[654px]'>
                            <div className='bg-videoBorderGradient p-[1.80px] max-w-[628px] w-full rounded-[8px] inline-block relative mx-3'>
                                {isPlaying ? (
                                    <video
                                        className="h-[354px] max-w-[628px] w-full object-cover mx-auto rounded-[7.36px]"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        onEnded={handleVideoEnded}>
                                        <source src={aiStock} type="video/mp4" />
                                    </video>
                                ) : (
                                    <div className="cursor-pointer object-cover" onClick={handlePlayVideo} >
                                        <img
                                            src={whiteMan}
                                            alt="Video Thumbnail"
                                            className="h-[354px] w-[628px] mx-auto rounded-[7.36px]"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <PlayBtn />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <p className='text-lg !leading-[145%] text-white mt-5 font-bold'>Due to extremely high demand for media coverage, registration closes in</p>
                            <div>
                                <Timer />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-5/12 w-full border border-white h-10'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero