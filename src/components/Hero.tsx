'use client';

import Image from "next/image";
import HeroIntegration from "./HeroIntegration";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 z-50 relative">
              <Image
                src="/images/ve7KbHG7oaVIYk0VgTpdOY6POhk.svg"
                alt="Ergo"
                width={100}
                height={28}
                className="h-7 w-auto"
              />
            </a>

            {/* Nav Links - Desktop */}
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

            {/* Sign In Button - Desktop */}
            <a
              href="#"
              className="hidden md:inline-flex px-6 py-2.5 bg-[#264a54] text-white text-[15px] font-medium rounded-full hover:bg-[#1b3640] transition-colors"
            >
              Sign In
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 z-50 relative text-[#052233]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-0 bg-white z-40 pt-24 px-6 md:hidden h-screen overflow-y-auto"
            >
              <div className="flex flex-col gap-6 text-lg font-medium text-[#1b2d33]">
                <a href="#" className="py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                <a href="#" className="py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Product</a>
                <a href="#" className="py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Company</a>
                <a href="#" className="py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Careers</a>
                <a href="#" className="py-2 border-b border-gray-100 flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
                  Case Studies
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="pt-4 flex flex-col gap-4">
                  <a
                    href="#"
                    className="w-full text-center px-6 py-3 bg-[#264a54] text-white text-[15px] font-medium rounded-full hover:bg-[#1b3640] transition-colors"
                  >
                    Sign In
                  </a>
                  <a
                    href="#"
                    className="w-full text-center px-6 py-3 bg-white border border-[#264a54] text-[#264a54] text-[15px] font-medium rounded-full hover:bg-gray-50 transition-colors"
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-8 px-6 lg:px-8 overflow-hidden min-h-screen flex flex-col justify-center">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 -z-10 h-full w-full"
          style={{
            backgroundImage: "radial-gradient(rgb(161, 161, 161) 0.6px, transparent 1.4px)",
            backgroundSize: "19px 19px"
          }}
        />

        <div className="max-w-[1400px] mx-auto w-full">
          {/* Y Combinator Badge */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-6 h-6 bg-[#f26625] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">Y</span>
            </div>
            <span className="text-[15px] text-[#1b2d33]">Backed by Y Combinator</span>
          </div>

          {/* Main Content */}
          <div className="max-w-2xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <motion.h1
                variants={fadeInUp}
                className="text-[40px] sm:text-[52px] md:text-[64px] leading-[1.1] font-medium text-[#264a54] mb-6 tracking-[-0.02em]"
              >
                Revenue Automation Infrastructure.
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-[18px] md:text-[20px] text-[#1b2d33] leading-relaxed mb-8"
              >
                From call to close, Ergo handles CRM updates, follow-ups, and keeps deals moving.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#052233] text-[#FAFAFA] text-[15px] font-medium rounded-[9px] hover:bg-[#0a3045] transition-colors shadow-sm w-full sm:w-auto justify-center"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book a Demo
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FAFAFA] border border-[#c8dce3] text-[#052233] text-[15px] font-medium rounded-[9px] hover:bg-white transition-colors shadow-sm w-full sm:w-auto justify-center"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                  Sign Up
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Illustration - Integration Diagram */}
          <div className="mt-16 w-full">
            {/* Scale down hero integration on mobile to prevent overflow */}
            <div className="w-full overflow-x-hidden md:overflow-visible">
              <div className="min-w-[600px] md:min-w-0 origin-top-left transform scale-75 sm:scale-90 md:scale-100">
                <HeroIntegration />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
