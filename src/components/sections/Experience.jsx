import { motion } from "motion/react";
import { BriefcaseBusiness, Users, Megaphone, CalendarDays } from "lucide-react";
import { portfolioData } from "../../data/portfolio";

const icons = [BriefcaseBusiness, Users, CalendarDays, Megaphone, Users, Users];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#080d1b] px-6 py-28 lg:px-10 lg:py-36">
      <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-[#6688ff]/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#d6b36a]">
            04 / The journey
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Experience & <span className="text-slate-500">leadership.</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
            Every role, collaboration and responsibility has added a new perspective to my journey.
          </p>
        </motion.div>

        <div className="relative ml-3 pl-8 sm:ml-6 sm:pl-12">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-white/10" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#d6b36a] via-[#6688ff] to-transparent"
          />

          {portfolioData.experience.map((item, index) => {
            const Icon = icons[index] || BriefcaseBusiness;

            return (
              <motion.article
                key={`${item.role}-${item.organization}`}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="relative pb-12 last:pb-0"
              >
                <span className="absolute -left-[41px] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-[#d6b36a]/40 bg-[#111b34] text-[#d6b36a] shadow-[0_0_22px_rgba(214,179,106,0.10)] sm:-left-[57px]">
                  <Icon size={14} />
                </span>

                <div className="premium-card group rounded-2xl border border-white/[0.08] bg-[#101a30]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d6b36a]/30 hover:bg-[#131f39] sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#d6b36a]">
                      {item.period || "Leadership experience"}
                    </span>
                    {index === 0 && (
                      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] text-emerald-300">
                        Current role
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-xl font-semibold text-white transition group-hover:text-[#f0d9a7] sm:text-2xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#91a7ff]">{item.organization}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

