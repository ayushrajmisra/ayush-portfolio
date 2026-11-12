import { motion } from "motion/react";
import {
  Globe2,
  Smartphone,
  Workflow,
  Lightbulb,
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
  Users,
} from "lucide-react";
import { portfolioData } from "../../data/portfolio";

const categoryIcons = [Globe2, Smartphone, Workflow, Lightbulb, BriefcaseBusiness, Users];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#080d1b] px-6 py-28 lg:px-10 lg:py-36">
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#6688ff]/[0.07] blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#d6b36a]/[0.045] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#d6b36a]">
              02 / My capabilities
            </p>
            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Tools behind <span className="block text-slate-500">the ideas.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-400">
            A growing toolkit across development, product thinking, business operations and leadership.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-5 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {portfolioData.skills.map((category, index) => {
            const Icon = categoryIcons[index] || Code2;

            return (
              <motion.article
                key={category.category}
                variants={reveal}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="premium-card group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101a30]/75 p-7 transition duration-500 hover:-translate-y-1 hover:border-[#d6b36a]/30 hover:bg-[#131f39] sm:p-8"
              >
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#6688ff]/[0.06] blur-3xl transition duration-500 group-hover:bg-[#d6b36a]/[0.12]" />
                <div className="relative">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d6b36a]/20 bg-[#d6b36a]/[0.08] text-[#d6b36a] transition duration-300 group-hover:scale-105 group-hover:bg-[#d6b36a]/15">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-semibold tracking-[0.25em] text-slate-600">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white sm:text-2xl">{category.category}</h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">{category.description}</p>

                  <div className="my-7 h-px bg-white/[0.08]" />

                  <div className="flex flex-wrap gap-2.5">
                    {category.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/[0.09] bg-white/[0.035] px-3.5 py-2 text-xs font-medium text-slate-300 transition duration-300 hover:border-[#d6b36a]/40 hover:bg-[#d6b36a]/[0.08] hover:text-[#f0d9a7]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mt-8 flex flex-col justify-between gap-5 rounded-2xl border border-[#d6b36a]/20 bg-gradient-to-r from-[#25233a] via-[#151d35] to-[#191832] p-7 sm:flex-row sm:items-center sm:p-8"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6b36a]">Always learning</p>
            <h3 className="mt-1 text-lg font-semibold text-white">Exploring. Experimenting. Improving.</h3>
          </div>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#e8c986]"
          >
            See my projects <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

