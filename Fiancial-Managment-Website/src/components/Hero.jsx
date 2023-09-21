import React from "react";
import Typed from "react-typed";
function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[850px] h-screen w-full mt-[-96px] flex flex-col text-center mx-auto justify-center">
        <p className="text-[#00df9a] p-2 font-bold">GROW WITH DATA ANALYSTS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-3">
          Grow with data
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast and flexible dfinancing for
          </p>
          <Typed
            strings={["B2B", "B2C", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4"
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          monitor your data analystics to increase revenue for BTB, BTC & SASS
          platform
        </p>
        <button className="w-[200px] bg-[#00df9a] rounded-md font-medium py-3 px-6 mx-auto text-black mt-6 border-gray-100">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
