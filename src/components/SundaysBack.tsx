'use client';

import Image from 'next/image';

export default function SundaysBack() {
    return (
        <section
            className="relative py-24 sm:py-32 overflow-hidden"
            style={{
                background: 'radial-gradient(50% 50% at 50% 50%, #17435C 0%, #052233 100%)'
            }}
        >
            <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Logo/Brand */}
                <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-2 text-white">
                        <span className="text-2xl font-semibold tracking-tight">Ergo</span>
                    </div>
                </div>

                {/* Main Heading */}
                <h2
                    className="text-white text-5xl sm:text-6xl lg:text-[80px] font-medium tracking-[-0.03em] leading-[1.1] mb-8 max-w-[900px] mx-auto"
                    style={{ fontFamily: '"Geist", "Inter", sans-serif' }}
                >
                    Give your sales team their Sundays back
                </h2>

                {/* Subheading */}
                <p className="text-[#C6D8DE] text-lg sm:text-xl mb-12">
                    Join teams who have automated their revenue stack with Ergo
                </p>

                {/* Tags/Pills */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {[
                        "Constant Access to Founders",
                        "White Glove Onboarding",
                        "Personalized Support"
                    ].map((text, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 px-5 py-3 rounded-full text-white text-sm font-medium transition-all hover:bg-white/10"
                            style={{
                                backgroundColor: 'rgba(197, 216, 222, 0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(4px)'
                            }}
                        >
                            {index === 0 && (
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                            )}
                            {index === 1 && (
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <path d="M9 3v18" />
                                </svg>
                            )}
                            {index === 2 && (
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" />
                                </svg>
                            )}
                            {text}
                        </div>
                    ))}
                </div>

                {/* CTA Area with Arrow */}
                <div className="relative inline-block mb-32">
                    <button
                        className="bg-[#C6D8DE] hover:bg-white text-[#052233] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-2 group"
                    >
                        <svg
                            className="w-5 h-5 transition-transform group-hover:translate-x-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Get Started
                    </button>

                    {/* Decorative Arrow */}
                    <div className="absolute left-full top-1/2 ml-8 -translate-y-1/2 hidden md:block w-[160px]">
                        <svg viewBox="0 0 223 170" fill="none" className="w-full h-auto text-[#C6D8DE]">
                            <path d="M 206.482 57.889 C 181.106 48.022 149.973 42.798 124.842 56.368 C 108.782 65.04 98.253 85.368 101.552 103.375 C 104.667 120.381 114.971 136.285 133.205 138.161 C 142.71 139.138 151.435 135.818 154.429 126.059 C 159.004 111.149 145.803 93.438 134.555 85.268 C 99.452 59.77 45.921 54.129 6.916 73.577" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" />
                            <path d="M 26.344 47.438 C 21.165 53.022 9.739 66.135 5.466 73.905" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" />
                            <path d="M 5.465 73.9 C 12.83 75.842 29.503 80.793 37.273 85.065" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" />
                        </svg>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="flex justify-center items-center gap-8 opacity-90">
                    <div className="w-24 h-24 relative">
                        <Image
                            src="https://framerusercontent.com/images/ZblLMDLL0nyFYvL0MhFhxbWtQjY.png"
                            alt="SOC 2 Type 2"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="w-24 h-24 relative">
                        <Image
                            src="https://framerusercontent.com/images/5NH8pCJ1j0rLaYbFSgszAJw.png"
                            alt="SOC 2 Type 1"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Footer Links */}
                <div className="mt-20 border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-[#C6D8DE] text-sm">
                    <div className="flex gap-6 mb-4 sm:mb-0">
                        <a href="#" className="hover:text-white transition-colors">Product</a>
                        <a href="#" className="hover:text-white transition-colors">Company</a>
                    </div>
                    <div className="flex gap-6">
                        <span>© 2025 Ergo</span>
                        <a href="#" className="hover:text-white transition-colors">Support</a>
                        <a href="#" className="hover:text-white transition-colors">Zoom Guide</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>

            </div>
        </section>
    );
}
