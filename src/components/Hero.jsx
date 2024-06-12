import React from 'react'
import Timer from './common/Timer'
import StartedForm from './StartedForm'
import AiVideo from './AiVideo'

const Hero = () => {


    return (
        <div className='bg-heroAiStock bg-cover bg-center bg-repeat relative sm:pb-[58px] pb-10'>
            <div className='pt-12 container xl:max-w-[1176px] relative z-20'>
                <h1 className='md:text-custom-xxl sm:text-4xl text-custom-xl font-bold !leading-[120%] text-center text-white max-w-[958px] mx-auto'>Dive into the Explosive Momentum of 2024 with the <span className='bg-clip-text text-transparent bg-gradient-to-br from-[#00FFE1] to-[#6E5DF6]'>Top 7</span> Fastest-Growing <span className='bg-clip-text text-transparent bg-gradient-to-b from-[#00FFE1] to-[#6E5DF6]'>AI Stocks!</span></h1>
                <p className='lg:mt-7 mt-3 text-white text-base font-normal text-opacity-80 max-w-[665px] text-center mx-auto'>Major AI Stocks such as Microsoft and Nvidia have surged over <span className='!text-opacity-100 font-bold'>80%</span> in the past year. This giants are expected to grow <span className='text-white !text-opacity-100'>130.66%</span> in 2024</p>
                <div className='flex flex-wrap justify-between sm:mt-[39px] mt-7 items-start'>
                    <div className='lg:w-7/12 w-full '>
                        <div className='lg:max-w-[654px] flex flex-col items-center'>
                            {/* ==============Live-video=============== */}
                            <AiVideo />
                            <p className='sm:text-lg text-base !leading-[145%] text-white mt-5 font-bold text-center'>Due to extremely high demand for media coverage, registration closes in</p>
                            {/* ==============Counter-Timer============ */}
                            <Timer />
                        </div>
                    </div>
                    <div className='lg:w-5/12 w-full flex justify-end lg:mt-0 mt-10'>
                        <div className='flex flex-col w-full items-center h-full lg:max-w-[388px]'>
                            {/* =================Form================== */}
                            <StartedForm />
                            <p className='sm:text-xl text-base text-white font-bold mt-3.5 text-center'>Only 3 Spots Left</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-layerBlackGradient absolute w-full bottom-0 left-0 right-0 h-[83px] z-10'>
            </div>
            <div className='w-[197px] h-[197px] rounded-full bg-videoBorderGradient blur-[100px] absolute z-10 left-[-10%] top-[30%]'></div>
            <div className='w-[197px] h-[197px] rounded-full bg-videoBorderGradient blur-[100px] absolute z-10 right-[-10%] top-[17%]'></div>
            <div className='w-[158px] h-[158px] rounded-full bg-videoBorderGradient blur-[100px] absolute z-10 right-[-6%] bottom-[17%]'></div>
            <div className='w-[158px] h-[158px] rounded-full bg-videoBorderGradient blur-[80px] absolute z-10 left-[-10%] bottom-[6%]'></div>
        </div>
    )
}

export default Hero
