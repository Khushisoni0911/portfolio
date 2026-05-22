export const personalInfo = {
  name: "Khushi Soni",
  title: "Software Engineer",
  tagline: "Building Intelligent Systems at the Intersection of AI, Security & Cloud",
  summary:
    "Software Engineering undergraduate (8.98 CGPA) with a strong analytical foundation in Python, Java, and Data Structures & Algorithms. Hands-on experience developing diverse technical solutions, including real-time web applications with API integration, IoT-based monitoring systems, and AI-driven predictive models. Proven track record of leadership as a GDG Coordinator, demonstrating a commitment to learning emerging technologies and collaborating in high-impact team environments. Eager to apply technical proficiency and research-driven problem-solving skills to build innovative, scalable software and hardware solutions.",
  email: "sonikhushi2728@gmail.com",
  phone: "+91-7482006881",
  location: "Kolkata, India",
  github: "https://github.com/Khushisoni0911",
  linkedin: "https://www.linkedin.com/in/khushi-soni-07861828b",
  profileImage: "/profile.jpeg",
};

export const education = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Institute of Engineering and Management, Kolkata",
    duration: "2023 – 2027",
    score: "CGPA: 8.98 / 10",
    icon: "🎓",
  },
  {
    degree: "Higher Secondary (Class XII)",
    institution: "CBSE Board",
    duration: "2021 – 2023",
    score: "83.4%",
    icon: "📚",
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "CBSE Board",
    duration: "2021",
    score: "94.8%",
    icon: "🏫",
  },
];

export const skills = {
  "Programming Languages": ["Python", "Java", "C"],
  "AI & Machine Learning": ["TensorFlow", "Scikit-learn", "LSTM", "Random Forest", "Time-Series Forecasting", "Generative AI", "Prompt Engineering"],
  "Core CS": ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "SDLC"],
  "Databases": ["MySQL", "Relational Schema Design", "SQL Queries"],
  "Frameworks & Libraries": ["Pandas", "NumPy", "NetworkX", "Flutter"],
  "Cloud & Tools": ["Google Cloud Platform (GCP)", "AWS", "Git", "GitHub", "VS Code"],
  "Emerging Tech": ["Machine Learning", "Cryptography", "IoT", "Blockchain"],
};

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  highlights: string[];
  github: string;
  demo: string;
  badge?: string;
  color: string;
}

export const projects: Project[] = [
  {
    title: "HSPR-PCN",
    subtitle: "Hybrid Secure Predictive Routing for Payment Channel Networks",
    description:
      "An AI-driven routing framework that converts blockchain payment network routing into a data-driven process, achieving a 94% transaction success rate.",
    tech: ["Python", "NetworkX", "Scikit-learn", "Random Forest", "Expected Utility Theory"],
    highlights: [
      "94% transaction success rate achieved",
      "Outperformed shortest-path baselines by 9.67%",
      "60-node scale-free network topology modeled",
      "Privacy-preserving cryptographic latency model",
      "Liquidity-aware path selection",
    ],
    github: "https://github.com/Khushisoni0911",
    demo: "#",
    badge: "Research",
    color: "#8b5cf6",
  },
  {
    title: "PulseOne",
    subtitle: "Real-Time Ambulance Booking System",
    description:
      "A real-time responsive web and mobile application utilizing Flutter and Google Maps API to optimize emergency medical routing with live location tracking.",
    tech: ["Flutter", "Google Maps API", "MySQL", "Web Development"],
    highlights: [
      "Real-time live location tracking & route optimization",
      "Google Maps API integration for navigation",
      "Intuitive UI for emergency booking workflow",
      "Structured MySQL database schema",
      "Instantaneous booking request handling",
    ],
    github: "https://github.com/Khushisoni0911",
    demo: "#",
    badge: "App",
    color: "#00f5ff",
  },
  {
    title: "Energy Forecaster",
    subtitle: "LSTM-Based Energy Load Forecasting System",
    description:
      "An LSTM-based time-series model predicting hourly electricity demand using historical consumption data with engineered temporal features.",
    tech: ["Python", "TensorFlow", "Pandas", "LSTM", "Time-Series Analysis"],
    highlights: [
      "LSTM model for hourly electricity demand prediction",
      "Temporal features for daily/seasonal patterns",
      "Validated using MAE and loss metrics",
      "Confusion matrix evaluation across demand levels",
      "Close alignment between actual and predicted values",
    ],
    github: "https://github.com/Khushisoni0911",
    demo: "#",
    badge: "ML",
    color: "#0066ff",
  },
  {
    title: "PostureSense",
    subtitle: "IoT-Based Body Posture Detection System",
    description:
      "An innovative real-time health monitoring system leveraging Arduino microcontrollers and MPU6050 inertial sensors to detect incorrect sitting postures.",
    tech: ["Arduino", "MPU6050", "IoT", "Web Dashboard"],
    highlights: [
      "Real-time incorrect sitting posture detection",
      "MPU6050 inertial sensor data collection",
      "Instant alert mechanism for posture correction",
      "Web dashboard for posture analytics (in dev)",
      "Actionable health insights output",
    ],
    github: "https://github.com/Khushisoni0911",
    demo: "#",
    badge: "IoT",
    color: "#22c55e",
  },
];

