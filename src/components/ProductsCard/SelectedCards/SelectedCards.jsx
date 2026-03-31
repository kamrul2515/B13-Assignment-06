import React from 'react';

const SelectedCards = ({ selectedProducts, handleRemoveFromCart, handleResetCart }) => {
    const totalPrice = selectedProducts.reduce((sum, item) => sum + item.price, 0);

    if (selectedProducts.length === 0) {
        return (
            <div className="text-center py-10 border border-dashed border-gray-300 rounded-2xl bg-gray-50 mb-10 w-[90%] max-w-[320px] mx-auto">
            <h3 className="text-lg font-bold text-gray-400">Your cart is empty!</h3>
        </div>
        );
    }

    return (
        <div className="w-full max-w-87.5 md:max-w-4xl mx-auto p-4 md:p-6 border border-[#F1F1F1] rounded-2xl shadow-sm bg-white mb-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#101727]">Your Cart</h2>
            <div className="space-y-3 mb-6">
                {selectedProducts.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-3 border border-[#F6F6F6] rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border p-1 shadow-sm shrink-0">
                                <img src={product.img} alt={product.name} className="w-full h-full object-contain" />
                            </div>
                            <div className="min-w-0">
                                <h3 className="font-bold text-sm md:text-lg text-[#101727] truncate">{product.name}</h3>
                                <p className="text-[#627382] text-xs font-medium">${product.price}</p>
                            </div>
                        </div>
                        <button onClick={() => handleRemoveFromCart(product.id)} className="text-[#FF4D4D] text-xs font-semibold hover:underline cursor-pointer">
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            <div className="border-t border-dashed border-gray-300 pt-4 mb-6 flex justify-between items-center">
                <span className="text-gray-500 font-bold">Total:</span>
                <span className="text-xl font-extrabold text-[#101727]">${totalPrice}</span>
            </div>
            <button onClick={handleResetCart} className="w-full py-3 rounded-xl bg-[#7C3AED] text-white font-bold text-md transition-all active:scale-95 shadow-md">
                Proceed To Checkout
            </button>
        </div>
    );
};

export default SelectedCards;