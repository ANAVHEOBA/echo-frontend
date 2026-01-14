'use client';

import { memo, useEffect, useRef, useState } from 'react';

// Types for better type safety
interface Stat {
    id: string;
    value: string;
    label: string;
    numericValue?: number;
}

// Extract icon to separate component for reusability
const StarIcon = memo(({ className = "w-4 h-4" }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path
            d="M10 2L12.5 7.5L18 8.5L14 12.5L15 18L10 15.5L5 18L6 12.5L2 8.5L7.5 7.5L10 2Z"
            fill="currentColor"
        />
    </svg>
));
StarIcon.displayName = 'StarIcon';

// Animated counter hook
function useCountUp(end: number, duration: number = 2000, shouldStart: boolean = false) {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        if (!shouldStart) return;
        
        let startTime: number;
        let animationFrame: number;
        
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            
            if (progress < duration) {
                setCount(Math.floor((progress / duration) * end));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };
        
        animationFrame = requestAnimationFrame(animate);
        
        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, duration, shouldStart]);
    
    return count;
}

// Intersection Observer hook for triggering animations
function useInView(options?: IntersectionObserverInit) {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
            }
        }, { threshold: 0.2, ...options });
        
        if (ref.current) {
            observer.observe(ref.current);
        }
        
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    
    return { ref, isInView };
}

// Extract StatCard for better composition with animation
const StatCard = memo(({ stat, index, isInView }: { stat: Stat; index: number; isInView: boolean }) => {
    const count = useCountUp(stat.numericValue || 0, 2000, isInView);
    
    const displayValue = stat.numericValue 
        ? `${count}${stat.value.includes('%') ? '%' : stat.value.includes('+') ? '+' : ''}`
        : stat.value;
    
    return (
        <div 
            className={`p-8 sm:p-10 lg:p-12 text-center flex flex-col items-center justify-center group transition-all duration-500 hover:bg-gradient-to-br hover:from-gray-50/50 hover:to-transparent ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
            role="group"
            aria-label={`${stat.value} ${stat.label}`}
        >
            <div 
                className="text-4xl sm:text-5xl lg:text-[56px] font-medium text-[#052233] mb-3 tracking-tight transition-all duration-300 group-hover:scale-110 group-hover:text-[#51909e]"
                aria-label={`${stat.value}`}
            >
                {displayValue}
            </div>
            <div className="text-[#59696e] text-sm font-medium leading-snug transition-colors duration-300 group-hover:text-[#052233]">
                {stat.label}
            </div>
        </div>
    );
});
StatCard.displayName = 'StatCard';

export default function BenefitsAnimated() {
    const { ref, isInView } = useInView();
    
    // Add unique IDs and numeric values for animation
    const stats: Stat[] = [
        {
            id: "revenue-recovered",
            value: "20%",
            label: "Revenue recovered",
            numericValue: 20,
        },
        {
            id: "shorter-cycle",
            value: "25%",
            label: "Shorter sales cycle",
            numericValue: 25,
        },
        {
            id: "hours-saved",
            value: "10+",
            label: "Hours saved per week per rep",
            numericValue: 10,
        },
    ];

    return (
        <section 
            className="bg-[#f7f9fb] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
            aria-labelledby="benefits-heading"
        >
            <div className="max-w-[1200px] mx-auto">
                {/* Section Header with fade-in animation */}
                <div 
                    className={`flex items-center justify-center gap-2 mb-4 sm:mb-6 transition-all duration-700 ${
                        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}
                >
                    <StarIcon className="w-4 h-4 text-[#052233] animate-pulse" />
                    <span className="text-xs sm:text-sm font-medium text-[#052233] uppercase tracking-wide">
                        Benefits
                    </span>
                </div>

                {/* Main Heading */}
                <h2 
                    id="benefits-heading"
                    className={`text-[#052233] text-3xl sm:text-4xl lg:text-[40px] font-semibold text-center mb-3 sm:mb-4 tracking-tight leading-tight transition-all duration-700 delay-100 ${
                        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}
                >
                    Real Results from Real Teams
                </h2>

                {/* Subheading */}
                <p 
                    className={`text-[#59696e] text-center text-sm sm:text-base mb-10 sm:mb-12 max-w-[600px] mx-auto leading-relaxed transition-all duration-700 delay-200 ${
                        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}
                >
                    See how Ergo helps businesses recover revenue, speed up sales cycles, and save valuable time.
                </p>

                {/* Statistics Container */}
                <div 
                    ref={ref}
                    className={`max-w-[1000px] mx-auto bg-white rounded-xl sm:rounded-2xl border border-[#e2e8f0] shadow-sm hover:shadow-xl transition-all duration-500 delay-300 overflow-hidden ${
                        isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                >
                    <div 
                        className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e2e8f0]"
                        role="list"
                        aria-label="Business impact statistics"
                    >
                        {stats.map((stat, index) => (
                            <div key={stat.id} role="listitem">
                                <StatCard stat={stat} index={index} isInView={isInView} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Optional: Add social proof with fade-in */}
                <div 
                    className={`text-center mt-8 sm:mt-10 transition-all duration-700 delay-500 ${
                        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                >
                    <p className="text-xs sm:text-sm text-[#59696e]/60">
                        Based on data from 100+ active customers
                    </p>
                </div>
            </div>
        </section>
    );
}
