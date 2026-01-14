import { memo } from 'react';

// Types for better type safety
interface Stat {
    id: string;
    value: string;
    label: string;
    description?: string;
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

// Extract StatCard for better composition
const StatCard = memo(({ stat, index }: { stat: Stat; index: number }) => (
    <div 
        className="p-8 sm:p-10 lg:p-12 text-center flex flex-col items-center justify-center group transition-all duration-300 hover:bg-gray-50/50"
        role="group"
        aria-label={`${stat.value} ${stat.label}`}
    >
        <div 
            className="text-4xl sm:text-5xl lg:text-[56px] font-medium text-[#052233] mb-3 tracking-tight transition-transform duration-300 group-hover:scale-110"
            aria-label={`${stat.value}`}
        >
            {stat.value}
        </div>
        <div className="text-[#59696e] text-sm font-medium leading-snug">
            {stat.label}
        </div>
        {stat.description && (
            <p className="text-xs text-[#59696e]/70 mt-2 max-w-[200px]">
                {stat.description}
            </p>
        )}
    </div>
));
StatCard.displayName = 'StatCard';

export default function BenefitsOptimized() {
    // Add unique IDs for better key management
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
            className="bg-[#f7f9fb] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
            aria-labelledby="benefits-heading"
        >
            <div className="max-w-[1200px] mx-auto">
                {/* Section Header */}
                <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
                    <StarIcon className="w-4 h-4 text-[#052233]" />
                    <span className="text-xs sm:text-sm font-medium text-[#052233] uppercase tracking-wide">
                        Benefits
                    </span>
                </div>

                {/* Main Heading */}
                <h2 
                    id="benefits-heading"
                    className="text-[#052233] text-3xl sm:text-4xl lg:text-[40px] font-semibold text-center mb-3 sm:mb-4 tracking-tight leading-tight"
                >
                    Real Results from Real Teams
                </h2>

                {/* Subheading */}
                <p className="text-[#59696e] text-center text-sm sm:text-base mb-10 sm:mb-12 max-w-[600px] mx-auto leading-relaxed">
                    See how Ergo helps businesses recover revenue, speed up sales cycles, and save valuable time.
                </p>

                {/* Statistics Container */}
                <div className="max-w-[1000px] mx-auto bg-white rounded-xl sm:rounded-2xl border border-[#e2e8f0] shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div 
                        className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e2e8f0]"
                        role="list"
                        aria-label="Business impact statistics"
                    >
                        {stats.map((stat, index) => (
                            <div key={stat.id} role="listitem">
                                <StatCard stat={stat} index={index} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Optional: Add social proof or CTA */}
                <div className="text-center mt-8 sm:mt-10">
                    <p className="text-xs sm:text-sm text-[#59696e]/60">
                        Based on data from 100+ active customers
                    </p>
                </div>
            </div>
        </section>
    );
}
