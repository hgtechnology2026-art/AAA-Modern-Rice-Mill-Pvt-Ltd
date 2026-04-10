import { useEffect, useRef } from "react";

import heroImg from "@/assets/Hero section.webp";
import leafSmall from "@/assets/leaf-small.webp";
import leafLarge from "@/assets/leaf-large.webp";
import leafBottom from "@/assets/leaf-bottom.webp";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return;
    }

    let currentX = 0;
    let currentY = 0;
    let currentRotate = 0;
    let targetX = 0;
    let targetY = 0;
    let targetRotate = 0;
    let lastScrollY = window.scrollY;
    let frameId = 0;

    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      currentRotate += (targetRotate - currentRotate) * 0.12;

      element.style.setProperty("--scroll-shift-x", `${currentX.toFixed(2)}px`);
      element.style.setProperty("--scroll-shift-y", `${currentY.toFixed(2)}px`);
      element.style.setProperty("--scroll-rotate", `${currentRotate.toFixed(2)}deg`);

      targetX *= 0.9;
      targetY *= 0.9;
      targetRotate *= 0.88;

      if (Math.abs(currentX) > 0.01 || Math.abs(currentY) > 0.01 || Math.abs(currentRotate) > 0.01 || Math.abs(targetX) > 0.01 || Math.abs(targetY) > 0.01 || Math.abs(targetRotate) > 0.01) {
        frameId = window.requestAnimationFrame(animate);
      } else {
        frameId = 0;
      }
    };

    const handleScroll = () => {
      const nextScrollY = window.scrollY;
      const delta = nextScrollY - lastScrollY;
      lastScrollY = nextScrollY;

      targetX = Math.max(-3, Math.min(3, delta * 0.12));
      targetY = Math.max(-5, Math.min(5, delta * -0.18));
      targetRotate = Math.max(-2.4, Math.min(2.4, delta * 0.05));

      if (!frameId) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[540px] overflow-hidden bg-[length:145%_auto] bg-no-repeat bg-[center_100%] sm:min-h-[640px] sm:bg-[length:118%_auto] sm:bg-[center_76%] md:min-h-[1042px] md:bg-[length:contain] md:bg-bottom"
      style={{
        backgroundImage: `url(${heroImg}), radial-gradient(177.7% 336.8% at -5.38% -27.94%, #F3FFF0 11.88%, #FFFFFF 43.05%, #F3FFF0 97.72%)`,
        backgroundColor: "#ffffff",
      }}
    >
      <div className="pointer-events-none absolute inset-0 z-[5] hidden md:block">
        <div className="relative mx-auto h-full w-full max-w-[1441px]">
          <img
            src={leafLarge}
            alt=""
            className="leaf-swing absolute object-contain"
            style={{ top: "38px", left: "0px", width: "116px", height: "107px", ["--leaf-duration" as string]: "6.2s", ["--leaf-delay" as string]: "-0.8s", ["--leaf-shift-x" as string]: "3px", ["--leaf-shift-y" as string]: "-5px" }}
          />
          <img
            src={leafBottom}
            alt=""
            className="leaf-swing absolute object-contain"
            style={{ top: "247px", left: "155px", width: "69px", height: "74px", ["--leaf-duration" as string]: "5.4s", ["--leaf-delay" as string]: "-1.1s", ["--leaf-shift-x" as string]: "2px", ["--leaf-shift-y" as string]: "-4px" }}
          />
          <img
            src={leafSmall}
            alt=""
            className="leaf-swing absolute object-contain"
            style={{ top: "359px", left: "1334px", width: "150px", height: "180px", ["--leaf-duration" as string]: "6.8s", ["--leaf-delay" as string]: "-1.6s", ["--leaf-shift-x" as string]: "-4px", ["--leaf-shift-y" as string]: "-6px" }}
          />
          <img
            src={leafLarge}
            alt=""
            className="leaf-swing absolute object-contain"
            style={{ top: "48px", right: "0px", width: "150px", height: "180px", ["--leaf-duration" as string]: "5.9s", ["--leaf-delay" as string]: "-2.2s", ["--leaf-shift-x" as string]: "-3px", ["--leaf-shift-y" as string]: "-5px" }}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[5] md:hidden">
        <img src={leafSmall} alt="" className="leaf-swing absolute left-[-10px] top-[88px] w-[54px] object-contain opacity-95" style={{ ["--leaf-duration" as string]: "6.1s", ["--leaf-shift-x" as string]: "2px", ["--leaf-shift-y" as string]: "-4px" }} />
        <img src={leafBottom} alt="" className="leaf-swing absolute left-[10px] top-[162px] w-[32px] object-contain opacity-95" style={{ ["--leaf-duration" as string]: "5.2s", ["--leaf-delay" as string]: "-1s", ["--leaf-shift-x" as string]: "2px", ["--leaf-shift-y" as string]: "-3px" }} />
        <img src={leafLarge} alt="" className="leaf-swing absolute right-[-8px] top-[92px] w-[58px] object-contain opacity-95" style={{ ["--leaf-duration" as string]: "6.6s", ["--leaf-delay" as string]: "-1.4s", ["--leaf-shift-x" as string]: "-3px", ["--leaf-shift-y" as string]: "-4px" }} />
        <img src={leafLarge} alt="" className="leaf-swing absolute right-[4px] top-[46px] w-[40px] object-contain opacity-95" style={{ ["--leaf-duration" as string]: "5.6s", ["--leaf-delay" as string]: "-2.1s", ["--leaf-shift-x" as string]: "-2px", ["--leaf-shift-y" as string]: "-3px" }} />
      </div>

      <div className="relative z-[10] mx-auto max-w-[1441px] px-4 pt-6 text-center sm:px-6 sm:pt-8 md:px-8 lg:px-10 lg:pt-14">
        <h1
          className="font-heading font-bold leading-[1.1] tracking-[-0.02em]"
          style={{ fontSize: "clamp(1.9rem, 4.8vw, 4rem)" }}
        >
          <span className="block text-[#d29a35]">We Exports Premium quality Rice</span>
          <span className="block text-[#2b2925]">to the global standards</span>
        </h1>

        <p className="font-body mx-auto mt-4 max-w-[600px] text-[15px] leading-[1.8] text-[#6f685b] sm:text-[16px] md:max-w-[850px]">
          Your Trusted Partner for Premium Rice Products with over 28Years of Excellence in International Trade & Rice Manufacturing.
        </p>

        <a
          href="#products"
          className="btn-gold-gradients mt-4 inline-flex w-[196px] items-center justify-center rounded-md border border-[#deb56e] bg-[#fff5e2] px-8 pb-4 pt-3 text-[14px] font-semibold text-[#2b2419] transition hover:bg-[#ffedd0] md:text-[15px]"
        >
          View Products
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
