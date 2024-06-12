import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { profileList } from './common/Helper';
import { Autoplay, Virtual } from 'swiper/modules';

const ProfileSlider = () => {
  return (
    <div className='sm:py-11 pt-8'>
      <Swiper modules={[Autoplay, Virtual]}
        freeMode
        slidesPerView={4.5} spaceBetween={20} centeredSlides={true} loop={true} autoplay={{ delay: 1000 }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {profileList.map((value, index) => (
          <SwiperSlide key={index} className=" w-full">
            <div className='flex items-center gap-4 bg-white bg-opacity-[1%] sm:p-5 p-4'>
              <img src={value.img} alt="profile" className='sm:w-20 sm:h-20 w-16 h-16' />
              <div>
                <p className='sm:text-xl text-base !leading-[140%] font-bold text-white mb-2'>{value.title}</p>
                <p className='sm:text-base text-xs font-normal !leading-[150%] text-white mb-0.5'>Profit: <span className='bg-clip-text bg-gradient-to-t text-transparent to-[#00FFE1] from-[#6E5DF6]'>{value.profit}</span></p>
                <p className='sm:text-base text-xs font-normal !leading-[150%] text-white'>Current Balance: {value.currentBalance}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProfileSlider