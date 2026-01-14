'use client';

import { useRef, memo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

// Sparkle icon matching the design
const SparkleIcon = memo(({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 256 256"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path d="M208 144a15.78 15.78 0 0 1-10.42 14.94L146 178l-19 51.62a15.92 15.92 0 0 1-29.88 0L78 178l-51.62-19a15.92 15.92 0 0 1 0-29.88L78 110l19-51.62a15.92 15.92 0 0 1 29.88 0L146 110l51.62 19A15.78 15.78 0 0 1 208 144ZM152 48h16V64a8 8 0 0 0 16 0V48h16a8 8 0 0 0 0-16H184V16a8 8 0 0 0-16 0V32H152a8 8 0 0 0 0 16Zm88 32h-8V72a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v8a8 8 0 0 0 16 0V96h8a8 8 0 0 0 0-16Z" />
    </svg>
));
SparkleIcon.displayName = 'SparkleIcon';

export default function ReportingIntelligence() {
    return (
        <section
            className="relative overflow-hidden py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
            style={{
                background: 'radial-gradient(67% 50% at 50% 18.3%, #204152 0%, #052233 100%)'
            }}
            aria-labelledby="reporting-heading"
        >
            {/* Decorative background elements */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(100, 200, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(100, 200, 255, 0.1) 0%, transparent 50%)'
                }}
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-[1280px] mx-auto">
                {/* Section Header */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="flex justify-center mb-6"
                >
                    <div className="flex items-center gap-2">
                        <SparkleIcon className="w-5 h-5 text-[#C6D8DE]" />
                        <span
                            className="text-[14px] font-medium text-[#C6D8DE] tracking-[-0.01em]"
                            style={{ fontFamily: '"Inter", sans-serif' }}
                        >
                            Reporting and Intelligence
                        </span>
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h2
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    id="reporting-heading"
                    className="text-white text-4xl sm:text-5xl lg:text-[56px] font-medium text-center mb-4 tracking-[-0.03em] leading-tight max-w-[900px] mx-auto"
                    style={{ fontFamily: '"Geist", "Inter", sans-serif' }}
                >
                    Sales Management&apos;s<br />Best Friend
                </motion.h2>

                {/* Subheading */}
                <motion.p
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-white/80 text-center text-base sm:text-lg mb-12 sm:mb-16 max-w-[800px] mx-auto leading-[1.6] tracking-[-0.01em]"
                    style={{ fontFamily: '"Geist", "Inter", sans-serif' }}
                >
                    Ergo Reporting turns every interaction into actionable revenue intelligence—giving leadership instant visibility into trends, risks, and opportunities across the funnel.
                </motion.p>

                {/* Get Started Button */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="flex justify-center mb-16 sm:mb-20"
                >
                    <button
                        className="bg-white/90 hover:bg-white text-[#1a3742] px-6 py-3 rounded-lg font-medium text-base transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
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
                </motion.div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-[1200px] mx-auto">
                    {/* Objections Card */}
                    <div
                        className="bg-white/95 backdrop-blur-sm rounded-[20px] p-8 sm:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]"
                    >
                        <h3
                            className="text-[#4285F4] text-3xl sm:text-[36px] font-semibold text-center mb-8 tracking-[-0.02em]"
                            style={{ fontFamily: '"Geist", "Inter", sans-serif' }}
                        >
                            Objections
                        </h3>

                        <div className="flex justify-center items-center">
                            <div className="relative w-full aspect-[16/9]">
                                <Image
                                    src="/images/gTu3A6h8raO4xbpNEarwV2K5r8.png"
                                    alt="Objections donut chart showing 123 total objections with breakdown: Feature Gap 36%, Timing & Bandwidth 24%, Price Barrier 18%, Fit Doubt 11%, Approval & Compliance 7%, Contract Terms 5%"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Pain Points Card */}
                    <div
                        className="bg-white/95 backdrop-blur-sm rounded-[20px] p-8 sm:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]"
                    >
                        <h3
                            className="text-[#4285F4] text-3xl sm:text-[36px] font-semibold text-center mb-8 tracking-[-0.02em]"
                            style={{ fontFamily: '"Geist", "Inter", sans-serif' }}
                        >
                            Pain points
                        </h3>

                        <div className="flex justify-center items-center">
                            <div className="relative w-full aspect-[16/9]">
                                <Image
                                    src="/images/QBEvDA0nf1GwkZVHb5F9uxAs_3.png"
                                    alt="Pain points bar chart showing: Integration Gaps 254, Follow-Up Gaps 174, Manual Logging Burden 140, Scalability Constraints 94, Data Hygiene Issues 39, Adoption & Usability 37"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature Cards Below Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-[1200px] mx-auto mt-6 lg:mt-8">
                    {/* Feature Card 1 */}
                    <div
                        className="bg-[#2a4a56] hover:bg-[#2f5060] rounded-[20px] p-8 sm:p-10 lg:p-12 transition-all duration-300 hover:scale-[1.02]"
                    >
                        <div className="mb-6">
                            <svg
                                className="w-10 h-10 sm:w-12 sm:h-12 text-white/90"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M8 12l2 2 4-4" />
                            </svg>
                        </div>

                        <p
                            className="text-white text-lg sm:text-xl lg:text-[22px] leading-relaxed tracking-[-0.01em]"
                            style={{ fontFamily: '"Geist", "Inter", sans-serif' }}
                        >
                            Get real-time pipeline visibility without chasing your team for updates.{' '}
                            <span className="text-white/90">Every customer interaction automatically syncs to your CRM.</span>
                        </p>
                    </div>

                    {/* Feature Card 2 */}
                    <div
                        className="bg-[#2a4a56] hover:bg-[#2f5060] rounded-[20px] p-8 sm:p-10 lg:p-12 transition-all duration-300 hover:scale-[1.02]"
                    >
                        <div className="mb-6">
                            <svg
                                className="w-10 h-10 sm:w-12 sm:h-12 text-white/90"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M8 12l2 2 4-4" />
                            </svg>
                        </div>

                        <p
                            className="text-white text-lg sm:text-xl lg:text-[22px] leading-relaxed tracking-[-0.01em]"
                            style={{ fontFamily: '"Geist", "Inter", sans-serif' }}
                        >
                            Enable smooth handoffs between sales, onboarding, and customer success teams{' '}
                            <span className="text-white/90">with detailed, up-to-date context in your CRM.</span>
                        </p>
                    </div>
                </div>

                {/* Key Takeaways Section */}
                <div className="bg-white/95 backdrop-blur-sm rounded-[24px] p-8 sm:p-12 lg:p-16 max-w-[1200px] mx-auto mt-16 sm:mt-20 lg:mt-24 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left Side - Main Content */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <svg
                                    className="w-6 h-6 text-[#1a3742]"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </svg>
                                <span
                                    className="text-[#1a3742] text-sm font-medium tracking-wide uppercase"
                                    style={{ fontFamily: '"Inter", sans-serif' }}
                                >
                                    Key Takeaways
                                </span>
                            </div>

                            <h3
                                className="text-[#1a3742] text-3xl sm:text-4xl lg:text-[42px] font-semibold mb-6 leading-tight tracking-[-0.02em]"
                                style={{ fontFamily: '"Geist", "Inter", sans-serif' }}
                            >
                                Maximize your sales team&apos;s potential with Ergo
                            </h3>

                            <p
                                className="text-[#1a3742]/70 text-base sm:text-lg mb-8 leading-relaxed"
                                style={{ fontFamily: '"Geist", "Inter", sans-serif' }}
                            >
                                Unlock efficiency, automate workflows, and empower your team to close more deals with less effort. Get started with Ergo today.
                            </p>

                            <button
                                className="bg-[#1a3742] hover:bg-[#0f2833] text-white px-6 py-3 rounded-lg font-medium text-base transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
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
                        </div>

                        {/* Right Side - Benefits List */}
                        <div className="relative h-[450px] overflow-hidden group">
                            {/* Gradient Overlays for smooth fade effect */}
                            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/95 via-white/80 to-transparent z-10 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/95 via-white/80 to-transparent z-10 pointer-events-none" />

                            <motion.div
                                className="space-y-4"
                                animate={{ y: "-50%" }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 15,
                                    ease: "linear",
                                }}
                            >
                                {/* We duplicate the items to create a seamless infinite scroll */}
                                {[
                                    {
                                        text: 'Automate workflows and reduce operational costs',
                                        icon: (
                                            <svg className="w-full h-full text-[#1a3742]" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M19.83 7.5l-2.27-2.27c.07-.42.18-.81.32-1.15.08-.18.12-.37.12-.58 0-.83-.67-1.5-1.5-1.5-1.64 0-3.09.79-4 2h-5C4.46 4 2 6.46 2 9.5S4.5 21 4.5 21H10v-2h2v2h5.5l1.68-5.59 2.82-.94V7.5h-2.17zM13 9H8V7h5v2zm3 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        text: 'Close deals faster with AI-powered efficiency',
                                        icon: (
                                            <svg className="w-full h-full text-[#1a3742]" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M22 3.41L16.71 8.7 20 12h-8V4l3.29 3.29L20.59 2 22 3.41zM3.41 22l5.29-5.29L12 20v-8H4l3.29 3.29L2 20.59 3.41 22z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        text: 'Eliminate manual tasks and streamline operations',
                                        icon: (
                                            <svg className="w-full h-full text-[#1a3742]" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-3.06 16L7.4 14.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L10.94 18zM13 9V3.5L18.5 9H13z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        text: 'Save time with hands-free data entry',
                                        icon: (
                                            <svg className="w-full h-full text-[#1a3742]" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        text: 'Boost efficiency with automated CRM updates',
                                        icon: (
                                            <svg className="w-full h-full text-[#1a3742]" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        text: 'Track sales performance with real-time analytics',
                                        icon: (
                                            <svg className="w-full h-full text-[#1a3742]" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2z"></path><path d="M15 9l.94-2.07L18 6l-2.06-.93L15 3l-.92 2.07L12 6l2.08.93zM3.5 11L4 9l2-.5L4 8l-.5-2L3 8l-2 .5L3 9z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        text: 'Automate workflows and reduce operational costs',
                                        icon: (
                                            <svg className="w-full h-full text-[#1a3742]" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M19.83 7.5l-2.27-2.27c.07-.42.18-.81.32-1.15.08-.18.12-.37.12-.58 0-.83-.67-1.5-1.5-1.5-1.64 0-3.09.79-4 2h-5C4.46 4 2 6.46 2 9.5S4.5 21 4.5 21H10v-2h2v2h5.5l1.68-5.59 2.82-.94V7.5h-2.17zM13 9H8V7h5v2zm3 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        text: 'Close deals faster with AI-powered efficiency',
                                        icon: (
                                            <svg className="w-full h-full text-[#1a3742]" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M22 3.41L16.71 8.7 20 12h-8V4l3.29 3.29L20.59 2 22 3.41zM3.41 22l5.29-5.29L12 20v-8H4l3.29 3.29L2 20.59 3.41 22z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        text: 'Eliminate manual tasks and streamline operations',
                                        icon: (
                                            <svg className="w-full h-full text-[#1a3742]" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-3.06 16L7.4 14.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L10.94 18zM13 9V3.5L18.5 9H13z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        text: 'Save time with hands-free data entry',
                                        icon: (
                                            <svg className="w-full h-full text-[#1a3742]" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        text: 'Boost efficiency with automated CRM updates',
                                        icon: (
                                            <svg className="w-full h-full text-[#1a3742]" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        text: 'Track sales performance with real-time analytics',
                                        icon: (
                                            <svg className="w-full h-full text-[#1a3742]" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2z"></path><path d="M15 9l.94-2.07L18 6l-2.06-.93L15 3l-.92 2.07L12 6l2.08.93zM3.5 11L4 9l2-.5L4 8l-.5-2L3 8l-2 .5L3 9z" />
                                            </svg>
                                        )
                                    }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#f7f9fb] hover:bg-[#eef2f5] rounded-xl p-4 sm:p-5 transition-all duration-200 flex items-center justify-between gap-4 group cursor-default"
                                    >
                                        <p
                                            className="text-[#1a3742]/80 text-sm sm:text-base font-medium leading-relaxed"
                                            style={{ fontFamily: '"Geist", "Inter", sans-serif' }}
                                        >
                                            {item.text}
                                        </p>
                                        <div className="w-6 h-6 sm:w-8 sm:h-8 text-[#1a3742] shrink-0">
                                            {item.icon}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
