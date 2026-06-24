"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // 👇 ESTE ES EL FIX REAL
  useEffect(() => {
    if (!lenisRef.current) return;

    // espera a que el DOM pinte
    requestAnimationFrame(() => {
      lenisRef.current.scrollTo(0, {
        immediate: true,
      });
    });
  }, [pathname]);

  return <>{children}</>;
}