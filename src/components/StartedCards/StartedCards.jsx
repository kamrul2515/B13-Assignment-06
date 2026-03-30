import React, { use } from 'react';

const StartedCards = ({ stepsDataPromise }) => {
    const data = use(stepsDataPromise);
    const steps = data.steps;

    return (
        <section className="py-20 mt-30">
            <div className='bg-[#F1F1F1] py-30'>
            <div className="max-w-400 mx-auto px-4 md:px-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#101727] ">
                        Get Started In 3 Steps
                    </h2>
                    <p className="text-[#627382] font-16 leading-relaxed">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <div 
                            key={step.id} 
                            className="h-95 relative p-10 border border-[#F1F1F1] rounded-4xl bg-white flex flex-col items-center text-center space-y-6 hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Step Number */}
                            <div className="absolute top-6 right-6 w-8 h-8 bg-[#7C3AED] text-white rounded-full flex items-center justify-center font-bold text-xs">
                                {step.id}
                            </div>

                            {/* Icon Box */}
                            <div className="w-24 h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center p-6 group-hover:scale-110 transition-transform">
                                <img src={step.icon} alt={step.title} className="w-full h-full object-contain" />
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold text-[#101727]">{step.title}</h3>
                                <p className="text-[#627382] leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </section>
    );
};

export default StartedCards;