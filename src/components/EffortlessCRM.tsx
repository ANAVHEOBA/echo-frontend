"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

interface AnimatedCard {
    id: number;
    column: 'new' | 'progress' | 'complete' | 'dropped';
}

export default function EffortlessCRM() {
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

    // Animation state
    const [cards, setCards] = useState<AnimatedCard[]>([]);
    const nextIdRef = useRef(1);
    const isInitialized = useRef(false);

    useEffect(() => {
        // Prevent double initialization in React Strict Mode
        if (isInitialized.current) return;
        isInitialized.current = true;

        const timers: NodeJS.Timeout[] = [];

        // Move card through columns
        const moveCard = (card: AnimatedCard) => {
            if (card.column === 'new') {
                const timer = setTimeout(() => {
                    setCards(prev => prev.map(c => c.id === card.id ? { ...c, column: 'progress' } : c));
                    moveCard({ ...card, column: 'progress' });
                }, 1200);
                timers.push(timer);
            } else if (card.column === 'progress') {
                const timer = setTimeout(() => {
                    setCards(prev => prev.map(c => c.id === card.id ? { ...c, column: 'complete' } : c));
                    moveCard({ ...card, column: 'complete' });
                }, 1200);
                timers.push(timer);
            } else if (card.column === 'complete') {
                const timer1 = setTimeout(() => {
                    setCards(prev => prev.map(c => c.id === card.id ? { ...c, column: 'dropped' } : c));
                    const timer2 = setTimeout(() => {
                        setCards(prev => prev.filter(c => c.id !== card.id));
                    }, 800);
                    timers.push(timer2);
                }, 1200);
                timers.push(timer1);
            }
        };

        // Create initial card
        const initialCard: AnimatedCard = { id: 0, column: 'new' };
        setCards([initialCard]);
        moveCard(initialCard);

        // Create new cards periodically
        const interval = setInterval(() => {
            const cardId = nextIdRef.current;
            nextIdRef.current += 1;
            const newCard: AnimatedCard = { id: cardId, column: 'new' };
            setCards(current => [...current, newCard]);
            moveCard(newCard);
        }, 4400);

        // Cleanup function
        return () => {
            clearInterval(interval);
            timers.forEach(timer => clearTimeout(timer));
        };
    }, []);

    return (
        <section ref={targetRef} className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div className="lg:w-1/2 z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 mb-6">
                            <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                            <span className="text-sm font-medium text-slate-700">Product</span>
                        </div>

                        <h2 className="text-3xl md:text-[48px] leading-[1.1] font-medium tracking-tight text-[#0F172A] mb-6">
                            Effortless CRM Automation
                        </h2>

                        <p className="text-lg text-[#475569] leading-relaxed mb-8 max-w-lg">
                            Seamlessly moves data through your CRM, eliminating manual entry and ensuring a smooth handoff between stages.
                        </p>

                        <button className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#1e293b] transition-colors group">
                            Learn More
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Board Area */}
                    <div className="lg:w-1/2 w-full h-[300px] sm:h-[400px] lg:h-[500px] relative flex items-center justify-center">
                        {/* Scaling wrapper for mobile */}
                        <div className="w-full h-full flex items-center justify-center scale-[0.5] sm:scale-75 md:scale-90 lg:scale-100 origin-center transition-transform duration-300">
                            <motion.div
                                style={{
                                    rotateX: smoothRotateX,
                                    rotateY: smoothRotateY,
                                    transformStyle: "preserve-3d",
                                }}
                                className="relative w-full max-w-[600px]"
                            >
                                {/* Kanban Board */}
                                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                                    {/* Columns */}
                                    <div className="grid grid-cols-3 gap-4 relative">

                                        {/* Column 1: New Deals */}
                                        <div className="flex flex-col gap-3 min-h-[300px]">
                                            <div className="text-sm font-semibold text-slate-700 mb-2 text-center">
                                                New Deals
                                            </div>
                                            {/* 2 Static cards */}
                                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-4 h-4 rounded bg-slate-300"></div>
                                                    <div className="h-2 w-20 bg-slate-200 rounded"></div>
                                                </div>
                                                <div className="h-2 w-full bg-slate-200 rounded mb-1.5"></div>
                                                <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
                                            </div>
                                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-4 h-4 rounded bg-slate-300"></div>
                                                    <div className="h-2 w-16 bg-slate-200 rounded"></div>
                                                </div>
                                                <div className="h-2 w-full bg-slate-200 rounded mb-1.5"></div>
                                                <div className="h-2 w-2/3 bg-slate-200 rounded"></div>
                                            </div>
                                        </div>

                                        {/* Column 2: In Progress */}
                                        <div className="flex flex-col gap-3 min-h-[300px]">
                                            <div className="text-sm font-semibold text-slate-700 mb-2 text-center">
                                                In Progress
                                            </div>
                                            {/* 2 Static cards */}
                                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-4 h-4 rounded bg-slate-300"></div>
                                                    <div className="h-2 w-20 bg-slate-200 rounded"></div>
                                                </div>
                                                <div className="h-2 w-full bg-slate-200 rounded mb-1.5"></div>
                                                <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
                                            </div>
                                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-4 h-4 rounded bg-slate-300"></div>
                                                    <div className="h-2 w-16 bg-slate-200 rounded"></div>
                                                </div>
                                                <div className="h-2 w-full bg-slate-200 rounded mb-1.5"></div>
                                                <div className="h-2 w-2/3 bg-slate-200 rounded"></div>
                                            </div>
                                        </div>

                                        {/* Column 3: Complete */}
                                        <div className="flex flex-col gap-3 min-h-[300px]">
                                            <div className="text-sm font-semibold text-slate-700 mb-2 text-center">
                                                Complete
                                            </div>
                                        </div>

                                        {/* Animated Card Layer - 3rd card that moves */}
                                        <AnimatePresence>
                                            {cards.map((card) => {
                                                // Calculate position based on column
                                                // Each column is 33.33% width + gap (1rem = 16px)
                                                let columnPosition = 0;
                                                let yPosition = 0;

                                                if (card.column === 'new') {
                                                    columnPosition = 0; // First column
                                                    yPosition = 108; // Position as 3rd card in New Deals
                                                } else if (card.column === 'progress') {
                                                    columnPosition = 1; // Second column
                                                    yPosition = 108; // Position as 3rd card in Progress
                                                } else if (card.column === 'complete') {
                                                    columnPosition = 2; // Third column
                                                    yPosition = 40; // Position as 1st card in Complete
                                                } else if (card.column === 'dropped') {
                                                    columnPosition = 2; // Stay in third column
                                                    yPosition = 500; // Drop down
                                                }

                                                return (
                                                    <motion.div
                                                        key={card.id}
                                                        className="absolute top-0 bg-green-50 p-3 rounded-lg border-2 border-green-500 shadow-xl z-20"
                                                        style={{
                                                            width: 'calc((100% - 2rem) / 3)', // Account for gaps
                                                            left: `calc(${columnPosition} * (100% / 3) + ${columnPosition} * 1rem)`,
                                                        }}
                                                        initial={{
                                                            y: 108,
                                                            opacity: 0,
                                                            scale: 0.9
                                                        }}
                                                        animate={{
                                                            y: yPosition,
                                                            opacity: card.column === 'dropped' ? 0 : 1,
                                                            scale: card.column === 'dropped' ? 0.8 : 1,
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            scale: 0.5
                                                        }}
                                                        transition={{
                                                            duration: 0.6,
                                                            ease: "easeInOut",
                                                            y: { duration: card.column === 'dropped' ? 0.7 : 0.6 }
                                                        }}
                                                    >
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <div className="w-4 h-4 rounded bg-green-300"></div>
                                                            <div className="h-2 w-20 bg-green-200 rounded"></div>
                                                        </div>
                                                        <div className="h-2 w-full bg-green-200 rounded mb-1.5"></div>
                                                        <div className="h-2 w-3/4 bg-green-200 rounded"></div>
                                                    </motion.div>
                                                );
                                            })}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
