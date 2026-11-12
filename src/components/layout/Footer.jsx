import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "../../data/portfolio";
import SocialIcon from "../ui/SocialIcon";
import personalLogo from "../../assets/images/AM Logo Sign.png";

const socialItems = [
  { key: "github", label: "GitHub" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "instagram", label: "Instagram" },
  { key: "facebook", label: "Facebook" },
];

export default function Footer() {
  const profile = portfolioData.profile;

  return (
    <footer className="border-t border-white/[0.08] bg-[#080d1b] px-6 py-12 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <a href="#home" className="inline-flex items-center">
            <img
              src={personalLogo}
              alt="Ayush Misra signature"
              className="h-32 w-auto max-w-[330px] object-contain object-left [filter:brightness(1.9)_contrast(1.2)_saturate(1.25)] drop-shadow-[0_0_10px_rgba(214,179,106,0.3)]"
            />
          </a>
          <p className="mt-5 max-w-xs text-xs leading-6 text-slate-500">
            {profile.tagline}
          </p>
        </div>

        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
            Explore
          </p>
          <div className="grid grid-cols-2 gap-x-5 gap-y-3 text-xs text-slate-500">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Journey</a>
            <a href="#community" className="hover:text-white">Community</a>
            <a href="#education" className="hover:text-white">Education</a>
            <a href="#certifications" className="hover:text-white">Certifications</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>

        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
            Connect with me
          </p>
          <div className="flex flex-wrap gap-3">
            {socialItems.map(({ key, label }) => profile[key] && (
              <a
                key={key}
                href={profile[key]}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:-translate-y-1 hover:border-[#d6b36a]/50 hover:bg-[#d6b36a]/10 hover:text-white"
              >
                <SocialIcon name={key} size={19} />
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 text-xs text-slate-400 transition hover:text-white"
          >
            Let's talk <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/[0.06] pt-6 text-[11px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Ayush Misra. All rights reserved.</p>
        <a href="#home" className="inline-flex items-center gap-2 hover:text-white">
          Back to top <ArrowUpRight size={13} />
        </a>
      </div>
    </footer>
  );
}

