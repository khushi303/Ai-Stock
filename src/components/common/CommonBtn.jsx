import React from 'react'

const CommonBtn = (props) => {
    return (
        <div>
            <button className={`${props.className} bg-blueBtnGradient text-black font-bold py-[11px] px-6 rounded border border-white text-base hover:text-transparent hover:bg-clip-text  hover:bg-gradient-to-t from-[#00FFE1] to-[#6E5DF6] transition-all duration-300 ease-linear`}>
                {props.name}
            </button>
        </div>
    )
}

export default CommonBtn