import React from 'react'
import CommonBtn from './CommonBtn'

const Navbar = () => {
    return (
        <div className=''>
            <nav className="bg-whiteGradient h-full w-full py-3 border-box relative nav_shadow">
                <div className='container xl:max-w-[1172px]'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-5xl font-bold !leading-[136%] text-white'>AI STOCKS</h2>
                        <CommonBtn name="Sign Up" />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar