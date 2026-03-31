import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { FaRegCircleDot } from 'react-icons/fa6';

const Banner = () => {
    return (
        <div className="min-h-screen lg:min-h-[80vh] flex items-center py-10 md:py-0">
            <div className="w-full max-w-90 md:max-w-400 mx-auto px-4">
                <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <img src="https://i.ibb.co.com/yBR4XLsH/banner.png" className="w-full max-w-70 md:max-w-md rounded-2xl shadow-2xl" alt="Banner" />
                    </div>
                    <div className="space-y-5 lg:w-1/2 text-center lg:text-left">
                        <span className="inline-flex gap-2 items-center bg-[#E0E7FF] text-[#4F39F6] px-4 py-2 rounded-full shadow-inner mx-auto lg:mx-0">
                            <FaRegCircleDot className="text-xs" />
                            <p className="text-[10px] md:text-sm font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                                New: AI-Powered Tools Available
                            </p>
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-[#101727] leading-tight">
                            Supercharge Your Digital Workflow
                        </h1>
                        <p className="text-[#627382] text-sm md:text-lg max-w-md mx-auto lg:mx-0">
                            Access premium AI tools, design assets, and templates—all in one place.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
                            <button className="w-full sm:w-auto bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-8 py-3.5 rounded-full font-semibold shadow-lg">
                                Explore Products
                            </button>
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#7C3AED] text-[#7C3AED] font-semibold hover:bg-[#7C3AED] hover:text-white transition-all">
                                <CiPlay1 /> Watch Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;