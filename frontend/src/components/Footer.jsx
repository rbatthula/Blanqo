import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react";
import LogoMark from "./LogoMark";

const Footer = () => {
  return (
    <footer className="bg-[#081523] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          <div className="lg:col-span-4">
            <h3 className="mb-6">
              <LogoMark imgClassName="h-9 md:h-10" />
            </h3>
            <p className="text-white/60 leading-relaxed max-w-sm mb-6">
              Premium garment care crafted with precision. Doorstep pickup,
              expert cleaning, and fabric-safe finishing.
            </p>
            <p className="text-white/40 text-xs tracking-wider mb-8">
              A brand by RASA DYAD ENTERPRISES LLP
            </p>
            <div className="flex items-center gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="w-10 h-10 border border-white/20 hover:border-[#c9a96e] hover:bg-[#c9a96e] rounded-full flex items-center justify-center text-white hover:text-[#0b1c2c] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="hover:text-[#c9a96e] transition-colors cursor-pointer">Dry Cleaning</li>
              <li className="hover:text-[#c9a96e] transition-colors cursor-pointer">Laundry</li>
              <li className="hover:text-[#c9a96e] transition-colors cursor-pointer">Wedding Couture</li>
              <li className="hover:text-[#c9a96e] transition-colors cursor-pointer">Shoes & Bags</li>
              <li className="hover:text-[#c9a96e] transition-colors cursor-pointer">Home & Fabrics</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="hover:text-[#c9a96e] transition-colors cursor-pointer">About</li>
              <li className="hover:text-[#c9a96e] transition-colors cursor-pointer">Stores</li>
              <li>
                <Link to="/faqs" className="hover:text-[#c9a96e] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#c9a96e] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#c9a96e] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-5">
              Get In Touch
            </h4>
            <div className="space-y-5 text-white/70 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#c9a96e] flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e] mb-1">
                    Outlet
                  </p>
                  <p className="leading-relaxed">
                    #205, SMR Vinay Iconia Plaza, Botanical Garden Road,
                    Kondapur, Sri Maruthi Nagar Colony, Gachibowli,
                    Serilingampalle (M), Hyderabad, Telangana – 500019
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#c9a96e] flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e] mb-1">
                    Regd. Office
                  </p>
                  <p className="leading-relaxed">
                    B Block, Flat 410, Maruthi Elite Gated Community
                    Apartments, Nizampet, Hyderabad – 500090
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c9a96e] flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:+917075551876" className="hover:text-[#c9a96e]">
                  +91 70755 51876
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c9a96e] flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:hello@blanqo.in" className="hover:text-[#c9a96e]">
                  hello@blanqo.in
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-[#c9a96e] flex-shrink-0" strokeWidth={1.5} />
                <span>Mon – Sat · 10:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p className="tracking-wider">
            © {new Date().getFullYear()} Blanqo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#c9a96e] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#c9a96e] transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/faqs" className="hover:text-[#c9a96e] transition-colors">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
