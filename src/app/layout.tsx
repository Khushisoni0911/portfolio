import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khushi Soni | AI & ML Engineer",
  description: "Portfolio of Khushi Soni — AI & ML Engineer, B.Tech IT at IEM Kolkata. Building intelligent systems in AI, Security & Cloud.",
  keywords: ["Khushi Soni", "AI Engineer", "ML Engineer", "IEM Kolkata", "Portfolio", "Machine Learning", "Python"],
  authors: [{ name: "Khushi Soni" }],
  openGraph: {
    title: "Khushi Soni | AI & ML Engineer",
    description: "Portfolio of Khushi Soni — AI & ML Engineer at IEM Kolkata",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <div className="mesh-bg" />
        {children}
      </body>
    </html>
  );
}
