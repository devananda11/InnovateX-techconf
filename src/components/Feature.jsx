import { features } from "../constants";
import "./Carousel.css";
import { useEffect, useRef } from "react";

const FeatureSection = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    const handleMouseEnter = () => {
      carousel.style.animationPlayState = 'paused';
    };

    const handleMouseLeave = () => {
      carousel.style.animationPlayState = 'running';
    };

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative mt-10 lg:mt-20 border-b border-neutral-800 min-h-[600px]">
      <div className="text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-10 sm:mt-12 lg:mt-16 xl:mt-20 tracking-wide">
          Learn{" "}
          <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
            AI & ML
          </span>
        </h2>
      </div>
      <div className="carousel-container relative mt-12 lg:mt-24">
        <div className="carousel" ref={carouselRef}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="carousel-item w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] p-4 flex-none"
            >
              <div className="bg-gray-800 text-white rounded-lg shadow-lg flex flex-col items-center p-6 h-full">
                <div className="mb-4 flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 bg-neutral-900 text-green-500 rounded-full">
                  {feature.icon}
                </div>
                <h5 className="text-lg sm:text-xl font-semibold mb-2">{feature.text}</h5>
                <p className="text-sm text-neutral-400 text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
