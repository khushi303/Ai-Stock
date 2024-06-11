import React from 'react'

const CommonBtn = (props) => {
    return (
        <div>
            <button className={`${props.className} bg-blueBtnGradient text-white font-bold py-3 px-6 rounded border border-white text-base`}>
                {props.name}
            </button>
        </div>
    )
}

export default CommonBtn