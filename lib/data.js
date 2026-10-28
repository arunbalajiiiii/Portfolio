export const profile = {
  name: "Arun Balaji M",
  role: "Software Developer | AI & Backend Developer",
  tagline: "Building practical AI-powered applications and scalable software solutions.",
  location: "Chennai, India",
  email: "arunbalaji232@gmail.com",
  github: "https://github.com/arunbalajiiiii",
  linkedin: "https://www.linkedin.com/in/arun-balaji-21293b290/",
  instagram: "", // add your Instagram URL to show it in the footer
  cv: "/resume.pdf",
  photo: "/images/profile.png",
  about: "I am an engineering student at Velammal Engineering College with an interest in software development, generative AI, backend engineering, and cloud computing. I enjoy building practical applications that solve real-world problems using Python, React, APIs, and AI technologies. I am looking for opportunities to contribute to real products while strengthening my technical skills.",
  aboutSkills: ["Python", "Java", "C", "C++", "HTML", "CSS", "JavaScript", "React.js", "FastAPI", "Flask", "Django", "SQL", "PostgreSQL", "MySQL", "Git", "GitHub", "REST APIs", "Generative AI", "Cloud Computing"],
  education: { degree: "B.E. Computer Science and Engineering", school: "Velammal Engineering College", place: "Chennai, India", year: "2027" },
  experience: [
    { when: "Jun to Jul 2026", title: "Full Stack Developer Intern", org: "CodeAlpha", text: "Worked on full-stack development with React and Node.js on the app side and a FastAPI backend, with code review from senior mentors." },
    { when: "Dec 21, 2025 to Jan 6, 2026", title: "Cloud Computing Intern", org: "Altruisty", text: "Gained exposure to cloud services, deployment models, virtualization, storage, compute resources, and cloud workflows." }
  ],
  certifications: ["Deep Learning (NPTEL)", "Natural Language Processing (NPTEL)", "Python with Data Science (IBM)", "Object-Oriented Programming (Udemy)", "Database Management Systems (Udemy)", "Machine Learning Foundations (AWS)", "Introduction to Cloud (AWS)"],
  achievements: ["Participated in a college-level hackathon.", "Participated in a CIT college event (Duo Developers).", "Won 3rd prize in Math Mania in college.", "Participated in the Niral 3.0 Hackathon.", "Participated in the AWS AI Ascend Hackathon."]
};

export const skills = [
  { group: "Languages", items: ["Python", "Java", "C", "C++", "TypeScript", "JavaScript", "SQL", "HTML", "CSS"] },
  { group: "Web and backend", items: ["React.js", "AngularJS", "Redux", "Context API", "Node.js", "FastAPI", "Flask", "Django", "REST APIs", "WordPress"] },
  { group: "AI and automation", items: ["Generative AI", "Prompt Engineering", "RAG", "Gemini API", "OpenAI API", "Claude API", "LLM APIs", "Playwright"] },
  { group: "Data and cloud", items: ["PostgreSQL", "MySQL", "Supabase", "pgvector", "Cloud Computing"] },
  { group: "Tools and core", items: ["Git", "GitHub", "Cursor", "Object-Oriented Programming", "Problem-Solving", "Team Leadership"] }
];

const gh = "https://github.com/arunbalajiiiii";
export const projects = [
  {
    slug: "voice-assistant", title: "Multilingual GenAI Voice Assistant for Telecom Customer Care",
    tagline: "A GenAI voice assistant for telecom customer care.",
    summary: "A multilingual voice assistant that handles billing queries, plan recommendations, service requests, and technical troubleshooting. Supports English, Hinglish, and Tanglish, with escalation to human agents.",
    stack: ["React.js", "Flask", "Gemini Live API"],
    features: ["Billing queries", "Plan recommendations", "Service requests", "Technical troubleshooting", "English, Hinglish, and Tanglish support", "Escalation to human agents"],
    live: "", repo: gh
  },
  {
    slug: "deprex", title: "Deprex",
    tagline: "An AI-powered early-support platform.",
    summary: "An AI-powered early-support platform featuring an AI companion, mood journaling, PHQ-9 screening, and mental health resources.",
    stack: ["React.js", "FastAPI", "SQLite"],
    features: ["AI companion", "Mood journaling", "PHQ-9 screening", "Mental health resources"],
    live: "", repo: gh
  },
  {
    slug: "job-prep-tool", title: "AI Job Preparation Tool",
    tagline: "From job description to a personalised learning path.",
    summary: "An application that analyzes job descriptions, identifies skill gaps, generates interview questions, and recommends personalized learning paths.",
    stack: ["Python", "AI APIs", "Full-Stack Development"],
    features: ["Job description analysis", "Skill gap identification", "Interview question generation", "Personalised learning paths"],
    live: "", repo: gh
  },
  {
    slug: "outreach-bot", title: "AI-Powered LinkedIn Outreach Bot",
    tagline: "Prospect research and outreach, automated.",
    summary: "An automation tool that extracts professional profile information and generates personalized LinkedIn outreach messages to support prospect research and lead generation.",
    stack: ["Python", "Playwright", "AI APIs"],
    features: ["Professional profile information extraction", "Personalised outreach message generation", "Support for prospect research and lead generation"],
    live: "", repo: gh
  },
  {
    slug: "projectflow", title: "ProjectFlow: Collaborative Kanban & Project Management",
    tagline: "A Kanban-style project management application.",
    summary: "A project management application designed to organize tasks, track progress, and streamline workflows using a Kanban-style interface. It helps users manage projects, prioritize tasks, and monitor progress through different stages of completion.",
    stack: ["HTML", "CSS", "JavaScript"], // confirm your actual stack
    features: ["Task organization", "Kanban boards", "Project tracking", "Responsive user interface"],
    live: "", repo: gh
  },
  {
    slug: "swiftmove", title: "SwiftMove: Packers & Movers Website",
    tagline: "A modern website for a relocation service provider.",
    summary: "A modern, responsive website for a packers and movers service provider, designed to showcase relocation services and generate customer inquiries. It features home and office relocation, vehicle transportation, packing, storage, and international moving services.",
    stack: ["HTML", "CSS", "JavaScript"], // confirm your actual stack
    features: ["Responsive design", "Service showcase", "Moving process timeline", "Contact information", "Interactive quote request form"],
    live: "", repo: gh
  }
];
