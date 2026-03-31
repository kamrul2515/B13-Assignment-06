import { use } from 'react';
import ProductsCard from '../../ProductsCard/ProductsCard';
import SelectedCards from '../../ProductsCard/SelectedCards/SelectedCards';

const ToolsCard = ({
    toolsCardData, 
    cartCount, 
    handleAddToCart, 
    handleRemoveFromCart, 
    handleResetCart, 
    selectedProducts,
    setSelectedProducts,
    selectedType, 
    setSelectedType 
}) => {
    const rawData = use(toolsCardData);
    const productData = rawData.products;


    return (
       <div className="w-full max-w-90 md:max-w-400 mx-auto px-4 mb-20">
            <div className="text-center space-y-3 mb-8">
                <h2 className="font-extrabold text-2xl md:text-5xl text-[#101727]">
                    Premium Digital Tools
                </h2>
                <p className="text-xs md:text-lg text-[#627382]">
                    Choose from our curated collection of premium products.
                </p>
                <div className="inline-flex items-center p-1 border border-[#F1F1F1] rounded-full bg-white shadow-sm mt-4">
                    <button onClick={() => setSelectedType("available")}
                        className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all ${selectedType === "available" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "text-black"}`}>
                        Products
                    </button>
                    <button onClick={() => setSelectedType("selected")}
                        className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all ${selectedType === "selected" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "text-black"}`}>
                        Cart ({cartCount})
                    </button>
                </div>
            </div>
            
            {selectedType === "available" 
                ? <ProductsCard productData={productData} handleAddToCart={handleAddToCart} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} /> 
                : <SelectedCards selectedProducts={selectedProducts} handleRemoveFromCart={handleRemoveFromCart} handleResetCart={handleResetCart} />
            }
        </div>
    );
};

export default ToolsCard;