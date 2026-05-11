import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOnce } from "../animations/variants";

const stats = [
  { value: "5+", label: "Roles Held" },
  { value: "4+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "3.6", label: "CGPA" },
];

export default function About() {
  return (
    <section id="about" className="py-24" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-16 text-center">
          <motion.span variants={fadeUp} className="section-label block mb-3">01 — About Me</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Who I Am</motion.h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.div variants={fadeLeft} className="card rounded-2xl p-8 mb-6">
              <h3 className="font-display font-700 text-xl mb-4" style={{ color: "#111" }}>AI Engineer & Full Stack Developer</h3>
              <p className="font-body leading-relaxed mb-4" style={{ color: "#666" }}>{personalInfo.bio}</p>
              <p className="font-body leading-relaxed" style={{ color: "#666" }}>
                Currently pursuing a Master's in Artificial Intelligence (2026–2027) while freelancing as a Web Developer and Prompt Engineer. Passionate about the intersection of intelligent systems and beautiful user experiences.
              </p>
            </motion.div>
            <motion.div variants={fadeLeft} className="space-y-3">
              {[
                { Icon: FaMapMarkerAlt, text: personalInfo.location },
                { Icon: FaEnvelope, text: personalInfo.email },
                { Icon: FaPhone, text: personalInfo.phone },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm font-body" style={{ color: "#666" }}>
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center border flex-shrink-0"
                    style={{ border: "1.5px solid rgba(57,197,87,0.3)", color: "#39C557", background: "rgba(57,197,87,0.06)" }}>
                    <Icon size={13} />
                  </span>
                  {text}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.div variants={fadeRight} className="grid grid-cols-2 gap-4 mb-6">
              {stats.map(s => (
                <div key={s.label} className="card rounded-xl p-5 text-center">
                  <div className="font-display font-800 text-3xl mb-1"
                    style={{ background: "linear-gradient(135deg,#39C557,#2aa844)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {s.value}
                  </div>
                  <div className="text-xs font-mono" style={{ color: "#aaa" }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeRight} className="card rounded-2xl p-6">
              <h4 className="font-display font-600 text-sm tracking-wider uppercase mb-4" style={{ color: "#111" }}>Languages</h4>
              <div className="space-y-3">
                {[
                  { lang: "English", level: "Fluent", pct: 90 },
                  { lang: "Urdu", level: "Native", pct: 100 },
                  { lang: "Punjabi", level: "Native", pct: 100 },
                ].map(({ lang, level, pct }) => (
                  <div key={lang}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-body" style={{ color: "#333" }}>{lang}</span>
                      <span className="font-mono text-xs" style={{ color: "#aaa" }}>{level}</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div className="skill-bar-fill" initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }} viewport={viewportOnce}
                        transition={{ duration: 1.2, delay: 0.2 }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
