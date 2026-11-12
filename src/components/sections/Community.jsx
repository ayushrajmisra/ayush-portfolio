import { motion } from "motion/react";
import { Leaf, HeartHandshake, Users, Award, Sparkles } from "lucide-react";

import plantationOne from "../../assets/images/optimized/IMG_1953.webp";
import plantationTwo from "../../assets/images/optimized/IMG_1992.webp";
import posterMaking from "../../assets/images/optimized/_MG_1235.webp";
import nssAppreciation from "../../assets/images/optimized/IMG-20230515-WA0064.webp";
import cleanlinessDrive from "../../assets/images/optimized/IMG_4352.webp";

const activities = [
  {
    title: "GreenX Plantation Drive",
    description: "Participating in environmental awareness and plantation initiatives at Tula's Institute.",
    image: plantationOne,
    icon: Leaf,
    alt: "GreenX plantation drive",
  },
  {
    title: "Community Plantation",
    description: "Working with fellow students to encourage greener surroundings and environmental responsibility.",
    image: plantationTwo,
    icon: HeartHandshake,
    alt: "Students participating in a plantation activity",
  },
  {
    title: "GreenX Poster Making",
    description: "Creative participation in a student-led poster-making competition.",
    image: posterMaking,
    icon: Sparkles,
    alt: "GreenX poster making competition",
  },
  {
    title: "NSS Community Activities",
    description: "Contributing to NSS initiatives recognised with a Certificate of Appreciation.",
    image: nssAppreciation,
    icon: Award,
    alt: "NSS Certificate of Appreciation event",
  },
  {
    title: "Cleanliness Drive",
    description: "Taking part in an NSS cleanliness drive at Tapkeshwar Mahadev Mandir, Dehradun.",
    image: cleanlinessDrive,
    icon: Users,
    alt: "NSS cleanliness drive at Tapkeshwar Mahadev Mandir",
  },
];

export default function Community() {
  return (
    <section id="community" className="overflow-hidden bg-[#080d1b] px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#d6b36a]">
              06 / Beyond technology
            </p>
            <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Community & <span className="block text-slate-500">leadership.</span>
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-slate-400">
            Beyond building digital products, I have been involved in NSS and GreenX
            initiatives during my time at Tula's Institute, Dehradun. These experiences
            included environmental drives, community outreach, awareness activities
            and student-led events.
          </p>
        </div>

        <div className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Environmental initiatives",
            "Community outreach",
            "NSS activities & special camp",
            "Student engagement",
          ].map((item, index) => (
            <div key={item} className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#101a30] px-4 py-4">
              <span className="text-xs font-bold text-[#d6b36a]">0{index + 1}</span>
              <span className="text-xs font-medium text-slate-300">{item}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <motion.article
                key={activity.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
                className={`group overflow-hidden rounded-2xl border border-white/10 bg-[#101a30] ${index === 0 ? "lg:col-span-2" : ""}`}
              >
                <div className={`overflow-hidden bg-[#17213a] ${index === 0 ? "h-64 sm:h-80" : "h-64"}`}>
                  <img
                    src={activity.image}
                    alt={activity.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center gap-4 p-5 sm:p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d6b36a]/20 bg-[#d6b36a]/10 text-[#d6b36a]">
                    <Icon size={19} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{activity.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{activity.description}</p>
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

