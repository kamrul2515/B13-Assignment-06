import React from 'react';

import Card from '../ui/Card';
const ProductsCard = ({ productData, handleAddToCart }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-90 md:max-w-7xl mx-auto px-4 justify-items-center">
            {productData.map((product) => (
                <div key={product.id} className="bg-white border border-[#F1F1F1] rounded-2xl p-4 shadow-sm hover:shadow-md transition-all w-full max-w-[320px]">
                    <div className="bg-[#F9FAFB] rounded-xl flex items-center justify-center h-48 mb-4">
                        <img src={product.img} alt={product.name} className="h-32 object-contain" />
                    </div>
                    <div className="space-y-2 text-center md:text-left">
                        <h3 className="text-lg font-bold text-[#101727]">{product.name}</h3>
                        <p className="text-[#627382] text-sm">Best premium digital tool</p>
                        <div className="flex items-center justify-between mt-4">
                            <span className="text-xl font-bold text-[#4F39F6]">${product.price}</span>
                            <button 
                                onClick={() => handleAddToCart(product)}
                                className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-4 py-2 rounded-lg text-sm font-semibold active:scale-95 transition-all"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductsCard;