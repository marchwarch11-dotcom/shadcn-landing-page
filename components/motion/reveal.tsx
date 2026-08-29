"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
}

export const Reveal = ({ className, delay = 0, children, ...props }: RevealProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    const node = ref.current;
    if (!node) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12%", threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const hidden = mounted && !visible;

  return (
    <div
      ref={ref}
      className={cn(
        "motion-reveal transform-gpu transition-[opacity,transform] duration-700 ease-out",
        hidden ? "translate-y-5 opacity-0" : "translate-y-0 opacity-100",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
};
