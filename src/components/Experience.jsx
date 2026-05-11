import { motion } from "framer-motion";
import { HiBriefcase } from "react-icons/hi";
import { experience } from "../data/portfolioData";
import { fadeUp, fadeLeft, staggerContainer, viewportOnce } from "../animations/variants";

export default function Experience() {
  return (
    <section id="experience" className="py-24" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-16 text-center">
          <motion.span variants={fadeUp} className="section-label block mb-3">03 — Experience</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Work History</motion.h2>
        </motion.div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-5 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, rgba(57,197,87,0.5), rgba(57,197,87,0.1), transparent)" }} />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="space-y-5">
            {experience.map((exp, i) => {
              const isGreen = exp.color === "green";
              return (
                <motion.div key={i} variants={fadeLeft} className="relative pl-16">
                  <div className="absolute left-[14px] top-5">
                    <div className={isGreen ? "timeline-dot-green" : "timeline-dot-gray"} />
                  </div>
                  <div className="card rounded-2xl p-6" style={isGreen ? { borderColor: "rgba(57,197,87,0.22)" } : {}}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                          style={isGreen
                            ? { background: "rgba(57,197,87,0.1)", border: "1px solid rgba(57,197,87,0.22)", color: "#39C557" }
                            : { background: "#f5f5f5", border: "1px solid #e8e8e8", color: "#bbb" }}>
                          <HiBriefcase size={15} />
                        </div>
                        <div>
                          <h3 className="font-display font-700 text-base leading-tight" style={{ color: "#111" }}>{exp.role}</h3>
                          <p className="text-xs font-body mt-0.5" style={{ color: isGreen ? "#2aa844" : "#aaa" }}>{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs font-mono" style={{ color: "#aaa" }}>{exp.period}</span>
                        <span className={`tag text-xs ${!isGreen ? "tag-gray" : ""}`}>{exp.type}</span>
                      </div>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm font-body" style={{ color: "#777" }}>
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: isGreen ? "#39C557" : "#ccc" }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
