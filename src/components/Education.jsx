import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";
import { education } from "../data/portfolioData";
import { fadeUp, fadeLeft, staggerContainer, viewportOnce } from "../animations/variants";

export default function Education() {
  return (
    <section id="education" className="py-24" style={{ background: "#f8faf8" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-16 text-center">
          <motion.span variants={fadeUp} className="section-label block mb-3">02 — Education</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Academic Background</motion.h2>
        </motion.div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-5 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, #39C557, rgba(57,197,87,0.15), transparent)" }} />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="space-y-7">
            {education.map((edu, i) => {
              const isGreen = true;
              return (
                <motion.div key={i} variants={fadeLeft} className="relative pl-16">
                  <div className="absolute left-[14px] top-5" style={{ ...(isGreen ? { } : {}) }}>
                    <div className={isGreen ? "timeline-dot-green" : "timeline-dot-gray"} />
                  </div>
                  <div className="card rounded-2xl p-6"
                    style={isGreen ? { borderColor: "rgba(57,197,87,0.25)", background: "#fff" } : {}}>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={isGreen
                            ? { background: "rgba(57,197,87,0.1)", border: "1px solid rgba(57,197,87,0.25)", color: "#39C557" }
                            : { background: "#f5f5f5", border: "1px solid #e8e8e8", color: "#aaa" }}>
                          <HiAcademicCap size={17} />
                        </div>
                        <div>
                          <h3 className="font-display font-700 text-base leading-tight" style={{ color: "#111" }}>{edu.degree}</h3>
                          {edu.status === "In Progress" && (
                            <span className="inline-block mt-1 text-xs font-mono px-2 py-0.5 rounded-full"
                              style={{ color: "#2aa844", background: "rgba(57,197,87,0.1)", border: "1px solid rgba(57,197,87,0.2)" }}>
                              In Progress
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-xs font-mono whitespace-nowrap" style={{ color: "#aaa" }}>{edu.period}</span>
                    </div>
                    <p className="font-body text-sm mb-1" style={{ color: "#888" }}>{edu.institution} — {edu.location}</p>
                    {edu.grade && <p className="text-xs font-mono" style={{ color: "#aaa" }}>{edu.grade}</p>}
                    <div className="mt-3"><span className="tag text-xs">{edu.highlight}</span></div>
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
