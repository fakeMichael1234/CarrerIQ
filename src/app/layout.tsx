import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "CareerIQ | AI Mock Interview Platform",
  description:
    "CareerIQ — AI-powered technical mock interviews with resume matching, adaptive questioning, time scoring, and final readiness reports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const shell = (
    <html lang="en">
      <body className="noise antialiased">{children}</body>
    </html>
  );

  const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!clerkKey) {
    return shell;
  }

  return <ClerkProvider publishableKey={clerkKey}>{shell}</ClerkProvider>;
}
