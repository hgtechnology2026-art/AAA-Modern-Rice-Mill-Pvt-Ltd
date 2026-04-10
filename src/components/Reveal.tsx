import { useEffect, useRef, useState, type CSSProperties, type ReactNode, type RefObject } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  once?: boolean;
  style?: CSSProperties;
  as?: "div" | "li";
};

const directionClassMap = {
  up: "reveal-up",
  left: "reveal-left",
  right: "reveal-right",
} as const;

const Reveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = false,
  style,
  as = "div",
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const revealClassName = `reveal-base ${directionClassMap[direction]} ${isVisible ? "reveal-visible" : ""} ${className}`.trim();
  const revealStyle = { transitionDelay: `${delay}ms`, ...style };

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once]);

  if (as === "li") {
    return (
      <li
        ref={ref as RefObject<HTMLLIElement>}
        className={revealClassName}
        style={revealStyle}
      >
        {children}
      </li>
    );
  }

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={revealClassName}
      style={revealStyle}
    >
      {children}
    </div>
  );
};

export default Reveal;
