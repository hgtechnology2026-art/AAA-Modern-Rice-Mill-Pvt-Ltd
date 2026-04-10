import buhlerMachine from "@/assets/why choose us 1.webp";
import riceProcessing from "@/assets/why choose us 2.webp";
import wheat from "@/assets/icon/Group 11.png";
import wheat1 from "@/assets/icon/Group 12.png";
import wheat2 from "@/assets/icon/Group 13.png";
import wheat3 from "@/assets/icon/Group 14.png";
import wheat4 from "@/assets/icon/Group 15.png";
import Reveal from "@/components/Reveal";

const features = [
  { img: wheat, title: "28 Years of Experience", desc: "Since 1996, delivering quality rice products" },
  { img: wheat1, title: "20 Years Export Experience", desc: "Trusted by international clients worldwide" },
  { img: wheat2, title: "Modern Facility", desc: "Advanced processing technology in Tamil Nadu" },
  { img: wheat3, title: "Quality Assurance", desc: "International standards and certifications" },
  { img: wheat4, title: "Reliable Supply Chain", desc: "Consistent delivery and logistics support" },
];

const WhyChooseSection = () => (
  <section
    id="why-choose"
    className="section-divider bg-[#5B7953] px-4 py-10 text-white md:px-8 md:py-14"
  >
    <div className="mx-auto max-w-[1441px]">
      <div className="mx-auto grid grid-cols-1 items-start gap-10 xl:h-[728px] xl:w-[2097px] xl:grid-cols-[568px_637px] xl:gap-[26px]">
        <Reveal direction="left" className="flex flex-col gap-6 pt-1 xl:h-[728px] xl:w-[633px] xl:gap-[24px]">
          <p className="font-body text-[16px] font-semibold text-white/92 md:text-[18px]">
            Why Choose Us?
          </p>

          <h2 className="font-heading text-[25px] font-bold capitalize leading-[1.28] md:text-[43px] md:leading-[54px]">
            <span className="text-[#f0b23d]">Advanced Rice Manufacturing</span>
            <br />
            <span className="text-white">Excellence In Vikravandi</span>
          </h2>

          <p className="max-w-[610px] font-body text-[16px] leading-[28px] text-white/82">
            Located in Vikravandi, Villupuram District, Tamil Nadu, India, our modern rice mill is
            equipped with cutting-edge technology and infrastructure.
          </p>

          <div className="space-y-4 xl:grid xl:h-[489px] xl:w-[581px] xl:grid-rows-[repeat(5,80px)] xl:gap-[16px] xl:space-y-0">
            {features.map((feature, index) => (
              <Reveal
                key={feature.title}
                delay={index * 90}
                className="flex w-full items-center gap-4 rounded-[0_24px_24px_24px] bg-[#F8FFF6] p-4 text-[#607857] shadow-[0_8px_18px_rgba(62,84,48,0.08)] md:max-w-[581px] xl:h-[85px] xl:w-[581px] xl:gap-[20px] xl:px-[20px] xl:py-[20px] xl:pr-[183px]"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white xl:h-[45px] xl:w-[45px]">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="h-[34px] w-[34px] object-contain xl:h-[24px] xl:w-[24px]"
                  />
                </div>

                <div className="min-w-0">
                  <p className="font-body text-[18px] font-medium leading-[1.35] text-[#5d7652] md:text-[24px] xl:text-[16px] xl:leading-[1.2]">
                    {feature.title}
                  </p>
                  <p className="font-body text-[15px] leading-[1.7] text-[#6f8266] md:text-[16px] xl:mt-1 xl:text-[12px] xl:leading-[1.25]">
                    {feature.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 md:max-w-[507px] md:justify-self-center lg:justify-self-end xl:h-[710px] xl:w-[737px] xl:gap-[26px]">
          <Reveal delay={120} direction="right" className="overflow-hidden rounded-[34px_0_34px_34px] bg-[#cbd9c2] xl:h-[342px] xl:w-[700px]">
            <img
              src={buhlerMachine}
              alt="Buhler rice sorting machine"
              loading="lazy"
              className="h-[240px] w-full object-cover sm:h-[300px] md:h-[342px] xl:h-[342px] xl:w-[700px]"
            />
          </Reveal>

          <Reveal delay={220} direction="right" className="overflow-hidden rounded-[0_34px_34px_34px] bg-[#8ca67e] xl:h-[342px] xl:w-[700px]">
            <img
              src={riceProcessing}
              alt="Rice processing conveyor"
              loading="lazy"
              className="h-[240px] w-full object-cover sm:h-[300px] md:h-[342px] xl:h-[342px] xl:w-[700px]"
            />
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
