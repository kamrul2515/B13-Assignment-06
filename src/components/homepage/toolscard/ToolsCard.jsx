import { use, useState } from 'react';
import ProductsCard from '../../ProductsCard/ProductsCard';
import SelectedCards from '../../ProductsCard/SelectedCards/SelectedCards';

const ToolsCard = ({
    toolsCardData, 
    cartCount, 
    handleAddToCart, 
    handleRemoveFromCart, 
    handleResetCart, 
    selectedProducts,
    setSelectedProducts
}) => {
    const rawData = use(toolsCardData);
    const productData = rawData.products;
    const [selectedType, setSelectedType] = useState("available");

    return (
        <div className='max-w-400 mx-auto px-4'>
            <div className='text-center space-y-4 mb-10'>
                <h2 className='font-extrabold text-[48px] text-[#101727]'>
                    Premium Digital Tools
                </h2>
                <p className='font-16 text-[#627382]'>
                    Choose from our curated collection of premium digital products designed
                    <br /> to boost your productivity and creativity.
                </p>

                <div className="inline-flex items-center p-1 border border-[#F1F1F1] rounded-full bg-white shadow-sm">
                    <button
                        onClick={() => setSelectedType("available")}
                        className={`px-8 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                            selectedType === "available"
                                ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" 
                                : "bg-white text-black" 
                        }`}
                    >
                        Products
                    </button>

                    <button
                        onClick={() => setSelectedType("selected")}
                        className={`px-8 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                            selectedType === "selected"
                                ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                                : "bg-white text-black" 
                        }`}
                    >
                        Cart ({cartCount}) 
                    </button>
                </div>
            </div>
            
            {selectedType === "available" 
                ? <ProductsCard 
                    productData={productData} 
                    handleAddToCart={handleAddToCart} 
                    selectedProducts={selectedProducts}
                    setSelectedProducts={setSelectedProducts}
                  /> 
                : <SelectedCards 
                    selectedProducts={selectedProducts} 
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleResetCart={handleResetCart}
                  />
            }
        </div>
    );
};

export default ToolsCard;