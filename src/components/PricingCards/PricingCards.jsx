import React, { use } from 'react';

const PricingCards = ({pricingDataPromise}) => {
    const data = use(pricingDataPromise);
    const pricing = data.pricing;

    return (
       <section className="py-20 bg-white">
            <div className="max-w-400 mx-auto px-4 md:px-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#101727] mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-[#627382] font-16 leading-relaxed mb-6">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricing.map((item) => (
                        <div 
                            key={item.id}
                            className={`relative p-10 rounded-4xl border transition-all duration-300 flex flex-col ${
                                item.isPopular 
                                ? 'bg-[#7C3AED] border-[#7C3AED] text-white shadow-2xl ' 
                                : 'bg-white border-[#F1F1F1] text-[#101727]'
                            }`}
                        >
                            {item.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2">{item.plan}</h3>
                                <p className={`${item.isPopular ? 'text-purple-100' : 'text-[#627382]'}`}>
                                    {item.description}
                                </p>
                            </div>

                            <div className="mb-8 flex items-baseline">
                                <span className="text-5xl font-extrabold">${item.price}</span>
                                <span className={`ml-2 text-lg ${item.isPopular ? 'text-purple-200' : 'text-[#627382]'}`}>/Month</span>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {item.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <svg className={`w-5 h-5 flex-shrink-0 ${item.isPopular ? 'text-white' : 'text-[#10B981]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className={item.isPopular ? 'text-purple-50' : 'text-[#627382]'}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-full font-bold transition-all duration-300 ${
                                item.isPopular 
                                ? 'bg-white text-[#7C3AED] hover:bg-purple-50' 
                                : 'bg-[#7C3AED] text-white hover:opacity-90'
                            }`}>
                                {item.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingCards;