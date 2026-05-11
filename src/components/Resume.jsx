import { motion } from "framer-motion";
import { HiDownload, HiEye } from "react-icons/hi";
import { personalInfo } from "../data/portfolioData";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOnce } from "../animations/variants";

export default function Resume() {
  return (
    <section id="resume" className="py-24" style={{ background: "#f8faf8" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-16 text-center">
          <motion.span variants={fadeUp} className="section-label block mb-3">07 — Resume</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Curriculum Vitae</motion.h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}
            className="card rounded-2xl p-8 text-center" style={{ borderColor: "rgba(57,197,87,0.22)" }}>
            <div className="w-full h-60 rounded-xl border flex items-center justify-center mb-6 overflow-hidden relative"
              style={{ background: "#f8faf8", borderColor: "#ececec" }}>
              <div className="absolute inset-0 flex flex-col gap-2 p-6 opacity-30">
                <div className="h-4 rounded w-2/3 mx-auto" style={{ background: "#39C557" }} />
                <div className="h-3 rounded w-1/2 mx-auto" style={{ background: "#ccc" }} />
                <div className="h-px my-2 bg-gray-200" />
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="h-2 rounded bg-gray-200" style={{ width: `${60 + Math.random() * 35}%` }} />
                ))}
              </div>
              <span className="relative z-10 font-display font-800 text-4xl"
                style={{ background: "linear-gradient(135deg,#39C557,#2aa844)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", opacity: 0.4 }}>
                AR
              </span>
            </div>
            <h3 className="font-display font-700 mb-1" style={{ color: "#111" }}>Afeefa Rehan</h3>
            <p className="text-xs font-mono mb-6" style={{ color: "#aaa" }}>AI Engineer & Full Stack Developer</p>
            <div className="flex gap-3">
              <a href={personalInfo.cvFile} download className="btn-primary flex-1 text-sm">
                <span className="flex items-center justify-center gap-2"><HiDownload /> Download</span>
              </a>
              <a href={personalInfo.cvFile} target="_blank" rel="noreferrer"
                className="btn-outline flex items-center justify-center gap-2 flex-1 text-sm">
                <HiEye /> Preview
              </a>
            </div>
          </motion.div>
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce} className="space-y-4">
            <h3 className="font-display font-700 text-xl" style={{ color: "#111" }}>Quick Summary</h3>
            <p className="font-body leading-relaxed text-sm" style={{ color: "#777" }}>
              4+ years across AI/ML, web development, and customer operations — often running double shifts. Pursuing M.S. in AI (2026–2027) while freelancing as a developer and prompt engineer.
            </p>
            {[
              { label: "Location",    value: "Lahore, Pakistan" },
              { label: "Experience",  value: "4+ Years (5+ Roles)" },
              { label: "Education",   value: "B.Sc. CS — CGPA 3.6 | M.S. AI In Progress" },
              { label: "Current",     value: "Freelance Web Dev & Prompt Engineer" },
              { label: "Languages",   value: "English, Urdu, Punjabi" },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-start gap-3 py-2.5" style={{ borderBottom: "1px solid #f0f0f0" }}>
                <span className="text-xs font-mono w-28 flex-shrink-0 pt-0.5" style={{ color: "#bbb" }}>{label}</span>
                <span className="text-sm font-body" style={{ color: "#333" }}>{value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
