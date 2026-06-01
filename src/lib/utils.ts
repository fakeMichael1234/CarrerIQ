import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scoreTone(score: number) {
  if (score >= 82) {
    return "Ready";
  }

  if (score >= 68) {
    return "Nearly Ready";
  }

  return "Needs Practice";
}

export function clampScore(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}
