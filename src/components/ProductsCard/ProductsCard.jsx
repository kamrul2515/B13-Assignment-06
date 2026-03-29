import React from 'react';
import { FaCheck } from 'react-icons/fa6';

const ProductsCard = ({productData}) => {
    console.log(productData, "productData")
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-400 mx-auto px-4 py-10'>

        {
            productData.map(product => {
                console.log(product, "product")
                return  <div key={product.id} className="card w-full shadow-sm border border-[#F6F6F6] overflow-hidden flex flex-col">

                            <div className='relative p-10 flex items-center justify-start'> 

                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm overflow-hidden p-4 border-2 border-[#F1F5F9]">
                                    <img 
                                        src={product.img} 
                                        className='w-full h-full object-contain transition-transform duration-300 hover:scale-110' 
                                        alt={product.name} 
                                    /> 
                                </div>

                                <span className={`absolute top-6 right-6 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm border
                                 ${product.tagType === "Popular" && "bg-purple-100 text-purple-600 border-purple-200"}
                                 ${product.tagType === "New" && "bg-green-100 text-green-600 border-green-200"}
                                 ${product.tagType === "Best Seller" && "bg-orange-100 text-orange-600 border-orange-200"}
                                 `}>{product.tag}       
                                </span> 
                            </div>
  <div className="card-body space-y-4">
    <h2 className="card-title font-bold text-2xl text-[#101727]">{product.name}</h2>
    <p className='font-16 text-[#627382]'>{product.description}</p>
    <h2 className='font-bold text-2xl text-[#101727]'>${product.price}<span className='font-16 text-[#627382]'>/mo</span></h2>
    
    <div className='space-y-4 mb-6'>
                                {
                                    product.features.map((feature, index) => (
                                        <div key={index} className='flex items-center gap-3'>
                                            <FaCheck className='text-[#30B868] text-lg' />
                                            <p className='font-16 text-[#627382] leading-none'>{feature}</p>
                                        </div>
                                    ))
                                }
                            </div>
    <div className="card-actions ">
     <button className="w-full px-8 py-5 btn text-white rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA]
cursor-pointer leading-none transition-all duration-300 hover:opacity-90 hover:scale-105 
active:scale-95 shadow-md hover:shadow-lg">
  Buy Now
</button>
    </div>
  </div>
</div>
            })
        }

           
        </div>
    );
};

export default ProductsCard;