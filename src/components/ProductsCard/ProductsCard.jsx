import React from 'react';

import Card from '../ui/Card';

const ProductsCard = ({productData, handleAddToCart, setSelectedProducts, selectedProducts}) => {
    console.log(productData, "productData")
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productData.map(product => (
                <Card 
                    key={product.id} 
                    product={product} 
                    handleAddToCart={handleAddToCart} 
                    setSelectedProducts={setSelectedProducts}
                    selectedProducts={selectedProducts}
                />
            ))}
        </div>
    );
};

export default ProductsCard;