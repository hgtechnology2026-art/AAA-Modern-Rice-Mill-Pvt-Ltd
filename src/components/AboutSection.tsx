import { useState } from "react";
import riceField from "@/assets/about section.webp";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const tabs = [
  {
    title: "Established Heritage",
    icon: "up",
    content:
      "Founded in 1996, we have built a reputation for excellence in rice manufacturing and trading across global markets.",
  },
  {
    title: "Quality Commitment",
    icon: "down",
    content:
      "Advanced Buhler Sortex Z+ machinery ensures consistent grain purity, rigorous quality checks and international compliance for every shipment.",
  },
  {
    title: "Export Excellence",
    icon: "down",
    content:
      "Reliable global delivery of premium Indian rice to the Middle East, Asia and Africa with flexible packaging options.",
  },
];

const contentClasses = [
  "lg:rounded-tr-[22px] lg:rounded-br-[22px] lg:rounded-bl-[22px] lg:rounded-tl-none",
  "lg:rounded-[22px]",
  "lg:rounded-tl-[22px] lg:rounded-bl-[22px] lg:rounded-br-[22px] lg:rounded-tr-none",
];

const shellConfig = {
  width: "223px",
  height: "94px",
  buttonOffset: "8px",
  bridgeTop: "60px",
  bridgeSize: "34px",
};

const shellClasses = [
  "rounded-t-[24px] rounded-bl-none",
  "rounded-t-[24px]",
  "rounded-t-[24px] rounded-br-none",
];

const buttonWrapClasses = [
  "px-[8px] pt-[8px] pb-[18px]",
  "px-[8px] pt-[8px] pb-[18px]",
  "px-[8px] pt-[8px] pb-[18px]",
];

const shellWidths = [shellConfig.width, shellConfig.width, shellConfig.width];
const shellLefts = ["0px", "0px", "0px"];

const AboutSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      id="about"
      className="px-4 py-10 sm:px-6 md:px-12 md:py-16"
      style={{ backgroundColor: "#F6F6F6" }}
    >
      <div className="mx-auto max-w-[1441px]">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:w-[1740px] lg:grid-cols-2 lg:gap-14">
          <Reveal direction="left">
            <div>
            <p className="font-body mb-2 text-[15px] font-semibold text-[#7a8c5e] sm:mb-3 sm:text-[18px]">
              About Our Company
            </p>

            <h2 className="font-heading text-[24px] font-bold leading-[30px] sm:leading-[36px] md:leading-[44px] lg:leading-[54px] text-[#2b2925] sm:text-[32px] md:text-[40px] lg:text-[46px]">
              A Legacy Of{" "}
              <span className="font-heading text-[#d4a43a]">
                Quality, Innovation <br /> And Trust
              </span>{" "}
              In The Rice Industry
            </h2>

            <p className="font-body mt-3 max-w-[650px] text-[14px] text-justify leading-[1.75] text-[#4a4a4a] sm:mt-4 sm:text-[16px] sm:leading-[1.9]">
              Founded in 1996 in Vikravandi, Villupuram District, Tamil Nadu,
              A.A.A Modern Rice Mill Pvt Ltd has built a reputation for
              excellence in rice manufacturing and trading across global
              markets. As a second-generation family business, we combine
              decades of traditional expertise with modern technology to deliver
              rice products that meet international quality standards.
            </p>
            <p className="font-body mt-3 max-w-[650px] text-[14px] text-justify leading-[1.75] text-[#4a4a4a] sm:text-[16px] sm:leading-[1.9]">
              Our state-of-the-art facility is equipped with Buhler Sortex Z+
              series machinery, ensuring consistent grain quality, purity and
              reliability for every shipment we deliver to our global clients.
            </p>

            <div className="mt-6 max-w-full lg:max-w-[840px]">
              <div className="space-y-3 lg:hidden">
                {tabs.map((tab, index) => {
                  const isActive = active === index;

                  return (
                    <div
                      key={tab.title}
                      className="w-full max-w-[400px] rounded-[18px] border border-[#e6e8ef] bg-white px-5 py-4 shadow-[0_10px_24px_rgba(130,113,79,0.08)]"
                    >
                      <button
                        type="button"
                        onClick={() => setActive(index)}
                        className="flex w-full items-start justify-between gap-4 text-left"
                      >
                        <span className="font-body text-[15px] font-semibold leading-[1.35] text-[#25231f]">
                          {tab.title}
                        </span>

                        <span
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5efe3] text-[#b68a2a]"
                          style={{
                            transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.25s ease",
                          }}
                        >
                          {tab.icon === "up" ? (
                            <ArrowUpRight size={15} />
                          ) : (
                            <ArrowDownLeft size={15} />
                          )}
                        </span>
                      </button>

                      {isActive ? (
                        <div className="pt-4">
                          <p className="font-body animate-fade text-left text-[14px] leading-[1.75] text-[#7a7468]">
                            {tab.content}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>

              <div className="hidden grid-cols-1 justify-items-center gap-3 sm:gap-4 lg:grid lg:grid-cols-3 lg:justify-items-start lg:gap-1">
                {tabs.map((tab, index) => {
                  const isActive = active === index;

                  return (
                    <div
                      key={tab.title}
                      className={`relative w-[223px] ${isActive ? "z-10" : "z-20"}`}
                    >
                      <div className="relative h-[76px] sm:h-[88px] lg:h-[100px]">
                      {isActive ? (
                        <>
                          <div
                            aria-hidden="true"
                            className={`absolute left-0 top-0 z-0 hidden bg-white lg:block ${shellClasses[index]} ${buttonWrapClasses[index]}`}
                            style={{
                              width: shellWidths[index],
                              height: shellConfig.height,
                              left: shellLefts[index],
                            }}
                          />

                          {index === 0 ? (
                            <>
                              <div
                                aria-hidden="true"
                                className="absolute right-[-34px] z-0 hidden bg-white lg:block"
                                style={{
                                  top: shellConfig.bridgeTop,
                                  width: shellConfig.bridgeSize,
                                  height: shellConfig.bridgeSize,
                                }}
                              />
                              <div
                                aria-hidden="true"
                                className="absolute right-[-34px] z-0 hidden rounded-bl-[22px] lg:block"
                                style={{
                                  top: shellConfig.bridgeTop,
                                  width: shellConfig.bridgeSize,
                                  height: shellConfig.bridgeSize,
                                  backgroundColor: "#F6F6F6",
                                }}
                              />
                            </>
                          ) : null}

                          {index === 1 ? (
                            <>
                              <div
                                aria-hidden="true"
                                className="absolute left-[-34px] z-0 hidden bg-white lg:block"
                                style={{
                                  top: shellConfig.bridgeTop,
                                  width: shellConfig.bridgeSize,
                                  height: shellConfig.bridgeSize,
                                }}
                              />
                              <div
                                aria-hidden="true"
                                className="absolute left-[-34px] z-0 hidden rounded-br-[22px] lg:block"
                                style={{
                                  top: shellConfig.bridgeTop,
                                  width: shellConfig.bridgeSize,
                                  height: shellConfig.bridgeSize,
                                  backgroundColor: "#F6F6F6",
                                }}
                              />
                              <div
                                aria-hidden="true"
                                className="absolute right-[-34px] z-0 hidden bg-white lg:block"
                                style={{
                                  top: shellConfig.bridgeTop,
                                  width: shellConfig.bridgeSize,
                                  height: shellConfig.bridgeSize,
                                }}
                              />
                              <div
                                aria-hidden="true"
                                className="absolute right-[-34px] z-0 hidden rounded-bl-[22px] lg:block"
                                style={{
                                  top: shellConfig.bridgeTop,
                                  width: shellConfig.bridgeSize,
                                  height: shellConfig.bridgeSize,
                                  backgroundColor: "#F6F6F6",
                                }}
                              />
                            </>
                          ) : null}

                          {index === 2 ? (
                            <>
                              <div
                                aria-hidden="true"
                                className="absolute left-[-34px] z-0 hidden bg-white lg:block"
                                style={{
                                  top: shellConfig.bridgeTop,
                                  width: shellConfig.bridgeSize,
                                  height: shellConfig.bridgeSize,
                                }}
                              />
                              <div
                                aria-hidden="true"
                                className="absolute left-[-34px] z-0 hidden rounded-br-[22px] lg:block"
                                style={{
                                  top: shellConfig.bridgeTop,
                                  width: shellConfig.bridgeSize,
                                  height: shellConfig.bridgeSize,
                                  backgroundColor: "#F6F6F6",
                                }}
                              />
                            </>
                          ) : null}
                        </>
                      ) : null}

                      <button
                        type="button"
                        onClick={() => setActive(index)}
                        className={`absolute left-[8px] top-[8px] z-20 flex h-[54px] w-[207px] items-center justify-between rounded-[10px] px-3 py-2 text-left outline-none transition-[background-color,color] duration-300 focus:outline-none focus-visible:outline-none focus-visible:ring-0 sm:h-[62px] sm:rounded-[12px] sm:px-4 sm:py-3 lg:h-[68px] lg:w-[207px] lg:rounded-[12px] lg:pt-[16px] lg:pr-[26px] lg:pb-[16px] lg:pl-[36px] ${
                          isActive
                            ? "btn-gold-gradient text-[#2b2419]"
                            : "btn-gold-gradients border border-[#e8dfc8] text-[#b68a2a]"
                        }`}
                      >
                        <span className="pr-2 text-[11px] font-medium leading-[1.2] sm:pr-3 sm:text-[12px] lg:text-[14px]">
                          {tab.title}
                        </span>

                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full sm:h-7 sm:w-7 lg:h-8 lg:w-8 ${
                            isActive
                              ? "bg-white text-black"
                              : "bg-[#f5efe3] text-[#b68a2a]"
                          }`}
                        >
                          {tab.icon === "up" ? (
                            <ArrowUpRight size={14} />
                          ) : (
                            <ArrowDownLeft size={14} />
                          )}
                        </span>
                      </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className={`hidden max-w-full rounded-[18px] bg-white px-4 py-4 shadow-[0_10px_24px_rgba(130,113,79,0.08)] transition-[border-radius] duration-300 sm:rounded-[22px] sm:px-7 sm:py-6 lg:mt-[-6px] lg:block lg:max-w-[787px] ${contentClasses[active]}`}
              >
                <p className="font-body animate-fade text-[14px] leading-[1.7] text-[#7a7468] sm:text-[16px] sm:leading-[1.8]">
                  {tabs[active].content}
                </p>
              </div>
            </div>
            </div>
          </Reveal>

          <Reveal delay={120} direction="right" className="overflow-hidden rounded-[6px]">
            <img
              src={riceField}
              alt="Rice field"
              className="h-[464px] w-[526px] object-cover transition-transform duration-700 ease-out hover:scale-[1.02] sm:h-[320px] lg:h-[464px] lg:w-[526px]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
