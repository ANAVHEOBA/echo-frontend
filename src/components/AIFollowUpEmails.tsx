"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function AIFollowUpEmails() {
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
        <section ref={targetRef} className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content - Left Side */}
                    <div className="lg:w-1/2 z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 mb-6">
                            <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                            <span className="text-sm font-medium text-slate-700">Product</span>
                        </div>

                        <h2 className="text-[48px] leading-[1.1] font-medium tracking-tight text-[#0F172A] mb-6">
                            AI-Powered Follow-Up Emails
                        </h2>

                        <p className="text-lg text-[#475569] leading-relaxed mb-8 max-w-lg">
                            Automatically drafts personalized follow-up emails after every sales call, integrating key insights from past conversations directly into your inbox.
                        </p>

                        <button className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#1e293b] transition-colors group">
                            Learn More
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Email Interface - Right Side */}
                    <div className="lg:w-1/2 w-full h-[500px] relative flex items-center justify-center">
                        <motion.div
                            style={{
                                rotateX: smoothRotateX,
                                rotateY: smoothRotateY,
                                transformStyle: "preserve-3d",
                            }}
                            className="relative w-full max-w-[650px]"
                        >
                            {/* Email Container */}
                            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                                <div className="grid grid-cols-5">
                                    
                                    {/* Email List - Left Panel (2 columns) */}
                                    <div className="col-span-2 border-r border-slate-200 bg-slate-50">
                                        {/* Header */}
                                        <div className="p-4 border-b border-slate-200">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs font-medium text-slate-500">To:</span>
                                            </div>
                                            <div className="text-sm font-semibold text-slate-700 mb-1">Breezy Medical Follow-up</div>
                                            <div className="text-xs text-slate-500">3 Messages</div>
                                        </div>

                                        {/* Email List Items */}
                                        <div className="divide-y divide-slate-200">
                                            {/* Email 1 */}
                                            <motion.div 
                                                className="p-4 hover:bg-white transition-colors cursor-pointer bg-white"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                            >
                                                <div className="flex items-start gap-3">
                                                    <motion.div 
                                                        className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0"
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ duration: 0.3, delay: 0.4 }}
                                                    >
                                                        <span className="text-xs font-semibold text-blue-600">YD</span>
                                                    </motion.div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="text-sm font-medium text-slate-700 mb-0.5">Yasin Dulla</div>
                                                        <div className="text-xs text-slate-500 mb-1">to: Ilshan Sherh</div>
                                                        <div className="text-xs text-slate-400">Feb 20, 2025</div>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            {/* Email 2 */}
                                            <motion.div 
                                                className="p-4 hover:bg-white transition-colors cursor-pointer"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: 0.5 }}
                                            >
                                                <div className="flex items-start gap-3">
                                                    <motion.div 
                                                        className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0"
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ duration: 0.3, delay: 0.7 }}
                                                    >
                                                        <span className="text-xs font-semibold text-green-600">IS</span>
                                                    </motion.div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="text-sm font-medium text-slate-700 mb-0.5">Ilshan Sherh</div>
                                                        <div className="text-xs text-slate-500 mb-1">to: Yasin Dulla</div>
                                                        <div className="text-xs text-slate-400">Feb 18, 2025</div>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            {/* Email 3 */}
                                            <motion.div 
                                                className="p-4 hover:bg-white transition-colors cursor-pointer"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: 0.8 }}
                                            >
                                                <div className="flex items-start gap-3">
                                                    <motion.div 
                                                        className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0"
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ duration: 0.3, delay: 1.0 }}
                                                    >
                                                        <span className="text-xs font-semibold text-purple-600">YD</span>
                                                    </motion.div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="text-sm font-medium text-slate-700 mb-0.5">Yasin Dulla</div>
                                                        <div className="text-xs text-slate-500 mb-1">to: Ilshan Sherh</div>
                                                        <div className="text-xs text-slate-400">Feb 17, 2025</div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Email Preview - Right Panel (3 columns) */}
                                    <div className="col-span-3 bg-white p-6">
                                        {/* Email Header */}
                                        <motion.div 
                                            className="mb-6"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                        >
                                            <motion.div 
                                                className="flex items-center justify-between mb-4"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.5 }}
                                            >
                                                <div className="text-xs text-slate-500">
                                                    yasin@company.com, ilshan@company.com
                                                </div>
                                            </motion.div>
                                            <motion.h3 
                                                className="text-base font-semibold text-slate-800 mb-2"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: 0.6 }}
                                            >
                                                Breezy Medical Follow-Up
                                            </motion.h3>
                                            <motion.div 
                                                className="flex items-center gap-2 text-sm text-slate-600"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: 0.7 }}
                                            >
                                                <span className="font-medium">Hi Ilshan,</span>
                                            </motion.div>
                                        </motion.div>

                                        {/* Email Body */}
                                        <div className="text-sm text-slate-600 leading-relaxed space-y-3">
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.9 }}
                                            >
                                                I hope this finds you well. Just wanted to follow up from our last chat. As you continue with your fundraising, remember that Ergo can help streamline your CRM processes and automate follow-ups, saving valuable time.
                                            </motion.p>
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 1.1 }}
                                            >
                                                We're here to support you with timely updates and seamless integration options.
                                            </motion.p>
                                            <motion.p 
                                                className="mt-4"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 1.3 }}
                                            >
                                                Looking forward to reconnecting post-fundraising.
                                            </motion.p>
                                            <motion.p 
                                                className="mt-4"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 1.5 }}
                                            >
                                                Best,<br />
                                                Yasin
                                            </motion.p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
