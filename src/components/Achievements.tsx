"use client";
import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding" style={{ background: "rgba(0,245,255,0.015)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p style={{ color: "#22c55e", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Milestones
          </p>
          <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>Achievements & Activities</h2>
          <div style={{ width: 48, height: 3, background: "linear-gradient(90deg, #22c55e, #0066ff)", borderRadius: 2 }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass"
              style={{
                borderRadius: "20px",
                padding: "1.75rem",
                position: "relative",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <div style={{
                fontSize: "2.5rem", marginBottom: "1rem",
                filter: "drop-shadow(0 0 12px rgba(0,245,255,0.3))",
              }}>
                {item.icon}
              </div>

              <h3 style={{ fontWeight: 800, fontSize: "1rem", color: "var(--text-primary)", marginBottom: "0.3rem" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.77rem", color: "#00f5ff", fontWeight: 600, marginBottom: "0.75rem" }}>
                {item.subtitle}
              </p>
              <p style={{ fontSize: "0.83rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                {item.description}
              </p>

              {/* Corner glow */}
              <div style={{
                position: "absolute", top: -30, right: -30,
                width: 100, height: 100, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0,245,255,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
