"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BrainCircuit, ArrowRight, Eye, EyeOff, Mail, Lock, Sparkles, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      console.log("Login submit: navigating to /dashboard");
      await router.push("/dashboard");
    } catch (err) {
      console.error("Error during login redirect:", err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSocialLogin() {
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Social login: navigating to /dashboard");
      await router.push("/dashboard");
    } catch (err) {
      console.error("Error during social login redirect:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative z-10 flex min-h-screen w-full overflow-hidden">

      {/* ── Left panel: branding ── */}
      <div className="hidden lg:flex lg:w-[52%] flex-col justify-between p-12 relative overflow-hidden">

        {/* Glow orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-32 size-[32rem] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(146,242,59,0.18) 0%, transparent 70%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 size-[24rem] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(41,211,196,0.12) 0%, transparent 70%)" }}
        />

        {/* Brand */}
        <Link href="/" className="inline-flex items-center gap-2.5 w-fit" aria-label="CareerIQ home">
          <span className="grid size-9 place-items-center rounded-full bg-acid text-ink shadow-glow">
            <BrainCircuit className="size-5" aria-hidden="true" />
          </span>
          <span className="text-sm font-black uppercase tracking-widest text-white">CareerIQ</span>
        </Link>

        {/* Headline */}
        <div className="space-y-8">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-acid/25 bg-acid/8 px-3 py-1.5 text-xs font-black uppercase text-acid">
              <Sparkles className="size-3.5" aria-hidden="true" />
              AI Mock Interview Platform
            </p>
            <h1 className="text-balance text-5xl font-black leading-[1] text-white xl:text-6xl">
              Your career&nbsp;journey starts&nbsp;here.
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-white/52">
              Resume analysis, adaptive AI interviews, time scoring, and a hiring-readiness report — all in one session.
            </p>
          </div>

          {/* Feature pills */}
          <ul className="flex flex-col gap-3">
            {[
              "Resume & JD smart matching",
              "Adaptive difficulty per answer",
              "Hiring-readiness report",
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-3 text-sm text-white/68">
                <CheckCircle2 className="size-4 shrink-0 text-acid" aria-hidden="true" />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Stats row */}
        <div className="flex gap-8">
          {[
            { label: "Candidates", value: "12k+" },
            { label: "Interviews run", value: "38k+" },
            { label: "Offer rate lift", value: "3.2×" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-black text-white">{s.value}</p>
              <p className="text-xs text-white/40 uppercase font-semibold tracking-wider mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right panel: form ── */}
      <div className="flex flex-1 items-center justify-center px-5 py-12 lg:px-10">
        <div className="w-full max-w-[420px] space-y-7">

          {/* Mobile brand */}
          <div className="flex lg:hidden items-center gap-2.5 mb-2">
            <span className="grid size-8 place-items-center rounded-full bg-acid text-ink shadow-glow">
              <BrainCircuit className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-black uppercase tracking-widest text-white">CareerIQ</span>
          </div>

          {/* Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-soft backdrop-blur-xl">
            <div className="mb-7">
              <h2 className="text-2xl font-black text-white">Candidate sign in</h2>
              <p className="mt-1.5 text-sm text-white/48">Welcome back — your dashboard is ready.</p>
            </div>

            {/* Social buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                {
                  label: "Google",
                  icon: (
                    <svg className="size-4" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  ),
                },
                {
                  label: "GitHub",
                  icon: (
                    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  ),
                },
              ].map((provider) => (
                <button
                  key={provider.label}
                  type="button"
                  onClick={handleSocialLogin}
                  disabled={loading}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-white/80 transition hover:border-white/25 hover:bg-white/8 hover:text-white active:scale-[0.97] disabled:opacity-50"
                >
                  {provider.icon}
                  {provider.label}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-white/32 font-semibold">or continue with email</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Form */}
            <form id="candidate-login-form" onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="login-email" className="block text-xs font-black uppercase tracking-wider text-white/52">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-white/30" aria-hidden="true" />
                  <input
                    id="login-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-10 pr-4 text-sm text-white placeholder-white/28 outline-none transition focus:border-acid/60 focus:ring-2 focus:ring-acid/20"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="login-password" className="block text-xs font-black uppercase tracking-wider text-white/52">
                    Password
                  </label>
                  <Link
                    href="#"
                    className="text-xs text-acid/80 transition hover:text-acid"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-white/30" aria-hidden="true" />
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-10 pr-11 text-sm text-white placeholder-white/28 outline-none transition focus:border-acid/60 focus:ring-2 focus:ring-acid/20"
                  />
                  <button
                    type="button"
                    id="toggle-password-visibility"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 transition hover:text-white/70"
                  >
                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                id="login-submit-btn"
                type="submit"
                disabled={loading}
                className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-acid py-3 text-sm font-black uppercase text-ink transition hover:bg-mint active:scale-[0.98] disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <span
                      aria-hidden
                      className="size-4 rounded-full border-2 border-ink/30 border-t-ink animate-spin"
                    />
                    Signing in…
                  </>
                ) : (
                  <>
                    Sign in
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Footer link */}
          <p className="text-center text-sm text-white/40">
            New candidate?{" "}
            <Link href="#" className="font-black text-acid/90 transition hover:text-acid">
              Create a free account
            </Link>
          </p>

          {/* Terms note */}
          <p className="text-center text-xs text-white/24 leading-5">
            By signing in you agree to our{" "}
            <Link href="#" className="underline underline-offset-2 hover:text-white/48 transition">Terms</Link>{" "}
            and{" "}
            <Link href="#" className="underline underline-offset-2 hover:text-white/48 transition">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
