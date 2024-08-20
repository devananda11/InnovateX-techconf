import robot from "../assets/robot.png";

const HeroSection = () => {
  return (
    <section className="pl-20 pt-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide pb-5">
            India's Biggest Summit on{" "}
            <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
              AI and ML
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-500">
            Unlock the potential of AI and ML to transform your ideas into
            groundbreaking innovations. Start building the future today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-8 mt-8">
            <a
              href="#"
              className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-6 rounded-md text-white hover:bg-gradient-to-l hover:from-green-600 hover:to-green-900 transition"
            >
              Buy Tickets
            </a>
            <a
              href="#"
              className="py-3 px-6 rounded-md border border-gray-300 text-green-700 hover:border-gray-500 transition"
            >
              Partner with Us
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end lg:sticky lg:top-0">
          <img
            src={robot}
            alt="Robot illustration"
            className="w-full max-w-lg h-auto object-contain lg:relative lg:ml-8"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
