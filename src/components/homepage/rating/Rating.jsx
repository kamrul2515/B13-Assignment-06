import React from 'react';

const Rating = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-8 md:py-12 mt-10 mb-20">
            <div className="max-w-90 md:max-w-400 mx-auto flex flex-col md:flex-row justify-around items-center text-white gap-8">
                <div className="text-center">
                    <h2 className="text-3xl md:text-6xl font-extrabold">50K+</h2>
                    <p className="text-sm md:text-xl opacity-80">Active Users</p>
                </div>
                <div className="hidden md:block w-px h-16 bg-white/30"></div>
                <div className="text-center">
                    <h2 className="text-3xl md:text-6xl font-extrabold">200+</h2>
                    <p className="text-sm md:text-xl opacity-80">Premium Tools</p>
                </div>
                <div className="hidden md:block w-px h-16 bg-white/30"></div>
                <div className="text-center">
                    <h2 className="text-3xl md:text-6xl font-extrabold">4.9</h2>
                    <p className="text-sm md:text-xl opacity-80">Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Rating;
