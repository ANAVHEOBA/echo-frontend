'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

// Types for better type safety
interface Stat {
    id: string;
    value: string;
    label: string;
}

// Sparkle icon matching Ergo site
const SparkleIcon = memo(({ className = "w-6 h-6" }: { className?: string }) => (
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

// Extract StatCard for better composition and reusability
const StatCard = memo(({ stat }: { stat: Stat }) => (
    <div
        className="p-8 sm:p-9 text-center flex flex-col items-center justify-center group"
        role="group"
        aria-label={`${stat.value} ${stat.label}`}
    >
        <div
            className="text-[56px] sm:text-[64px] lg:text-[72px] font-medium text-[#1B2D33] mb-0 tracking-[-0.01em] leading-[1] transition-transform duration-300 group-hover:scale-105"
            style={{ fontFamily: '"General Sans", "Inter", sans-serif' }}
            aria-label={stat.value}
        >
            {stat.value}
        </div>
        <div
            className="text-[#1B2D33] text-[16px] font-normal leading-[1.5] tracking-[-0.01em] mt-2"
            style={{ fontFamily: '"Geist", "Inter", sans-serif' }}
        >
            {stat.label}
        </div>
    </div>
));
StatCard.displayName = 'StatCard';

export default function Benefits() {
    const stats: Stat[] = [
        {
            id: "revenue-recovered",
            value: "20%",
            label: "Revenue recovered",
        },
        {
            id: "shorter-cycle",
            value: "25%",
            label: "Shorter sales cycle",
        },
        {
            id: "hours-saved",
            value: "10+",
            label: "Hours saved per week per rep",
        },
    ];

    return (
        <section
            className="relative overflow-hidden py-16 sm:py-20 lg:py-[65px] px-4 sm:px-6 lg:px-[60px]"
            style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgb(250, 250, 250) 0%, rgb(255, 255, 255) 100%)'
            }}
            aria-labelledby="benefits-heading"
        >
            {/* Background Glows */}
            <div
                className="absolute top-[-59px] left-[342px] w-[717px] h-[627px] pointer-events-none"
                style={{
                    background: 'radial-gradient(50% 50% at 50% 50%, rgb(200, 220, 227) 0%, rgba(171, 171, 171, 0) 100%)'
                }}
                aria-hidden="true"
            />
            <div
                className="absolute top-[12px] left-[1000px] w-[713px] h-[487px] pointer-events-none hidden xl:block"
                style={{
                    background: 'radial-gradient(50% 50% at 50% 50%, rgb(198, 216, 222) 0%, rgba(255, 255, 255, 0) 100%)'
                }}
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col items-center">
                {/* Section Header */}
                <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 mb-6 shadow-sm">
                    <SparkleIcon className="w-6 h-6 text-[#1B2D33]" />
                    <span className="text-[14px] font-medium text-[#1B2D33] tracking-[-0.01em]" style={{ fontFamily: '"Inter", sans-serif' }}>
                        Benefits
                    </span>
                </div>

                {/* Main Heading */}
                <h2
                    id="benefits-heading"
                    className="text-[#1B2D33] text-3xl sm:text-4xl lg:text-[33px] font-medium text-center mb-4 tracking-[-0.03em] leading-tight max-w-[720px]"
                    style={{ fontFamily: '"Geist", "Inter", sans-serif' }}
                >
                    Real Results from Real Teams
                </h2>

                {/* Subheading */}
                <p
                    className="text-[#1B2D33] text-center text-base sm:text-[16px] mb-12 sm:mb-[40px] max-w-[640px] mx-auto leading-[1.5] tracking-[-0.01em]"
                    style={{ fontFamily: '"Geist", "Inter", sans-serif' }}
                >
                    See how Ergo helps businesses recover revenue, speed up sales cycles, and save valuable time.
                </p>

                {/* Statistics Container */}
                <motion.div
                    className="w-full max-w-[1100px] mx-auto rounded-[15px] border border-[#EAF0DD] transition-shadow duration-300 bg-white/50 backdrop-blur-sm"
                    style={{
                        background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.45) 0%, rgb(255, 255, 255) 100%)',
                        boxShadow: '0px -37px 40px 0px rgba(32, 46, 51, 0.05)'
                    }}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                >
                    <div
                        className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#EAF0DD]"
                        role="list"
                        aria-label="Business impact statistics"
                    >
                        {stats.map((stat) => (
                            <motion.div key={stat.id} role="listitem" variants={fadeInUp}>
                                <StatCard stat={stat} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Social proof - kept from original even if not in strict spec, but made subtle */}
                <div className="text-center mt-10 sm:mt-12 opacity-0">
                    {/* Hidden to match exact screenshot which ends after cards, but keeping structure if needed */}
                </div>
            </div>
        </section>
    );
}
