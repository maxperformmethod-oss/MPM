import type { LucideIcon } from "lucide-react";
import { Activity, Sprout, TrendingUp } from "lucide-react";

export const PILLARS = [
  { id: "performance-coaching", icon: TrendingUp },
  { id: "return-to-sport", icon: Activity },
  { id: "ltad", icon: Sprout },
] as const satisfies readonly { id: string; icon: LucideIcon }[];

export type PillarId = (typeof PILLARS)[number]["id"];

export function isPillarId(value: string | null): value is PillarId {
  return PILLARS.some((p) => p.id === value);
}
