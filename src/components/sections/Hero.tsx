"use client";

import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#fafeff] to-[#f0f7f9]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#51909e]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c6d8de]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Y Combinator Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[#c6d8de]/30 mb-8">
          <span className="w-6 h-6 bg-[#FF6600] rounded text-white text-sm font-bold flex items-center justify-center">
            Y
          </span>
          <span className="text-sm text-[#052233] font-medium">
            Backed by Y Combinator
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#052233] leading-tight max-w-5xl mx-auto mb-6">
          Make your existing CRM{" "}
          <span className="text-[#51909e]">autonomous</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-[#1b2d33]/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Reap the benefits of a well-kept CRM without the headache of managing
          one. Let AI handle your CRM updates automatically.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button variant="primary" size="lg" href="/demo">
            Book a Demo
          </Button>
          <Button variant="outline" size="lg" href="/signup">
            Sign Up Free
          </Button>
        </div>

        {/* Hero Image/Dashboard Preview */}
        <div className="relative mx-auto max-w-5xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#c6d8de]/30 bg-white">
            <Image
              src="/images/9PxNOXg7fy7Ps4yaGadmvG3KQnM.png"
              alt="Echo Dashboard Preview"
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Floating elements */}
          <div className="hidden md:block absolute -top-4 -left-8 p-4 bg-white rounded-xl shadow-lg border border-[#c6d8de]/30 animate-float">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-600"
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
              </div>
              <div>
                <p className="text-sm font-medium text-[#052233]">CRM Updated</p>
                <p className="text-xs text-[#1b2d33]/60">Just now</p>
              </div>
            </div>
          </div>

          <div
            className="hidden md:block absolute -bottom-4 -right-8 p-4 bg-white rounded-xl shadow-lg border border-[#c6d8de]/30 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-[#052233]">Meeting Notes</p>
                <p className="text-xs text-[#1b2d33]/60">Auto-synced</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
