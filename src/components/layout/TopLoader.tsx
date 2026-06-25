"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function TopLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  const startLoading = useCallback(() => {
    setProgress(0);
    setVisible(true);

    // Fast initial progress
    setTimeout(() => setProgress(30), 50);
    setTimeout(() => setProgress(60), 200);
    setTimeout(() => setProgress(80), 400);
  }, []);

  const completeLoading = useCallback(() => {
    setProgress(100);
    setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 300);
  }, []);

  useEffect(() => {
    // Intercept all link clicks for loading indication
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:")) return;

      // Only trigger for internal navigation
      if (href !== pathname) {
        startLoading();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname, startLoading]);

  // Complete on route change
  useEffect(() => {
    completeLoading();
  }, [pathname, searchParams, completeLoading]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2.5px]">
      <div
        className="h-full bg-gradient-to-r from-gold via-gold-light to-gold rounded-full shadow-[0_0_10px_rgba(200,169,81,0.6)]"
        style={{
          width: `${progress}%`,
          transition: progress === 0 ? "none" : "width 0.3s ease-out",
        }}
      />
    </div>
  );
}
