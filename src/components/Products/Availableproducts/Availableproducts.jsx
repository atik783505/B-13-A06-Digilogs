import React from 'react';
import Card from '../../ui/Card/Card';

const Availableproducts = ({product,setcartedPtoduct,cartedProducts,productPrice,setproductPrice}) => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16' >
            {
                product.map(products => <Card key={products.id} cartedProducts={cartedProducts} setcartedPtoduct={setcartedPtoduct} products={products} productPrice={productPrice} setproductPrice={setproductPrice}></Card>)
            }
        </div>
    );
};

export default Availableproducts;