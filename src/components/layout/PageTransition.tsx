"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Trigger loading state on route change
    setIsLoading(true);
    
    // Show spinner for 1 second
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      window.scrollTo({ top: 0 });
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Always keep children in sync if NOT loading
  useEffect(() => {
    if (!isLoading) {
      setDisplayChildren(children);
    }
  }, [children, isLoading]);

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 rounded-full border-[3px] border-gold/20 border-t-gold animate-spin shadow-[0_0_15px_rgba(200,169,81,0.2)]" />
      </div>
    );
  }

  return (
    <div className="transition-opacity duration-500 animate-in fade-in">
      {displayChildren}
    </div>
  );
}
