"use client";
import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p style={{ color: "#f59e0b", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Credentials
          </p>
          <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>Certifications</h2>
          <div style={{ width: 48, height: 3, background: "linear-gradient(90deg, #f59e0b, #ef4444)", borderRadius: 2 }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass"
              style={{
                borderRadius: "18px",
                padding: "1.5rem",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              {/* Left accent */}
              <div style={{
                position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
                background: cert.color, borderRadius: "0 2px 2px 0",
              }} />

              {/* Icon */}
              <div style={{
                width: 42, height: 42, borderRadius: "12px",
                background: `${cert.color}18`,
                border: `1px solid ${cert.color}33`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.3rem",
                marginBottom: "0.9rem",
              }}>
                {cert.icon}
              </div>

              <h4 style={{ fontWeight: 700, fontSize: "0.88rem", color: "var(--text-primary)", marginBottom: "0.4rem", lineHeight: 1.4 }}>
                {cert.name}
              </h4>
              <p style={{ fontSize: "0.76rem", color: "var(--text-muted)" }}>{cert.issuer}</p>

              {/* Subtle glow */}
              <div style={{
                position: "absolute", bottom: -20, right: -20,
                width: 80, height: 80, borderRadius: "50%",
                background: `radial-gradient(circle, ${cert.color}18 0%, transparent 70%)`,
                pointerEvents: "none",
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
