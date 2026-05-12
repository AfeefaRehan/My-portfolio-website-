import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";
import { fadeUp, staggerContainer, viewportOnce } from "../animations/variants";

const categoryIcons = { "AI / LLM": "🤖", "Frontend": "⚛️", "Backend": "⚙️", "Databases": "🗄️", "Tools & Platforms": "🛠️" };

export default function Skills() {
  const [active, setActive] = useState("AI / LLM");
  const categories = Object.keys(skills);
  return (
    <section id="skills" className="py-24" style={{ background: "#f8faf8" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-16 text-center">
          <motion.span variants={fadeUp} className="section-label block mb-3">04 — Skills</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Technical Arsenal</motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-xl mx-auto font-body" style={{ color: "#888" }}>
            Tools and technologies I use to build intelligent, modern applications.
          </motion.p>
        </motion.div>
        <div className="grid md:grid-cols-[250px_1fr] gap-8">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce}
            transition={{ duration: 0.5 }}
            className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl font-body text-sm transition-all duration-250 whitespace-nowrap"
                style={active === cat
                  ? { background: "rgba(57,197,87,0.1)", border: "1.5px solid rgba(57,197,87,0.3)", color: "#2aa844", fontWeight: 600 }
                  : { color: "#888", background: "transparent", border: "1.5px solid transparent" }}>
                <span className="text-lg">{categoryIcons[cat]}</span>{cat}
              </button>
            ))}
          </motion.div>
          <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }} className="card rounded-2xl p-8">
            <h3 className="font-display font-700 mb-6 flex items-center gap-2" style={{ color: "#111" }}>
              <span className="text-2xl">{categoryIcons[active]}</span>{active}
            </h3>
            <div className="space-y-5">
              {skills[active].map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-body text-sm" style={{ color: "#333" }}>{skill.name}</span>
                    <span className="font-mono text-xs" style={{ color: "#aaa" }}>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div className="skill-bar-fill" initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.08 }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
