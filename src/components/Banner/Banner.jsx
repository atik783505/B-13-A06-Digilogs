import React from 'react';
import bannerimg from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row gap-5 w-10/12 mx-auto justify-between mt-20'>
            <div className='flex flex-col justify-center space-y-8'>
                <span className='badge font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>New: AI-Powered Tools Available</span>
                <h1 className='text-[50px] md:text-[72px] font-extrabold leading-16 md:leading-[84px]'>Supercharge Your <br /> Digital Workflow</h1>
                <p className='text-[#627382] text-[18px] leading-[20px]'>Access premium AI tools, design assets, templates, and productivity
                software—all in one place. Start creating faster today.Explore Products</p>
                <div className='flex gap-4'>
                    <button className='btn text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-500'>Explore Products</button>
                    <button className='btn btn-primary btn-outline rounded-full'>Watch Demo</button>
                </div>
            </div>
            <div>
                <img className='' src={bannerimg} alt="" />
            </div>
        </div>
    );
};

export default Banner;