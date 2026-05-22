"use client";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setTimeout(() => setStatus("sent"), 800);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "3.5rem", textAlign: "center" }}
        >
          <p style={{ color: "#00f5ff", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Let's Connect
          </p>
          <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>Get In Touch</h2>
          <div style={{ width: 48, height: 3, background: "linear-gradient(90deg, #00f5ff, #0066ff)", borderRadius: 2, margin: "0 auto" }} />
          <p style={{ marginTop: "1rem", color: "var(--text-secondary)", maxWidth: 500, margin: "1rem auto 0" }}>
            Whether it's a collaboration, internship, or just a conversation about AI — I'm always open!
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "2.5rem", alignItems: "start", maxWidth: 900, margin: "0 auto" }} className="contact-grid">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass" style={{ borderRadius: "20px", padding: "2rem" }}>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                Contact Details
              </h3>

              {[
                { icon: <Mail size={16} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <Phone size={16} />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: <MapPin size={16} />, label: "Location", value: personalInfo.location },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", marginBottom: "1.25rem", alignItems: "flex-start" }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: "10px", flexShrink: 0,
                    background: "rgba(0,245,255,0.08)",
                    border: "1px solid rgba(0,245,255,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#00f5ff",
                  }}>{item.icon}</div>
                  <div>
                    <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.2rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} style={{ fontSize: "0.88rem", color: "var(--text-secondary)", textDecoration: "none" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#00f5ff")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Social */}
              <div style={{ borderTop: "1px solid rgba(0,245,255,0.08)", paddingTop: "1.25rem", marginTop: "0.5rem" }}>
                <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Social</p>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  {[
                    { icon: <GithubIcon size={17} />, href: personalInfo.github, label: "GitHub" },
                    { icon: <LinkedinIcon size={17} />, href: personalInfo.linkedin, label: "LinkedIn" },
                  ].map((s) => (
                    <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      style={{
                        width: 40, height: 40, borderRadius: "11px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: "rgba(0,245,255,0.06)",
                        border: "1px solid rgba(0,245,255,0.15)",
                        color: "var(--text-secondary)", textDecoration: "none",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#00f5ff"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass"
            style={{ borderRadius: "20px", padding: "2rem" }}
          >
            <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
              Send a Message
            </h3>

            {[
              { label: "Your Name", key: "name", type: "text", placeholder: "Jane Doe" },
              { label: "Your Email", key: "email", type: "email", placeholder: "jane@example.com" },
            ].map((field) => (
              <div key={field.key} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  value={(formData as any)[field.key]}
                  onChange={(e) => setFormData(prev => ({ ...prev, [field.key]: e.target.value }))}
                  style={{
                    width: "100%", padding: "0.7rem 1rem",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(0,245,255,0.12)",
                    color: "var(--text-primary)",
                    fontSize: "0.9rem",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "rgba(0,245,255,0.4)"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(0,245,255,0.12)"}
                />
              </div>
            ))}

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Hi Khushi, I'd love to connect about..."
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                style={{
                  width: "100%", padding: "0.7rem 1rem",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(0,245,255,0.12)",
                  color: "var(--text-primary)",
                  fontSize: "0.9rem",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "inherit",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => e.target.style.borderColor = "rgba(0,245,255,0.4)"}
                onBlur={(e) => e.target.style.borderColor = "rgba(0,245,255,0.12)"}
              />
            </div>

            <motion.button
              type="submit"
              disabled={status !== "idle"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-cyan"
              style={{ width: "100%", justifyContent: "center", opacity: status !== "idle" ? 0.7 : 1 }}
            >
              <Send size={15} />
              {status === "idle" ? "Send Message" : status === "sending" ? "Opening mail..." : "✓ Message Ready!"}
            </motion.button>
          </motion.form>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: var(--text-muted); }
      `}</style>
    </section>
  );
}
