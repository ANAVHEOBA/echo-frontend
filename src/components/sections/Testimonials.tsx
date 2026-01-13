"use client";

import Image from "next/image";

const testimonials = [
  {
    quote:
      "Ergo removed our sales admin work and keeps everything on track. Their support is top-notch. Huge improvement for us.",
    author: "Daniel French",
    role: "Head of Sales, CloudNC",
    image: "/images/gTu3A6h8raO4xbpNEarwV2K5r8.png",
  },
  {
    quote:
      "Ergo has saved us 30% of GTM hires while pushing the boundaries of growth. Imagine if you didn't touch the CRM. Best product of the year.",
    author: "Karun Kaushik",
    role: "CEO, Delve",
    image: "/images/BMsFFSUSVEsQuugOmm374Gv3c.png",
  },
  {
    quote:
      "Ergo gave us true revenue automation and intelligence. Our data is finally consistent, our handoffs are seamless, and our GTM teams are fully aligned.",
    author: "Anthony Hwang",
    role: "Director of Revenue Operations, Rho",
    image: "/images/m7CcsGZTgCHn1xc4h0hS7P5agA.png",
  },
  {
    quote:
      "We use this at Greptile, it's really good! It auto-updates our CRM from meetings, recordings and emails.",
    author: "Daksh Gupta",
    role: "CEO, Greptile",
    image: "/images/QBEvDA0nf1GwkZVHb5F9uxAs.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium text-[#052233] font-geist mb-4">
            Loved by sales teams everywhere
          </h2>
          <p className="text-lg text-[#1b2d33]/70 max-w-2xl mx-auto">
            See what our customers have to say about Echo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-[#fafeff] rounded-2xl border border-[#c6d8de]/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-6xl text-[#c6d8de]/30 font-serif leading-none">
                &ldquo;
              </div>

              <blockquote className="relative z-10">
                <p className="text-lg text-[#1b2d33] font-geist leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#c6d8de]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-[#052233]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[#1b2d33]/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
