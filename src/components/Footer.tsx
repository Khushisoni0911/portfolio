"use client";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(0,245,255,0.08)",
      padding: "2.5rem 0",
      position: "relative",
    }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          {/* Left: Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
              <div style={{
                width: 30, height: 30, borderRadius: "8px",
                background: "linear-gradient(135deg, #00f5ff, #0066ff)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 900, fontSize: "0.8rem", color: "#020b18"
              }}>KS</div>
              <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>Khushi Soni</span>
            </div>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              AI & ML Engineer · IEM Kolkata
            </p>
          </div>

          {/* Right: Social */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {[
              { icon: <GithubIcon size={16} />, href: personalInfo.github },
              { icon: <LinkedinIcon size={16} />, href: personalInfo.linkedin },
              { icon: <Mail size={16} />, href: `mailto:${personalInfo.email}` },
            ].map((s, i) => (
              <motion.a
                key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                style={{
                  width: 36, height: 36, borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(0,245,255,0.06)",
                  border: "1px solid rgba(0,245,255,0.1)",
                  color: "var(--text-muted)", textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#00f5ff"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div style={{
          borderTop: "1px solid rgba(0,245,255,0.05)",
          marginTop: "1.5rem", paddingTop: "1.5rem",
          textAlign: "center",
          fontSize: "0.78rem", color: "var(--text-muted)",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "0.3rem",
        }}>
          Made with <Heart size={12} style={{ color: "#ef4444" }} fill="#ef4444" /> by Khushi Soni · {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
