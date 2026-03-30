import React, { useState } from 'react';

const Card = ({ products,cartedProducts,setcartedPtoduct }) => {
    const [isbuy,setIsbuy] = useState(false)
    const handleBuy = () => {
        setIsbuy(true)
        setcartedPtoduct([...cartedProducts,products])
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm h-full">
                <div className="card-body">
                    <div className='flex justify-end'>
                        <span className="badge badge-xs badge-warning p-2.5 bg-amber-200 text-[16px] ">{products.tagType}</span>
                    </div>
                    <img className='w-8 mb-4' src={products.icon} alt="" />
                    <h2 className="text-3xl font-bold">{products.name}</h2>
                    <p className='text-[#627382] text-[16px]'>{products.description}</p>
                    <span className="text-xl"><span className='font-bold text-[20px]' >${products.price}</span>/{products.period}</span>

                    <ul className="mt-6 flex flex-col gap-2 text-xs">

                        {
                           products.features?.map((feature, ind) => (
                                <li key={ind} className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span className='text-[#627382] text-[16px]'>{feature}</span>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="mt-6">
                        <button onClick={handleBuy} className="btn btn-primary btn-block  text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                        {isbuy === true ?'Add to Cart':'Buy Now'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;