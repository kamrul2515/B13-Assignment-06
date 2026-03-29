import React, { use } from 'react';
import ProductsCard from '../ProductsCard/ProductsCard';

const ToolsCard = ({toolsCardData}) => {
    console.log(toolsCardData, "toolsCardData")
    const productData = use(toolsCardData);
    console.log(productData, )
    return (
        <div className='max-w-400 mx-auto'>
           <div className='text-center space-y-4 mb-10'>
             <h2 className='font-extrabold text-[48px] text-[#101727]'>Premium Digital Tools</h2>
            <p className='font-16 text-[#627382]'>Choose from our curated collection of premium digital products designed
                <br /> to boost your productivity and creativity.</p>
                <div className='border-2 rounded-2xl border-[#F6F6F6]'>
                    <button className="btn text-white rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA]
    cursor-pointer leading-none transition-all duration-300 hover:opacity-90 hover:scale-105 
    active:scale-95 shadow-md hover:shadow-lg">
        Products</button>
        <button className="btn text-white rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA]
    cursor-pointer leading-none transition-all duration-300 hover:opacity-90 hover:scale-105 
    active:scale-95 shadow-md hover:shadow-lg">
        Cart (2)</button>
                </div>
                <h1>Cards : {productData.length}</h1>
           </div>
            
            <ProductsCard productData={productData}></ProductsCard>
           
        </div>
    );
};

export default ToolsCard;