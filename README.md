# CareerIQ

AI-powered mock interview platform for technical candidates. CareerIQ analyzes resumes and job descriptions, runs adaptive interview sessions, scores answers across multiple dimensions, and generates a hiring-readiness report.

## Features

- Resume upload UI for PDF/DOCX files
- Job description analysis and resume-vs-JD match scoring
- Adaptive AI interviewer flow with easy, medium, and hard difficulty states
- Per-question timer with auto-submit behavior and time efficiency scoring
- Answer scoring dimensions: accuracy, clarity, relevance, depth, and time efficiency
- Early termination logic scaffold for consistently weak performance
- Final report with readiness score, skill breakdown, strengths, weaknesses, and improvement suggestions
- Modern responsive UI inspired by high-contrast editorial layouts with neon signal accents

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- PostgreSQL + Prisma
- OpenAI API
- Clerk Authentication
- Vercel-ready deployment structure

## Getting Started

```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

On Windows, the npm scripts automatically use the installed Next.js WASM compiler fallback if the native SWC binary cannot load.

## Environment Variables

Create `.env` from `.env.example` and fill in:

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/careeriq"
OPENAI_API_KEY="sk-your-openai-key"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_your-clerk-key"
CLERK_SECRET_KEY="sk_test_your-clerk-secret"
CLERK_WEBHOOK_SECRET="whsec_your-webhook-secret"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

The UI runs with polished mock data when keys are not configured. The `/api/interview/evaluate` route falls back to deterministic heuristic scoring if `OPENAI_API_KEY` is missing.

## Database

Generate the Prisma client:

```bash
npm run prisma:generate
```

Run a local migration after PostgreSQL is available:

```bash
npm run prisma:migrate
```

## Folder Structure

```text
src/
  app/
    api/interview/evaluate/
    analytics/
    dashboard/
    interview/
    job-description/
    report/
    resume/
  components/
  lib/
prisma/
  schema.prisma
```

## Deployment

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Add the environment variables in Vercel project settings.
4. Connect a managed PostgreSQL database and run Prisma migrations.
5. Configure Clerk callback URLs for the deployed domain.

## Roadmap

- Add real PDF/DOCX parsing and file storage.
- Persist interview sessions and reports with Prisma.
- Add Clerk-protected dashboard routes.
- Add OpenAI rubric calibration and prompt evaluation fixtures.
- Export final report to PDF.
