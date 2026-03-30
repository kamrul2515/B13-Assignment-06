import React from 'react';

import Card from '../ui/Card';

const ProductsCard = ({productData}) => {
    console.log(productData, "productData")
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-400 mx-auto px-4 py-10'>

        {
            productData.map(product => {
                // console.log(product, "product")
                return <Card product={product}></Card>
            })
        }

           
        </div>
    );
};

export default ProductsCard;