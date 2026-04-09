import logoMonogram from "@/assets/logo-monogram.png";
import footerbg from "@/assets/footerbg.webp";

const Footer = () => (
  <footer>
    <div className="bg-[#2E3D2A] text-white">
      <div
        className="w-full px-4 py-12 sm:px-6 md:px-8 md:py-16"
        style={{
          backgroundImage: `url(${footerbg})`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        <div className="mx-auto max-w-[1441px] border-y border-[#7F7F7F] py-8">
          <div className="grid grid-cols-1 items-center gap-8 text-center lg:grid-cols-[1fr_auto_1fr] lg:gap-10 lg:text-left">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:justify-start">
              <a href="#about" className="text-[14px] text-white/82 transition hover:text-white">About</a>
              <a href="#products" className="text-[14px] text-white/82 transition hover:text-white">Products & Services</a>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                src={logoMonogram}
                alt="AAA Logo"
                className="h-[78px] w-[109px] object-contain"
              />
              <p className="font-heading text-[17px] font-bold text-white">
                A.A.A Modern Rice Mill Pvt Ltd
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:justify-end">
              <a href="#why-choose" className="text-[14px] text-white/82 hover:text-white">Why choose us</a>
              <a href="#solutions" className="text-[14px] text-white/82 hover:text-white">Our Solutions</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-[#1f2b1a]">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-2 px-4 py-4 text-center text-[16px] text-white md:flex-row md:px-8 md:text-left">
        <p className="font-body text-white/85">Powered by One Dot Million</p>
        <p className="font-body text-white/85">Copyright 2026 A.A.A Modern Rice Mill Pvt Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
