import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({carted,productPrice,setproductPrice,cartedProducts,setcartedPtoduct}) => {
    const removeProductHandler = (carted)=>{
        const filteredProduct = cartedProducts.filter(product => product.name !== carted.name)
        setcartedPtoduct(filteredProduct)
        setproductPrice(productPrice-carted.price)
        toast.success(`${carted.name} Remove Succesfull `)
    }
    return (
        <div className='p-3 bg-[#F9FAFC] rounded-lg flex justify-between items-center mb-4'>
            <div className='flex gap-8 items-center'>
            <img src={carted.icon} alt="" />
            <div>
                <h4 className='font-semibold text-5'>{carted.name}</h4>
                <p className='text-[#627382]'>{carted.price}$</p>
            </div>
            
            </div>
            <button onClick={()=> removeProductHandler(carted)} className='badge text-red-600 bg-red-300'>Remove</button>
        </div>
    );
};

export default Cart;