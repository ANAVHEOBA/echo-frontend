const stats = [
  {
    value: "20%",
    label: "Increase in deal velocity",
    description: "Close deals faster with AI-powered efficiency",
  },
  {
    value: "25%",
    label: "Reduction in admin time",
    description: "Eliminate manual tasks and streamline operations",
  },
  {
    value: "10+",
    label: "Hours saved weekly",
    description: "Save time with hands-free data entry",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[#f5f9fa]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium text-[#052233] font-geist mb-4">
            Real results from real teams
          </h2>
          <p className="text-lg text-[#1b2d33]/70 max-w-2xl mx-auto">
            See the impact Echo has on your sales operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative p-8 bg-white rounded-2xl shadow-sm border border-[#c6d8de]/30 text-center group hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl sm:text-6xl font-medium text-[#052233] font-general-sans mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-medium text-[#052233] mb-2 font-geist">
                {stat.label}
              </div>
              <p className="text-sm text-[#1b2d33]/60">{stat.description}</p>
              {/* Accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#51909e] rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
