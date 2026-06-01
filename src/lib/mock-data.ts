import {
  BarChart3,
  BrainCircuit,
  ClipboardCheck,
  FileText,
  Gauge,
  LayoutDashboard,
  MessageSquareText,
  Timer,
  UploadCloud,
} from "lucide-react";

export const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Resume", href: "/resume" },
  { label: "JD Match", href: "/job-description" },
  { label: "Interview", href: "/interview" },
  { label: "Analytics", href: "/analytics" },
  { label: "Report", href: "/report" },
] as const;

export const landingStats = [
  { value: "92%", label: "avg match clarity" },
  { value: "14", label: "adaptive signals" },
  { value: "3x", label: "faster feedback" },
  { value: "0-100", label: "readiness score" },
];

export const featureCards = [
  {
    title: "Resume intelligence",
    description: "Extract projects, skills, experience level, and evidence from PDF or DOCX resumes.",
    icon: FileText,
  },
  {
    title: "JD matching",
    description: "Compare the resume against role requirements and expose gaps before the interview starts.",
    icon: ClipboardCheck,
  },
  {
    title: "Adaptive interviewer",
    description: "Move between easy, medium, and hard questions based on answer quality and confidence.",
    icon: BrainCircuit,
  },
  {
    title: "Time scoring",
    description: "Track per-question pacing, auto-submit on timeout, and penalize delayed responses.",
    icon: Timer,
  },
];

export const dashboardMetrics = [
  { label: "Readiness", value: "84", unit: "/100", tone: "acid" },
  { label: "JD Match", value: "78", unit: "%", tone: "signal" },
  { label: "Avg Depth", value: "7.9", unit: "/10", tone: "ember" },
  { label: "Time Efficiency", value: "91", unit: "%", tone: "rose" },
];

export const recentSessions = [
  {
    role: "Frontend Engineer",
    company: "Product Studio",
    score: 88,
    difficulty: "Hard",
    status: "Hire-ready",
  },
  {
    role: "Full Stack Developer",
    company: "Fintech API",
    score: 74,
    difficulty: "Medium",
    status: "Practice follow-ups",
  },
  {
    role: "Backend Intern",
    company: "Infra Lab",
    score: 67,
    difficulty: "Medium",
    status: "Needs system design",
  },
];

export const resumeSignals = [
  { label: "React", score: 94 },
  { label: "TypeScript", score: 88 },
  { label: "Node.js", score: 81 },
  { label: "PostgreSQL", score: 72 },
  { label: "System Design", score: 64 },
];

export const extractedResume = {
  skills: ["React", "Next.js", "TypeScript", "REST APIs", "PostgreSQL", "Prisma", "Tailwind"],
  projects: ["AI mock interviewer", "Realtime dashboard", "Resume parser"],
  experience: "2.5 years across frontend-heavy full-stack projects",
  highlights: [
    "Strong UI implementation evidence with measurable product work.",
    "Good API integration experience, but limited explicit scaling examples.",
    "Projects map well to product engineering and dashboard-heavy roles.",
  ],
};

export const jdRequirements = [
  { label: "Next.js + React", match: 95 },
  { label: "TypeScript", match: 88 },
  { label: "PostgreSQL + Prisma", match: 76 },
  { label: "OpenAI API", match: 82 },
  { label: "Production ownership", match: 69 },
  { label: "System design", match: 62 },
];

export const interviewQuestions = [
  {
    id: 1,
    type: "Technical",
    difficulty: "Easy",
    prompt: "Walk me through how you would structure a Next.js feature that uploads a resume and stores the analysis result.",
    idealSignals: ["clear app-router flow", "file validation", "API route boundary", "database persistence"],
    seconds: 80,
  },
  {
    id: 2,
    type: "Scenario",
    difficulty: "Medium",
    prompt: "The JD parser misses important skills in a long job post. How would you debug and improve extraction quality?",
    idealSignals: ["prompt evals", "schema validation", "fallback parsing", "observability"],
    seconds: 90,
  },
  {
    id: 3,
    type: "Behavioral",
    difficulty: "Medium",
    prompt: "Tell me about a time you changed your implementation after receiving feedback. What did you trade off?",
    idealSignals: ["specific context", "tradeoff", "result", "learning"],
    seconds: 75,
  },
  {
    id: 4,
    type: "Technical",
    difficulty: "Hard",
    prompt: "Design the scoring service for adaptive interviews. How do you keep scores consistent across question difficulty?",
    idealSignals: ["rubric normalization", "difficulty weighting", "calibration set", "auditability"],
    seconds: 110,
  },
];

export const evaluationDimensions = [
  { label: "Accuracy", score: 86, color: "bg-acid" },
  { label: "Clarity", score: 91, color: "bg-signal" },
  { label: "Relevance", score: 82, color: "bg-ember" },
  { label: "Depth", score: 74, color: "bg-rose" },
  { label: "Time Efficiency", score: 89, color: "bg-mint" },
];

export const skillBreakdown = [
  { skill: "React / Next.js", score: 92 },
  { skill: "TypeScript", score: 87 },
  { skill: "Backend APIs", score: 79 },
  { skill: "Database Design", score: 73 },
  { skill: "System Design", score: 66 },
  { skill: "Communication", score: 90 },
];

export const strengths = [
  "Explains UI architecture with clear user-flow thinking.",
  "Strong TypeScript and component composition vocabulary.",
  "Good answer pacing under short technical prompts.",
];

export const weaknesses = [
  "Needs more depth around distributed system tradeoffs.",
  "Database indexing and queueing answers were too high level.",
  "Follow-up answers should include stronger measurable outcomes.",
];

export const improvementPlan = [
  "Practice two system design cases focused on scoring pipelines and async processing.",
  "Prepare STAR stories with metrics for feedback, conflict, and ownership questions.",
  "Review PostgreSQL indexing, Prisma transactions, and rate-limit strategies.",
];

export const analyticsTimeline = [
  { label: "Resume", value: 76, icon: UploadCloud },
  { label: "JD Match", value: 78, icon: ClipboardCheck },
  { label: "Interview", value: 84, icon: MessageSquareText },
  { label: "Report", value: 88, icon: BarChart3 },
];

export const workflowSteps = [
  { title: "Upload", description: "Resume and JD enter the analysis pipeline.", icon: UploadCloud },
  { title: "Match", description: "Skills and requirements become an interview blueprint.", icon: LayoutDashboard },
  { title: "Interview", description: "Questions adapt to answer quality and elapsed time.", icon: BrainCircuit },
  { title: "Evaluate", description: "Accuracy, clarity, relevance, depth, and timing are scored.", icon: Gauge },
];
