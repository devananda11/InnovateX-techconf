import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import FeatureSection from './components/Feature';
import Countdown from './components/Timer';

import Pricing from './components/Tickets';

export default function App() {
  return (
    <>
      <Navbar />
      <div className='mt-20'>
        <Countdown />
      </div>

      <div className="mb-20 px-20"> 
        <HeroSection />
        
        
      </div>
      <FeatureSection />
      <div className="mb-20 px-20"> 
        <Pricing/>
        
        
      </div>
      

      
      
    </>
  );
}
