import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "About",          href: "#about" },
  { label: "Education",      href: "#education" },
  { label: "Experience",     href: "#experience" },
  { label: "Skills",         href: "#skills" },
  { label: "Projects",       href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact",        href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleLink = (href) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <>
      {/* ── Main bar ──────────────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.55 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={scrolled
          ? { background: "rgba(255,255,255,0.97)", backdropFilter: "blur(16px)", borderBottom: "1px solid #ebebeb", padding: "10px 0", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }
          : { padding: "18px 0", background: "rgba(255,255,255,0.7)", backdropFilter: "blur(8px)" }
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

          {/* Logo */}
          <a href="#hero" className="font-display font-800 text-xl tracking-tight flex-shrink-0">
            <span style={{ color: "#111" }}>Afeefa</span>
            <span style={{ color: "#39C557" }}> Rehan</span>
            <span style={{ color: "#39C557" }}>.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-0.5">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleLink(link.href)}
                  className="px-3 py-2 text-sm font-body rounded-lg transition-all duration-200 block"
                  style={{
                    color:      active === link.href ? "#39C557" : "#555",
                    background: active === link.href ? "rgba(57,197,87,0.08)" : "transparent",
                    fontWeight: active === link.href ? 600 : 400,
                  }}
                  onMouseEnter={e => { if (active !== link.href) { e.currentTarget.style.color = "#39C557"; e.currentTarget.style.background = "rgba(57,197,87,0.06)"; }}}
                  onMouseLeave={e => { if (active !== link.href) { e.currentTarget.style.color = "#555"; e.currentTarget.style.background = "transparent"; }}}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a href="#contact" className="hidden md:inline-block btn-primary text-sm flex-shrink-0">
            <span>Contact Me</span>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all"
            style={{ border: "1.5px solid #e8e8e8", background: open ? "rgba(57,197,87,0.08)" : "#fff", color: open ? "#39C557" : "#555" }}
            aria-label="Toggle menu"
          >
            {open ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile drawer ─────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: "rgba(0,0,0,0.25)", backdropFilter: "blur(2px)" }}
              onClick={() => setOpen(false)}
            />

            {/* Slide-down panel */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-[64px] left-3 right-3 z-50 md:hidden rounded-2xl overflow-hidden"
              style={{ background: "#fff", border: "1px solid #e8e8e8", boxShadow: "0 16px 48px rgba(0,0,0,0.12)" }}
            >
              {/* Nav items */}
              <nav className="px-4 pt-4 pb-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleLink(link.href)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl mb-1 text-sm font-body transition-all"
                    style={{
                      color:      active === link.href ? "#2aa844" : "#333",
                      background: active === link.href ? "rgba(57,197,87,0.09)" : "transparent",
                      fontWeight: active === link.href ? 600 : 400,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(57,197,87,0.07)"; e.currentTarget.style.color = "#39C557"; }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = active === link.href ? "rgba(57,197,87,0.09)" : "transparent";
                      e.currentTarget.style.color      = active === link.href ? "#2aa844" : "#333";
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: active === link.href ? "#39C557" : "#ddd" }} />
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Divider + CTA */}
              <div className="px-4 pb-5 pt-2" style={{ borderTop: "1px solid #f0f0f0" }}>
                <a href="#contact" onClick={() => setOpen(false)}
                  className="btn-primary w-full text-center block text-sm mt-3">
                  <span>Contact Me</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
