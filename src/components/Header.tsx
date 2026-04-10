import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products & Services", href: "#products" },
  { label: "Why choose us", href: "#why-choose" },
  { label: "Our Solutions", href: "#solutions" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-3 sm:px-6 md:px-8 lg:px-10 lg:py-4">
        <a href="#home" className="flex min-w-0 flex-shrink-0 items-center gap-2 sm:gap-3">
          <img
            src={logo}
            alt="A.A.A Modern Rice Mill"
            className="h-14 w-14 flex-shrink-0 object-contain sm:h-16 sm:w-16 lg:h-20 lg:w-20"
          />
          <div className="whitespace-nowrap leading-[1.35] sm:leading-[1.45]">
            <span className="inline lg:block font-heading text-[11px] font-semibold text-[#d4a43a] sm:text-[12px] lg:text-[14px]">
              A.A.A Modern
            </span>
            <span className="inline lg:hidden font-heading text-[11px] font-semibold text-[#d4a43a] sm:text-[12px]">
              {" "}Rice Mill Pvt Ltd
            </span>
            <span className="hidden lg:block font-heading text-[14px] font-semibold text-[#d4a43a]">
              Rice Mill Pvt Ltd
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[13.5px] font-normal text-[#2d2b28] transition-colors hover:text-[#5B7953]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="btn-gold-gradient hidden h-[56px] w-[196px] flex-shrink-0 items-center justify-center rounded-[6px] px-6 py-3 text-[14px] font-bold shadow-[0_8px_20px_rgba(255,196,88,0.35)] transition hover:opacity-90 lg:inline-flex"
        >
          Contact Us
        </a>

        <button
          className="rounded-md border border-[#ebdfca] bg-[#fff9ef] p-2 text-[#2b2925] lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#eee6d6] bg-white px-4 pb-5 pt-2 sm:px-6 lg:hidden">
          <div className="mx-auto max-w-[1500px]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-[15px] font-normal text-[#2b2925] hover:text-[#d4a43a]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-gold-gradient mt-4 inline-flex rounded-lg px-6 py-3 text-[15px] font-bold"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
