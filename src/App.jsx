import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import FeatureSection from './components/Feature'
import Countdown from './components/Timer'


export default function App() {
  const targetDate = '2024-10-18T23:59:59Z';

  return (
    <>
    
     <Navbar/>
     <div className="max-w-7xl mx-auto pt-20 px-6">
        <Countdown targetDate={targetDate}/>
        <HeroSection/>
        <FeatureSection/>
     </div>
     
    </>
  
  )
}