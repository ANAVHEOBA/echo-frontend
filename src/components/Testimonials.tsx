import Image from "next/image";

const LOGOS = [
    { name: "Greptile", src: "/images/testimonials/logos/greptile.png", width: 120, height: 40, invert: false },
    { name: "Delve", src: "/images/testimonials/logos/delve.png", width: 100, height: 40, invert: false },
    { name: "Rho", src: "/images/testimonials/logos/rho.png", width: 60, height: 40, invert: false },
    { name: "Whop", src: "/images/testimonials/logos/whop.png", width: 100, height: 40, invert: true },
    { name: "Sully.ai", src: "/images/testimonials/logos/sully.png", width: 100, height: 40, invert: true },
    { name: "Agency", src: "/images/testimonials/logos/agency.svg", width: 100, height: 40, invert: false },
];

const TESTIMONIALS = [
    {
        name: "Daniel French",
        role: "Head of Sales, CloudNC",
        quote:
            "\"Ergo removed our sales admin work and keeps everything on track. Their support is top-notch. Huge improvement for us.\"",
        avatar: "/images/testimonials/daniel.png",
        className: "col-span-1 md:col-span-2 lg:col-span-1",
    },
    {
        name: "Karun Kaushik",
        role: "CEO, Delve",
        quote:
            "\"Ergo has saved us 30% of GTM hires while pushing the boundaries of growth. Imagine if you didn't touch the CRM. Best product of the year.\"",
        avatar: "/images/testimonials/karun.png",
        className: "col-span-1 md:col-span-2 lg:col-span-2",
    },
    {
        name: "Anthony Hwang",
        role: "Director of Revenue Operations, Rho",
        quote:
            "\"Ergo gave us true revenue automation and intelligence. Our data is finally consistent, our handoffs are seamless, and our GTM teams are fully aligned.\"",
        avatar: "/images/testimonials/anthony.jpeg",
        className: "col-span-1 md:col-span-2 lg:col-span-2",
    },
    {
        name: "Daksh Gupta",
        role: "CEO, Greptile",
        quote:
            "\"We use this at Greptile, it's really good! It auto-updates our CRM from meetings, recordings and emails.\"",
        avatar: "/images/testimonials/daksh.png",
        className: "col-span-1 md:col-span-2 lg:col-span-1",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-[#fafeff] py-20 px-4 md:px-8 flex flex-col items-center">
            {/* Logos Section */}
            <div className="w-full max-w-[1200px] flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                {LOGOS.map((logo) => (
                    <div key={logo.name} className="relative h-8 md:h-10 w-auto flex items-center justify-center">
                        <img
                            src={logo.src}
                            alt={logo.name}
                            className={`h-full w-auto object-contain max-w-[120px] ${logo.invert ? 'invert' : ''}`}
                        />
                    </div>
                ))}
            </div>

            {/* Header */}
            <h2 className="text-[#052233] text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight leading-[1.2]">
                Trusted by Fast Growing Teams
            </h2>

            {/* Grid */}
            <div className="w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TESTIMONIALS.map((t, idx) => (
                    <div
                        key={idx}
                        className={`bg-white rounded-2xl p-8 border border-[#c8dce3]/50 shadow-[0px_4px_24px_rgba(29,31,19,0.04)] hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between gap-8 h-full ${t.className}`}
                    >
                        <div className="text-[#1b2d33] text-lg md:text-xl font-medium leading-relaxed tracking-tight">
                            {t.quote}
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                                <Image
                                    src={t.avatar}
                                    alt={t.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#052233] font-semibold text-[15px]">{t.name}</span>
                                <span className="text-[#59696e] text-[13px] font-medium">{t.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
