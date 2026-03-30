import React from 'react';
import Cart from '../../ui/Cart';
import { toast } from 'react-toastify';

const Cartproducts = ({ cartedProducts,setcartedPtoduct,productPrice,setproductPrice }) => {
    const checkoutHandle = () => {
        setproductPrice(0)
        setcartedPtoduct([])
        toast.success('Checkout succesfull')
    }
    return (
        <div className='p-10 border border-gray-200 rounded-lg'>
            <h2>Your Cart</h2>
            <div>
                {cartedProducts.length === 0 ? 
                <div className='text-center p-25'>
                    <h2>no product available</h2>
                </div> : 
                <div>
                    {
                        cartedProducts.map(carted => <Cart carted={carted} productPrice={productPrice} setproductPrice={setproductPrice} cartedProducts={cartedProducts} setcartedPtoduct={setcartedPtoduct}></Cart>)
                    }
                </div>}

            </div>
            <div className='flex justify-between p-5'>
                <p className='text-gray-500'>total</p>
                <p className='text-[20px] font-bold'>{productPrice} $</p>
            </div>
            <button onClick={checkoutHandle} className='btn rounded-full w-full text-white bg-gradient-to-r from-blue-500 to-purple-500'>Proceed to Checkout</button>
        </div>
    );
};

export default Cartproducts;