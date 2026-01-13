import Button from "../ui/Button";

const highlights = [
  "Constant Access to Founders",
  "White Glove Onboarding",
  "Personalized Support",
];

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#052233] to-[#0a3347] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#51909e]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c6d8de]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white font-geist mb-6">
          Ready to make your CRM autonomous?
        </h2>
        <p className="text-lg sm:text-xl text-[#c6d8de] max-w-2xl mx-auto mb-8">
          Join leading companies that trust Echo to automate their CRM and boost
          their sales efficiency.
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full"
            >
              <svg
                className="w-4 h-4 text-[#51909e]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm text-white">{highlight}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            href="/demo"
            className="bg-white text-[#052233] hover:bg-[#f5f9fa]"
          >
            Book a Demo
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="/signup"
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
          >
            Get Started Free
          </Button>
        </div>
      </div>
    </section>
  );
}
