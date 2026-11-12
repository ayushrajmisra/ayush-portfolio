import { motion } from "motion/react";
import { GraduationCap, BookOpen, CalendarDays } from "lucide-react";
import { portfolioData } from "../../data/portfolio";

export default function Education() {
  const education = portfolioData.education;
  const items = [
    {
      name: education.degree,
      institution: education.institution,
      period: education.period,
      type: "Bachelor's Degree",
      featured: true,
    },
    ...(education.additionalEducation || []).map((item) => ({
      ...item,
      type: item.name.includes("Diploma") ? "Professional Diploma" : "Senior Secondary",
      featured: false,
    })),
  ];

  return (
    <section id="education" className="bg-[#080d1b] px-6 py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#829cff]">07 / Academic background</p>
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Education & <span className="text-slate-500">learning.</span>
          </h2>
          <p className="max-w-sm text-sm leading-7 text-slate-400">
            My academic journey, from foundational education to my degree in computer applications.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.article key={item.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl border p-7 ${
                item.featured
                  ? "border-[#6688ff]/35 bg-gradient-to-br from-[#1b2c52] to-[#11172d]"
                  : "border-white/10 bg-[#101a30]"
              }`}>
              {item.featured && <div className="absolute right-0 top-0 rounded-bl-xl bg-[#6688ff] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">Degree</div>}
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6688ff]/10 text-[#aabaff]">
                {item.featured ? <GraduationCap size={29}/> : <BookOpen size={25}/>}
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#91a7ff]">{item.type}</p>
              <h3 className="mt-3 text-xl font-bold leading-snug text-white">{item.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.institution}</p>
              <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-5 text-xs text-slate-400">
                <CalendarDays size={15} className="text-[#91a7ff]"/> {item.period}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

