import React from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/mock";

const Services = () => {
  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-[#0b1c2c] py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
                What We Do
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our <span className="italic text-[#c9a96e]">Services</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-base leading-relaxed">
            A full spectrum of specialist care — from everyday garments to
            couture, shoes, bags, and home textiles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, idx) => (
            <article
              key={s.id}
              className="group relative overflow-hidden bg-[#132b42] cursor-pointer"
              onClick={scrollToBooking}
            >
              <div className="relative h-[440px] md:h-[500px] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c2c] via-[#0b1c2c]/40 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-3">
                  0{idx + 1} — Service
                </span>
                <h3
                  className="text-3xl md:text-4xl font-light text-white mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-white/75 text-sm md:text-base leading-relaxed mb-6 max-w-lg line-clamp-3">
                  {s.description}
                </p>
                <div className="flex items-center gap-3 text-white group-hover:text-[#c9a96e] transition-colors">
                  <span className="text-xs tracking-[0.25em] uppercase font-medium">
                    Book Now
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p
            className="text-white/40 text-sm md:text-base tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Excellence &nbsp; in &nbsp; Every &nbsp; Detail
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
