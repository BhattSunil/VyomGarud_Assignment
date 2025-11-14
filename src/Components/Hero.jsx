import React from "react";

function Hero() {
  return (
    <section className="bg-slate-900 text-white py-20 px-6 md:mt-15 ">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold">VyomGarud</h1>

        {/* Tagline */}
        <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Advanced UAV systems built for precision, reliability, and
          mission-critical performance.
        </p>

        {/* Button */}
        <button className="mt-6 px-6 py-3 bg-orange-500 text-black font-semibold rounded-md hover:bg-orange-600 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
}

export default Hero;
