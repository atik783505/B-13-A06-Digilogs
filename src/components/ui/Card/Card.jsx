import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Card = ({ products,cartedProducts,setcartedPtoduct,productPrice,setproductPrice }) => {
    const [isbuy,setIsbuy] = useState(false)
    const isAlreadyInCart = cartedProducts.find(p => p.id === products.id);
    const handleBuy = () => {
        if(isAlreadyInCart){
            toast.error('Product already in cart')
            return
        }
        const newPrice = productPrice+products.price
        setproductPrice(newPrice)
        setIsbuy(true)
        setcartedPtoduct([...cartedProducts,products])
        toast.success(`${products.name} buyed`)
    }
    return (
        <div>
            <div className="card bg-base-100 h-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="card-body">
                    <div className='flex justify-end'>
                        <span className={`badge p-2.5 ${products.tagType === 'best seller'?'bg-[#FEF3C6] text-[#BB4D00]': products.tagType === 'popular'? 'bg-[#E1E7FF] text-purple-500':'bg-green-200 text-green-500'}`}>{products.tagType}</span>
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
                        <button onClick={handleBuy} disabled={isbuy?true:false} className={`btn btn-primary btn-block  text-white rounded-full ${isbuy?'bg-green-600':'bg-gradient-to-r from-blue-500 to-purple-500'}`}>
                        {isbuy === true ?'Add to Cart':'Buy Now'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;