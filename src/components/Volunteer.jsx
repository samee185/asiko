import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../assets/home1.jpeg'

const Volunteer = () => {
    const navigate = useNavigate();
    const handleGetInvolved = () => {
      navigate('/get-involved'); 
    }
  return (
    <div>
        <div
        className="w-full min-h-[70vh] relative z-0 bg-cover bg-center bg-no-repeat px-5 md:px-20 py-10 md:py-20 flex justify-center items-center text-white"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 bg-[rgb(0,0,0,0.4)] z-[-1]"></div>
        <div className="flex flex-col gap-5 md:w-1/2">
          <h2 className="text-3xl md:text-[44px] font-extrabold leading-normal">
            Become a part of {`Asiko's`} impactful journey by
            volunteering your time and skills.
          </h2>
          <button className="bg-blue-900 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm md:text-base font-medium transition" onClick={handleGetInvolved}>
          Get Involved Today
        </button>
        </div>
      </div>
    </div>
  )
}

export default Volunteer