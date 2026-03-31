import React from 'react';

const Navbar = ({ cartCount }) => {
    return (
        <div className="navbar bg-base-100 shadow-sm w-full fixed top-0 left-0 z-50">
            <div className="navbar max-w-400 mx-auto px-2 md:px-10 flex justify-between items-center w-full">
                <div className="flex items-center gap-1 shrink">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1 min-h-0 h-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 shadow cursor-pointer mt-3 w-52 p-2">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <img src="https://i.ibb.co.com/CpYSZFN2/Digi-Tools.png" alt="Logo" className="h-5 sm:h-6 md:h-10 object-contain" />
                </div>


                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8 font-16 font-semibold text-[#101727] cursor-pointer">
                        <li className='hover:text-[#4F39F6]'><a>Products</a></li>
                        <li className='hover:text-[#4F39F6]'><a>Features</a></li>
                        <li className='hover:text-[#4F39F6]'><a>Pricing</a></li>
                        <li className='hover:text-[#4F39F6]'><a>Testimonials</a></li>
                        <li className='hover:text-[#4F39F6]'><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="flex items-center gap-2 md:gap-4 shrink-0">

                    <div className='relative shrink-0 cursor-pointer'>
                        <img src="https://i.ibb.co.com/jkr3Lyz1/shopping-cart.png" className='w-5 md:w-6' alt="Cart" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </div>


                    <button className='text-[#101727] text-[12px] md:text-base font-semibold cursor-pointer hover:text-[#4F39F6] whitespace-nowrap px-1'>
                        Login
                    </button>


                    <button className="btn btn-xs sm:btn-sm md:btn-md text-white rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none
                        cursor-pointer leading-none transition-all duration-300 hover:opacity-90 px-2 md:px-6 text-[10px] md:text-base h-7 min-h-0">
                        Get Started
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;