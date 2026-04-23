import React, { useEffect, useState } from "react";
import { heroSlides } from "../data/mock";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[680px] w-full overflow-hidden bg-[#0b1c2c]"
    >
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
            active === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: active === idx ? "scale(1.08)" : "scale(1)",
              transition: "transform 7s ease-out",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1c2c]/70 via-[#0b1c2c]/50 to-[#0b1c2c]/85" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#c9a96e]" />
              <span
                className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Premium Garment Care
              </span>
            </div>
            <h1
              className="text-white text-5xl md:text-7xl lg:text-[82px] leading-[1.05] font-light mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Premium garment care.
              <br />
              <span className="italic text-[#c9a96e]">
                Doorstep
              </span>{" "}
              pickup & delivery.
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Dry cleaning, restoration, wedding wear, sneakers & bags —
              handled with expert care by specialists who understand fabric.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <button
                onClick={scrollToBooking}
                className="group inline-flex items-center gap-3 bg-[#c9a96e] hover:bg-[#b8985d] text-[#0b1c2c] px-8 py-4 tracking-[0.2em] text-xs uppercase font-medium transition-colors"
              >
                Book a Pickup
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-white border-b border-white/40 hover:border-[#c9a96e] hover:text-[#c9a96e] pb-1 tracking-[0.2em] text-xs uppercase font-medium transition-colors"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`h-[2px] transition-all duration-500 ${
              active === idx ? "w-12 bg-[#c9a96e]" : "w-6 bg-white/40"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
