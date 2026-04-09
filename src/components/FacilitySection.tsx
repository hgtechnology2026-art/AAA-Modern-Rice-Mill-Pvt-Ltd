import riceProcessing from "@/assets/solution.webp";
import frame1 from "@/assets/icon/Frame 9.png";
import frame2 from "@/assets/icon/Frame 9 (1).png";
import frame3 from "@/assets/icon/Frame 9 (2).png";
import framebg from "@/assets/ouur solution bg.webp";

const stats = [
  { value: "28+", label: "Years Experience" },
  { value: "20+", label: "Years in Exports" },
  { value: "100%", label: "Quality Assurance" },
];

const items = [
  {
    img: frame1,
    title: "Strategic Location",
    desc: (
      <>
        Vikravandi, Villupuram <br /> District, Tamil Nadu, India
      </>
    ),
  },
  {
    img: frame2,
    title: "Modern Infrastructure",
    desc: "Factory is completely equipped with Buhler Sortex Z+ series Machineries.",
    bg: framebg,
  },
  {
    img: frame3,
    title: "Quality Standards",
    desc: "ISO certified processes and international quality compliance",
  },
];

const FacilitySection = () => (
  <section id="solutions" className="section-divider -mt-4 bg-[#fcfffb] px-4 py-10 md:-mt-6 md:px-8 md:py-14">
    <div className="mx-auto max-w-[1400px]">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start lg:gap-10">
        <div className="overflow-hidden rounded-[16px]">
          <img
            src={riceProcessing}
            alt="Rice processing facility"
            loading="lazy"
            className="h-[320px] w-full rounded-[16px] object-cover sm:h-[420px] lg:h-[615px]"
          />
        </div>

        <div>
          <p className="font-body mb-2 text-[18px] font-semibold text-[#6f855f]">
            Our Solutions
          </p>

          <h2 className="font-heading text-[2rem] font-bold leading-[1.1] text-[#25231f] md:text-[46px]">
            Our <span className="font-heading  text-[#d2a23f]">Manufacturing</span> Facility
          </h2>

          <p className="mt-4 max-w-[720px] font-body text-[16px] leading-[28px] text-[#6b655a]">
            Located in Vikravandi, Villupuram District, Tamil Nadu, our modern rice mill is equipped
            with cutting-edge technology and world-class processing infrastructure.
          </p>

          <div className="mt-8">
            <div className="grid max-w-[560px] grid-cols-3 overflow-hidden rounded-[14px] border border-[#97ab87] bg-[#f8fcf6]">
              {stats.map((stat, index) => (
                <div key={stat.label} className="relative px-4 py-4 sm:px-6 md:px-8">
                  {index !== stats.length - 1 && (
                    <span className="absolute right-0 top-1/2 h-[45%] w-[1px] -translate-y-1/2 bg-[#c9d4bf]" />
                  )}
                  <p className="font-heading text-[1.8rem] font-bold leading-none text-[#68825d] md:text-[2rem]">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-body text-[12px] text-[#73806b] md:text-[13px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:-mt-[260px] lg:pl-[360px] xl:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className={`flex min-h-[261px] items-start rounded-[10px] border px-[25px] pb-[25px] pt-[25px] shadow-[0_12px_26px_rgba(184,168,132,0.10)] ${
              item.bg
                ? "border-[#6c8760] text-white"
                : "border-[#e2ddd2] bg-white text-[#25231f]"
            }`}
            style={
              item.bg
                ? {
                    backgroundImage: `url(${item.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : {}
            }
          >
            <div className="flex w-full max-w-[240px] flex-col gap-[15px]">
              <img
                src={item.img}
                alt={item.title}
                className="h-[56px] w-[56px] object-contain"
              />

              <div className="flex flex-col gap-[8px]">
                <h4 className={`font-heading text-[20px] font-bold ${item.bg ? "text-white" : "text-[#25231f]"}`}>
                  {item.title}
                </h4>

                <p className={`${item.bg ? "text-white/90" : "text-[#6d665a]"} font-body text-[16px] leading-[28px]`}>
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FacilitySection;
