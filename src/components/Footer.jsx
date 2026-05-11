import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import { personalInfo } from "../data/portfolioData";

const navLinks = [
  { label: "About",        href: "#about" },
  { label: "Education",    href: "#education" },
  { label: "Experience",   href: "#experience" },
  { label: "Skills",       href: "#skills" },
  { label: "Projects",     href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact",      href: "#contact" },
];

const socials = [
  { Icon: FaGithub,    href: personalInfo.github,              label: "GitHub" },
  { Icon: FaLinkedin,  href: personalInfo.linkedin,            label: "LinkedIn" },
  { Icon: FaInstagram, href: personalInfo.instagram,           label: "Instagram" },
  { Icon: FaEnvelope,  href: `mailto:${personalInfo.email}`,   label: "Email" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #e0e0e0", background: "#f2f2f2" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        {/* ── Top grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-display font-800 text-2xl mb-3">
              <span style={{ color: "#111" }}>Afeefa</span>
              <span style={{ color: "#39C557" }}> Rehan</span>
              <span style={{ color: "#39C557" }}>.</span>
            </div>
            <p className="text-sm font-body leading-relaxed" style={{ color: "#444", maxWidth: "280px" }}>
              AI Prompt Engineer, LLM Evaluator &amp; Full Stack Developer based in Lahore, Pakistan.
            </p>
            {/* Social icons — shown here on mobile, hidden on lg (shown in Connect col) */}
            <div className="flex gap-3 mt-5 lg:hidden">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                  style={{ border: "1.5px solid #d0d0d0", color: "#555", background: "#fff" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#39C557"; e.currentTarget.style.color = "#39C557"; e.currentTarget.style.background = "rgba(57,197,87,0.07)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#d0d0d0"; e.currentTarget.style.color = "#555"; e.currentTarget.style.background = "#fff"; }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest mb-5"
              style={{ color: "#39C557" }}>Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href}
                    className="text-sm font-body transition-colors"
                    style={{ color: "#444" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#39C557"}
                    onMouseLeave={e => e.currentTarget.style.color = "#444"}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect — only on lg+ */}
          <div className="hidden lg:block">
            <h4 className="font-mono text-xs uppercase tracking-widest mb-5"
              style={{ color: "#39C557" }}>Connect</h4>
            <div className="flex gap-3 mb-4">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                  style={{ border: "1.5px solid #d0d0d0", color: "#555", background: "#fff" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#39C557"; e.currentTarget.style.color = "#39C557"; e.currentTarget.style.background = "rgba(57,197,87,0.07)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#d0d0d0"; e.currentTarget.style.color = "#555"; e.currentTarget.style.background = "#fff"; }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <p className="text-sm font-mono break-all" style={{ color: "#444" }}>
              {personalInfo.email}
            </p>
          </div>

        </div>

        {/* ── Bottom bar ───────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid #e0e0e0" }}>

          <p className="text-xs font-mono text-center sm:text-left" style={{ color: "#777" }}>
            © {new Date().getFullYear()} Afeefa Rehan. All rights reserved.
          </p>

          <motion.a href="#hero" whileHover={{ y: -3 }}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
            style={{ border: "1.5px solid #d0d0d0", color: "#555", background: "#fff" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#39C557"; e.currentTarget.style.color = "#39C557"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#d0d0d0"; e.currentTarget.style.color = "#555"; }}
            aria-label="Back to top">
            <HiArrowUp size={14} />
          </motion.a>
        </div>

      </div>
    </footer>
  );
}
