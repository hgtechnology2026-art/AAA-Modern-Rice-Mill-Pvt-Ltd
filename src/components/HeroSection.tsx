import heroImg from "@/assets/Hero section.webp";
import leafSmall from "@/assets/leaf-small.png";
import leafLarge from "@/assets/leaf-large.png";
import leafBottom from "@/assets/leaf-bottom.png";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-[520px] overflow-hidden bg-[length:135%_auto] bg-no-repeat bg-[center_76%] sm:min-h-[640px] sm:bg-[length:118%_auto] md:min-h-[962px] md:bg-[length:contain] md:bg-bottom"
    style={{
      backgroundImage: `url(${heroImg})`,
      backgroundColor: "#f6fff3",
    }}
  >
    <img src={leafSmall} alt="" className="absolute left-0 top-[10%] z-[5] w-8 sm:w-12 md:w-20" />
    <img src={leafBottom} alt="" className="absolute left-[2%] top-[60%] z-[5] w-8 sm:w-12 md:w-16" />
    <img src={leafLarge} alt="" className="absolute right-0 top-[14%] z-[5] w-10 sm:w-14 md:w-24" />
    <img src={leafSmall} alt="" className="absolute right-[1%] top-[66%] z-[5] w-8 sm:w-12 md:w-16" />

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

export default HeroSection;
