import React from 'react';

const Navbar = ({ cartCount,}) => {
    return (
        <div className="navbar bg-base-100 shadow-sm w-full fixed top-0 left-0 z-50">
      <div className="navbar max-w-400 mx-auto px-4 md:px-10">      
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1  shadow cursor-pointer">
        <li>Products</li>
      <li>Features</li>
      <li>Pricing</li>
      <li>Testimonials</li>
      <li>FAQ</li>
      </ul>
    </div>
    <img src="https://i.ibb.co.com/CpYSZFN2/Digi-Tools.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-8 font-16 font-semibold text-[#101727] cursor-pointer">
      <li className='hover:text-[#4F39F6]'>Products</li>
      <li className='hover:text-[#4F39F6]'>Features</li>
      <li className='hover:text-[#4F39F6]'>Pricing</li>
      <li className='hover:text-[#4F39F6]'>Testimonials</li>
      <li className='hover:text-[#4F39F6]'>FAQ</li>
    </ul>
  </div>
  <div className="navbar-end gap-4 items-center">
    <div className='relative'>

                        <img src="https://i.ibb.co.com/jkr3Lyz1/shopping-cart.png" className='w-5' alt="" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </div>

    <button className='text-[#101727] font-16 font-semibold cursor-pointer hover:text-[#4F39F6]'>Login</button>
    <button className="btn text-white rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA]
    cursor-pointer leading-none transition-all duration-300 hover:opacity-90 hover:scale-105 
    active:scale-95 shadow-md hover:shadow-lg">
        Get Started</button>
  </div>
  </div>
</div>
    );
};

export default Navbar;