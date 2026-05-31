import React from "react";
import { MapPin, Sparkles } from "lucide-react";

const Cities = () => {
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
            Now Serving <span className="italic text-[#8a6f3e]">Kondapur</span>
          </h2>
          <p className="text-[#4a5568] text-base md:text-lg leading-relaxed">
            Our flagship store is now open. More stores coming soon.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative bg-[#f5f1ea] border border-[#c9a96e]/25 p-10 md:p-14 text-center group hover:border-[#c9a96e] transition-colors duration-500">
            <div className="absolute top-6 right-6 flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#8a6f3e] bg-white px-3 py-1.5 border border-[#c9a96e]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse" />
              Now Open
            </div>

            <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-white border border-[#c9a96e]/30 flex items-center justify-center group-hover:bg-[#c9a96e] transition-colors duration-500">
              <MapPin
                className="w-7 h-7 text-[#8a6f3e] group-hover:text-white transition-colors duration-500"
                strokeWidth={1.4}
              />
            </div>

            <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-3">
              Flagship Store
            </p>
            <a
              href="https://maps.app.goo.gl/bFozQAKpf627TXjGA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group/link"
            >
              <h3
                className="text-4xl md:text-5xl font-light text-[#0b1c2c] mb-3 group-hover/link:text-[#8a6f3e] transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Kondapur
              </h3>
            </a>
            <p className="text-[#4a5568] text-sm md:text-base leading-relaxed max-w-md mx-auto">
              Visit our boutique garment care studio in Kondapur — where every
              piece is treated with precision and care.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 text-[#0b1c2c]">
              <Sparkles className="w-4 h-4 text-[#c9a96e]" strokeWidth={1.5} />
              <span className="text-xs tracking-[0.3em] uppercase">
                More stores coming soon
              </span>
              <Sparkles className="w-4 h-4 text-[#c9a96e]" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cities;
