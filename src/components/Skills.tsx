"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  "Programming Languages": "#00f5ff",
  "AI & Machine Learning": "#8b5cf6",
  "Core CS": "#0066ff",
  "Databases": "#22c55e",
  "Frameworks & Libraries": "#f59e0b",
  "Cloud & Tools": "#ef4444",
  "Emerging Tech": "#ec4899",
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ background: "rgba(0,245,255,0.015)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p style={{ color: "#00f5ff", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            What I Know
          </p>
          <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>Technical Skills</h2>
          <div style={{ width: 48, height: 3, background: "linear-gradient(90deg, #00f5ff, #0066ff)", borderRadius: 2 }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {Object.entries(skills).map(([category, items], i) => {
            const color = categoryColors[category] || "#00f5ff";
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass"
                style={{
                  borderRadius: "18px",
                  padding: "1.5rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top accent */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                  background: `linear-gradient(90deg, ${color}, transparent)`,
                }} />

                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: color, boxShadow: `0 0 8px ${color}`,
                  }} />
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: color }}>
                    {category}
                  </h3>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {items.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 + j * 0.04 }}
                      whileHover={{ scale: 1.05 }}
                      style={{
                        display: "inline-flex",
                        padding: "0.3rem 0.75rem",
                        borderRadius: "9999px",
                        fontSize: "0.78rem",
                        fontWeight: 500,
                        background: `${color}14`,
                        border: `1px solid ${color}33`,
                        color: color,
                        cursor: "default",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = `${color}28`;
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 10px ${color}44`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = `${color}14`;
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
