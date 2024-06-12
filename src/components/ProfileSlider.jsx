import React from 'react'
import { profileList } from './common/Helper';

const ProfileSlider = () => {
  return (
    <div className='sm:pt-11 pt-8 overflow-hidden  max-w-[1920px] mx-auto'>
      <div class="flex py-10 items-center md:gap-20 gap-16 slide_container">
        {profileList.map((value, index) => (
          <div key={index} className="logo_size cursor-pointer w-full">
            <div className='flex items-center gap-4 bg-white bg-opacity-[1%] sm:p-5 p-4'>
              <img src={value.img} alt="profile" className='sm:w-20 sm:h-20 w-16 h-16' />
              <div>
                <p className='sm:text-xl text-base !leading-[140%] font-bold text-white mb-2'>{value.title}</p>
                <p className='sm:text-base text-xs font-normal !leading-[150%] text-white mb-0.5'>Profit: <span className='bg-clip-text bg-gradient-to-t text-transparent to-[#00FFE1] from-[#6E5DF6]'>{value.profit}</span></p>
                <p className='sm:text-base text-xs font-normal !leading-[150%] text-white'>Current Balance: {value.currentBalance}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfileSlider