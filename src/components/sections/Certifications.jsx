import { motion } from "motion/react";
import { Award, ShieldCheck, CalendarDays } from "lucide-react";
import { portfolioData } from "../../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="bg-[#0c1326] px-6 py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#829cff]">08 / Continuous learning</p>
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Certifications & <span className="text-slate-500">learning.</span>
          </h2>
          <p className="max-w-sm text-sm leading-7 text-slate-400">
            Courses and certifications that have contributed to my technical foundation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {portfolioData.certifications?.map((item, index) => (
            <motion.article key={item.name} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: (index % 2) * 0.1 }}
              className="premium-card flex gap-5 rounded-2xl border border-white/[0.08] bg-[#101a30] p-6 transition hover:-translate-y-1 hover:border-[#6688ff]/35 sm:p-7">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#6688ff]/20 bg-[#6688ff]/10 text-[#aabaff]">
                {index === 0 ? <ShieldCheck size={22} /> : <Award size={22} />}
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.institution}</p>
                <p className="mt-3 flex items-center gap-2 text-xs text-[#aabaff]"><CalendarDays size={14} /> {item.period}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

