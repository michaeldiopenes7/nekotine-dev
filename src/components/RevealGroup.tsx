"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type Props = {
  children: ReactNode;
  /** CSS selector (within this group) for the staggered items */
  selector?: string;
  className?: string;
  id?: string;
  /** stagger between items, seconds */
  stagger?: number;
  /** per-item tween duration, seconds */
  duration?: number;
  as?: "section" | "div" | "footer";
};

/**
 * GSAP ScrollTrigger reveal. Animates `selector` children up + fade as the
 * group scrolls into view. Replaces the old IntersectionObserver pattern.
 */
export default function RevealGroup({
  children,
  selector = ".reveal-item",
  className = "",
  id,
  stagger = 0.12,
  duration = 0.85,
  as: Tag = "section",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = root.querySelectorAll<HTMLElement>(selector);
    if (!items.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const tween = gsap.fromTo(
        items,
        { opacity: 0, y: 34 },
        {
          opacity: 1,
          y: 0,
          duration,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: root,
            start: "top 82%",
            once: true,
          },
        }
      );
      // safety: if anything goes wrong / fast scroll, never leave items hidden
      ScrollTrigger.refresh();
      void tween;
    }, root);

    return () => {
      // revert the GSAP context, then guarantee items are left visible
      ctx.revert();
      gsap.set(items, { clearProps: "opacity,transform" });
    };
  }, [selector, stagger, duration]);

  return (
    <Tag ref={ref as never} className={className} id={id}>
      {children}
    </Tag>
  );
}
