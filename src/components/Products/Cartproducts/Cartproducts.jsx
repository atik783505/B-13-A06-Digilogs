import React from 'react';
import Cart from '../../ui/Cart';
import { toast } from 'react-toastify';
import { TbShoppingCartExclamation } from 'react-icons/tb';

const Cartproducts = ({ cartedProducts, setcartedPtoduct, productPrice, setproductPrice }) => {
    const checkoutHandle = () => {
        setproductPrice(0)
        setcartedPtoduct([])
        toast.success('Checkout Successful!')
    }
    return (
        <div className='p-3 md:p-10 border border-gray-200 rounded-lg'>
            <h2 className='text-6 font-bold'>Your Cart</h2>
            <div>
                {cartedProducts.length === 0 ?
                    <div className='text-center p-10 md:p-25'>
                        <TbShoppingCartExclamation className='w-7 mx-auto' />
                        <h2 className='text-5'>Your Cart is Empty</h2>
                    </div> :
                    <div>
                        {
                            cartedProducts.map(carted => <Cart carted={carted} productPrice={productPrice} setproductPrice={setproductPrice} cartedProducts={cartedProducts} setcartedPtoduct={setcartedPtoduct}></Cart>)
                        }
                    </div>}

            </div>
            {cartedProducts.length > 0 ?
                <div>
                    <div className='flex justify-between p-5'>
                        <p className='text-gray-500'>total</p>
                        <p className='text-[20px] font-bold'>{productPrice} $</p>
                    </div>
                    <button onClick={checkoutHandle} className='btn rounded-full w-full text-white bg-gradient-to-r from-blue-500 to-purple-500'>Proceed to Checkout</button>

                </div> : ""}

        </div>
    );
};

export default Cartproducts;