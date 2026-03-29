import  { use } from 'react';
import Availableproducts from '../Availableproducts/Availableproducts';

const Products = ({productData}) => {
    const product = use(productData)
    return (
        <div className='w-10/12 mx-auto mt-25'>
            <div className='text-center space-y-5'>
                <h2 className='text-[48px] font-extrabold '>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div>
                    <button className='btn text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-500'>Products</button>
                    <button className='btn rounded-full'>Cart (2)</button>
                </div>
            </div>
            <Availableproducts product={product}></Availableproducts>
        </div>
    );
};

export default Products;