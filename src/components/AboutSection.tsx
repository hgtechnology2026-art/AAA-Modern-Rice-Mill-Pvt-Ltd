import { useState } from "react";
import riceField from "@/assets/about section.webp";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

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
  "rounded-tr-[22px] rounded-br-[22px] rounded-bl-[22px] rounded-tl-none",
  "rounded-[22px]",
  "rounded-tl-[22px] rounded-bl-[22px] rounded-br-[22px] rounded-tr-none",
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
      className="px-6 py-12 md:px-12 md:py-16"
      style={{ backgroundColor: "#F6F6F6" }}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="w-[1700px] grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="font-body mb-3 text-[18px] font-semibold text-[#7a8c5e]">
              About Our Company
            </p>

            <h2 className="font-heading text-[46px] font-bold leading-[1.12] text-[#2b2925]">
              A Legacy Of{" "}
              <span className="font-heading text-[#d4a43a]">
                Quality, Innovation <br /> And Trust
              </span>{" "}
              In The Rice Industry
            </h2>

            <p className="font-body mt-4 max-w-[650px] text-[16px] text-justify leading-[1.9] text-[#4a4a4a]">
              Founded in 1996 in Vikravandi, Villupuram District, Tamil Nadu,
              A.A.A Modern Rice Mill Pvt Ltd has built a reputation for
              excellence in rice manufacturing and trading across global
              markets. As a second-generation family business, we combine
              decades of traditional expertise with modern technology to deliver
              rice products that meet international quality standards.
            </p>
            <p className="font-body mt-3 max-w-[650px] text-[16px] text-justify leading-[1.9] text-[#4a4a4a]">
              Our state-of-the-art facility is equipped with Buhler Sortex Z+
              series machinery, ensuring consistent grain quality, purity and
              reliability for every shipment we deliver to our global clients.
            </p>

            <div className="mt-6 max-w-[840px]">
              <div className="grid grid-cols-3 gap-6">
                {tabs.map((tab, index) => {
                  const isActive = active === index;

                  return (
                    <div
                      key={tab.title}
                      className={`relative h-[100px] w-[223px] ${isActive ? "z-10" : "z-20"}`}
                    >
                      {isActive ? (
                        <>
                          <div
                            aria-hidden="true"
                            className={`absolute left-0 top-0 z-0 bg-white ] ${shellClasses[index]} ${buttonWrapClasses[index]}`}
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
                                className="absolute right-[-34px] z-0 bg-white"
                                style={{
                                  top: shellConfig.bridgeTop,
                                  width: shellConfig.bridgeSize,
                                  height: shellConfig.bridgeSize,
                                }}
                              />
                              <div
                                aria-hidden="true"
                                className="absolute right-[-34px] z-0 rounded-bl-[22px]"
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
                                className="absolute left-[-34px] z-0 bg-white"
                                style={{
                                  top: shellConfig.bridgeTop,
                                  width: shellConfig.bridgeSize,
                                  height: shellConfig.bridgeSize,
                                }}
                              />
                              <div
                                aria-hidden="true"
                                className="absolute left-[-34px] z-0 rounded-br-[22px]"
                                style={{
                                  top: shellConfig.bridgeTop,
                                  width: shellConfig.bridgeSize,
                                  height: shellConfig.bridgeSize,
                                  backgroundColor: "#F6F6F6",
                                }}
                              />
                              <div
                                aria-hidden="true"
                                className="absolute right-[-34px] z-0 bg-white"
                                style={{
                                  top: shellConfig.bridgeTop,
                                  width: shellConfig.bridgeSize,
                                  height: shellConfig.bridgeSize,
                                }}
                              />
                              <div
                                aria-hidden="true"
                                className="absolute right-[-34px] z-0 rounded-bl-[22px]"
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
                                className="absolute left-[-34px] z-0 bg-white"
                                style={{
                                  top: shellConfig.bridgeTop,
                                  width: shellConfig.bridgeSize,
                                  height: shellConfig.bridgeSize,
                                }}
                              />
                              <div
                                aria-hidden="true"
                                className="absolute left-[-34px] z-0 rounded-br-[22px]"
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
                        className={`absolute z-20 flex h-[68px] w-[207px] items-center justify-between rounded-[12px] pt-[16px] pr-[26px] pb-[16px] pl-[36px] text-left outline-none transition-[background-color,color] duration-300 focus:outline-none focus-visible:outline-none focus-visible:ring-0 ${
                          isActive
                            ? "btn-gold-gradient text-[#2b2419]"
                            : "btn-gold-gradients border border-[#e8dfc8] text-[#b68a2a]"
                        }`}
                        style={{
                          left: shellConfig.buttonOffset,
                          top: shellConfig.buttonOffset,
                        }}
                      >
                        <span className="pr-3 text-[14px] font-medium leading-[1.25]">
                          {tab.title}
                        </span>

                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
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
                  );
                })}
              </div>

              <div
                className={`mt-[-6px] max-w-[787px] bg-white px-7 py-6 shadow-[0_10px_24px_rgba(130,113,79,0.08)] transition-[border-radius] duration-300 ${contentClasses[active]}`}
              >
                <p className="font-body animate-fade text-[16px] leading-[1.8] text-[#7a7468]">
                  {tabs[active].content}
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[18px]">
            <img
              src={riceField}
              alt="Rice field"
              className="h-[464px] w-[526px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
