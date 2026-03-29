import  { use, useState } from 'react';
import Availableproducts from '../Availableproducts/Availableproducts';

const Products = ({productData}) => {
    const product = use(productData)
    const [selectedProduct,setselectedProduct] = useState(true)
    return (
        <div className='w-10/12 mx-auto mt-25'>
            <div className='text-center space-y-5'>
                <h2 className='text-[48px] font-extrabold '>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div>
                    <button onClick={() => setselectedProduct(true)} className={`btn ${selectedProduct === true ? 'text-white  bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-amber-50'} rounded-full `}>Products</button>
                    <button onClick={() => setselectedProduct(false)} className={`btn rounded-full ${selectedProduct === false? 'text-white bg-gradient-to-r from-blue-500 to-purple-500':'bg-white'} `}>Cart (2)</button>
                </div>
            </div>
            <Availableproducts product={product}></Availableproducts>
        </div>
    );
};

export default Products;