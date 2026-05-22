"use client";
import { Mail, ArrowDown, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* Animated grid dots */}
      <div className="grid-dots" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />

      {/* Glowing orbs */}
      <div style={{
        position: "absolute", top: "15%", left: "5%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,100,255,0.12) 0%, transparent 70%)",
        filter: "blur(40px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "5%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,245,255,0.08) 0%, transparent 70%)",
        filter: "blur(40px)", pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "4rem",
          alignItems: "center",
        }} className="hero-grid">

          {/* Left: Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.4rem 1rem",
                borderRadius: "9999px",
                background: "rgba(0,245,255,0.08)",
                border: "1px solid rgba(0,245,255,0.2)",
                marginBottom: "1.5rem",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#00f5ff",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              <Sparkles size={12} />
              Open to Opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                marginBottom: "1rem",
              }}
            >
              {personalInfo.name.split(" ").map((word, i) => (
                <span key={i} style={{ display: "block" }}>
                  {i === 0 ? (
                    <span style={{ color: "var(--text-primary)" }}>{word}</span>
                  ) : (
                    <span className="gradient-text">{word}</span>
                  )}
                </span>
              ))}
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                fontWeight: 600,
                color: "var(--text-secondary)",
                marginBottom: "1rem",
                letterSpacing: "0.02em",
              }}
            >
              {personalInfo.title} &nbsp;·&nbsp; IEM Kolkata &nbsp;·&nbsp; 8.98 CGPA
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                maxWidth: 520,
                lineHeight: 1.7,
                marginBottom: "2.5rem",
              }}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}
            >
              <a href="#projects" className="btn-cyan">
                View My Work
              </a>
              <a href="#contact" className="btn-ghost">
                Get In Touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              style={{ display: "flex", gap: "0.75rem" }}
            >
              {[
                { href: personalInfo.github, icon: <GithubIcon size={18} />, label: "GitHub" },
                { href: personalInfo.linkedin, icon: <LinkedinIcon size={18} />, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`, icon: <Mail size={18} />, label: "Email" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  title={s.label}
                  style={{
                    width: 42, height: 42,
                    borderRadius: "12px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(0,245,255,0.06)",
                    border: "1px solid rgba(0,245,255,0.15)",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#00f5ff";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,245,255,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,245,255,0.15)";
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="hero-image float-anim"
            style={{ position: "relative" }}
          >
            {/* Glow ring */}
            <div style={{
              position: "absolute", inset: -3,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #00f5ff, #0066ff, #8b5cf6)",
              zIndex: 0,
              filter: "blur(0px)",
            }} />
            <div style={{
              position: "absolute", inset: -12,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,245,255,0.2) 0%, transparent 70%)",
              zIndex: 0,
              filter: "blur(12px)",
            }} />

            {/* Image */}
            <div style={{
              position: "relative", zIndex: 1,
              width: 280, height: 280,
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid var(--bg-dark)",
            }}>
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
            </div>

          </motion.div>
        </div>
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            gap: "0.5rem", marginTop: "4rem",
            color: "var(--text-muted)", fontSize: "0.78rem",
            letterSpacing: "0.08em", textTransform: "uppercase",
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown size={18} />
          </motion.div>
          Scroll to explore
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-image {
            display: flex;
            justify-content: center;
            order: -1;
          }
          .hero-image > div:last-child { right: 0 !important; }
        }
      `}</style>
    </section>
  );
}
