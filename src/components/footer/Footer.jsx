import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#101727] p-25'>
            <div className='w-11/12 text-white mx-auto  flex flex-col md:flex-row text-center md:text-left justify-between  gap-10 md:gap-5'>
                <div>
                    <h2 className='text-[45px] font-bold'>DigiTools</h2>
                    <p className='leading-6'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>
                <div>
                    <h4 className='font-medium text-[20px]'>Product</h4>
                    <ul className='space-y-2 opacity-75'>

                    <li><a href=''>Features</a></li>
                    <li><a href=''>Pricing</a></li>
                    <li><a href=''>Templates</a></li>
                    <li><a href=''>Integrations</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-medium text-[20px]'>Company</h4>
                    <ul className='space-y-2 opacity-75'>

                    <li><a href=''>About</a></li>
                    <li><a href=''>Blog</a></li>
                    <li><a href=''>Features</a></li>
                    <li><a href=''>Press</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-medium text-[20px]'>Resources</h4>
                    <ul className='space-y-2 opacity-75'>

                    <li><a href=''>Documentation</a></li>
                    <li><a href=''>Help Center</a></li>
                    <li><a href=''>Community</a></li>
                    <li><a href=''>Contact</a></li>
                    </ul>
                </div>
                <div className='space-y-3 flex flex-col items-center'>
                    <h2 className='font-bold text-[18px]'>Social Links</h2>
                    <ul className='flex  gap-3'>
                        <li className='bg-white p-1.5 rounded-full text-black'><a href=""><FaInstagram></FaInstagram></a></li>
                        <li className='bg-white p-1.5 rounded-full text-black'><a href=""><FaFacebook></FaFacebook></a></li>
                        <li className='bg-white p-1.5 rounded-full text-black'><a href=""><FaTwitter></FaTwitter></a></li>
                    </ul>
                </div>
            </div>
            <hr className='my-8 mt-15 w-10/12 mx-auto text-white' />
            <div className='flex flex-col md:flex-row justify-between text-white w-10/12 mx-auto'>
                <p>© 2026 Digitools. All rights reserved.</p>
                <ul className='flex gap-6'>
                    <li><a href="">Privacy Policy </a></li>
                    <li><a href="">Terms of Service    </a></li>
                    <li><a href="">Cookies</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;