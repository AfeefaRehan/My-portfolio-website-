import { motion } from "framer-motion";
import { HiBriefcase } from "react-icons/hi";
import { experience } from "../data/portfolioData";
import { fadeUp, fadeLeft, staggerContainer, viewportOnce } from "../animations/variants";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-10 md:mb-16 text-center">
          <motion.span variants={fadeUp} className="section-label block mb-3">03 — Experience</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Work History</motion.h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-3 md:left-5 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, rgba(57,197,87,0.5), rgba(57,197,87,0.1), transparent)" }} />

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="space-y-4 md:space-y-5">
            {experience.map((exp, i) => (
              <motion.div key={i} variants={fadeLeft} className="relative pl-10 md:pl-16">

                {/* Timeline dot */}
                <div className="absolute left-[6px] md:left-[14px] top-5">
                  <div className="timeline-dot-green" />
                </div>

                <div className="card rounded-2xl p-4 md:p-6"
                  style={{ borderColor: "rgba(57,197,87,0.22)" }}>

                  {/* ── Mobile: stacked layout ── */}
                  <div className="block md:hidden mb-3">
                    {/* Icon + Role */}
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center"
                        style={{ background: "rgba(57,197,87,0.1)", border: "1px solid rgba(57,197,87,0.22)", color: "#39C557" }}>
                        <HiBriefcase size={14} />
                      </div>
                      <h3 className="font-display font-700 text-sm leading-tight" style={{ color: "#111" }}>{exp.role}</h3>
                    </div>
                    {/* Company */}
                    <p className="text-xs font-body mb-2 pl-10" style={{ color: "#2aa844" }}>{exp.company}</p>
                    {/* Date + Tag on same row */}
                    <div className="flex items-center gap-2 pl-10">
                      <span className="text-xs font-mono" style={{ color: "#aaa" }}>{exp.period}</span>
                      <span className="tag text-xs">{exp.type}</span>
                    </div>
                  </div>

                  {/* ── Desktop: side by side layout ── */}
                  <div className="hidden md:flex items-start justify-between gap-3 mb-2">
                    {/* Left: icon + role + company */}
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center"
                        style={{ background: "rgba(57,197,87,0.1)", border: "1px solid rgba(57,197,87,0.22)", color: "#39C557" }}>
                        <HiBriefcase size={15} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display font-700 text-base leading-tight" style={{ color: "#111" }}>{exp.role}</h3>
                        <p className="text-xs font-body mt-0.5" style={{ color: "#2aa844" }}>{exp.company}</p>
                      </div>
                    </div>
                    {/* Right: date + tag */}
                    <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-auto">
                      <span className="text-xs font-mono whitespace-nowrap" style={{ color: "#aaa" }}>{exp.period}</span>
                      <span className="tag text-xs whitespace-nowrap">{exp.type}</span>
                    </div>
                  </div>

                  {/* Bullets — same for both */}
                  <ul className="mt-2 md:mt-3 space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs md:text-sm font-body" style={{ color: "#777" }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#39C557" }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
