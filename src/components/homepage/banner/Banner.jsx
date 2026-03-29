import React from 'react';
import { FaRegCircleDot } from 'react-icons/fa6';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://i.ibb.co.com/yBR4XLsH/banner.png"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
        <span className='flex gap-1 items-center bg-[#E1E7FF] w-73.5 h-9.5 px-4 py-2 rounded-2xl'>
            <FaRegCircleDot />
            <p className='className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p></span>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;