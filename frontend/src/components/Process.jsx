import React from "react";
import { Search, Droplets, Wind, PackageCheck } from "lucide-react";
import { processSteps } from "../data/mock";

const iconMap = { Search, Droplets, Wind, PackageCheck };

const Process = () => {
  return (
    <section id="process" className="bg-[#f5f1ea] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">
              Our Process
            </span>
            <span className="h-px w-10 bg-[#c9a96e]" />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-[#0b1c2c] leading-[1.1] mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Excellence in <span className="italic text-[#8a6f3e]">Every Detail</span>
          </h2>
          <p className="text-[#4a5568] text-base md:text-lg leading-relaxed">
            State-of-the-art equipment and eco-friendly processes for
            superior, fabric-safe results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {processSteps.map((step, idx) => {
            const Icon = iconMap[step.icon];
            return (
              <div
                key={step.step}
                className="group relative bg-white p-8 md:p-10 hover:shadow-[0_25px_60px_-20px_rgba(11,28,44,0.25)] transition-all duration-500"
              >
                <span
                  className="absolute top-6 right-8 text-[72px] leading-none font-light text-[#0b1c2c]/[0.06] select-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {step.step}
                </span>
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-[#f5f1ea] border border-[#c9a96e]/30 flex items-center justify-center mb-6 group-hover:bg-[#c9a96e] transition-colors duration-500">
                    <Icon
                      className="w-6 h-6 text-[#8a6f3e] group-hover:text-white transition-colors duration-500"
                      strokeWidth={1.2}
                    />
                  </div>
                  <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-2">
                    Step {step.step}
                  </p>
                  <h3
                    className="text-2xl font-light text-[#0b1c2c] mb-4 leading-snug"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#4a5568] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
