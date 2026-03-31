import React from 'react';
import { LuShoppingCart } from 'react-icons/lu';

const Navbar = ({cartedProducts}) => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto' >
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <h1 className=" text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        DigiTools
                    </h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <div className="indicator">
                        <LuShoppingCart className='w-5' />
                       {cartedProducts.length !== 0 ? <span className="badge w-6 h-6 text-white bg-red-600 rounded-full indicator-item ">{cartedProducts.length}</span>:'' }
                    </div>

                    <a className="btn text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;