export type PatternCategory = "Mood & Inspiration" | "Self Help & Tools";

export type PatternItem = {
  title: string;
  description: string;
  category: PatternCategory;
};

export const patternData: Record<string, PatternItem> = {
  "self-management": {
    title: "Self Management",
    description: "Tools and strategies to manage emotions, stress, and daily challenges.",
    category: "Self Help & Tools",
  },
  "coping-mechanisms": {
    title: "Coping Mechanisms",
    description: "Healthy techniques to manage difficult emotions and stressful situations.",
    category: "Self Help & Tools",
  },
  "interactive-mind": {
    title: "Interactive Mind",
    description: "Interactive exercises and activities to improve mental clarity.",
    category: "Self Help & Tools",
  },
  "mental-health-apps": {
    title: "Mental Health Apps",
    description: "Apps designed to support emotional wellbeing and self-care.",
    category: "Self Help & Tools",
  },
  "transform-negative-thoughts": {
    title: "Transform Negative Thoughts",
    description: "Learn how to challenge and reframe negative thinking patterns.",
    category: "Self Help & Tools",
  },
  "words-of-wisdom": {
    title: "Words of Wisdom",
    description: "Inspiring quotes and reflections to uplift your mindset.",
    category: "Self Help & Tools",
  },
  "gallery": {
    title: "Image Gallery",
    description: "A visual collection of calming and motivational imagery.",
    category: "Self Help & Tools",
  },
  "acts-of-kindness": {
    title: "Acts of Kindness",
    description: "Simple ways to spread positivity and compassion.",
    category: "Self Help & Tools",
  },
};
