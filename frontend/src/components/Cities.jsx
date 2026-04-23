import React from "react";
import { MapPin } from "lucide-react";
import { cities } from "../data/mock";

const Cities = () => {
  const marquee = [...cities, ...cities, ...cities];

  return (
    <section id="cities" className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
              Our Stores
            </span>
            <span className="h-px w-10 bg-[#c9a96e]" />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-[#0b1c2c] leading-[1.1] mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Serving You <span className="italic text-[#8a6f3e]">Across India</span>
          </h2>
          <p className="text-[#4a5568] text-base md:text-lg leading-relaxed">
            Find Blanqo in 9 major cities and growing.
          </p>
        </div>
      </div>

      <div className="relative mb-14">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex gap-12 md:gap-20 animate-marquee whitespace-nowrap py-6">
          {marquee.map((c, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-[#0b1c2c]"
            >
              <MapPin className="w-5 h-5 text-[#c9a96e]" strokeWidth={1.5} />
              <span
                className="text-3xl md:text-4xl font-light tracking-wide"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button className="text-[#0b1c2c] border-b border-[#0b1c2c]/40 hover:border-[#c9a96e] hover:text-[#8a6f3e] pb-1 tracking-[0.25em] text-xs uppercase font-medium transition-colors">
          View All Stores
        </button>
      </div>
    </section>
  );
};

export default Cities;
