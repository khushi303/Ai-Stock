import React from 'react'
import roadmapArrow from '../assets/images/webp/roadmapArrow.webp'
import CommonBtn from './common/CommonBtn'

const HowItWorks = () => {
  return (
    <div class="lg:py-[150px] md:py-16 sm:py-14 py-10">
      <section class="relative z-3 overflow-x-clip">
        <div class=" container xl:max-w-[1172px]">
          <h2 class="lg:text-5xl md:text-4xl sm:text-3xl text-2xl  text-center text-white font-bold !leading-[125%] md:mb-[33px] mb-3">How <span
            class="bg-clip-text bg-videoBorderGradient text-transparent">it Works</span></h2>
          <p class="font-normal !leading-[160%] text-center text-white text-opacity-80 sm:text-base text-sm mx-auto md:mb-7 mb-2 max-w-[891px]">
            If you've used
            ChatGPT, the OpenAl chatbot that has wowed users by writing code and instantly
            answering complex
            questions, you've gotten a glimpse into the next frontier in artificial intelligence, as
            big
            tech
            companies are racing
            to develop the leading Al chatbot.
          </p>
          <p class="font-normal !leading-[160%] text-center text-white text-opacity-80 sm:text-base text-sm mx-auto max-w-[891px]">
            If you want to get portfolio exposure to Al companies but don't
            want to identify
            individual
            Al
            stocks, you can invest in
            an Al-focused exchange-traded fund (ETF). AI ETFs provide exposure to a broad range of
            the
            best
            Al
            companies,
            eliminating the need to research and choose individual stocks on your own.
          </p>
          <div class="max-w-[716px] lg:mt-20 md:mt-12 mt-8 mx-auto relative mb-6">
            <img src={roadmapArrow} alt="roadmaparrow"
              class="absolute top-0 bottom-0 start-0 end-0 max-w-[556px] w-full mx-auto md:block hidden" />
            <div class="md:pl-[209px] md:pt-[35px] relative z-1 pl-[60px]">
              <h3 class="md:text-4xl text-3xl font-bold text-white !leading-[145%] lg:mb-2.5 mb-2">Sign up</h3>
              <p class="max-w-[333px] !leading-[160%] text-white text-opacity-80 mb-0 font-normal text-base">Fill out
                the
                Registration
                Form
                to Get Started.</p>
              <div className='xl:mt-8 lg:mt-6 mt-4'>
                <CommonBtn name="Open Your Account" />
              </div>
              <div class="w-[20px] h-[20px] rounded-full bg-blueBtnGradient absolute top-4 md:hidden block left-2 z-10"></div>
            </div>
            <div class="md:pt-[98px] relative z-1 md:mt-0 mt-8 md:pl-0 pl-[60px]">
              <h3 class="md:text-4xl text-3xl  font-bold text-white !leading-[145%] lg:mb-2.5 mb-2">Verification
              </h3>
              <p class="max-w-[540px] !leading-[160%] text-white text-opacity-80 mb-0 font-normal text-base ">Schedule
                a
                Call
                with Our
                Verified AI Trading Mentors to Guide You Through Your Investment Journey</p>
              <div class="w-[20px] h-[20px] rounded-full bg-blueBtnGradient absolute top-4 md:hidden block left-2 z-10"></div>
            </div>
            <div class="md:pt-[129px] md:pl-[209px] relative z-1 md:mt-0 mt-8 pl-[60px]">
              <h3 class="md:text-4xl text-3xl  font-bold text-white !leading-[145%] lg:mb-2.5 mb-2">Start
                Investing
              </h3>
              <p class="max-w-[458px] !leading-[160%] text-white text-opacity-80 mb-0 font-normal text-base">Begin
                shaping
                your
                financial
                future with confidence and ease.</p>
              <div class="w-[20px] h-[20px] rounded-full bg-blueBtnGradient absolute top-4 md:hidden block left-2 z-10"></div>
            </div>
            <div className='absolute w-[5px] h-[80%] bg-blueBtnGradient top-5 left-[15px] z-0 md:hidden block'></div>
          </div>
        </div>
        <div className='lg:w-[346px] lg:h-[346px] w-[200px] h-[200px] rounded-full blur-[150px] bg-videoBorderGradient absolute lg:left-[-20%] left-[-15%] bottom-[-17%]'></div>
      </section>
    </div>
  )
}

export default HowItWorks

