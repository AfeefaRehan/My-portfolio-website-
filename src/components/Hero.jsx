import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import { personalInfo } from "../data/portfolioData";
import { fadeUp, fadeRight, staggerContainer } from "../animations/variants";

const roles = [
  "AI Prompt Engineer",
  "LLM Evaluator",
  "Data Analyst",
  "MERN Developer",
  "Full Stack Developer",
  "Frontend Developer",
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg">
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Soft green blobs */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full animate-pulse-slow pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(57,197,87,0.08) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/4 right-1/5 w-72 h-72 rounded-full animate-pulse-slow pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(57,197,87,0.06) 0%, transparent 70%)", animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div variants={staggerContainer} initial="hidden" animate="visible"
          className="text-center md:text-left">

          {/* Available badge */}
          <motion.div variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
            style={{ background: "rgba(57,197,87,0.07)", borderColor: "rgba(57,197,87,0.25)" }}>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-mono tracking-wider" style={{ color: "#2aa844" }}>
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={fadeUp} className="font-display font-800 leading-none mb-5"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
            <span style={{ color: "#111" }}>Afeefa</span>
            <br />
            <span style={{
              background: "linear-gradient(135deg, #39C557 0%, #2aa844 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>Rehan</span>
          </motion.h1>

          {/* Role pills — all at once */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
            {roles.map((role) => (
              <span key={role} className="role-pill">{role}</span>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p variants={fadeUp} className="mb-8 max-w-md mx-auto md:mx-0 leading-relaxed font-body"
            style={{ color: "#666", fontSize: "1rem" }}>
            {personalInfo.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
            <a href="#projects" className="btn-primary">
              <span className="flex items-center gap-2">
                View Projects <HiArrowDown className="animate-bounce" />
              </span>
            </a>
            <a href={personalInfo.cvFile} download className="btn-outline flex items-center gap-2">
              <HiDownload /> Download CV
            </a>
          </motion.div>

          {/* Contact Me + socials */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
            <a href="#contact" className="btn-outline text-sm">Contact Me</a>
            <div className="flex items-center gap-3">
              {[
                { Icon: FaGithub,    href: personalInfo.github },
                { Icon: FaLinkedin,  href: personalInfo.linkedin },
                { Icon: FaInstagram, href: personalInfo.instagram },
                { Icon: FaEnvelope,  href: `mailto:${personalInfo.email}` },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-200"
                  style={{ border: "1.5px solid #e0e0e0", color: "#aaa", background: "#fff" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#39C557"; e.currentTarget.style.color = "#39C557"; e.currentTarget.style.background = "rgba(57,197,87,0.06)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#e0e0e0"; e.currentTarget.style.color = "#aaa"; e.currentTarget.style.background = "#fff"; }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — Profile Photo */}
        <motion.div variants={fadeRight} initial="hidden" animate="visible"
          className="flex items-center justify-center">
          <div className="relative">
            {/* Spinning ring */}
            <div className="absolute rounded-full border-2 border-dashed animate-spin-slow pointer-events-none"
              style={{
                borderColor: "rgba(57,197,87,0.2)",
                width: "calc(100% + 64px)", height: "calc(100% + 64px)",
                top: "-32px", left: "-32px"
              }} />
            {/* Glow blob */}
            <div className="absolute inset-0 rounded-full blur-3xl scale-150 opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(circle, #39C557, transparent)" }} />

            {/* Photo */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden"
              style={{
                border: "3px solid rgba(57,197,87,0.35)",
                boxShadow: "0 8px 48px rgba(57,197,87,0.18), 0 2px 8px rgba(0,0,0,0.08)"
              }}>
              <img
                src="/profile.jpg"
                alt="Afeefa Rehan"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating badges */}
            <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-6 px-3 py-2 rounded-xl shadow-lg"
              style={{ background: "#fff", border: "1px solid rgba(57,197,87,0.25)", boxShadow: "0 4px 20px rgba(57,197,87,0.12)" }}>
              <span className="text-xs font-mono" style={{ color: "#2aa844" }}>4+ yrs · double shifts</span>
            </motion.div>
            <motion.div animate={{ y: [8, -8, 8] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-6 px-3 py-2 rounded-xl shadow-lg"
              style={{ background: "#fff", border: "1px solid #e8e8e8", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
              <span className="text-xs font-mono" style={{ color: "#888" }}>MERN · AI · LLM</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs font-mono tracking-widest" style={{ color: "#bbb" }}>SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8" style={{ background: "linear-gradient(to bottom, #39C557, transparent)" }} />
      </motion.div>
    </section>
  );
}
