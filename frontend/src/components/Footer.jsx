import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#081523] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          <div className="lg:col-span-4">
            <h3
              className="text-3xl md:text-4xl tracking-[0.25em] font-light mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              BLANQO
            </h3>
            <p className="text-white/60 leading-relaxed max-w-sm mb-8">
              Premium garment care crafted with precision. Doorstep pickup,
              expert cleaning, and fabric-safe finishing across India.
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
              <li className="hover:text-[#c9a96e] transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-[#c9a96e] transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-[#c9a96e] transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-5">
              Get In Touch
            </h4>
            <div className="space-y-4 text-white/70 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#c9a96e]" strokeWidth={1.5} />
                <span>Flagship Store — Bandra West, Mumbai, Maharashtra 400050</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c9a96e]" strokeWidth={1.5} />
                <a href="tel:+919000343483" className="hover:text-[#c9a96e]">
                  +91 90003 43483
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c9a96e]" strokeWidth={1.5} />
                <a href="mailto:care@blanqo.in" className="hover:text-[#c9a96e]">
                  care@blanqo.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p className="tracking-wider">
            © {new Date().getFullYear()} Blanqo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#c9a96e] transition-colors">
              Privacy Policy
            </a>
            <Link to="/terms" className="hover:text-[#c9a96e] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
