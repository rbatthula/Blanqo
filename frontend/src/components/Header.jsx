import React, { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import LogoMark from "./LogoMark";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Stores", href: "#cities" },
  { label: "Reviews", href: "#reviews" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: href } });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goHome = () => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#0b1c2c]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <button
          onClick={goHome}
          className="flex items-center gap-2 group"
          aria-label="Go to Home"
        >
          <LogoMark />
        </button>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-sm tracking-[0.15em] uppercase text-white/80 hover:text-[#c9a96e] transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+917075551876"
            className="flex items-center gap-2 text-white/80 hover:text-[#c9a96e] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm tracking-wider">+91 70755 51876</span>
          </a>
          <Button
            onClick={() => scrollTo("#booking")}
            className="bg-[#c9a96e] hover:bg-[#b8985d] text-[#0b1c2c] rounded-none px-6 py-5 tracking-[0.2em] text-xs uppercase font-medium"
          >
            Book Pickup
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0b1c2c] border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-left text-sm tracking-[0.15em] uppercase text-white/80 hover:text-[#c9a96e] py-2"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollTo("#booking")}
              className="bg-[#c9a96e] hover:bg-[#b8985d] text-[#0b1c2c] rounded-none mt-2 tracking-[0.2em] text-xs uppercase"
            >
              Book Pickup
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
