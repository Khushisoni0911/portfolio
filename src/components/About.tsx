"use client";
import { motion } from "framer-motion";
import { personalInfo, education } from "@/data/portfolio";
import { MapPin, Mail, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const } }),
};

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p style={{ color: "#00f5ff", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Who I Am
          </p>
          <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>About Me</h2>
          <div style={{ width: 48, height: 3, background: "linear-gradient(90deg, #00f5ff, #0066ff)", borderRadius: 2 }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="about-grid">
          {/* Left: Summary + contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass" style={{ borderRadius: "20px", padding: "2rem", marginBottom: "1.5rem" }}>
              <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--text-secondary)" }}>
                {personalInfo.summary}
              </p>
            </div>

            {/* Contact info */}
            <div className="glass" style={{ borderRadius: "20px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>
                Contact Info
              </h3>
              {[
                { icon: <Mail size={15} />, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <Phone size={15} />, text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: <MapPin size={15} />, text: personalInfo.location },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ color: "#00f5ff" }}>{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} style={{ color: "var(--text-secondary)", fontSize: "0.9rem", textDecoration: "none" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#00f5ff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
                      {item.text}
                    </a>
                  ) : (
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Education timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--text-primary)" }}>
              Education
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="glass"
                  style={{
                    borderRadius: "16px",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Accent line */}
                  <div style={{
                    position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
                    background: i === 0 ? "linear-gradient(to bottom, #00f5ff, #0066ff)" : "rgba(0,245,255,0.2)",
                    borderRadius: "0 2px 2px 0",
                  }} />

                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{edu.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.25rem" }}>
                      <h4 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)" }}>{edu.degree}</h4>
                      <span style={{ fontSize: "0.75rem", color: "#00f5ff", fontWeight: 600, background: "rgba(0,245,255,0.1)", padding: "0.2rem 0.6rem", borderRadius: "20px" }}>
                        {edu.duration}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "0.2rem" }}>{edu.institution}</p>
                    <p style={{ fontSize: "0.82rem", color: "#00f5ff", fontWeight: 600, marginTop: "0.3rem" }}>{edu.score}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
