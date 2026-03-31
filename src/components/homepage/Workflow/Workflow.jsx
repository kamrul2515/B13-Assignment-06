import React from 'react';

const Workflow = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-400 mx-auto bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-[40px] py-20 px-8 text-center text-white shadow-2xl relative overflow-hidden">
                
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

                <div className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight mb-4">
                         Ready to Transform Your Workflow?
                    </h2>
    
                    <p className="font-16 text-purple-100 max-w-2xl mx-auto leading-relaxed mb-10">
                        Join thousands of professionals who are already using Digitools to work smarter.
                        Start your free trial today.
                    </p>

                </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
                        <button className="px-10 py-4 bg-white text-[#4F39F6] rounded-full font-bold text-lg hover:bg-opacity-95 transition-all cursor-pointer shadow-lg active:scale-95">
                            Explore Products
                        </button>
                        
                        <button className="px-10 py-4 border-2 border-white/50 text-white rounded-full font-bold text-lg hover:bg-white hover:text-[#4F39F6] transition-all cursor-pointer active:scale-95">
                            View Pricing
                        </button>
                    </div>

                    <p className="text-sm text-purple-200 pt-4">
                        Free 14-day trial • No credit card required • Cancel anytime
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Workflow;