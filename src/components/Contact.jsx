import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { HiPaperAirplane } from "react-icons/hi";
import { personalInfo } from "../data/portfolioData";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOnce } from "../animations/variants";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault(); setStatus("sending");
    setTimeout(() => { setStatus("sent"); setForm({ name: "", email: "", subject: "", message: "" }); }, 1500);
  };

  return (
    <section id="contact" className="py-24" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-16 text-center">
          <motion.span variants={fadeUp} className="section-label block mb-3">08 — Contact</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Let's Connect</motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-xl mx-auto font-body" style={{ color: "#888" }}>
            Available for freelance projects, full-time roles, and AI/ML collaborations.
          </motion.p>
        </motion.div>
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 max-w-5xl mx-auto">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce} className="space-y-4">
            {[
              { Icon: FaEnvelope, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { Icon: FaPhone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              { Icon: FaMapMarkerAlt, label: "Location", value: personalInfo.location, href: null },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="card flex items-center gap-4 rounded-xl p-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(57,197,87,0.1)", border: "1px solid rgba(57,197,87,0.22)", color: "#39C557" }}>
                  <Icon size={14} />
                </div>
                <div>
                  <p className="text-xs font-mono" style={{ color: "#bbb" }}>{label}</p>
                  {href ? <a href={href} className="text-sm font-body transition-colors" style={{ color: "#333" }}>{value}</a>
                    : <p className="text-sm font-body" style={{ color: "#333" }}>{value}</p>}
                </div>
              </div>
            ))}
            <div className="card rounded-xl p-5">
              <p className="text-xs font-mono tracking-widest mb-4" style={{ color: "#bbb" }}>SOCIAL PROFILES</p>
              <div className="flex gap-3">
                {[
                  { Icon: FaGithub, href: personalInfo.github, label: "GitHub" },
                  { Icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                  { Icon: FaInstagram, href: personalInfo.instagram, label: "Instagram" },
                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                    className="flex-1 rounded-lg py-3 flex items-center justify-center transition-all duration-200 border"
                    style={{ border: "1.5px solid #eee", color: "#bbb", background: "#fafafa" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(57,197,87,0.4)"; e.currentTarget.style.color = "#39C557"; e.currentTarget.style.background = "rgba(57,197,87,0.06)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "#eee"; e.currentTarget.style.color = "#bbb"; e.currentTarget.style.background = "#fafafa"; }}>
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="card rounded-2xl p-7">
              <h3 className="font-display font-700 text-lg mb-6" style={{ color: "#111" }}>Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {["name", "email"].map(field => (
                    <div key={field}>
                      <label className="block text-xs font-mono mb-1.5 capitalize" style={{ color: "#bbb" }}>{field}</label>
                      <input type={field === "email" ? "email" : "text"} name={field}
                        value={form[field]} onChange={handleChange} required
                        placeholder={field === "name" ? "Your Name" : "your@email.com"}
                        className="w-full rounded-lg px-4 py-2.5 text-sm font-body focus:outline-none transition-colors"
                        style={{ background: "#fafafa", border: "1.5px solid #e8e8e8", color: "#333" }}
                        onFocus={e => e.target.style.borderColor = "rgba(57,197,87,0.5)"}
                        onBlur={e => e.target.style.borderColor = "#e8e8e8"} />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-mono mb-1.5" style={{ color: "#bbb" }}>Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} required
                    placeholder="Project inquiry / Collaboration"
                    className="w-full rounded-lg px-4 py-2.5 text-sm font-body focus:outline-none transition-colors"
                    style={{ background: "#fafafa", border: "1.5px solid #e8e8e8", color: "#333" }}
                    onFocus={e => e.target.style.borderColor = "rgba(57,197,87,0.5)"}
                    onBlur={e => e.target.style.borderColor = "#e8e8e8"} />
                </div>
                <div>
                  <label className="block text-xs font-mono mb-1.5" style={{ color: "#bbb" }}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full rounded-lg px-4 py-2.5 text-sm font-body focus:outline-none transition-colors resize-none"
                    style={{ background: "#fafafa", border: "1.5px solid #e8e8e8", color: "#333" }}
                    onFocus={e => e.target.style.borderColor = "rgba(57,197,87,0.5)"}
                    onBlur={e => e.target.style.borderColor = "#e8e8e8"} />
                </div>
                <button type="submit" disabled={status === "sending"} className="btn-primary w-full text-sm">
                  <span className="flex items-center justify-center gap-2">
                    {status === "sending" ? (
                      <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Sending...</>
                    ) : status === "sent" ? "✓ Message Sent!" : <><HiPaperAirplane /> Send Message</>}
                  </span>
                </button>
                {status === "sent" && (
                  <p className="text-center text-xs font-mono" style={{ color: "#39C557" }}>
                    Thanks! I'll get back to you soon.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
