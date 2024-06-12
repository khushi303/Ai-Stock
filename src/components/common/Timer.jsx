import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [countdownDate, setCountdownDate] = useState(new Date('12/25/2024').getTime());
    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        setInterval(() => setNewTime(), 1000);
    }, []);

    const setNewTime = () => {
        if (countdownDate) {
            const currentTime = new Date().getTime();

            const distanceToDate = countdownDate - currentTime;

            let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            let minutes = Math.floor(
                (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
            );
            let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
            const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            days = `${days}`;
            if (numbersToAddZeroTo.includes(hours)) {
                hours = `0${hours}`;
            } else if (numbersToAddZeroTo.includes(minutes)) {
                minutes = `0${minutes}`;
            } else if (numbersToAddZeroTo.includes(seconds)) {
                seconds = `0${seconds}`;
            }

            setState({ days: days, hours: hours, minutes, seconds });
        }
    };
    return (
        <div className='flex gap-5 mt-6 xl:mx-11'>
            <div>
                <div className='bg-white bg-opacity-[0.2%] rounded-lg backdrop-blur-[10px] md:w-32 md:h-32 sm:w-24 sm:h-24 w-16 h-16 flex items-center justify-center'>
                    <p className='text-white after:absolute relative after:top-0 after:bottom-0 after:h-1 after:left-0 after:right-0 after:bg-black after:my-auto md:text-custom-xxl sm:text-4xl text-custom-xl font-bold !leading-[145%]'>{state.days || '0'}</p>
                </div>
                <p className="text-white !text-center sm:text-lg text-sm font-bold !leading-[145%]">Days</p>
            </div>
            <div>
                <div className='bg-white bg-opacity-[0.2%] rounded-lg backdrop-blur-[10px] md:w-32 md:h-32 sm:w-24 sm:h-24 w-16 h-16  flex items-center justify-center'>
                    <p className='text-white after:absolute relative after:top-0 after:bottom-0 after:h-1 after:left-0 after:right-0 after:bg-black after:my-auto md:text-custom-xxl sm:text-4xl text-custom-xl font-bold !leading-[145%]'>{state.hours || '00'}</p>
                </div>
                <p className="text-white !text-center sm:text-lg text-sm font-bold !leading-[145%]">Hours</p>
            </div>
            <div>
                <div className='bg-white bg-opacity-[0.2%] rounded-lg backdrop-blur-[10px] md:w-32 md:h-32 sm:w-24 sm:h-24 w-16 h-16 flex items-center justify-center'>
                    <p className='text-white after:absolute relative after:top-0 after:bottom-0 after:h-1 after:left-0 after:right-0 after:bg-black after:my-auto md:text-custom-xxl sm:text-4xl text-custom-xl font-bold !leading-[145%]'>{state.minutes || '00'}</p>
                </div>
                <p className="text-white !text-center sm:text-lg text-base font-bold !leading-[145%]">Minutes</p>
            </div>
            <div>
                <div className='bg-white bg-opacity-[0.2%] rounded-lg backdrop-blur-[10px] md:w-32 md:h-32 sm:w-24 sm:h-24 w-16 h-16 flex items-center justify-center'>
                    <p className='text-white after:absolute relative after:top-0 after:bottom-0 after:h-1 after:left-0 after:right-0 after:bg-black after:my-auto md:text-custom-xxl sm:text-4xl text-custom-xl font-bold !leading-[145%]'>{state.seconds || '00'}</p>
                </div>
                <p className="text-white !text-center sm:text-lg text-sm font-bold !leading-[145%]">Seconds</p>
            </div>
        </div>
    )
}

export default Timer