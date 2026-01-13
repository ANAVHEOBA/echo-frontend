import Image from "next/image";
import HeroIntegration from "./HeroIntegration";

export default function Hero() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <Image
                src="/images/ve7KbHG7oaVIYk0VgTpdOY6POhk.svg"
                alt="Ergo"
                width={100}
                height={28}
                className="h-7 w-auto"
              />
            </a>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-[15px] text-[#1b2d33] hover:text-[#052233] transition-colors">
                Home
              </a>
              <a href="#" className="text-[15px] text-[#1b2d33] hover:text-[#052233] transition-colors">
                Product
              </a>
              <a href="#" className="text-[15px] text-[#1b2d33] hover:text-[#052233] transition-colors">
                Company
              </a>
              <a href="#" className="text-[15px] text-[#1b2d33] hover:text-[#052233] transition-colors">
                Careers
              </a>
              <div className="flex items-center gap-1 text-[15px] text-[#1b2d33] hover:text-[#052233] transition-colors cursor-pointer">
                Case Studies
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Sign In Button */}
            <a
              href="#"
              className="hidden md:inline-flex px-6 py-2.5 bg-[#264a54] text-white text-[15px] font-medium rounded-full hover:bg-[#1b3640] transition-colors"
            >
              Sign In
            </a>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <svg className="w-6 h-6 text-[#052233]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-8 px-6 lg:px-8 overflow-hidden min-h-screen">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 -z-10 h-full w-full"
          style={{
            backgroundImage: "radial-gradient(rgb(161, 161, 161) 0.6px, transparent 1.4px)",
            backgroundSize: "19px 19px"
          }}
        />

        <div className="max-w-[1400px] mx-auto">
          {/* Y Combinator Badge */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-6 h-6 bg-[#f26625] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">Y</span>
            </div>
            <span className="text-[15px] text-[#1b2d33]">Backed by Y Combinator</span>
          </div>

          {/* Main Content */}
          <div className="max-w-2xl">
            <h1 className="text-[52px] md:text-[64px] leading-[1.1] font-medium text-[#264a54] mb-6 tracking-[-0.02em]">
              Revenue Automation Infrastructure.
            </h1>
            <p className="text-[18px] md:text-[20px] text-[#1b2d33] leading-relaxed mb-8">
              From call to close, Ergo handles CRM updates, follow-ups, and keeps deals moving.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#264a54] text-white text-[15px] font-medium rounded-full hover:bg-[#1b3640] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Demo
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#c6d8de] text-[#264a54] text-[15px] font-medium rounded-full hover:bg-[#f5f9fa] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
                Sign Up
              </a>
            </div>
          </div>

          {/* Hero Illustration - Integration Diagram */}
          <div className="mt-16">
            <HeroIntegration />
          </div>
        </div>
      </section>
    </>
  );
}
