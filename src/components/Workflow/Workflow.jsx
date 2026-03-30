import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-[#4F39F6] text-center py-30 text-white space-y-6'>
            <h2 className='text-[40px] font-extrabold'>Ready to Transform Your Workflow?</h2>
            <p className='opacity-75 '>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
            <div className='flex gap-5 justify-center'>
                <button className='btn text-violet-500 bg-white rounded-full'>Explore Products</button>
                <button className='btn bg-transparent text-white rounded-full border border-white'>View Pricing</button>
            </div>
            <p>14-day free trial • No credit card required • Cancel anytime</p>

        </div>
    );
};

export default Workflow;