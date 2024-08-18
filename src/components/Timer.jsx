import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    const timerComponents = Object.keys(timeLeft).map(interval => (
        timeLeft[interval] ? (
            <span key={interval}>
                {timeLeft[interval]} {interval}{" "}
            </span>
        ) : null
    ));

    return (
        <div className='flex flex-col justify-center text-center text-4xl font-bold'>
            <p>Grab your Tickets now!!</p>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
};

export default Countdown;
