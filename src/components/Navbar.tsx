"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 1.5rem",
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(2, 11, 24, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,245,255,0.08)" : "none",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.04 }}
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <span style={{
              width: 36, height: 36, borderRadius: "10px",
              background: "linear-gradient(135deg, #00f5ff, #0066ff)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 900, fontSize: "1rem", color: "#020b18"
            }}>KS</span>
            <span style={{ fontWeight: 700, fontSize: "1.05rem", letterSpacing: "-0.01em", color: "var(--text-primary)" }}>
              Khushi Soni
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden-mobile">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ color: "#00f5ff" }}
                onClick={() => setActive(link.href)}
                style={{
                  padding: "0.45rem 0.9rem",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  color: active === link.href ? "#00f5ff" : "var(--text-secondary)",
                  transition: "all 0.2s ease",
                  letterSpacing: "0.01em",
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Right controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: 38, height: 38,
                borderRadius: "10px",
                background: "rgba(0,245,255,0.08)",
                border: "1px solid rgba(0,245,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "#00f5ff",
              }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            {/* Mobile menu toggle */}
            <motion.button
              className="show-mobile"
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
              style={{
                width: 38, height: 38, borderRadius: "10px",
                background: "rgba(0,245,255,0.08)",
                border: "1px solid rgba(0,245,255,0.15)",
                display: "none", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "#00f5ff",
              }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed", top: 72, left: 0, right: 0, zIndex: 99,
              background: "rgba(2,11,24,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(0,245,255,0.1)",
              padding: "1.5rem",
              display: "flex", flexDirection: "column", gap: "0.5rem",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "10px",
                  fontSize: "1rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  color: "var(--text-secondary)",
                  background: "rgba(0,245,255,0.04)",
                  border: "1px solid rgba(0,245,255,0.08)",
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
