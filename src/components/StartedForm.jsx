import React from 'react'
import { DropdownBtn } from './common/Icons'
import CommonBtn from './common/CommonBtn'

const StartedForm = () => {
    return (
        <div className='formBorderBox relative bg-offWhite backdrop-blur-[32px] rounded-lg before:rounded-lg'>
            <div className='sm:px-5 sm:pt-5 sm:pb-[23px] p-4'>
                <p className='sm:text-custom-2xl text-2xl font-semibold text-white !leading-[120%] text-center px-4'>This Is The Right Time to Invest In AI Stocks</p>
                <p className='sm:mt-4 mt-3 text-base font-normal text-white text-center'>In a matter of minutes, one of our AI mentors will contact you, No Experience Required!</p>
                <form action="" className='sm:mt-6 mt-4'>
                    <label htmlFor="name" className='hidden'></label>
                    <input type="text" name="name" id="name" className='sm:p-4 p-3.5 sm:text-base text-sm placeholder:text-offBlack font-normal text-offBlack bg-zircon w-full rounded border border-white border-opacity-70 outline-none' placeholder='First Name' required />
                    <label htmlFor="lastname" className='hidden'></label>
                    <input type="text" name="name" id="name" className='sm:p-4 p-3.5 sm:text-base text-sm placeholder:text-offBlack font-normal text-offBlack bg-zircon w-full rounded border border-white border-opacity-70 outline-none sm:mt-4 mt-3.5' placeholder='Last Name' required />
                    <label htmlFor="email" className='hidden'></label>
                    <input type="email" name="email" id="name" className='sm:p-4 p-3.5 sm:text-base text-sm placeholder:text-offBlack font-normal text-offBlack bg-zircon w-full rounded border border-white border-opacity-70 outline-none sm:mt-4 mt-3.5' placeholder='Email' required />
                    <div className='sm:mt-4 mt-3.5 border border-white bg-zircon border-opacity-70 rounded flex bg-lightBlack'>
                        <label htmlFor="contact" className='sm:p-4 p-3.5 sm:bg-lightB text-smlack flex gap-1 items-center'>+91 <DropdownBtn /></label>
                        <input type="number" name="contact" id="contact" className='sm:p-4 p-3.5 sm:text-base text-sm placeholder:text-offBlack font-normal text-offBlack w-full outline-none bg-transparent' placeholder='Phone Number' required />
                    </div>
                    <button type='submit' className='w-full sm:mt-8 mt-6'>
                        <CommonBtn name="Get Started" className="!w-full"/>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default StartedForm
// background: #0000000F;
