import { motion } from "motion/react";
import { Trophy, Star, Award, Sparkles } from "lucide-react";
import { portfolioData } from "../../data/portfolio";

const icons = [Trophy, Award, Star, Sparkles];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-[#080d1b] px-6 py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#829cff]">09 / Recognition</p>
        <h2 className="mb-12 text-4xl font-bold text-white sm:text-5xl">
          Milestones & <span className="text-slate-500">recognition.</span>
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {portfolioData.achievements?.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.article key={item.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: (index % 2) * 0.1 }}
                className="premium-card rounded-2xl border border-white/10 bg-[#101a30] p-7 transition hover:border-[#6688ff]/35">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6688ff]/10 text-[#aabaff]">
                    <Icon size={23} />
                  </div>
                  <span className="text-xs text-slate-500">{item.period}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm font-medium text-[#aabaff]">{item.organization}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

