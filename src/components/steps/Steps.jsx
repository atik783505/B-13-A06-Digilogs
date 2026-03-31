import React from 'react';
import account from '../../assets/user.png'
import product from '../../assets/package.png'
import rocket from '../../assets/rocket.png'

const Steps = () => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto text-center p-5 md:p-24 my-24 bg-[#F9FAFC]'>
            <h1 className='text-[48px] font-extrabold'>Get Started in 3 Steps</h1>
            <p>Start using premium digital tools in minutes, not hours.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4  justify-between'>
                <div className='bg-white space-y-4 text-center p-10'>
                    <div className='flex justify-end text-white'>
                    <span className='bg-purple-700 w-6 h-6 badge badge-sm text-white rounded-full'>01</span>
                    </div>
                    <img className='w-[60px] mx-auto' src={account} alt="" />
                    <h2 className='text-[24px] font-bold'>Create Account</h2>
                    <p className='opacity-75'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='bg-white space-y-4 text-center p-10'>
                    <div className='flex justify-end text-white'>
                    <span className='bg-purple-700 w-6 h-6 badge badge-sm text-white rounded-full'>02</span>
                    </div>
                    <img className='w-[60px] mx-auto' src={product} alt="" />
                    <h2 className='text-[24px] font-bold'>Choose Products</h2>
                    <p className='opacity-75'>Browse our catalog and select the tools that fit your needs. </p>
                </div>
                <div className='bg-white space-y-4 text-center p-10'>
                    <div className='flex justify-end text-white'>
                    <span className='bg-purple-700 w-6 h-6 badge badge-sm text-white rounded-full'>03</span>
                    </div>
                    <img className='w-[60px] mx-auto' src={rocket} alt="" />
                    <h2 className='text-[24px] font-bold'>Start Creating</h2>
                    <p className='opacity-75'>Download and start using your premium tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default Steps;