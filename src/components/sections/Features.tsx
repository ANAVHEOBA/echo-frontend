import Image from "next/image";
import Button from "../ui/Button";

const features = [
  {
    title: "Automatic CRM Updates",
    description:
      "Every customer interaction automatically syncs to your CRM. Meetings, emails, and calls are captured and logged without any manual effort.",
    image: "/images/O1I3Qq1Zk3ZxBojWLKx6hSJTWcc.png",
    badge: "Product",
  },
  {
    title: "Pipeline Visibility",
    description:
      "Get real-time pipeline visibility without chasing your team for updates. Every customer interaction automatically syncs to your CRM.",
    image: "/images/ZblLMDLL0nyFYvL0MhFhxbWtQjY.png",
    badge: "Benefits",
  },
  {
    title: "Seamless Handoffs",
    description:
      "Enable smooth handoffs between sales, onboarding, and customer success teams with detailed, up-to-date context in your CRM.",
    image: "/images/rO8BpdylFnBGDvblB0PLEqSteTY.png",
    badge: "Product",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-[#052233]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium text-white font-geist mb-4">
            Everything you need to automate your CRM
          </h2>
          <p className="text-lg text-[#c6d8de] max-w-2xl mx-auto">
            Powerful features that eliminate manual data entry and keep your CRM
            always up-to-date
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-12`}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block px-3 py-1 text-xs font-medium text-[#052233] bg-[#c6d8de] rounded-full mb-4">
                  {feature.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium text-white font-general-sans mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-[#c6d8de] leading-relaxed mb-6">
                  {feature.description}
                </p>
                <Button
                  variant="outline"
                  size="md"
                  href="/features"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                >
                  Learn More
                </Button>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
