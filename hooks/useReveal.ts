"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reemplaza el IntersectionObserver global de code.js.
 * Cada componente que necesite el efecto "reveal" (fade + slide al entrar
 * en viewport) usa este hook en vez de depender de una clase .reveal
 * aplicada desde un script que corre sobre todo el documento.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
