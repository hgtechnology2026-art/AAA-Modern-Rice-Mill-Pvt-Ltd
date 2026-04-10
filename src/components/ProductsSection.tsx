import { useEffect, useRef } from "react";

import leafLarge from "@/assets/leaf-large.webp";
import leaf from "@/assets/leaf-bottom.webp";
import leafSmall from "@/assets/leaf-small.webp";
import riceBag from "@/assets/our product 2.webp";
import riceConveyor from "@/assets/our product 1.webp";
import fra from "@/assets/icon/Frame 7.png";
import fra2 from "@/assets/icon/Frame 7 (1).png";
import fra1 from "@/assets/icon/Frame 7 (2).png";
import frabg from "@/assets/our product bg.webp";
import check from "@/assets/icon/Group 4.png";
import Reveal from "@/components/Reveal";

const cardClass =
  "rounded-[22px] border border-[#8e877c] p-7 shadow-[0_10px_30px_rgba(120,108,86,0.05)]";

const CheckRow = ({ text }: { text: string }) => (
  <div className="flex items-center gap-[10px]">
    <img
      src={check}
      alt=""
      className="mt-[2px] h-[18px] w-[18px] object-contain"
    />
    <p className="font-body text-[16px] leading-[28px] text-[#5f5a53]">
      {text}
    </p>
  </div>
);