export const certifications = [
  { name: "PwC Advisory Launchpad Learning Program", issuer: "PwC", icon: "🏦", color: "#e05d20" },
  { name: "Cyber Security Fundamentals", issuer: "University of London · Coursera", icon: "🔐", color: "#0066ff" },
  { name: "Classical Cryptosystems and Core Concepts", issuer: "University of Colorado · Coursera", icon: "🔑", color: "#8b5cf6" },
  { name: "Advanced System Security Topics", issuer: "University of Colorado · Coursera", icon: "🛡️", color: "#00f5ff" },
  { name: "Cisco Network Security: Core Security Concepts", issuer: "LinkedIn Learning", icon: "🌐", color: "#0a66c2" },
  { name: "Cloud Computing: Understanding Core Concepts", issuer: "LinkedIn Learning", icon: "☁️", color: "#4a9eff" },
  { name: "Prompt Engineering for Generative AI", issuer: "LinkedIn Learning", icon: "🤖", color: "#22c55e" },
  { name: "Google Cloud Study Jam 2025", issuer: "Google", icon: "🌩️", color: "#fbbc04" },
];

export const achievements = [
  {
    title: "GDG Campus Coordinator",
    subtitle: "Social Media & Outreach · IEM Kolkata",
    description: "Led outreach strategy for the Build On Stellar Bootcamp and Google Cloud Study Jams, resulting in significantly increased student engagement.",
    icon: "🚀",
  },
  {
    title: "HackOasis 2.0",
    subtitle: "Hackathon Participant",
    description: "Participated in a competitive hackathon, collaborating on innovative solutions under tight deadlines.",
    icon: "💻",
  },
  {
    title: "ICELTS Conference",
    subtitle: "Conference Participant",
    description: "Participated in the International Conference on Emerging Learning Technologies and Systems.",
    icon: "🎤",
  },
  {
    title: "SIH 2025",
    subtitle: "Smart India Hackathon",
    description: "Participated in India's largest hackathon, working on solutions for national-level challenges.",
    icon: "🇮🇳",
  },
];

export const research = {
  title: "Hybrid Secure Predictive Routing for Payment Channel Networks (HSPR-PCN)",
  status: "Ongoing",
  description:
    "Developing an AI-driven routing framework to improve transaction success rate in blockchain payment networks by combining machine learning with economic utility theory.",
  points: [
    "Developed hybrid ML/utility-based framework achieving 94% transaction success rate",
    "Optimized Random Forest classifier outperforming shortest-path baselines by 9.67%",
    "Modeled 60-node scale-free network topology in NetworkX",
    "Engineered liquidity-congestion and risk-adjusted reliability features",
    "Integrated Expected Utility Theory with privacy cost model",
    "Designed bidding-based node selection to optimize routing cost",
  ],
  tools: ["Python", "NetworkX", "Scikit-learn", "Random Forest", "Expected Utility Theory"],
};
