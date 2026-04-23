import React from "react";
import { Truck, Sparkles, ShieldCheck } from "lucide-react";
import { pillars } from "../data/mock";

const iconMap = { Truck, Sparkles, ShieldCheck };

const About = () => {
  return (
    <section id="about" className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-20 left-0 right-0 pointer-events-none select-none overflow-hidden">
        <p
          className="text-center text-[120px] md:text-[200px] lg:text-[260px] font-light tracking-[0.15em] text-[#0b1c2c]/[0.04] whitespace-nowrap"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          BLANQO
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
              About Us
            </span>
            <span className="h-px w-10 bg-[#c9a96e]" />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-[#0b1c2c] mb-6 leading-[1.1]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Welcome to <span className="italic text-[#8a6f3e]">Blanqo</span>
          </h2>
          <p className="text-[#4a5568] text-lg md:text-xl leading-relaxed">
            India's fastest growing premium garment care service. Crafted for
            people who value their wardrobe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-8">
          {pillars.map((p) => {
            const Icon = iconMap[p.icon];
            return (
              <div
                key={p.id}
                className="group text-center px-6 py-10 border border-transparent hover:border-[#c9a96e]/30 hover:bg-[#f5f1ea]/50 transition-all duration-500"
              >
                <div className="mx-auto mb-7 w-20 h-20 rounded-full bg-[#f5f1ea] border border-[#c9a96e]/20 flex items-center justify-center group-hover:bg-[#c9a96e] transition-colors duration-500">
                  <Icon
                    className="w-9 h-9 text-[#8a6f3e] group-hover:text-white transition-colors duration-500"
                    strokeWidth={1.2}
                  />
                </div>
                <h3
                  className="text-2xl font-light text-[#0b1c2c] mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-[#4a5568] text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-16">
          <button className="text-[#0b1c2c] border-b border-[#0b1c2c]/40 hover:border-[#c9a96e] hover:text-[#8a6f3e] pb-1 tracking-[0.25em] text-xs uppercase font-medium transition-colors">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
