"use client";
import { motion } from "framer-motion";
import { research } from "@/data/portfolio";
import { FlaskConical, CheckCircle2 } from "lucide-react";

export default function Research() {
  return (
    <section id="research" className="section-padding" style={{ background: "rgba(139,92,246,0.02)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p style={{ color: "#8b5cf6", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Academic Work
          </p>
          <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>Research</h2>
          <div style={{ width: 48, height: 3, background: "linear-gradient(90deg, #8b5cf6, #0066ff)", borderRadius: 2 }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass"
          style={{
            borderRadius: "24px",
            padding: "2.5rem",
            position: "relative",
            overflow: "hidden",
            maxWidth: 860,
          }}
        >
          {/* Purple glow */}
          <div style={{
            position: "absolute", top: -60, right: -60,
            width: 250, height: 250, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #8b5cf6, #0066ff, transparent)" }} />

          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{
              width: 48, height: 48, borderRadius: "14px", flexShrink: 0,
              background: "rgba(139,92,246,0.15)",
              border: "1px solid rgba(139,92,246,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <FlaskConical size={22} color="#8b5cf6" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.3rem" }}>
                <h3 style={{ fontWeight: 800, fontSize: "1.15rem", color: "var(--text-primary)", lineHeight: 1.3 }}>
                  {research.title}
                </h3>
                <span style={{
                  fontSize: "0.7rem", fontWeight: 700,
                  padding: "0.25rem 0.7rem", borderRadius: "9999px",
                  background: "rgba(251,191,36,0.15)",
                  border: "1px solid rgba(251,191,36,0.35)",
                  color: "#fbbf24",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}>
                  {research.status}
                </span>
              </div>
            </div>
          </div>

          <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
            {research.description}
          </p>

          {/* Key contributions */}
          <h4 style={{ fontWeight: 700, fontSize: "0.85rem", color: "#8b5cf6", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>
            Key Contributions
          </h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "0.6rem", marginBottom: "1.75rem" }}>
            {research.points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}
              >
                <CheckCircle2 size={15} style={{ color: "#8b5cf6", flexShrink: 0, marginTop: 3 }} />
                <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{point}</span>
              </motion.div>
            ))}
          </div>

          {/* Tools */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "0.85rem", color: "#8b5cf6", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
              Tools & Technologies
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {research.tools.map((tool) => (
                <span key={tool} style={{
                  fontSize: "0.78rem", fontWeight: 600,
                  padding: "0.3rem 0.85rem", borderRadius: "9999px",
                  background: "rgba(139,92,246,0.12)",
                  border: "1px solid rgba(139,92,246,0.3)",
                  color: "#8b5cf6",
                }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
