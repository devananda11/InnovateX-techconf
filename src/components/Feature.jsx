import { features } from "../constants";
import "./Carousel.css";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center relative z-10"> 
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Learn{" "}
          <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
            AI & ML
          </span>
        </h2>
      </div>
      <div className="carousel-container relative mt-20 lg:mt-72"> {/* Adjusted margin-top */}
        <div className="carousel flex items-center justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="carousel-item w-full sm:w-1/2 lg:w-1/3 p-4 flex items-stretch"
            >
              <div className="bg-gray-800 text-white rounded-lg shadow-lg flex flex-col  p-6">
                <div className="mb-4 flex items-center justify-center h-14 w-14 bg-neutral-900 text-green-500 rounded-full">
                  {feature.icon}
                </div>
                <h5 className="lg:text-xl font-semibold mb-2 sm:text-sm">{feature.text}</h5>
                <p className="text-md text-neutral-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
