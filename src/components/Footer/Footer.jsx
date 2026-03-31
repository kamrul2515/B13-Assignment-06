import React from 'react';
import { FaInstagram, FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';

   const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0F172A] text-white pt-30 pb-10 px-6">
            <div className="max-w-400 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
                    
                    {/* ১. Brand Info */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">DigiTools</h2>
                        <p className="text-[#94A3B8] font-16 leading-relaxed">
                            Premium digital tools for creators, 
                            professionals, and businesses. Work smarter 
                            with our suite of powerful tools.
                        </p>
                    </div>

                    {/* ২. Product Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Product</h4>
                        <ul className="space-y-4 text-[#94A3B8] font-16 leading-relaxed">
                            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                        </ul>
                    </div>

                    {/* ৩. Company Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-[#94A3B8] font-16 leading-relaxed">
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                        </ul>
                    </div>

                    {/* ৪. Resources Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Resources</h4>
                        <ul className="space-y-4 text-[#94A3B8] font-16 leading-relaxed">
                            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* ৫. Social Links */}
                    <div className="space-y-6">
                    <h4 className="text-xl font-semibold">Social Links</h4>
                        <div className="flex gap-4">
                        {/* Instagram */}
                        <a 
                         href="#" 
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center
                         hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] transition-all text-[#0F172A]
                          hover:text-white text-xl"
                         aria-label="Instagram"
                        >
                        <FaInstagram />
                        </a>

                    {/* Facebook */}
                     <a 
                     href="#" 
                     className="w-10 h-10 bg-white rounded-full flex items-center justify-center
                      hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] transition-all text-[#0F172A]
                       hover:text-white text-xl"
                     aria-label="Facebook"
                    >
                    <FaSquareFacebook />
                    </a>

                    {/* X (Twitter) */}
                    <a 
                    href="#" 
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center 
                    hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] transition-all text-[#0F172A]
                     hover:text-white text-xl"
                    aria-label="Twitter"
                    >
                    <FaXTwitter />
                    </a>
                    </div>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="border-t border-[#1E293B] mb-8 opacity-50"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[#64748B] 
                font-16 leading-relaxed">
                    <p>© {currentYear} DigiTools. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;