"use client";

import { useEffect, useRef } from "react";

export default function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.remove("opacity-0", "translate-y-10");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
  }, [delay]);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-10 transition-all duration-700"
    >
      {children}
    </div>
  );
}
