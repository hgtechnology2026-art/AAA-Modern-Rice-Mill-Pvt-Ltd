import leafLarge from "@/assets/leaf-large.png";
import leaf from "@/assets/leaf-bottom.png";
import leafSmall from "@/assets/leaf-small.png";
import riceBag from "@/assets/our product 2.webp";
import riceConveyor from "@/assets/our product 1.webp";
import fra from "@/assets/icon/Frame 7.png";
import fra2 from "@/assets/icon/Frame 7 (1).png";
import fra1 from "@/assets/icon/Frame 7 (2).png";
import frabg from "@/assets/our product bg.webp";
import check from "@/assets/icon/Group 4.png";

const cardClass =
  "rounded-[22px] border border-[#8e877c] bg-[#FCFFFB] p-7 shadow-[0_10px_30px_rgba(120,108,86,0.05)]";

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

const ProductsSection = () => (
  <section
    id="products"
    className="relative overflow-hidden bg-[#FCFFFB] px-4 py-8 sm:px-6 md:px-8 md:py-12 lg:px-10 lg:py-12"
  >
    <div
      className="relative mx-auto hidden w-full max-w-[1441px] min-h-[810px] overflow-hidden xl:block"
      style={{
        backgroundImage: `url(${frabg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={leafSmall}
        alt=""
        className="pointer-events-none absolute object-contain"
        style={{
          width: "115px",
          height: "107px",
          top: "-43px",
          left: "871px",
          transform: "rotate(-46.67deg)",
        }}
      />
      <img
        src={leaf}
        alt=""
        className="pointer-events-none absolute object-contain"
        style={{
          width: "91px",
          height: "98px",
          top: "130px",
          left: "1320px",
        }}
      />
      <img
        src={leafSmall}
        alt=""
        className="pointer-events-none absolute object-contain"
        style={{
          width: "78px",
          height: "83px",
          top: "760px",
          left: "381px",
        }}
      />
      <img
        src={leaf}
        alt=""
        className="pointer-events-none absolute object-contain"
        style={{
          width: "43px",
          height: "46px",
          top: "800px",
          left: "953px",
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
          top: "525px",
          left: "59px",
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
          top: "495px",
          left: "1019px",
        }}
      />

      <div
        className="relative z-10 h-[720px] w-[1298px]"
        style={{ top: "52px", left: "72px" }}
      >
        <div className="grid h-[136px] grid-cols-[1fr_600px] items-end gap-[76px]">
          <div className="h-[150px] pb-[25px]">
            <p className="mb-3 font-body text-[16px] font-semibold text-[#6f855f]">
              Our Products & Services
            </p>
            <h2 className="font-heading text-[46px] font-bold leading-[1.06] text-[#25231f]">
              Premium <span className="font-heading text-[#d2a23f]">Quality Rice</span>
              <br />
              <span className="font-heading text-[#d2a23f]">Products</span> For Global Markets
            </h2>
          </div>

          <p className="w-[700px] pb-[40px] font-body text-[16px] leading-[1.9] text-[#625d56]">
            We offer a comprehensive range of rice varieties and trade services, backed by rigorous
            <br />
            quality control and international certifications to meet the demands of global buyers.
          </p>
        </div>

        <div className="mt-[36px] grid h-[560px] grid-cols-[406px_398px_406px] items-start gap-[36px]">
          <div className="pt-[8px]">
            <div className={`${cardClass} min-h-[356px]`}>
              <div className="mb-5">
                <img src={fra} alt="" className="h-[40px] w-[40px] object-contain" />
              </div>
              <h3 className="mb-3 font-heading text-[20px] font-bold text-[#25231f]">
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
          </div>

          <div className="flex flex-col items-center pt-[52px]">
            <a
              href="#contact"
              className="btn-gold-gradient inline-flex h-[56px] w-[196px] items-center justify-center rounded-[6px] px-6 py-3 text-[14px] font-bold text-[#2b2419] shadow-[0_10px_20px_rgba(255,196,88,0.18)]"
            >
              Contact Us
            </a>

            <div className={`${cardClass} mt-[60px] w-full min-h-[356px]`}>
              <div className="mb-5">
                <img src={fra1} alt="" className="h-[40px] w-[40px] object-contain" />
              </div>
              <h3 className="mb-3 font-heading text-[20px] font-bold text-[#25231f]">
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
            </div>
          </div>

          <div>
            <div className={`${cardClass} min-h-[356px]`}>
              <div className="mb-5">
                <img src={fra2} alt="" className="h-[40px] w-[40px] object-contain" />
              </div>
              <h3 className="mb-3 max-w-[320px] font-heading text-[20px] font-bold leading-[1.24] text-[#25231f]">
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
          </div>
        </div>
      </div>
    </div>

    <div className="relative z-10 mx-auto max-w-[1300px] xl:hidden">
      <img
        src={leafSmall}
        alt=""
        className="leaf-float right-[33.2%] top-[0.1%] w-[58px] -rotate-[10deg] object-contain opacity-95 md:w-[66px]"
      />
      <img
        src={leafLarge}
        alt=""
        className="leaf-float right-[-0.3%] top-[-0.3%] w-[92px] rotate-[14deg] object-contain opacity-95 md:w-[108px]"
      />
      <img
        src={leafSmall}
        alt=""
        className="leaf-float bottom-[5.1%] left-[27.2%] w-[36px] rotate-[28deg] object-contain opacity-95"
      />
      <img
        src={leafSmall}
        alt=""
        className="leaf-float bottom-[4.2%] right-[20.2%] w-[40px] -rotate-[22deg] object-contain opacity-95"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-[18%] hidden h-[120px] bg-[radial-gradient(circle_at_center,rgba(166,166,166,0.15),transparent_62%)] opacity-60 md:block" />

      <div
        className="rounded-[28px] px-4 py-8 md:px-6 md:py-9"
        style={{
          backgroundImage: `url(${frabg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <div className="max-w-[620px]">
            <p className="mb-3 font-body text-[12px] font-semibold text-[#6f855f]">Our Products & Services</p>
            <h2 className="font-heading text-[2.2rem] font-bold leading-[1.06] text-[#25231f] md:text-[46px]">
              Premium <span className="italic text-[#d2a23f]">Quality Rice</span>
              <br />
              <span className="italic text-[#d2a23f]">Products</span> For Global Markets
            </h2>
          </div>
          <p className="max-w-[620px] pt-3 font-body text-[16px] leading-[1.9] text-[#625d56] md:justify-self-end md:pt-10">
            We offer a comprehensive range of rice varieties and trade services, backed by rigorous
            quality control and international certifications to meet the demands of global buyers.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[1fr_0.86fr_1fr] md:items-start lg:gap-8">
          <div className="flex flex-col gap-0">
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
            </div>

            <div className="relative -mt-[56px] flex justify-start pl-4 md:-mt-[72px] md:pl-5 lg:-mt-[84px] lg:pl-6">
              <img
                src={riceConveyor}
                alt="Rice processing conveyor"
                loading="lazy"
                className="relative z-20 h-auto w-full max-w-[430px] object-contain md:max-w-[468px]"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 md:pt-[36px] lg:pt-[46px]">
            <a
              href="#contact"
              className="btn-gold-gradient inline-flex h-[56px] w-[196px] items-center justify-center rounded-[6px] px-6 py-3 text-[14px] font-bold text-[#2b2419] shadow-[0_10px_20px_rgba(255,196,88,0.18)]"
            >
              Contact Us
            </a>

            <div className={`${cardClass} w-full max-w-[416px] md:mt-[64px] max-h-[356px]`}>
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
            </div>
          </div>

          <div className="flex flex-col gap-0">
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
            </div>

            <div className="relative -mt-[74px] flex justify-end pr-4 md:-mt-[92px] md:pr-5 lg:-mt-[108px] lg:pr-6">
              <img
                src={riceBag}
                alt="Rice bag with paddy"
                loading="lazy"
                className="relative z-20 h-auto w-full max-w-[315px] object-contain md:max-w-[350px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProductsSection;
