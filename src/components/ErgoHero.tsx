import Link from "next/link";
import HeroIntegration from "./HeroIntegration";

export default function ErgoHero() {
    return (
        <div className="relative min-h-screen w-full bg-[#f8fbfa] font-sans selection:bg-[#c6d8de] selection:text-[#052233]">
            {/* Dot Pattern Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "radial-gradient(#cfd4d6 1.5px, transparent 1.5px)",
                    backgroundSize: "24px 24px"
                }}
            />

            {/* Header */}
            <header className="relative z-50 w-full border-b border-transparent">
                <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-[22px] font-bold text-[#052233] tracking-tight">Ergo</span>
                    </Link>

                    {/* Nav Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        {["Home", "Product", "Company", "Careers"].map((item) => (
                            <Link
                                key={item}
                                href="#"
                                className="text-[15px] font-medium text-[#052233]/80 hover:text-[#052233] transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                        <div className="flex items-center gap-1 text-[15px] font-medium text-[#052233]/80 hover:text-[#052233] cursor-pointer">
                            Case Studies
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </nav>

                    {/* Sign In */}
                    <Link
                        href="#"
                        className="hidden md:inline-flex items-center justify-center px-5 py-2 bg-[#052233] text-white text-[14px] font-semibold rounded-lg hover:bg-[#052233]/90 transition-colors"
                    >
                        Sign In
                    </Link>
                </div>
            </header>

            {/* Hero Content */}
            <main className="relative z-10 pt-20 pb-20 px-6">
                <div className="max-w-[1400px] mx-auto">
                    <div className="max-w-[720px]">
                        {/* YC Badge */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center shrink-0">
                                <span className="text-white text-[10px] font-bold">Y</span>
                            </div>
                            <span className="text-[15px] font-medium text-[#052233]">Backed by Y Combinator</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-[56px] leading-[1.05] md:text-[80px] font-semibold tracking-[-0.03em] text-[#052233] mb-6">
                            Revenue Automation Infrastructure.
                        </h1>

                        {/* Subheading */}
                        <p className="text-[18px] md:text-[20px] text-[#052233]/80 leading-relaxed mb-10 max-w-[560px]">
                            From call to close, Ergo handles CRM updates, follow-ups, and keeps deals moving.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 mb-20">
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#052233] text-white text-[15px] font-semibold rounded-lg hover:bg-[#052233]/90 transition-all shadow-sm"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Book a Demo
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-[#cad5d9] text-[#052233] text-[15px] font-semibold rounded-lg hover:bg-gray-50 transition-all shadow-sm"
                            >
                                <svg className="w-5 h-5 rotate-[-45deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                                Sign Up
                            </Link>
                        </div>
                    </div>

                    {/* Integration Diagram Overlay */}
                    <div className="relative w-full max-w-[1240px] mx-auto mt-[-60px] md:mt-[-120px] pointer-events-none">
                        <HeroIntegration />
                    </div>
                </div>
            </main>
        </div>
    );
}
