import { use, useState } from 'react';
import ProductsCard from '../../ProductsCard/ProductsCard';
import SelectedCards from '../../ProductsCard/SelectedCards/SelectedCards';

const ToolsCard = ({toolsCardData}) => {
    // console.log(toolsCardData, "toolsCardData")
    const productData = use(toolsCardData);
    // console.log(productData, )

    const [selectedType, setSelectedType] = useState("available");
    console.log(selectedType, "selectedType")
    return (
        <div className='max-w-400 mx-auto'>
           <div className='text-center space-y-4 mb-10'>
             {selectedType === "available" ? <h2 className='font-extrabold text-[48px] text-[#101727]'>Premium Digital Tools</h2>
             : <h2 className='font-extrabold text-[48px] text-[#101727]'>Your Cart</h2>}
            <p className='font-16 text-[#627382]'>Choose from our curated collection of premium digital products designed
                <br /> to boost your productivity and creativity.</p>

               <div className="inline-flex items-center p-1 border border-[#F1F1F1] rounded-full bg-white shadow-sm">
  {/* Products Button */}
  <button
    onClick={() => setSelectedType("available")}
    className={`px-8 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer active:scale-95 ${
      selectedType === "available"
        ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" 
        : "bg-white text-black" 
    }`}
  >
    Products
  </button>

  {/* Cart Button */}
  <button
    onClick={() => setSelectedType("selected")}
    className={`px-8 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer active:scale-95 ${
      selectedType === "selected"
        ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
        : "bg-white text-black" 
    }`}
  >
    Cart (2)
  </button>
</div>
           </div>
            
            {selectedType === "available" ? <ProductsCard productData={productData}></ProductsCard> : <SelectedCards></SelectedCards>}
           
        </div>
    );
};

export default ToolsCard;