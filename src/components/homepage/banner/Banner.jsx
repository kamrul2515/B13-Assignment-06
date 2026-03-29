import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { FaRegCircleDot } from 'react-icons/fa6';

const Banner = () => {
    return (
        <div className="hero  min-h-[80vh] flex items-center">
            <div className="max-w-400 mx-auto px-4 md:px-10 w-full">
  <div className="hero-content flex-col lg:flex-row-reverse justify-between p-0 max-w-full">
    <div className="flex justify-end lg:w-1/2 mb-10 lg:mb-0">
        <img
          src="https://i.ibb.co.com/yBR4XLsH/banner.png"
          className="max-w-sm lg:max-w-md rounded-lg shadow-2xl"
          alt="Banner"
        />
    </div>
    <div className='space-y-4 lg:w-1/2'>
        <span className="flex gap-2.5 items-center bg-[#E0E7FF] text-[#4F39F6] w-fit px-5 py-3 rounded-full shadow-inner">
            <div>
                 <FaRegCircleDot />
                 </div>
            <p className="font-medium font-16 bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"> New: AI-Powered Tools Available
            </p></span>
      <h1 className="text-7xl font-extrabold text-[#101727]">Supercharge Your Digital Workflow</h1>
      <p className="py-6 text-[#627382] text-[18px]">
        Access premium AI tools, design assets, templates, and productivity <br />
        software—all in one place. Start creating faster today.<br />
        Explore Products
      </p>
      <div className='flex items-center gap-4'>
        <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-5 py-3.5 rounded-full 
        font-semibold cursor-pointer border-none leading-none transition-all duration-300 hover:opacity-90 
         hover:shadow-lg">
        Explore Products
        </button>
     <button className="flex items-center gap-2 px-5 py-3 rounded-full border-2 border-[#7C3AED] 
     bg-transparent text-[#7C3AED] font-semibold cursor-pointer leading-none transition-all duration-300 
     hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:text-white active:scale-95">  
    <CiPlay1 className="group-hover:text-white" /> 
    <span>Watch Demo</span> 
    </button>
      </div>
    </div>
  </div>
  </div>
</div>
    );
};

export default Banner;