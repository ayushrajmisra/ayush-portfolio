import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowUpRight, Download } from "lucide-react";
import { portfolioData } from "../../data/portfolio";
import SocialIcon from "../ui/SocialIcon";

const socialItems = [
  { key: "github", label: "GitHub" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "instagram", label: "Instagram" },
  { key: "facebook", label: "Facebook" },
];

export default function Contact() {
  const profile = portfolioData.profile;

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0c1326] px-6 py-28 lg:px-10 lg:py-36">
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#6688ff]/10 blur-[130px]"/>
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#17264a] via-[#111b35] to-[#17152d] p-8 sm:p-12 lg:p-16">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#aabaff]">11 / Get in touch</p>
        <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
          Have an idea? <span className="text-[#91a7ff]">Let's build it.</span>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">{portfolioData.contact.description}</p>

        <a href={`mailto:${profile.email}`} className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#6688ff] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#829cff]">
          Start a conversation <ArrowUpRight size={18}/>
        </a>

        <div className="mt-14 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-slate-200 hover:text-white">
            <Mail className="text-[#91a7ff]" size={18}/> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm text-slate-200 hover:text-white">
            <Phone className="text-[#91a7ff]" size={18}/> {profile.phone}
          </a>
          <div className="flex items-center gap-3 text-sm text-slate-200">
            <MapPin className="text-[#91a7ff]" size={18}/> {profile.location}
          </div>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          {socialItems.map(({ key, label }) => profile[key] && (
            <a key={key} href={profile[key]} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs font-medium text-slate-300 transition hover:border-[#6688ff]/50 hover:bg-white/5 hover:text-white">
              <SocialIcon name={key} size={16}/> {label} <ArrowUpRight size={12}/>
            </a>
          ))}
        </div>

        <a href={profile.resume} target="_blank" rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-white">
          <Download size={15}/> View resume
        </a>
      </motion.div>
    </section>
  );
}
