import type { LucideIcon } from "lucide-react";
import { Activity, HeartPulse, TrendingUp } from "lucide-react";

export const PILLARS = [
  { id: "return-to-sport", icon: Activity },
  { id: "post-op-rehab", icon: HeartPulse },
  { id: "performance-coaching", icon: TrendingUp },
] as const satisfies readonly { id: string; icon: LucideIcon }[];

export type PillarId = (typeof PILLARS)[number]["id"];

export function isPillarId(value: string | null): value is PillarId {
  return PILLARS.some((p) => p.id === value);
}
