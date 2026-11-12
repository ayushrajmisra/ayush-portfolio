import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import personalLogo from "../../assets/images/AM Logo Sign.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Beyond Work", href: "#community" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (event, href) => {
    event.preventDefault();
    setMenuOpen(false);

    window.history.replaceState(null, "", href);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const target = document.getElementById(href.slice(1));

        if (!target) return;

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  };

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.08] bg-[#080d1b]/95 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-5 px-5 lg:px-8">
        <a
          href="#home"
          onClick={(event) => handleNavigation(event, "#home")}
          className="flex shrink-0 items-center"
        >
          <img
            src={personalLogo}
            alt="Ayush Misra signature"
            className="h-[70px] w-auto max-w-[235px] object-contain [filter:brightness(1.9)_contrast(1.2)_saturate(1.25)] drop-shadow-[0_0_8px_rgba(214,179,106,0.3)]"
          />
        </a>

        <div className="hidden items-center gap-7 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => handleNavigation(event, link.href)}
              className="whitespace-nowrap text-[12px] font-medium tracking-wide text-slate-400 transition hover:text-[#e2c27d]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(event) => handleNavigation(event, "#contact")}
          className="hidden shrink-0 items-center gap-2 rounded-full border border-[#d6b36a]/50 bg-[#d6b36a] px-5 py-3 text-xs font-bold text-[#111827] transition hover:bg-[#ebcc8d] xl:flex"
        >
          Let's Talk <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg border border-white/10 p-2.5 text-white xl:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="max-h-[75vh] overflow-y-auto border-t border-white/10 bg-[#080d1b] xl:hidden"
          >
            <div className="grid grid-cols-2 gap-2 px-6 py-5 sm:grid-cols-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => handleNavigation(event, link.href)}
                  className="rounded-lg px-3 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-[#e2c27d]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
