import React from 'react';

const Stats = () => {
    return (
        <div className='mt-20 p-8  text-white bg-gradient-to-r from-blue-500 to-purple-500  grid grid-cols-1  md:grid-cols-3 gap-10 text-center'>
            <div className='border-0 md:border-r h-25'>
                <h2 className='font-bold text-[60px]'>50K+</h2>
                <p className='text-[24px]'>Active Users</p>
            </div>

            <div className='border-0 md:border-r h-25'>
                <h2 className='font-bold text-[60px]'>200+</h2>
                <p className='text-gray-400 text-[24px]'>Premium Tools</p>
            </div>
        
            <div>
                <h2 className='font-bold text-[60px]'>4.9</h2>
                <p className='text-gray-400 text-[24px]'>Rating</p>
            </div>
         
        </div>
    );
};

export default Stats;