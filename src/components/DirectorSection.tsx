import directorImg from "@/assets/Director.webp";
import logoMonogram from "@/assets/logo-monogram.png";
import { CheckCircle2 } from "lucide-react";
import dir from "@/assets/director bg.webp";

const points = [
  "B.E. Civil Engineering",
  "MBA - Foreign Trade",
  "10+ Years International Export & Import",
  "2nd Generation Rice Manufacturer",
];

const DirectorSection = () => (
  <section className="flex w-full justify-center bg-[#5B7953] md:px-6 md:pb-16 lg:px-8 lg:pb-6">
    
    {/* MAIN CONTAINER */}
    <div
      className="mx-auto grid w-full max-w-[1441px] overflow-hidden bg-[#58744f] md:min-h-[505px] md:grid-cols-[minmax(320px,0.95fr)_1fr]"
      style={{
        backgroundImage: `url(${dir})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-full overflow-hidden">
        <img
          src={directorImg}
          alt="Director"
          className="h-full min-h-[340px] w-full object-cover object-top"
        />
      </div>

      <div className="flex flex-col justify-between px-5 pb-8 pt-6 text-white sm:px-6 md:px-8 lg:px-10 lg:pb-10 lg:pt-10">
        <div className="max-w-[620px]">
          <h3 className="font-heading text-[28px] font-bold leading-none text-[#f0b23d] sm:text-[32px]">
            Anvardeen
          </h3>

          <p className="font-body mt-1 text-[14px] text-white/90">
            Managing Director
          </p>

          <div className="mt-4 h-[2px] w-full max-w-[420px] bg-white/40" />

          <p className="mt-4 font-body text-[15px] leading-[1.9] text-white/90 sm:text-[16px]">
            Anvardeen is a second-generation rice manufacturer who carries forward the legacy
            established in 1985. With deep technical expertise in rice production and extensive
            experience in global commodity trade, he leads A.A.A Modern Rice Mill Pvt Ltd with a
            commitment to quality, transparency and long-term international partnerships.
          </p>

          <ul className="mt-5 space-y-3 text-[14px] sm:text-[15px]">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-[2px] shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex items-center justify-end gap-3">
          <img
            src={logoMonogram}
            alt="logo"
            className="h-[72px] w-[72px] object-contain sm:h-[84px] sm:w-[84px]"
          />

          <div className="font-body text-white">
            <p className="text-[18px] font-medium leading-[1.4] sm:text-[20px]">
              A.A.A Modern
            </p>
            <p className="text-[18px] font-medium leading-[1.4] sm:text-[20px]">
              Rice Mill Pvt Ltd
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DirectorSection;
