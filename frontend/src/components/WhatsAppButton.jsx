import React, { useEffect, useState } from "react";
import { SITE_CONFIG, buildWhatsAppUrl } from "../config/site";

const WhatsAppIcon = ({ className = "w-7 h-7" }) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.55-.515 2.937-1.318.13-.27.146-.534.13-.86-.07-.205-.144-.27-.36-.387-.288-.143-1.46-.717-1.69-.717zM16.32 26.27a10.13 10.13 0 0 1-5.165-1.418l-3.612.946.964-3.526a10.16 10.16 0 0 1-1.547-5.39c0-5.612 4.567-10.18 10.18-10.18 5.614 0 10.18 4.568 10.18 10.18s-4.567 10.18-10.18 10.18zm0-22.45C9.59 3.82 4.115 9.296 4.115 16.025c0 2.052.51 4.06 1.481 5.842L2.36 28.96l7.215-1.886a12.21 12.21 0 0 0 5.74 1.43h.005c6.728 0 12.205-5.476 12.205-12.205 0-3.262-1.27-6.327-3.575-8.632-2.306-2.306-5.372-3.575-8.63-3.575z" />
  </svg>
);

const WhatsAppButton = () => {
  const { phone, defaultMessage, tooltip, badge } = SITE_CONFIG.whatsapp;
  const [mounted, setMounted] = useState(false);
  const [showBadge, setShowBadge] = useState(true);

  useEffect(() => {
    // Delay reveal for entry animation
    const t = setTimeout(() => setMounted(true), 800);
    // Auto-hide badge after 8s but keep button
    const b = setTimeout(() => setShowBadge(false), 8000);
    return () => {
      clearTimeout(t);
      clearTimeout(b);
    };
  }, []);

  const handleClick = () => {
    // Analytics tracking
    try {
      if (typeof window !== "undefined") {
        // GA / GTM dataLayer push
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "whatsapp_contact_click",
          phone,
          source: window.location.pathname,
          timestamp: new Date().toISOString(),
        });
        // Also dispatch a custom event for any listener
        window.dispatchEvent(
          new CustomEvent("whatsapp_contact_click", {
            detail: { phone, source: window.location.pathname },
          })
        );
      }
    } catch (e) {
      // Silent fail on analytics; do not block primary action
    }
  };

  const href = buildWhatsAppUrl(phone, defaultMessage);

  return (
    <div
      className={`fixed z-[60] bottom-5 right-5 md:bottom-7 md:right-7 transition-all duration-700 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="relative flex items-center justify-end group">
        {/* Tooltip (desktop, on hover) */}
        <span
          className="hidden md:block absolute right-[72px] top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#0b1c2c] text-white text-xs tracking-[0.15em] uppercase px-4 py-2.5 rounded-sm shadow-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none"
          role="tooltip"
        >
          {tooltip}
          <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#0b1c2c] rotate-45" />
        </span>

        {/* Notification badge */}
        {showBadge && (
          <button
            type="button"
            onClick={() => setShowBadge(false)}
            className="hidden sm:flex absolute right-[68px] top-1/2 -translate-y-1/2 items-center gap-2 bg-white border border-[#25D366]/30 shadow-[0_10px_30px_-10px_rgba(11,28,44,0.35)] px-4 py-2 rounded-full text-[#0b1c2c] text-xs font-medium animate-fade-in hover:shadow-xl transition-shadow"
            aria-label="Dismiss chat prompt"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            {badge}
          </button>
        )}

        {/* Main floating button */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          aria-label={tooltip}
          className="relative inline-flex items-center justify-center w-[60px] h-[60px] md:w-[64px] md:h-[64px] rounded-full bg-[#25D366] text-white shadow-[0_15px_35px_-8px_rgba(37,211,102,0.55)] hover:bg-[#1ebe5d] hover:scale-105 active:scale-95 transition-all duration-300 group/btn"
        >
          {/* Pulsing rings */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping-slow pointer-events-none" />
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping-slower pointer-events-none" />

          <WhatsAppIcon className="relative w-7 h-7 md:w-8 md:h-8" />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;
