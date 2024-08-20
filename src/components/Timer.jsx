import { useState, useEffect } from 'react';
import Count from './Count';

export default function Countdown() {

  const initTimeLeft = () => {
    const year = new Date().getFullYear();
    const countTime = +new Date(`09/30/${year}`) - +new Date();
    return {
      days: Math.floor(countTime / (1000 * 60 * 60 * 24)),
      hours: Math.floor((countTime / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((countTime / 1000 / 60) % 60),
      seconds: Math.floor((countTime / 1000) % 60)
    };
  }

  const [timeLeft, setTimeLeft] = useState(initTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(initTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="text-center w-full">
      <p className="text-4xl mb-8 text-white-500 font-bold">Grab your Tickets now!!</p>
      <div className="flex flex-wrap justify-center space-x-4 ">
        <Count time="Days" count={timeLeft.days} />
        <Count time="Hours" count={timeLeft.hours} />
        <Count time="Minutes" count={timeLeft.minutes} />
        <Count time="Seconds" count={timeLeft.seconds} />
      </div>
    </div>
  );
}
