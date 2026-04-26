import React from "react";
import { Quote } from "lucide-react";
import { testimonials } from "../data/mock";

const Testimonials = () => {
  return (
    <section id="reviews" className="bg-[#0b1c2c] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
                Testimonials
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              What Our <span className="italic text-[#c9a96e]">Customers</span> Say
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
              Garment care for important people, by people who care.
            </p>
            <div className="inline-flex items-center gap-4 border-t border-b border-white/15 py-4 px-1">
              <div>
                <p
                  className="text-3xl font-light text-white"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  4.9
                </p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/50 mt-1">
                  Avg. Rating
                </p>
              </div>
              <div className="h-10 w-px bg-white/15" />
              <div>
                <p
                  className="text-3xl font-light text-white"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  500+
                </p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/50 mt-1">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="relative bg-[#132b42] p-8 md:p-10 border border-white/5 hover:border-[#c9a96e]/30 transition-colors duration-500"
              >
                <Quote
                  className="absolute top-6 right-6 w-10 h-10 text-[#c9a96e]/20"
                  strokeWidth={1}
                />
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 relative">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-6 border-t border-white/10">
                  <p
                    className="text-white text-xl font-light"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-[#c9a96e] text-xs tracking-[0.25em] uppercase mt-1">
                    {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
