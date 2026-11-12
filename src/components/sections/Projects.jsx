import { motion } from "motion/react";
import { ExternalLink, Smartphone, Globe2, GraduationCap, Clock3 } from "lucide-react";
import { portfolioData } from "../../data/portfolio";

import kartshoImage from "../../assets/images/optimized/Kartsho Company.webp";
import lawDalatImage from "../../assets/images/optimized/LawDalat BR White.webp";
import careerCraftImage from "../../assets/images/optimized/CareerCraft.webp";
import clockImage from "../../assets/images/optimized/Clock.webp";

const projectVisuals = {
  1: { image: kartshoImage, alt: "Kartsho Solutions company website", fit: "object-cover" },
  2: { image: lawDalatImage, alt: "LawDalat legal technology platform branding", fit: "object-contain p-8" },
  3: { image: careerCraftImage, alt: "Career Craft resume analyser project", fit: "object-contain p-3" },
  4: { image: clockImage, alt: "Digital Clock college web project", fit: "object-contain p-8" },
};

const projectIcons = [Globe2, Smartphone, GraduationCap, Clock3];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0c1326] px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#d6b36a]">
              03 / Selected work
            </p>
            <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Ideas into <span className="block text-slate-500">experiences.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-400">
            From building a company and its products to academic projects and experiments.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {portfolioData.projects.map((project, index) => {
            const Icon = projectIcons[index] || Smartphone;
            const visual = projectVisuals[project.id];

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: (index % 2) * 0.1 }}
                className="premium-card group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101a30] transition hover:-translate-y-1 hover:border-[#d6b36a]/40"
              >
                <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-[#17264a] to-[#15152d] sm:h-64">
                  {visual ? (
                    <img
                      src={visual.image}
                      alt={visual.alt}
                      loading="lazy"
                      className={`h-full w-full transition duration-700 group-hover:scale-[1.03] ${visual.fit}`}
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                      <Icon size={36} className="text-[#d6b36a]" />
                      <span className="text-xs text-slate-400">{project.category}</span>
                    </div>
                  )}

                  <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#080d1b]/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-200 backdrop-blur">
                    {project.type || project.category}
                  </span>
                </div>

                <div className="p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-2 text-xs tracking-widest text-slate-500">
                        {project.type === "College Project"
                          ? "ACADEMIC PROJECT"
                          : project.id === 1
                            ? "FIRST VENTURE"
                            : "COMPANY PRODUCT"}
                      </p>
                      <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                      {project.role && (
                        <p className="mt-1 text-xs font-medium text-[#d6b36a]">{project.role}</p>
                      )}
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit ${project.name}`}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-[#d6b36a] hover:bg-[#d6b36a]/10 hover:text-white"
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
                  {project.period && <p className="mt-3 text-xs text-slate-500">{project.period}</p>}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

