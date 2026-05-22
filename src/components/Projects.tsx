"use client";
import { ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p style={{ color: "#00f5ff", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            What I've Built
          </p>
          <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>Projects</h2>
          <div style={{ width: 48, height: 3, background: "linear-gradient(90deg, #00f5ff, #0066ff)", borderRadius: 2 }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: "1.5rem" }} className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass"
              style={{
                borderRadius: "22px",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                transition: "all 0.3s ease",
              }}
            >
              {/* Top glow line */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${project.color}, transparent)`,
              }} />

              {/* Background glow */}
              <div style={{
                position: "absolute", top: -40, right: -40,
                width: 150, height: 150, borderRadius: "50%",
                background: `radial-gradient(circle, ${project.color}15 0%, transparent 70%)`,
                pointerEvents: "none",
              }} />

              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.3rem" }}>
                    <h3 style={{ fontWeight: 800, fontSize: "1.3rem", color: "var(--text-primary)" }}>
                      {project.title}
                    </h3>
                    {project.badge && (
                      <span style={{
                        fontSize: "0.7rem", fontWeight: 700,
                        padding: "0.2rem 0.65rem", borderRadius: "9999px",
                        background: `${project.color}20`,
                        border: `1px solid ${project.color}50`,
                        color: project.color,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}>
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                    {project.subtitle}
                  </p>
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
                  <motion.a
                    href={project.github} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
                    style={{
                      width: 34, height: 34, borderRadius: "10px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "var(--text-secondary)", textDecoration: "none",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = project.color; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
                  >
                    <GithubIcon size={15} />
                  </motion.a>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                {project.description}
              </p>

              {/* Highlights */}
              <div style={{ marginBottom: "1.5rem" }}>
                {project.highlights.map((h, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.4rem" }}>
                    <ChevronRight size={14} style={{ color: project.color, flexShrink: 0, marginTop: 3 }} />
                    <span style={{ fontSize: "0.83rem", color: "var(--text-secondary)" }}>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {project.tech.map((t) => (
                  <span key={t} style={{
                    fontSize: "0.73rem", fontWeight: 600,
                    padding: "0.25rem 0.65rem", borderRadius: "9999px",
                    background: `${project.color}12`,
                    border: `1px solid ${project.color}25`,
                    color: project.color,
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
