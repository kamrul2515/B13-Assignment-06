import React from 'react';

const Rating = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-12 px-4 mt-15 mb-30">
  <div className="max-w-400 mx-auto flex flex-col md:flex-row justify-around items-center text-white gap-8 md:gap-0">
    
    <div className="text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-3">50K+</h2>
      <p className="text-2xl opacity-80 font-medium">Active Users</p>
    </div>

    <div className="hidden md:block w-px h-16 bg-white/30"></div>

    <div className="text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-3">200+</h2>
      <p className="text-2xl opacity-80 font-medium">Premium Tools</p>
    </div>

    <div className="hidden md:block w-px h-16 bg-white/30"></div>

    <div className="text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-3">4.9</h2>
      <p className="text-2xl opacity-80 font-medium">Rating</p>
    </div>

  </div>
</div>
    );
};

export default Rating;
