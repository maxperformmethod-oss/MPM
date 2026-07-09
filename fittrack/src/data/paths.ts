import type { LucideIcon } from "lucide-react";
import { Heart, Move, Dumbbell, TrendingUp, Smile, Compass } from "lucide-react";

export type Path = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  question: string;
  options: string[];
  result: {
    heading: string;
    body: string;
    cta: string;
  };
};

export const PATHS: Path[] = [
  {
    id: "pain",
    icon: Heart,
    title: "I'm in Pain",
    description: "Pain, injury, or a return to movement.",
    question: "Where do you feel it most?",
    options: ["Lower Back", "Knee", "Shoulder", "Somewhere Else"],
    result: {
      heading: "Return-to-Movement Assessment",
      body: "We'll start with a full movement screen to find the root cause of your pain, then build a rehab-focused plan to get you back to pain-free movement.",
      cta: "Book Assessment",
    },
  },
  {
    id: "mobility",
    icon: Move,
    title: "I Want to Move Better",
    description: "Mobility, stiffness, and joint control.",
    question: "What limits you the most right now?",
    options: ["Stiff Hips", "Tight Shoulders", "Poor Balance", "General Stiffness"],
    result: {
      heading: "Mobility & Movement Quality Plan",
      body: "A movement assessment identifies your biggest restrictions, followed by a targeted mobility program to restore range of motion and joint control.",
      cta: "Book Assessment",
    },
  },
  {
    id: "strength",
    icon: Dumbbell,
    title: "I Want to Get Stronger",
    description: "Build strength with structure and progression.",
    question: "What's your current training background?",
    options: ["Beginner", "Some Experience", "Experienced Lifter", "Coming Back After a Break"],
    result: {
      heading: "Structured Strength Program",
      body: "A baseline strength assessment shapes a progressive program built around proper technique, safe loading, and consistent long-term progress.",
      cta: "Book Assessment",
    },
  },
  {
    id: "performance",
    icon: TrendingUp,
    title: "I Want Better Performance",
    description: "Sport, training, and athletic performance.",
    question: "Which best describes you?",
    options: ["Competitive Athlete", "Weekend Warrior", "Coming Back from Injury", "Preparing for a Season"],
    result: {
      heading: "Performance Testing & Programming",
      body: "Performance testing establishes your baselines across strength, power, and movement, feeding directly into a sport-specific training plan.",
      cta: "Book Assessment",
    },
  },
  {
    id: "youth",
    icon: Smile,
    title: "Youth Athlete Development",
    description: "Long-term development for young athletes.",
    question: "What's the athlete's age range?",
    options: ["8–11", "12–14", "15–17", "18+"],
    result: {
      heading: "Long-Term Athlete Development Plan",
      body: "An age-appropriate movement and strength assessment guides a development plan focused on fundamentals, injury prevention, and healthy progression.",
      cta: "Book Assessment",
    },
  },
  {
    id: "unsure",
    icon: Compass,
    title: "I'm Not Sure Where to Start",
    description: "Answer one question and get guided.",
    question: "What matters most to you right now?",
    options: ["Reducing Pain", "Feeling Stronger", "Better Performance", "Just Getting Started"],
    result: {
      heading: "Guided Starting Assessment",
      body: "We'll begin with a general movement and goals assessment, then point you toward the right coaching path based on what we find.",
      cta: "Book Assessment",
    },
  },
];
