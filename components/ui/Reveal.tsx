"use client";

import { useReveal } from "@/hooks/useReveal";
import type { ReactNode, ElementType } from "react";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
}

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  style,
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      style={style}
      className={`transition-all duration-500 ease-brand motion-reduce:transition-none ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
