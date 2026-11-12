import { motion } from "motion/react";
import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../../data/portfolio";

export default function Responsibilities() {
  return (
    <section id="responsibilities" className="bg-[#0c1326] px-6 py-24 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#829cff]">10 / Beyond development</p>
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6688ff]/10 text-[#aabaff]">
            <BriefcaseBusiness size={27} />
          </div>
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Building a business takes <span className="text-slate-500">more than code.</span>
          </h2>
          <p className="mt-6 text-sm leading-8 text-slate-400">
            Alongside product and technology work, I contribute to the coordination and operational responsibilities involved in running a business.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {portfolioData.responsibilities?.map((item, index) => (
            <motion.div key={item} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: (index % 2) * 0.08 }}
              className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-[#101a30] p-5">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#91a7ff]" />
              <p className="text-sm leading-6 text-slate-300">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

