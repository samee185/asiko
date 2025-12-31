import React from 'react'
import img from '../assets/hero-bg.jpeg'

const Hero = () => {
  return (
    <div>
        <div
        className="w-full h-screen relative z-0 bg-cover bg-center bg-no-repeat px-5 md:px-20 py-10 flex flex-col justify-center items-start gap-4 md:gap-8 text-white"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 bg-[rgb(0,0,0,0.4)] z-[-1]"></div>
        <h2 className="md:w-2/3 text-4xl md:text-6xl font-bold leading-tight capitalize">
          It’s time to build the Africa we will
        be proud to deliver to future
        generations.
        </h2>
        <span className="md:w-1/2 text-sm md:text-base text-gray-200">
          Asiko Ti Yaa is a community of young Africans committed to
          personal growth and societal development through skill acquisition,
          mentorship, and active participation in impactful projects.
        </span>
        <button className="bg-blue-900 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm md:text-base font-medium transition">
          Get Involved Today
        </button>
      </div>
    </div>
  )
}

export default Hero