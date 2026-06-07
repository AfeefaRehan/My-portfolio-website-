import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight, FaFilePdf } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { projects } from "../data/portfolioData";
import { fadeUp, scaleIn, staggerContainer, staggerFast, viewportOnce } from "../animations/variants";

const categories = ["All", "Full Stack", "AI/ML", "Data Analytics", "Frontend"];

// ─── Media carousel (read-only, from static files) ──────────────────────────
function MediaCarousel({ media }) {
  const [idx, setIdx] = useState(0);
  if (!media || media.length === 0) return null;

  const prev = () => setIdx(i => (i === 0 ? media.length - 1 : i - 1));
  const next = () => setIdx(i => (i === media.length - 1 ? 0 : i + 1));
  const item = media[idx];

  return (
    <div className="rounded-xl overflow-hidden border mb-4" style={{ borderColor: "#e8e8e8" }}>
      <div className="relative h-56 bg-gray-50">
        {item.type === "video" ? (
          <video src={item.src} controls className="w-full h-full object-cover" />
        ) : (
          <img src={item.src} alt={item.alt || "screenshot"} className="w-full h-full object-cover" />
        )}
        {media.length > 1 && (
          <>
            <button onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all"
              style={{ background: "rgba(255,255,255,0.92)", color: "#333", border: "1px solid #ddd" }}>
              <FaChevronLeft size={12} />
            </button>
            <button onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all"
              style={{ background: "rgba(255,255,255,0.92)", color: "#333", border: "1px solid #ddd" }}>
              <FaChevronRight size={12} />
            </button>
          </>
        )}
        {media.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {media.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className="w-1.5 h-1.5 rounded-full transition-all"
                style={{ background: i === idx ? "#39C557" : "rgba(255,255,255,0.6)" }} />
            ))}
          </div>
        )}
        <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-xs font-mono"
          style={{ background: "rgba(255,255,255,0.85)", color: "#888", border: "1px solid #eee" }}>
          {idx + 1} / {media.length}
        </div>
      </div>
    </div>
  );
}

