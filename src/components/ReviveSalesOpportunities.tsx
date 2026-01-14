"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function ReviveSalesOpportunities() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    // Subtle parallax effects
    const rotateX = useTransform(scrollYProgress, [0, 1], [5, -2]);
    const rotateY = useTransform(scrollYProgress, [0, 1], [-5, 2]);

    // Smooth out the rotation
    const springConfig = { stiffness: 100, damping: 30, bounce: 0 };
    const smoothRotateX = useSpring(rotateX, springConfig);
    const smoothRotateY = useSpring(rotateY, springConfig);

    return (
        <section ref={targetRef} className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Visual Area - Left Side */}
                    <div className="lg:order-1 order-2 lg:w-1/2 w-full h-[300px] sm:h-[400px] lg:h-[500px] relative flex items-center justify-center">
                        {/* Scaling wrapper for mobile */}
                        <div className="w-full h-full flex items-center justify-center scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100 origin-center transition-transform duration-300">
                            <motion.div
                                style={{
                                    rotateX: smoothRotateX,
                                    rotateY: smoothRotateY,
                                    transformStyle: "preserve-3d",
                                }}
                                className="relative w-full max-w-[600px]"
                            >
                                {/* Main Board Container */}
                                <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 p-8">

                                    {/* SVG CRM Board with Data Lines and Search */}
                                    <div className="relative">
                                        <svg viewBox="0 0 700 500" className="w-full h-auto">
                                            {/* Data lines - Left section */}
                                            <g className="data-lines">
                                                {/* Row 1 */}
                                                <rect x="50" y="50" width="300" height="12" rx="6" fill="#E2E8F0" />
                                                <rect x="370" y="50" width="150" height="12" rx="6" fill="#E2E8F0" />

                                                {/* Row 2 */}
                                                <rect x="50" y="80" width="180" height="12" rx="6" fill="#CBD5E1" />
                                                <rect x="250" y="80" width="100" height="12" rx="6" fill="#CBD5E1" />
                                                <rect x="370" y="80" width="200" height="12" rx="6" fill="#CBD5E1" />

                                                {/* Row 3 */}
                                                <rect x="50" y="110" width="250" height="12" rx="6" fill="#E2E8F0" />
                                                <rect x="320" y="110" width="180" height="12" rx="6" fill="#E2E8F0" />

                                                {/* Row 4 */}
                                                <rect x="50" y="140" width="200" height="12" rx="6" fill="#CBD5E1" />
                                                <rect x="270" y="140" width="120" height="12" rx="6" fill="#CBD5E1" />

                                                {/* Row 5 */}
                                                <rect x="50" y="170" width="280" height="12" rx="6" fill="#E2E8F0" />

                                                {/* Row 6 */}
                                                <rect x="50" y="200" width="150" height="12" rx="6" fill="#CBD5E1" />
                                                <rect x="220" y="200" width="200" height="12" rx="6" fill="#CBD5E1" />

                                                {/* Section 2 - Bottom rows */}
                                                <rect x="50" y="270" width="280" height="12" rx="6" fill="#E2E8F0" />

                                                <rect x="50" y="300" width="200" height="12" rx="6" fill="#CBD5E1" />
                                                <rect x="270" y="300" width="130" height="12" rx="6" fill="#CBD5E1" />

                                                <rect x="50" y="330" width="260" height="12" rx="6" fill="#E2E8F0" />

                                                <rect x="50" y="360" width="170" height="12" rx="6" fill="#CBD5E1" />

                                                <rect x="50" y="390" width="240" height="12" rx="6" fill="#E2E8F0" />

                                                <rect x="50" y="420" width="140" height="12" rx="6" fill="#CBD5E1" />
                                                <rect x="210" y="420" width="150" height="12" rx="6" fill="#CBD5E1" />
                                            </g>

                                            {/* Animated Search Icon */}
                                            <motion.g
                                                initial={{ x: 200, y: 100 }}
                                                animate={{
                                                    x: [200, 220, 180, 210, 190, 200],
                                                    y: [100, 150, 200, 280, 350, 100],
                                                }}
                                                transition={{
                                                    duration: 10,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            >
                                                {/* Pulsing glow behind search */}
                                                <motion.circle
                                                    cx="0"
                                                    cy="0"
                                                    r="40"
                                                    fill="#3B82F6"
                                                    opacity="0.2"
                                                    animate={{
                                                        scale: [1, 1.3, 1],
                                                        opacity: [0.2, 0.05, 0.2],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                    }}
                                                />

                                                {/* Magnifying glass circle */}
                                                <circle
                                                    cx="0"
                                                    cy="0"
                                                    r="25"
                                                    fill="none"
                                                    stroke="#475569"
                                                    strokeWidth="5"
                                                />

                                                {/* Magnifying glass handle */}
                                                <line
                                                    x1="18"
                                                    y1="18"
                                                    x2="35"
                                                    y2="35"
                                                    stroke="#475569"
                                                    strokeWidth="5"
                                                    strokeLinecap="round"
                                                />
                                            </motion.g>

                                            {/* Toggle Switches - Right side */}
                                            <g className="toggle-switches" transform="translate(550, 80)">
                                                {/* Toggle 1 - appears first */}
                                                <motion.g
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{
                                                        opacity: [0, 1, 1, 1, 1, 0],
                                                        scale: [0.8, 1, 1, 1, 1, 0.8],
                                                    }}
                                                    transition={{
                                                        duration: 6,
                                                        repeat: Infinity,
                                                        times: [0, 0.1, 0.4, 0.6, 0.9, 1],
                                                    }}
                                                >
                                                    <rect x="0" y="0" width="120" height="35" rx="17.5" fill="#475569" />
                                                    <circle cx="100" cy="17.5" r="13" fill="white" />
                                                </motion.g>

                                                {/* Toggle 2 - appears second */}
                                                <motion.g
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{
                                                        opacity: [0, 0, 1, 1, 1, 0],
                                                        scale: [0.8, 0.8, 1, 1, 1, 0.8],
                                                    }}
                                                    transition={{
                                                        duration: 6,
                                                        repeat: Infinity,
                                                        times: [0, 0.15, 0.25, 0.6, 0.9, 1],
                                                    }}
                                                >
                                                    <rect x="0" y="50" width="120" height="35" rx="17.5" fill="#475569" />
                                                    <circle cx="100" cy="67.5" r="13" fill="white" />
                                                </motion.g>

                                                {/* Toggle 3 - appears third */}
                                                <motion.g
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{
                                                        opacity: [0, 0, 0, 1, 1, 0],
                                                        scale: [0.8, 0.8, 0.8, 1, 1, 0.8],
                                                    }}
                                                    transition={{
                                                        duration: 6,
                                                        repeat: Infinity,
                                                        times: [0, 0.25, 0.35, 0.45, 0.9, 1],
                                                    }}
                                                >
                                                    <rect x="0" y="100" width="120" height="35" rx="17.5" fill="#475569" />
                                                    <circle cx="100" cy="117.5" r="13" fill="white" />
                                                </motion.g>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>

                    {/* Text Content - Right Side */}
                    <div className="lg:w-1/2 z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 mb-6">
                            <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                            <span className="text-sm font-medium text-slate-700">Product</span>
                        </div>

                        <h2 className="text-[48px] leading-[1.1] font-medium tracking-tight text-[#0F172A] mb-6">
                            Revive and Optimize Sales Opportunities
                        </h2>

                        <p className="text-lg text-[#475569] leading-relaxed mb-8 max-w-lg">
                            Scans your CRM daily to uncover stale deals, analyze past interactions, and suggest the best next action to keep deals moving.
                        </p>

                        <button className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#1e293b] transition-colors group">
                            Learn More
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section >
    );
}
