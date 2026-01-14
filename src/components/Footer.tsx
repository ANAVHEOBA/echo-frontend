export default function Footer() {
    return (
        <footer
            className="relative py-12 px-4 sm:px-6 lg:px-8"
            style={{
                background: 'linear-gradient(180deg, #0f2833 0%, #0a1f28 100%)'
            }}
        >
            <div className="max-w-[1280px] mx-auto">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 pb-8 border-b border-white/10">
                    {/* Logo and Nav */}
                    <div className="mb-8 lg:mb-0">
                        <div className="flex items-center gap-2 mb-6">
                            <svg 
                                className="w-6 h-6 text-white" 
                                viewBox="0 0 24 24" 
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                                <path d="M2 17L12 22L22 17" opacity="0.7" />
                                <path d="M2 12L12 17L22 12" opacity="0.85" />
                            </svg>
                            <span 
                                className="text-white text-xl font-semibold"
                                style={{ fontFamily: '"Geist", "Inter", sans-serif' }}
                            >
                                Ergo
                            </span>
                        </div>
                        
                        <nav className="flex gap-6">
                            <a 
                                href="#product" 
                                className="text-white/70 hover:text-white text-sm transition-colors"
                                style={{ fontFamily: '"Inter", sans-serif' }}
                            >
                                Product
                            </a>
                            <a 
                                href="#company" 
                                className="text-white/70 hover:text-white text-sm transition-colors"
                                style={{ fontFamily: '"Inter", sans-serif' }}
                            >
                                Company
                            </a>
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        <a 
                            href="#" 
                            className="w-12 h-12 rounded-full bg-[#4285F4] hover:bg-[#5294ff] flex items-center justify-center transition-colors"
                            aria-label="Social Platform 1"
                        >
                            <span className="text-white text-xs font-bold">SOC2</span>
                        </a>
                        <a 
                            href="#" 
                            className="w-12 h-12 rounded-full bg-[#4285F4] hover:bg-[#5294ff] flex items-center justify-center transition-colors"
                            aria-label="Social Platform 2"
                        >
                            <span className="text-white text-xs font-bold">SOC2</span>
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p 
                        className="text-white/50 text-sm"
                        style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                        © 2025 Ergo
                    </p>
                    
                    <nav className="flex gap-6">
                        <a 
                            href="#support" 
                            className="text-white/50 hover:text-white text-sm transition-colors"
                            style={{ fontFamily: '"Inter", sans-serif' }}
                        >
                            Support
                        </a>
                        <a 
                            href="#zoom-guide" 
                            className="text-white/50 hover:text-white text-sm transition-colors"
                            style={{ fontFamily: '"Inter", sans-serif' }}
                        >
                            Zoom Guide
                        </a>
                        <a 
                            href="#terms" 
                            className="text-white/50 hover:text-white text-sm transition-colors"
                            style={{ fontFamily: '"Inter", sans-serif' }}
                        >
                            Terms of Service
                        </a>
                        <a 
                            href="#privacy" 
                            className="text-white/50 hover:text-white text-sm transition-colors"
                            style={{ fontFamily: '"Inter", sans-serif' }}
                        >
                            Privacy Policy
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