// ─── Modal ───────────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  const isGreen = project.color === "green";
  const accent = "#39C557";
  const borderCol = isGreen ? "rgba(57,197,87,0.25)" : "#e0e0e0";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}
      onClick={onClose}>
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
        onClick={e => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{ background: "#fff", border: `1.5px solid ${borderCol}`, boxShadow: "0 24px 80px rgba(0,0,0,0.12)" }}>

        {/* Header */}
        <div className="p-6 flex items-start justify-between gap-4" style={{ borderBottom: "1px solid #f0f0f0" }}>
          <div>
            <span className="text-xs font-mono mb-1.5 block" style={{ color: "#39C557" }}>{project.category}</span>
            <h3 className="font-display font-800 text-2xl" style={{ color: "#111" }}>{project.title}</h3>
          </div>
          <button onClick={onClose}
            className="w-9 h-9 rounded-xl flex items-center justify-center border transition-colors flex-shrink-0"
            style={{ border: "1px solid #e8e8e8", color: "#aaa", background: "#fafafa" }}>
            <FaTimes size={13} />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Carousel or placeholder */}
          {project.media && project.media.length > 0 ? (
            <MediaCarousel media={project.media} />
          ) : (
            <div className="h-44 rounded-xl flex items-center justify-center border mb-4"
              style={{ background: "#f8faf8", borderColor: "rgba(57,197,87,0.15)" }}>
              <div className="text-center" style={{ color: "#bbb" }}>
                <HiCode size={32} className="mx-auto mb-2" />
                <span className="text-xs font-mono">
                  Add media to <code className="bg-gray-100 px-1 rounded">public/projects/{project.folder}/</code>
                </span>
              </div>
            </div>
          )}

          <p className="font-body text-sm leading-relaxed" style={{ color: "#666" }}>
            {project.longDescription}
          </p>

          {/* Results (only rendered when a project provides metrics) */}
          {project.metrics && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "#bbb" }}>Results</h4>
              <div className="space-y-4">
                {[project.metrics.classification, project.metrics.regression].filter(Boolean).map((m, mi) => (
                  <div key={mi} className="rounded-xl border overflow-hidden" style={{ borderColor: "#eee" }}>
                    <div className="px-3 py-2 text-xs font-mono" style={{ background: "#f8faf8", color: "#555", borderBottom: "1px solid #f0f0f0" }}>
                      {m.title}
                    </div>
                    <table className="w-full text-sm font-body">
                      <thead>
                        <tr>
                          {m.headers.map((h, hi) => (
                            <th key={hi} className="text-left px-3 py-2"
                              style={{ color: "#999", fontSize: "11px", fontWeight: 600, background: "#fcfcfc", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {m.rows.map((r, ri) => (
                          <tr key={ri} style={{ borderTop: "1px solid #f5f5f5" }}>
                            {r.map((c, ci) => (
                              <td key={ci} className="px-3 py-1.5"
                                style={{ color: ci === 0 ? "#777" : "#222", fontWeight: ci === 1 ? 700 : 400 }}>
                                {c}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="px-3 py-2 text-xs font-mono flex items-center gap-2"
                      style={{ background: "rgba(57,197,87,0.06)", color: "#2aa844", borderTop: "1px solid #f0f0f0" }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#39C557" }} />
                      Best performer: {m.winner}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "#bbb" }}>Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => <span key={t} className="tag text-xs">{t}</span>)}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "#bbb" }}>Key Features</h4>
            <ul className="space-y-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-body" style={{ color: "#666" }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#39C557" }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2">
            <a href={project.github} target="_blank" rel="noreferrer"
              className="btn-outline flex items-center gap-2 text-sm flex-1 justify-center">
              <FaGithub /> GitHub
            </a>
            {project.live && project.live !== "#" && (
              <a href={project.live} target="_blank" rel="noreferrer"
                className="btn-primary flex items-center gap-2 text-sm flex-1 justify-center">
                <span className="flex items-center gap-2"><FaExternalLinkAlt size={11} /> Live Site</span>
              </a>
            )}
            {project.slides && (
              <a href={project.slides} target="_blank" rel="noreferrer"
                className="btn-primary flex items-center gap-2 text-sm flex-1 justify-center">
                <span className="flex items-center gap-2"><FaFilePdf size={12} /> View Slides</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────
export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative" style={{ background: "#f8faf8" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="mb-16 text-center">
          <motion.span variants={fadeUp} className="section-label block mb-3">05 — Projects</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">Featured Work</motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-xl mx-auto font-body text-sm" style={{ color: "#888" }}>
            Real projects — from live deployed platforms to AI-powered tools. Click any card to view details.
          </motion.p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
          className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              className="px-4 py-2 rounded-lg text-sm font-mono transition-all duration-200"
              style={filter === cat
                ? { background: "#39C557", color: "#fff", fontWeight: 600 }
                : { background: "#fff", color: "#888", border: "1px solid #e8e8e8" }}>
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div variants={staggerFast} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map(project => {
              const isGreen = project.color === "green";
              const firstMedia = project.media && project.media[0];

              return (
                <motion.div key={project.id} variants={scaleIn} layout exit={{ opacity: 0, scale: 0.85 }}
                  className="card rounded-2xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelected(project)}>

                  {/* Thumbnail */}
                  <div className="h-44 overflow-hidden relative"
                    style={{ background: isGreen ? "#f0fbf2" : "#f8f8f8", borderBottom: "1px solid #f0f0f0" }}>
                    {firstMedia ? (
                      firstMedia.type === "video"
                        ? <video src={firstMedia.src} className="w-full h-full object-cover" muted />
                        : <img src={firstMedia.src} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center"
                        style={{ color: isGreen ? "#39C557" : "#ccc" }}>
                        <HiCode size={36} className="mb-1 opacity-60" />
                        <span className="text-xs font-mono opacity-60">{project.category}</span>
                      </div>
                    )}
                    {/* Live badge */}
                    {project.live && project.live !== "#" && (
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(57,197,87,0.3)", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-mono" style={{ color: "#2aa844" }}>Live</span>
                      </div>
                    )}
                    {/* Media count badge */}
                    {project.media && project.media.length > 1 && (
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-xs font-mono"
                        style={{ background: "rgba(255,255,255,0.9)", color: "#888", border: "1px solid #eee" }}>
                        {project.media.length} photos
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono" style={{ color: "#39C557" }}>{project.category}</span>
                    </div>
                    <h3 className="font-display font-700 text-base mb-2" style={{ color: "#111" }}>{project.title}</h3>
                    <p className="text-sm font-body leading-relaxed mb-4 line-clamp-2" style={{ color: "#888" }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="tag text-xs">{t}</span>
                      ))}
                      {project.tech.length > 3 && <span className="tag text-xs">+{project.tech.length - 3}</span>}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono" style={{ color: "#39C557" }}>View Details →</span>
                      <div className="flex gap-2">
                        <a href={project.github} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}
                          className="w-7 h-7 rounded-lg flex items-center justify-center border transition-colors"
                          style={{ border: "1px solid #e8e8e8", color: "#bbb", background: "#fafafa" }}>
                          <FaGithub size={12} />
                        </a>
                        {project.live !== "#" && (
                          <a href={project.live} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}
                            className="w-7 h-7 rounded-lg flex items-center justify-center border transition-colors"
                            style={{ border: "1px solid #e8e8e8", color: "#bbb", background: "#fafafa" }}>
                            <FaExternalLinkAlt size={10} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Instruction */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportOnce}
          className="mt-10 text-center p-5 rounded-xl border" style={{ borderColor: "rgba(57,197,87,0.2)", background: "rgba(57,197,87,0.04)" }}>
      
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
