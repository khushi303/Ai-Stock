import React from 'react'

const CommonBtn = (props) => {
    return (
        <div>
            <button className={`${props.className} after:bg-blueBtnGradient after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:rounded-[3.1px] sm:py-[11px] py-2 sm:px-6 px-4 rounded relative transition-all duration-300 ease-linear after:opacity-100 hover:after:opacity-0 group border after:pointer-events-none border-white after:transition-all after:duration-300 after:ease-linear`}>
                <p className='text-black font-bold sm:!text-base text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-t from-[#00FFE1] to-[#6E5DF6] relative z-10 transition-all duration-300 ease-linear'>{props.name}</p>
            </button>
        </div>
    )
}

export default CommonBtn