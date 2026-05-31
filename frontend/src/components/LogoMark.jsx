import React, { useState } from "react";
import { cn } from "../lib/utils";

/** Logo file: frontend/public/logo.svg */
export const LOGO_SRC = "/logo.svg";

const textFallbackClass =
  "text-2xl md:text-3xl tracking-[0.25em] text-white font-light";

const LogoMark = ({ className, imgClassName, textClassName }) => {
  const [useFallback, setUseFallback] = useState(false);

  if (useFallback) {
    return (
      <span
        className={cn(textFallbackClass, textClassName)}
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        BLANQO
      </span>
    );
  }

  return (
    <img
      src={LOGO_SRC}
      alt="BLANQO"
      className={cn("h-7 md:h-8 w-auto block", imgClassName, className)}
      onError={() => setUseFallback(true)}
    />
  );
};

export default LogoMark;
