export type PatternCategory = 'Mood & Inspiration' | 'Self Help & Tools';

export type PatternSection = {
  heading: string;
  items: string[];
};

export type PatternItem = {
  title: string;
  description: string;
  category: PatternCategory;
  icon: string;
  color: string;
  sections?: PatternSection[];
};

export const patternData: Record<string, PatternItem> = {
  'self-management': {
    title: 'Self Management',
    description: 'Tools and strategies to manage emotions, stress, and daily challenges.',
    category: 'Self Help & Tools',
    icon: '🧘',
    color: 'from-teal-400 to-emerald-400',
    sections: [
      {
        heading: 'Quick Reset',
        items: [
          'Take 5 slow breaths.',
          'Drink water and sit comfortably.',
          'Write one thing you can control today.',
        ],
      },
      {
        heading: 'Try This',
        items: [
          'Do a 2-minute body scan.',
          'Set one small goal for the next hour.',
        ],
      },
    ],
  },

  'coping-mechanisms': {
    title: 'Coping Mechanisms',
    description: 'Healthy techniques to manage difficult emotions and stressful situations.',
    category: 'Self Help & Tools',
    icon: '🛡️',
    color: 'from-blue-400 to-indigo-400',
    sections: [
      {
        heading: 'Fast Coping',
        items: [
          'Name 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste.',
          'Hold ice for 10 seconds (safe, not too long).',
          'Splash cold water on your face.',
        ],
      },
      {
        heading: 'Daily Coping',
        items: [
          'Walk for 10 minutes.',
          'Journal one page.',
          'Talk to a trusted person.',
        ],
      },
    ],
  },

  'interactive-mind': {
    title: 'Interactive Mind',
    description: 'Interactive exercises and activities to improve mental clarity.',
    category: 'Self Help & Tools',
    icon: '🧩',
    color: 'from-purple-400 to-pink-400',
    sections: [
      {
        heading: 'Mental Warm-Up',
        items: [
          'Solve a quick puzzle or riddle.',
          'Write 3 ideas for something you want to improve.',
          'Do a 30-second focus stare (pick one object).',
        ],
      },
      {
        heading: 'Focus Practice',
        items: [
          'Set a 10-minute timer and do one task only.',
          'Turn off notifications for 15 minutes.',
        ],
      },
    ],
  },

  'mental-health-apps': {
    title: 'Mental Health Apps',
    description: 'Apps designed to support emotional wellbeing and self-care.',
    category: 'Self Help & Tools',
    icon: '📱',
    color: 'from-green-400 to-teal-400',
    sections: [
      {
        heading: 'What to Look For',
        items: [
          'Mood tracking',
          'Breathing and grounding tools',
          'Journaling prompts',
          'Guided meditation',
        ],
      },
      {
        heading: 'Quick Tip',
        items: [
          'Try one feature daily for a week (don’t download 10 apps at once).',
        ],
      },
    ],
  },

  'transform-negative-thoughts': {
    title: 'Transform Negative Thoughts',
    description: 'Learn how to challenge and reframe negative thinking patterns.',
    category: 'Self Help & Tools',
    icon: '🔄',
    color: 'from-red-400 to-orange-400',
    sections: [
      {
        heading: 'Step 1: Catch the Thought',
        items: [
          'Notice the negative thought.',
          'Write it down exactly as it appears.',
        ],
      },
      {
        heading: 'Step 2: Challenge It',
        items: [
          'Is this 100% true?',
          'What evidence supports it? What evidence does not?',
        ],
      },
      {
        heading: 'Step 3: Replace It',
        items: [
          'Rewrite it in a balanced way.',
          'Use compassionate self-talk.',
        ],
      },
    ],
  },

  'words-of-wisdom': {
    title: 'Words of Wisdom',
    description: 'Inspiring quotes and reflections to uplift your mindset.',
    category: 'Self Help & Tools',
    icon: '💭',
    color: 'from-yellow-400 to-amber-400',
    sections: [
      {
        heading: 'Quick Reset',
        items: [
          'Read one quote slowly.',
          'Take 3 deep breaths.',
          'Write one sentence: What do I need today?',
        ],
      },
      {
        heading: 'Try This',
        items: [
          'Pick a quote and repeat it for 30 seconds.',
          'Share it with someone who needs encouragement.',
        ],
      },
    ],
  },

  gallery: {
    title: 'Image Gallery',
    description: 'A visual collection of calming and motivational imagery.',
    category: 'Self Help & Tools',
    icon: '🖼️',
    color: 'from-pink-400 to-rose-400',
    sections: [
      {
        heading: 'How to Use',
        items: [
          'Pick one image and focus on it for 30 seconds.',
          'Notice 3 details you didn’t see at first.',
          'Match your breathing to a slow count of 4 in / 4 out.',
        ],
      },
    ],
  },

  'acts-of-kindness': {
    title: 'Acts of Kindness',
    description: 'Simple ways to spread positivity and compassion.',
    category: 'Self Help & Tools',
    icon: '❤️',
    color: 'from-red-400 to-pink-400',
    sections: [
      {
        heading: 'Small Acts',
        items: [
          'Send a supportive message to someone.',
          'Hold the door or say thank you.',
          'Leave a kind review for a small business.',
        ],
      },
      {
        heading: 'Kindness to Yourself',
        items: [
          'Take a break without guilt.',
          'Eat something nourishing.',
          'Speak to yourself like a friend.',
        ],
      },
    ],
  },

  'improve-mood': {
    title: 'Improve Your Mood',
    description: 'Quick mood boosters to help you feel better right now.',
    category: 'Mood & Inspiration',
    icon: '😊',
    color: 'from-yellow-400 to-amber-400',
    sections: [
      {
        heading: 'Fast Boosters',
        items: [
          'Step outside for 2 minutes.',
          'Play one upbeat song.',
          'Smile intentionally for 15 seconds.',
        ],
      },
      {
        heading: 'Grounding',
        items: [
          'Name 3 things you are grateful for.',
          'Do 10 slow shoulder rolls.',
        ],
      },
    ],
  },

  comedy: {
    title: 'Comedy',
    description: 'Lighten your day with uplifting comedy picks.',
    category: 'Mood & Inspiration',
    icon: '😂',
    color: 'from-orange-400 to-red-400',
    sections: [
      {
        heading: 'Try This',
        items: [
          'Watch a short comedy clip (2–5 minutes).',
          'Share something funny with a friend.',
        ],
      },
    ],
  },

  'inspiring-videos': {
    title: 'Inspiring Videos',
    description: 'Short inspiring videos to spark motivation and hope.',
    category: 'Mood & Inspiration',
    icon: '🌟',
    color: 'from-purple-400 to-pink-400',
    sections: [
      {
        heading: 'Use It Well',
        items: [
          'Pick one video only (avoid endless scrolling).',
          'Write one takeaway and one action step.',
        ],
      },
    ],
  },

  'emotional-support': {
    title: 'Emotional Support Videos',
    description: 'Comforting videos for support and reassurance.',
    category: 'Mood & Inspiration',
    icon: '💖',
    color: 'from-pink-400 to-rose-400',
    sections: [
      {
        heading: 'When You Feel Overwhelmed',
        items: [
          'Watch something calming for 3 minutes.',
          'Breathe slowly while watching.',
          'Text someone “I could use support.”',
        ],
      },
    ],
  },

  music: {
    title: 'Uplifting Music Videos',
    description: 'Music videos to lift your mood and energy.',
    category: 'Mood & Inspiration',
    icon: '🎵',
    color: 'from-blue-400 to-cyan-400',
    sections: [
      {
        heading: 'Try This',
        items: [
          'Make a 3-song “reset playlist.”',
          'Listen with headphones and breathe to the beat.',
        ],
      },
    ],
  },

  books: {
    title: 'Life Changing Books',
    description: 'Books that inspire growth, clarity, and resilience.',
    category: 'Mood & Inspiration',
    icon: '📚',
    color: 'from-emerald-400 to-green-400',
    sections: [
      {
        heading: 'Start Simple',
        items: [
          'Read 5 pages today.',
          'Highlight one sentence you want to remember.',
        ],
      },
    ],
  },

  'movies-inspiration': {
    title: 'Movies of Inspiration',
    description: 'Movies that inspire hope and positive change.',
    category: 'Mood & Inspiration',
    icon: '🎬',
    color: 'from-violet-400 to-purple-400',
    sections: [
      {
        heading: 'After Watching',
        items: [
          'Write down one lesson from the story.',
          'Pick one small action to try tomorrow.',
        ],
      },
    ],
  },

  'helpful-movies': {
    title: 'Helpful Movies',
    description: 'Helpful movies that support reflection and healing.',
    category: 'Mood & Inspiration',
    icon: '🎥',
    color: 'from-indigo-400 to-blue-400',
    sections: [
      {
        heading: 'Use It as Support',
        items: [
          'Watch with someone if you can.',
          'Pause and breathe if emotions rise.',
        ],
      },
    ],
  },
};