const ProductsSection = () => {
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

      targetX = Math.max(-2.5, Math.min(2.5, delta * 0.1));
      targetY = Math.max(-4.5, Math.min(4.5, delta * -0.16));
      targetRotate = Math.max(-2, Math.min(2, delta * 0.045));

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
      id="products"
     className="relative overflow-hidden px-4 pt-8 pb-0 sm:px-6 md:px-8 md:pt-12 md:pb-0 lg:px-10 lg:pt-12 lg:pb-0"
      style={{
        backgroundImage: `url(${frabg}), radial-gradient(177.7% 336.8% at -5.38% -27.94%, #F3FFF0 11.88%, #FFFFFF 43.05%, #F3FFF0 97.72%)`,
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <Reveal
        className="relative mx-auto hidden h-[820px] w-full max-w-[1441px] overflow-hidden xl:block"
      >
      <img
        src={leafSmall}
        alt=""
        className="leaf-swing pointer-events-none absolute object-contain"
        style={{
          width: "115px",
          height: "107px",
          top: "-13px",
          left: "871px",
          ["--leaf-rotate" as string]: "-46.67deg",
          ["--leaf-duration" as string]: "6.4s",
          ["--leaf-delay" as string]: "-1.3s",
          ["--leaf-shift-x" as string]: "4px",
          ["--leaf-shift-y" as string]: "-6px",
        }}
      />
      <img
        src={leaf}
        alt=""
        className="leaf-swing pointer-events-none absolute object-contain"
        style={{
          width: "91px",
          height: "98px",
          top: "80px",
          left: "1320px",
          ["--leaf-duration" as string]: "5.7s",
          ["--leaf-delay" as string]: "-2.4s",
          ["--leaf-shift-x" as string]: "-3px",
          ["--leaf-shift-y" as string]: "-5px",
        }}
      />
      <img
        src={leafLarge}
        alt=""
        className="leaf-swing pointer-events-none absolute object-contain"
        style={{
          width: "78px",
          height: "83px",
          top: "670px",
          left: "381px",
          ["--leaf-duration" as string]: "5.5s",
          ["--leaf-delay" as string]: "-0.7s",
          ["--leaf-shift-x" as string]: "3px",
          ["--leaf-shift-y" as string]: "-4px",
        }}
      />
      <img
        src={leaf}
        alt=""
        className="leaf-swing pointer-events-none absolute object-contain"
        style={{
          width: "43px",
          height: "46px",
          top: "750px",
          left: "953px",
          ["--leaf-duration" as string]: "5.1s",
          ["--leaf-delay" as string]: "-1.8s",
          ["--leaf-shift-x" as string]: "2px",
          ["--leaf-shift-y" as string]: "-3px",
        }}
      />

      <img
        src={riceConveyor}
        alt="Rice processing conveyor"
        loading="lazy"
        className="pointer-events-none absolute z-20 object-contain"
        style={{
          width: "419px",
          height: "348px",
          top: "490px",
          left: "-19px",
        }}
      />
      <img
        src={riceBag}
        alt="Rice bag with paddy"
        loading="lazy"
        className="pointer-events-none absolute z-20 object-contain"
        style={{
          width: "370px",
          height: "371px",
          top: "450px",
          right: "19px",
        }}
      />

      <div
        className="relative z-10 h-[720px] w-[1400px] "
        style={{ top: "2px", left: "2px" }}
      >
        <div className="grid h-[136px] grid-cols-[0.9fr_600px] items-end gap-[76px] ml-[0px]">
          <Reveal direction="left" className="h-[150px] pb-[25px]">
            <p className="mb-3 font-body text-[18px] font-semibold text-[#6f855f]">
              Our Products & Services
            </p>
            <h2 className="font-heading text-[46px] font-bold leading-[30px] sm:leading-[36px] md:leading-[44px] lg:leading-[54px] text-[#25231f]">
              Premium <span className="font-heading text-[#d2a23f]">Quality Rice Products </span>
         
              For Global Markets
            </h2>
          </Reveal>

          <Reveal delay={120} direction="right" className="w-[700px] pb-[40px] font-body text-[16px] leading-[1.9] text-[#625d56]">
            We offer a comprehensive range of rice varieties and trade services, backed by rigorous
            <br />
            quality control and international certifications to meet the demands of global buyers.
          </Reveal>
        </div>

        <div className="mt-[36px] grid h-[560px] grid-cols-[450px_450px_450px] items-start gap-[36px]">
          <Reveal delay={120} className="pt-[8px]">
            <div className={`${cardClass} min-h-[356px]`}>
              <div className="mb-5">
                <img src={fra} alt="" className="h-[40px] w-[40px] object-contain" />
              </div>
              <h3 className="mb-3 font-body text-[20px] font-bold text-[#25231f]">
                Premium Rice Varieties
              </h3>
              <p className="font-body mb-5 text-[16px] leading-[1.8] text-[#5f5a53]">
                High-quality basmati, non-basmati and specialty rice varieties, processed and graded
                to meet exacting international standards.
              </p>
              <div className="space-y-2">
                <CheckRow text="Basmati Rice" />
                <CheckRow text="Non-Basmati Rice" />
                <CheckRow text="Parboiled Rice" />
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col items-center pt-[82px]">
            <Reveal delay={220}>
              <a
              href="#contact"
              className="btn-gold-gradient inline-flex h-[56px] w-[196px] items-center justify-center rounded-[6px] px-6 py-3 text-[14px] font-bold text-[#2b2419] shadow-[0_10px_20px_rgba(255,196,88,0.18)]"
            >
              Contact Us
              </a>
            </Reveal>

            <Reveal delay={300} className={`${cardClass} mt-[90px] w-full min-h-[356px]`}>
              <div className="mb-5">
                <img src={fra1} alt="" className="h-[40px] w-[40px] object-contain" />
              </div>
              <h3 className="mb-3 font-body text-[20px] font-bold text-[#25231f]">
                Export Services
              </h3>
              <p className="font-body mb-5 text-[16px] leading-[1.8] text-[#5f5a53]">
                Comprehensive export solutions with full logistics support, customs documentation and
                flexible packaging tailored to importer requirements.
              </p>
              <div className="space-y-2">
                <CheckRow text="International Shipping" />
                <CheckRow text="Quality Certification" />
                <CheckRow text="Custom Packaging" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className={`${cardClass} min-h-[356px]`}>
              <div className="mb-5">
                <img src={fra2} alt="" className="h-[40px] w-[40px] object-contain" />
              </div>
              <h3 className="mb-3 max-w-[320px] font-body text-[20px] font-bold leading-[1.24] text-[#25231f]">
                Import & Export Agriculture & General trading
              </h3>
              <p className="font-body mb-5 text-[16px] leading-[1.8] text-[#5f5a53]">
                Full-service agricultural commodity trading, including bulk import facilitation and
                supply chain management for rice and allied products.
              </p>
              <div className="space-y-2">
                <CheckRow text="Bulk Trading" />
                <CheckRow text="Import Services" />
                <CheckRow text="Supply Chain" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      </Reveal>

      <Reveal className="relative z-10 mx-auto max-w-[1300px] xl:hidden">
      <img
        src={leafSmall}
        alt=""
        className="leaf-float leaf-swing right-[33.2%] top-[-1.2%] w-[58px] object-contain opacity-95 md:w-[66px]"
        style={{ ["--leaf-rotate" as string]: "-10deg", ["--leaf-duration" as string]: "6.3s", ["--leaf-delay" as string]: "-0.9s", ["--leaf-shift-x" as string]: "3px", ["--leaf-shift-y" as string]: "-4px" }}
      />
      <img
        src={leafLarge}
        alt=""
        className="leaf-float leaf-swing right-[-0.3%] top-[-1.6%] w-[92px] object-contain opacity-95 md:w-[108px]"
        style={{ ["--leaf-rotate" as string]: "14deg", ["--leaf-duration" as string]: "5.8s", ["--leaf-delay" as string]: "-1.7s", ["--leaf-shift-x" as string]: "-3px", ["--leaf-shift-y" as string]: "-5px" }}
      />
      <img
        src={leafSmall}
        alt=""
        className="leaf-float leaf-swing bottom-[6.6%] left-[27.2%] w-[36px] object-contain opacity-95"
        style={{ ["--leaf-rotate" as string]: "28deg", ["--leaf-duration" as string]: "5.2s", ["--leaf-delay" as string]: "-2.3s", ["--leaf-shift-x" as string]: "2px", ["--leaf-shift-y" as string]: "-3px" }}
      />
      <img
        src={leafSmall}
        alt=""
        className="leaf-float leaf-swing bottom-[5.8%] right-[20.2%] w-[40px] object-contain opacity-95"
        style={{ ["--leaf-rotate" as string]: "-22deg", ["--leaf-duration" as string]: "5.9s", ["--leaf-delay" as string]: "-1.2s", ["--leaf-shift-x" as string]: "-2px", ["--leaf-shift-y" as string]: "-3px" }}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-[18%] hidden h-[120px] bg-[radial-gradient(circle_at_center,rgba(166,166,166,0.15),transparent_62%)] opacity-60 md:block" />

      <div
        className="rounded-[28px] px-4 py-8 md:px-6 md:py-9"
      >
        <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <Reveal direction="left" className="max-w-[620px]">
            <p className="mb-3 font-body text-[12px] font-semibold text-[#6f855f]">Our Products & Services</p>
            <h2 className="font-heading text-[2.2rem] font-bold leading-[1.06] text-[#25231f] md:text-[46px]">
              Premium <span className="font-heading text-[#d2a23f]">Quality Rice Products</span>
              <br />
               For Global Markets
            </h2>
          </Reveal>
          <Reveal delay={120} direction="right" className="max-w-[620px] pt-3 font-body text-[16px] leading-[1.9] text-[#625d56] md:justify-self-end md:pt-10">
            We offer a comprehensive range of rice varieties and trade services, backed by rigorous
            quality control and international certifications to meet the demands of global buyers.
          </Reveal>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[1fr_0.86fr_1fr] md:items-start lg:gap-8">
          <Reveal delay={120} className="flex flex-col gap-0">
            <div className={`${cardClass} relative z-10 max-w-[406px] max-h-[356px]`}>
              <div className="mb-5">
                <img src={fra} alt="" className="h-[40px] w-[40px] object-contain" />
              </div>
              <h3 className="mb-3 font-heading text-[1.05rem] font-bold text-[#25231f] md:text-[1.1rem]">
                Premium Rice Varieties
              </h3>
              <p className="font-body mb-5 text-[13px] leading-[1.8] text-[#5f5a53]">
                High-quality basmati, non-basmati and specialty rice varieties, processed and graded
                to meet exacting international standards.
              </p>
              <div className="space-y-2">
                <CheckRow text="Basmati Rice" />
                <CheckRow text="Non-Basmati Rice" />
                <CheckRow text="Parboiled Rice" />
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col items-center gap-4 md:pt-[36px] lg:pt-[46px]">
            <Reveal delay={300} className={`${cardClass} w-full max-w-[416px] md:mt-[64px] max-h-[356px]`}>
              <div className="mb-5">
                <img src={fra1} alt="" className="h-[40px] w-[40px] object-contain" />
              </div>
              <h3 className="mb-3 font-heading text-[1.05rem] font-bold text-[#25231f] md:text-[1.1rem]">
                Export Services
              </h3>
              <p className="font-body mb-5 text-[13px] leading-[1.8] text-[#5f5a53]">
                Comprehensive export solutions with full logistics support, customs documentation and
                flexible packaging tailored to importer requirements.
              </p>
               <div className="space-y-2">
                <CheckRow text="International Shipping" />
                <CheckRow text="Quality Certification" />
                <CheckRow text="Custom Packaging" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="flex flex-col gap-0">
            <div className={`${cardClass} relative z-10 max-w-[406px] max-h-[356px]`}>
              <div className="mb-5">
                <img src={fra2} alt="" className="h-[40px] w-[40px] object-contain" />
              </div>
              <h3 className="mb-3 max-w-[320px] font-heading text-[1.05rem] font-bold leading-[1.24] text-[#25231f] md:text-[1.1rem]">
                Import & Export Agriculture & General trading
              </h3>
              <p className="font-body mb-5 text-[13px] leading-[1.8] text-[#5f5a53]">
                Full-service agricultural commodity trading, including bulk import facilitation and
                supply chain management for rice and allied products.
              </p>
              <div className="space-y-2">
                <CheckRow text="Bulk Trading" />
                <CheckRow text="Import Services" />
                <CheckRow text="Supply Chain" />
              </div>
            </div>

            <div className="relative -mt-[74px] flex justify-end pr-4 md:-mt-[92px] md:pr-5 lg:-mt-[108px] lg:pr-6">
              <img
                src={riceBag}
                alt="Rice bag with paddy"
                loading="lazy"
                className="relative z-20 h-auto w-full max-w-[315px] object-contain md:max-w-[350px]"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={340} className="mt-8 flex justify-center">
          <a
            href="#contact"
            className="btn-gold-gradient inline-flex h-[56px] w-[196px] items-center justify-center rounded-[6px] px-6 py-3 text-[14px] font-bold text-[#2b2419] shadow-[0_10px_20px_rgba(255,196,88,0.18)]"
          >
            Contact Us
          </a>
        </Reveal>
      </div>
      </Reveal>
    </section>
  );
};

export default ProductsSection;
