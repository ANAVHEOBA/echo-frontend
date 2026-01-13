"use client";

const items = [
  "Close deals faster with AI-powered efficiency",
  "Eliminate manual tasks and streamline operations",
  "Save time with hands-free data entry",
  "Boost efficiency with automated CRM updates",
  "Track sales performance with real-time analytics",
  "Automate workflows and reduce operational costs",
];

export default function Marquee() {
  return (
    <section className="py-4 bg-[#052233] overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center mx-8 text-white/80 text-sm font-medium"
          >
            <span className="w-2 h-2 bg-[#51909e] rounded-full mr-4" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
