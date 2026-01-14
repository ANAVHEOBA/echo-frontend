export default function FinalCTA() {
    return (
        <section
            className="relative overflow-hidden py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8"
            style={{
                background: 'linear-gradient(180deg, #1a3742 0%, #0f2833 100%)'
            }}
            aria-labelledby="final-cta-heading"
        >
            {/* Decorative background */}
            <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(100, 200, 255, 0.2) 0%, transparent 70%)'
                }}
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-[1000px] mx-auto text-center">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-2">
                        <svg 
                            className="w-8 h-8 text-white" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                            <path d="M2 17L12 22L22 17" opacity="0.7" />
                            <path d="M2 12L12 17L22 12" opacity="0.85" />
                        </svg>
                        <span 
                            className="text-white text-2xl font-semibold"
                            style={{ fontFamily: '"Geist", "Inter", sans-serif' }}
                        >
                            Ergo
                        </span>
                    </div>
                </div>

                {/* Main Heading */}
                <h2
                    id="final-cta-heading"
                    className="text-white text-4xl sm:text-5xl lg:text-[56px] font-medium mb-6 tracking-[-0.03em] leading-tight"
                    style={{ fontFamily: '"Geist", "Inter", sans-serif' }}
                >
                    Give your sales team<br />their Sundays back
                </h2>

                {/* Subheading */}
                <p
                    className="text-white/80 text-base sm:text-lg mb-10 leading-relaxed"
                    style={{ fontFamily: '"Geist", "Inter", sans-serif' }}
                >
                    Join teams who have automated their revenue stack with Ergo
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <line x1="9" y1="3" x2="9" y2="21" />
                        </svg>
                        <span className="text-white text-sm font-medium" style={{ fontFamily: '"Inter", sans-serif' }}>
                            Constant Access to Founders
                        </span>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                        <span className="text-white text-sm font-medium" style={{ fontFamily: '"Inter", sans-serif' }}>
                            White Glove Onboarding
                        </span>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        <span className="text-white text-sm font-medium" style={{ fontFamily: '"Inter", sans-serif' }}>
                            Personalized Support
                        </span>
                    </div>
                </div>

                {/* CTA Button with Arrow */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button
                        className="bg-white/90 hover:bg-white text-[#1a3742] px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
                        style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                        <svg 
                            className="w-5 h-5" 
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
                    <svg 
                        className="hidden sm:block w-24 h-24 text-white/30 -rotate-12" 
                        viewBox="0 0 100 100" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        aria-hidden="true"
                    >
                        <path 
                            d="M 10 40 Q 30 10, 60 30 T 80 50" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                        <path d="M 75 45 L 80 50 L 75 55" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
