import { motion } from "framer-motion";
import { HiBadgeCheck } from "react-icons/hi";
import { certifications } from "../data/portfolioData";
import { fadeUp, scaleIn, staggerContainer, staggerFast, viewportOnce } from "../animations/variants";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-16 text-center">
          <motion.span variants={fadeUp} className="section-label block mb-3">06 — Certifications</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Credentials</motion.h2>
        </motion.div>
        <motion.div variants={staggerFast} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => {
            const isGreen = cert.color === "green";
            return (
              <motion.div key={i} variants={scaleIn} className="card rounded-2xl p-5"
                style={isGreen ? { borderColor: "rgba(57,197,87,0.22)" } : {}}>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{cert.icon}</div>
                  <div className="flex items-center gap-1.5">
                    <HiBadgeCheck size={14} style={{ color: isGreen ? "#39C557" : "#ccc" }} />
                    <span className="text-xs font-mono" style={{ color: "#bbb" }}>{cert.date}</span>
                  </div>
                </div>
                <h3 className="font-display font-700 text-base leading-tight mb-1" style={{ color: "#111" }}>{cert.title}</h3>
                <p className="text-xs font-mono mb-4" style={{ color: isGreen ? "#2aa844" : "#aaa" }}>{cert.issuer}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map(s => (
                    <span key={s} className={`tag text-xs ${!isGreen ? "tag-gray" : ""}`}>{s}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
