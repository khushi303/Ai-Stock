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
        <div className='flex gap-3'>
            <div>
                <div className='bg-white bg-opacity-5 rounded-lg backdrop-blur-[32px] w-32 h-32 flex items-center justify-center'>
                    <p className='text-white'>{state.days || '0'}</p>
                </div>
                <small className="text-white">Days</small>
            </div>
            <div>
                <div className='bg-white bg-opacity-5 rounded-lg backdrop-blur-[32px] w-32 h-32 flex items-center justify-center'>
                    <p className='text-white'>{state.hours || '00'}</p>
                </div>
                <small className="text-white">Hours</small>
            </div>
            <div>
                <div className='bg-white bg-opacity-5 rounded-lg backdrop-blur-[32px] w-32 h-32 flex items-center justify-center'>
                    <p className='text-white'>{state.minutes || '00'}</p>
                </div>
                <small className="">Minutes</small>
            </div>
            <div>
                <div className='bg-white bg-opacity-5 rounded-lg backdrop-blur-[32px] w-32 h-32 flex items-center justify-center'>
                    <p className='text-white'>{state.seconds || '00'}</p>
                </div>
                <small className="text-white">Seconds</small>
            </div>
        </div>
    )
}

export default Timer