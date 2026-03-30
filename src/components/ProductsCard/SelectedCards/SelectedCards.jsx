import React from 'react';

const SelectedCards = ({ selectedProducts, handleRemoveFromCart, handleResetCart }) => {
    const totalPrice = selectedProducts.reduce((sum, item) => sum + item.price, 0);

    if (selectedProducts.length === 0) {
        return (
            <div className="text-center py-20 border rounded-2xl bg-gray-50 mb-6 w-175 mx-auto">
                <h3 className="text-xl font-bold text-gray-400">Your cart is empty!</h3>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6 border border-[#F1F1F1] rounded-2xl shadow-sm bg-white mb-6">
            <h2 className="text-2xl font-bold mb-6 text-[#101727]">Your Cart</h2>

            <div className="space-y-4 mb-8">
                {selectedProducts.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 border border-[#F6F6F6] rounded-xl">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border p-2 shadow-sm">
                                <img src={product.img} alt={product.name} className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-[#101727]">{product.name}</h3>
                                <p className="text-[#627382] font-medium">${product.price}</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => handleRemoveFromCart(product.id)}
                            className="text-[#FF4D4D] font-semibold hover:underline cursor-pointer"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            <div className="border-t border-dashed border-gray-300 pt-6 mb-6 flex justify-between items-center px-2">
                <span className="text-gray-500 font-bold text-lg">Total:</span>
                <span className="text-2xl font-extrabold text-[#101727]">${totalPrice}</span>
            </div>

            <button 
                onClick={handleResetCart}
                className="w-full py-4 rounded-2xl bg-[#7C3AED] text-white font-bold text-lg transition-all hover:bg-[#6D28D9] active:scale-95 shadow-lg"
            >
                Proceed To Checkout
            </button>
        </div>
    );
};

export default SelectedCards;