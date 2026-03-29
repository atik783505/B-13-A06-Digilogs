import React from 'react';
import Card from '../../ui/Card/Card';

const Availableproducts = ({product}) => {
    return (
        <div className='grid grid-cols-3 gap-4 mt-16' >
            {
                product.map(products => <Card key={products.id} products={products}></Card>)
            }
        </div>
    );
};

export default Availableproducts;