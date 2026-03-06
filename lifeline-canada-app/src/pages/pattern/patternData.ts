export type PatternCategory = "Mood & Inspiration" | "Self Help & Tools";

export type PatternSection = {
  heading: string;
  items: string[];
};

export type ResourceItem = {
  title: string;
  description?: string;
  href?: string;
  tags?: string[];
  icon?: string;
  meta?: string;
  image?: string;
  moreText?: string;
  kind?: "book" | "video" | "link";
};

export type ResourceBlock = {
  heading: string;
  subheading?: string;
  items: ResourceItem[];
};

export type PatternItem = {
  title: string;
  description: string;
  longDescription?: string;
  category: PatternCategory;
  icon: string;
  color: string;
  sections?: PatternSection[];
  resources?: ResourceBlock;
  heroImage?: string;
  resourceLayout?: "grid" | "list";
  resourceColumns?: 2 | 3 | 4;
};

export const patternData: Record<string, PatternItem> = {
  "self-management": {
    title: "Self Management",
    description: "Tools and strategies to manage emotions, stress, and daily challenges.",
    category: "Self Help & Tools",
    icon: "🧘",
    color: "from-teal-400 to-emerald-400",
    sections: [
      {
        heading: "Quick Reset",
        items: [
          "Take 5 slow breaths.",
          "Drink water and sit comfortably.",
          "Write one thing you can control today.",
        ],
      },
      {
        heading: "Try This",
        items: ["Do a 2-minute body scan.", "Set one small goal for the next hour."],
      },
    ],
  },

  "coping-mechanisms": {
    title: "Coping Mechanisms",
    description: "Healthy techniques to manage difficult emotions and stressful situations.",
    category: "Self Help & Tools",
    icon: "🛡️",
    color: "from-blue-400 to-indigo-400",
    sections: [
      {
        heading: "Fast Coping",
        items: [
          "Name 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste.",
          "Hold ice for 10 seconds (safe, not too long).",
          "Splash cold water on your face.",
        ],
      },
      {
        heading: "Daily Coping",
        items: ["Walk for 10 minutes.", "Journal one page.", "Talk to a trusted person."],
      },
    ],
  },

  "interactive-mind": {
    title: "Interactive Mind",
    description: "Interactive exercises and activities to improve mental clarity.",
    category: "Self Help & Tools",
    icon: "🧩",
    color: "from-purple-400 to-pink-400",
    sections: [
      {
        heading: "Mental Warm-Up",
        items: [
          "Solve a quick puzzle or riddle.",
          "Write 3 ideas for something you want to improve.",
          "Do a 30-second focus stare (pick one object).",
        ],
      },
      {
        heading: "Focus Practice",
        items: ["Set a 10-minute timer and do one task only.", "Turn off notifications for 15 minutes."],
      },
    ],
  },

  "mental-health-apps": {
    title: "Mental Health Apps",
    description: "Apps designed to support emotional wellbeing and self-care.",
    category: "Self Help & Tools",
    icon: "📱",
    color: "from-green-400 to-teal-400",
    sections: [
      {
        heading: "What to Look For",
        items: ["Mood tracking", "Breathing and grounding tools", "Journaling prompts", "Guided meditation"],
      },
      {
        heading: "Quick Tip",
        items: ["Try one feature daily for a week (don’t download 10 apps at once)."],
      },
    ],
  },

  "transform-negative-thoughts": {
    title: "Transform Negative Thoughts",
    description: "Learn how to challenge and reframe negative thinking patterns.",
    category: "Self Help & Tools",
    icon: "🔄",
    color: "from-red-400 to-orange-400",
    sections: [
      {
        heading: "Step 1: Catch the Thought",
        items: ["Notice the negative thought.", "Write it down exactly as it appears."],
      },
      {
        heading: "Step 2: Challenge It",
        items: ["Is this 100% true?", "What evidence supports it? What evidence does not?"],
      },
      {
        heading: "Step 3: Replace It",
        items: ["Rewrite it in a balanced way.", "Use compassionate self-talk."],
      },
    ],
  },

  "words-of-wisdom": {
    title: "Words of Wisdom",
    description: "Inspiring quotes and reflections to uplift your mindset.",
    category: "Self Help & Tools",
    icon: "💭",
    color: "from-yellow-400 to-amber-400",
    sections: [
      {
        heading: "Quick Reset",
        items: ["Read one quote slowly.", "Take 3 deep breaths.", "Write one sentence: What do I need today?"],
      },
      {
        heading: "Try This",
        items: ["Pick a quote and repeat it for 30 seconds.", "Share it with someone who needs encouragement."],
      },
    ],
  },

  gallery: {
    title: "Image Gallery",
    description: "A visual collection of calming and motivational imagery.",
    category: "Self Help & Tools",
    icon: "🖼️",
    color: "from-pink-400 to-rose-400",
    sections: [
      {
        heading: "How to Use",
        items: [
          "Pick one image and focus on it for 30 seconds.",
          "Notice 3 details you didn’t see at first.",
          "Match your breathing to a slow count of 4 in / 4 out.",
        ],
      },
    ],
  },

  "acts-of-kindness": {
    title: "Acts of Kindness",
    description: "Simple ways to spread positivity and compassion.",
    category: "Self Help & Tools",
    icon: "❤️",
    color: "from-red-400 to-pink-400",
    sections: [
      {
        heading: "Small Acts",
        items: [
          "Send a supportive message to someone.",
          "Hold the door or say thank you.",
          "Leave a kind review for a small business.",
        ],
      },
      {
        heading: "Kindness to Yourself",
        items: ["Take a break without guilt.", "Eat something nourishing.", "Speak to yourself like a friend."],
      },
    ],
  },

  "improve-mood": {
    title: "Improve Your Mood",
    description:
      "A practical, feel-better guide with quick resets, simple habits, and 30 mood-boosting ideas you can try today.",
    category: "Mood & Inspiration",
    icon: "😊",
    color: "from-fuchsia-400 to-violet-500",
    heroImage:
      "https://images.unsplash.com/photo-1520975597475-cd75d4c7f6db?auto=format&fit=crop&w=1800&q=80",
    sections: [
      {
        heading: "Why this helps",
        items: [
          "When you’re feeling low, it’s easy to get stuck in the same thoughts and routines. Mood improves faster when you gently interrupt the pattern with small actions.",
          "You don’t need to do all of these. Pick 1–2 ideas, try them for 10 minutes, and see what shifts.",
        ],
      },
      {
        heading: "Quick Mood Reset (2–5 minutes)",
        items: [
          "Take 5 slow breaths. In for 4, hold 2, out for 6.",
          "Drink a glass of water and sit up straight.",
          "Step outside for 60 seconds (fresh air + light).",
          "Name 3 things you can see, 2 you can feel, 1 you can hear.",
          "Play one uplifting song (no scrolling).",
        ],
      },
      {
        heading: "30 Ways to Improve Your Mood",
        items: [
          "Step back and self-reflect. Pause and notice what you’re feeling without judging it.",
          "Reach out to someone. Text a friend or family member: “Can I talk for a minute?”",
          "Listen to music. Choose one song that matches the mood you want.",
          "Cuddle or play with a pet (or watch a cute animal video for 2 minutes).",
          "Go for a walk—especially somewhere with trees or open space.",
          "Drink something refreshing (water, tea, or a smoothie).",
          "Write it out. Journal one page: what’s on your mind + one small next step.",
          "Take a short nap (20 minutes) if you’re exhausted.",
          "Plan a fun activity for later today or this week.",
          "Do something spontaneous—tiny changes help break the loop.",
          "Prioritize. Pick the one thing that matters most today and do 5 minutes on it.",
          "Look through old photos or capture a new one.",
          "Hug someone (or wrap yourself in a blanket like a hug).",
          "Laugh. Watch a short comedy clip or a funny scene.",
          "Cry if you need to. It’s a normal release for a heavy moment.",
          "Read kind messages you’ve received (emails/texts/notes).",
          "Reconnect with an old friend—send a simple “Hey, how have you been?”",
          "Write yourself a letter like you’re encouraging your best friend.",
          "Try a deep breathing exercise (box breathing: 4–4–4–4).",
          "Practice gratitude: write 3 small things you appreciate right now.",
          "Re-watch a funny or inspiring YouTube video (set a timer to avoid scrolling).",
          "Bake or cook something simple—focus on the steps and smells.",
          "Get out of the house: coffee, library, or a quick errand outside.",
          "Focus on what truly matters to you—one value you want to live today.",
          "Reframe a negative thought: “What’s another possible explanation?”",
          "Daydream for 2 minutes—imagine something you’re excited for.",
          "Let sunlight in: open blinds, sit near a window, step outside.",
          "Take a mental health day-style reset: shower, clean clothes, tidy one small area.",
          "Let go of one small pressure today—lower the bar on something non-essential.",
          "Read something calming (short article, poem, or a few pages of a book).",
        ],
      },
      {
        heading: "After you try 1–2 ideas",
        items: [
          "Rate your mood from 1–10 (before and after). Even a 1-point change is progress.",
          "Pick the best one and repeat it tomorrow. Repetition is what builds results.",
        ],
      },
    ],
    resources: {
      heading: "Helpful extras (with images)",
      items: [
        {
          title: "A 10-minute outdoor reset",
          description: "Walk slowly, notice 5 things you see, and breathe deeper than usual.",
          tags: ["Nature", "Movement", "Calm"],
          icon: "🌿",
          meta: "10 min",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Make a 3-song mood playlist",
          description: "Pick 3 songs: 1 comfort, 1 lift, 1 energy. Stop after song #3.",
          tags: ["Music", "Energy"],
          icon: "🎧",
          meta: "5 min",
          image:
            "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "One-page brain dump",
          description: "Write everything on your mind. Circle one thing you can act on today.",
          tags: ["Journaling", "Clarity"],
          icon: "📝",
          meta: "10 min",
          image:
            "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Simple stretch + posture reset",
          description: "Shoulder rolls, neck stretch, stand tall for 30 seconds.",
          tags: ["Body", "Relief"],
          icon: "🧍",
          meta: "3 min",
          image:
            "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Gratitude (small + real)",
          description: "Write 3 tiny things: warm drink, clean bed, a kind message.",
          tags: ["Mindset", "Grounding"],
          icon: "🙏",
          meta: "2 min",
          image:
            "https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Call or text someone you trust",
          description: "You don’t need a perfect message. Start with: “Can I share something?”",
          tags: ["Support", "Connection"],
          icon: "💬",
          meta: "Anytime",
          image:
            "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
  },

  comedy: {
    title: "Comedy",
    description:
      "A quick humor break can lower stress and give your mind a reset. Pick one link and stop when it ends.",
    category: "Mood & Inspiration",
    icon: "😂",
    color: "from-violet-500 to-fuchsia-500",
    heroImage: "/images/pattern/comedy-hero.jpg",
    sections: [
      {
        heading: "Why this helps",
        items: [
          "Laughter can reduce stress hormones and help your body relax.",
          "A short humor break can interrupt spiraling thoughts and bring you back to the present.",
        ],
      },
      {
        heading: "Try this (2–5 minutes)",
        items: [
          "Set a timer so it stays a quick reset, not endless scrolling.",
          "Choose one video. Watch it fully. Stop when it ends.",
          "If it helps even 1%, save it to reuse later.",
        ],
      },
    ],
    resources: {
      heading: "Helpful comedy links",
      items: [
        {
          title: "14 Minutes of Comedians Reaffirming Mental Health Struggles",
          description:
            "A short compilation where comedians talk openly about mental health and remind you you’re not alone.",
          href: "https://www.youtube.com/watch?v=RZAcw1G9M8E",
          icon: "▶️",
          meta: "Video",
          image: "/images/resources/comedy-mental-health.jpg",
          tags: ["Support", "Relief"],
        },
        {
          title: "So Funny It Can Cure Depression (Compilation)",
          description:
            "A quick laugh break. Use a timer and stop after one video so it doesn’t become doom-scrolling.",
          href: "https://www.youtube.com/watch?v=HqSoxMOrVeE",
          icon: "🐱",
          meta: "Video",
          image: "/images/resources/comedy-cat.jpg",
          tags: ["Mood lift", "Light"],
        },
        {
          title: "10 Minutes of Comedy to Ease Anxiety",
          description: "A short break that helps you breathe and reset your mind.",
          href: "https://www.youtube.com/results?search_query=10+minutes+of+comedy+to+cure+your+anxiety",
          icon: "🎭",
          meta: "10 min",
          image: "/images/resources/comedy-anxiety.jpg",
          tags: ["Reset", "Calm"],
        },
        {
          title: "Kevin Breel: Confessions of a Depressed Comic (Talk)",
          description:
            "A powerful talk blending humor and honesty about depression and vulnerability.",
          href: "https://www.youtube.com/watch?v=2qB8p4TnH4A",
          icon: "🎤",
          meta: "Talk",
          image: "/images/resources/comedy-kevin-breel.jpg",
          tags: ["Hope", "Real talk"],
        },
        {
          title: 'Make your own "Laugh playlist"',
          description: "Create a 3-clip playlist you know you’ll enjoy. Save it for tough days.",
          href: "https://www.youtube.com/",
          icon: "📌",
          meta: "5 min",
          image: "/images/resources/comedy-playlist.jpg",
          tags: ["Habit", "Easy"],
        },
        {
          title: "Share a laugh (message template)",
          description: 'Text: “Saw this and thought of you 😂 Want a 2-minute laugh break?”',
          icon: "💬",
          meta: "Anytime",
          image: "/images/resources/comedy-share.jpg",
          tags: ["Connection", "Support"],
        },
      ],
    },
  },

  "inspiring-videos": {
    title: "Inspiring Videos",
    description:
      "Positive videos can shift your mindset fast. Pick one, watch it fully, and stop when it ends — no endless scrolling.",
    category: "Mood & Inspiration",
    icon: "🎬",
    color: "from-indigo-500 to-fuchsia-500",
    heroImage: "/images/pattern/resources/inspiring-hero.jpg",
    resourceColumns: 4,
    sections: [
      {
        heading: "Why this helps",
        items: [
          "A good story can interrupt spiraling thoughts and bring you back to the present.",
          "Watching someone overcome challenges can remind you that change is possible.",
          "Finishing one short video gives your brain a clean “done” moment and reduces doom-scrolling.",
        ],
      },
      {
        heading: "Try this (5–12 minutes)",
        items: [
          "Set a timer before you press play.",
          "Watch one video fully. Stop when it ends.",
          "If it helped even 1%, save it and reuse it later.",
        ],
      },
    ],
    resources: {
      heading: "Watch one inspiring video",
      items: [
        {
          title: "Be Phenomenal",
          description: "A high-energy reminder to show up fully — even on the days you feel tired or stuck.",
          href: "https://www.youtube.com/watch?v=vVJJj9hshCM",
          meta: "Video",
          tags: ["Motivation", "Energy"],
        },
        {
          title: "Never Give Up",
          description: "A reminder to keep going — especially on the days you feel like quitting.",
          href: "https://www.youtube.com/watch?v=tYzMYcUty6s",
          meta: "Video",
          tags: ["Hope", "Resilience"],
        },
        {
          title: "Everyone Has Obstacles",
          description: "A short perspective shift: progress comes from working through the hard parts.",
          href: "https://www.youtube.com/watch?v=mgmVOuLgFB0",
          meta: "Video",
          tags: ["Mindset", "Reset"],
        },
        {
          title: "Increasing Your Confidence",
          description: "A gentle reminder that confidence is built through repetition, not perfection.",
          href: "https://www.youtube.com/watch?v=w-HYZv6HzAs",
          meta: "Video",
          tags: ["Confidence", "Growth"],
        },
        {
          title: "Neil Gaiman — Make Good Art",
          description: "A practical and inspiring talk about turning setbacks into meaningful work.",
          href: "https://www.youtube.com/watch?v=ikAb-NYkseI",
          meta: "Talk",
          tags: ["Creativity", "Purpose"],
        },
        {
          title: "Christian the Lion",
          description: "A touching story about friendship, loyalty, and unexpected connection.",
          href: "https://www.youtube.com/watch?v=oiGKWoJi5qM",
          meta: "Story",
          tags: ["Hope", "Connection"],
        },
        {
          title: "Randy Pausch — The Last Lecture",
          description: "A classic talk on joy, perspective, and living with intention.",
          href: "https://www.youtube.com/watch?v=ji5_MqicxSo",
          meta: "Talk",
          tags: ["Perspective", "Life"],
        },
        {
          title: "Free Hugs",
          description: "Sometimes one small act of kindness can change someone’s whole day.",
          href: "https://www.youtube.com/watch?v=vr3x_RRJdd4",
          meta: "Video",
          tags: ["Kindness", "Humanity"],
        },
        {
          title: "Passion: The Secret Ingredient to Success",
          description: "A motivational reminder that persistence and purpose often go together.",
          href: "https://www.youtube.com/watch?v=9fbP4S7vV1A",
          meta: "Video",
          tags: ["Passion", "Success"],
        },
        {
          title: "Look Up",
          description: "A spoken-word reminder to reconnect with people, not just screens.",
          href: "https://www.youtube.com/watch?v=Z7dLU6fk9QY",
          meta: "Short Film",
          tags: ["Connection", "Awareness"],
        },
        {
          title: "Nick Vujicic — Never Give Up",
          description: "A moving message about resilience, gratitude, and courage.",
          href: "https://www.youtube.com/watch?v=6P2nPI6CTlc",
          meta: "Talk",
          tags: ["Resilience", "Courage"],
        },
        {
          title: "Gift — Do Your Parents Embarrass You?",
          description: "A heartfelt story about perspective, love, and understanding sacrifice.",
          href: "https://www.youtube.com/watch?v=YoXxevp1WRQ",
          meta: "Short Film",
          tags: ["Family", "Perspective"],
        },
      ],
    },
  },

  "emotional-support": {
    title: "Emotional Support Videos",
    description:
      "Sometimes watching someone else talk honestly about tough moments can help you feel less alone. These videos are meant to offer comfort, perspective, and small reminders that support exists.",
    category: "Mood & Inspiration",
    icon: "🫂",
    color: "from-violet-500 to-fuchsia-500",
    heroImage: "/images/resources/emotional-support-hero.jpg",
    sections: [
      {
        heading: "Quick reset",
        items: [
          "Pick one video only.",
          "Watch it fully—no endless scrolling.",
          "After it ends, take 30 seconds to breathe and notice how you feel.",
        ],
      },
      {
        heading: "If you want to go deeper",
        items: [
          "Write one sentence: “What did I need to hear today?”",
          "Send one supportive message to someone you trust.",
          "Save one video you’d re-watch on hard days.",
        ],
      },
    ],
    resources: {
      heading: "Emotional support picks",
      items: [
        {
          title: "It Gets Better",
          description:
            "Stories of hope, identity, and future possibility for people who need to hear that hard seasons do not last forever.",
          href: "https://www.youtube.com/watch?v=WaAUrVYYmTU",
          meta: "Video",
          tags: ["Hope", "Identity"],
        },
        {
          title: "Suicidal? It’s ok. You can get through it. Please Talk",
          description:
            "An honest video encouraging people to talk, reach out, and remember that support is available.",
          href: "https://www.youtube.com/watch?v=0QXmmP4psbA",
          meta: "Video",
          tags: ["Talk", "Support"],
        },
        {
          title: "Suicide and a Safety Plan",
          description:
            "A practical explanation of what a safety plan is and how it can help during overwhelming moments.",
          href: "https://www.youtube.com/watch?v=om5E4K1bCLw",
          meta: "Video",
          tags: ["Safety", "Tools"],
        },
        {
          title: "Suicidal? Take Some Pause For Thought",
          description: "A reflective conversation that encourages pause, thought, and compassionate perspective.",
          href: "https://www.youtube.com/watch?v=6n3XEbloPRI",
          meta: "Video",
          tags: ["Pause", "Perspective"],
        },
        {
          title: "The Laughing Heart",
          description:
            "A poetic and reflective piece that can feel grounding when you need gentleness instead of pressure.",
          href: "https://www.youtube.com/watch?v=8MNfX8j0B8Q",
          meta: "Video",
          tags: ["Reflection", "Poetry"],
        },
        {
          title: "IDrankTheSeaWater",
          description:
            "Personal, honest content that helps people feel less isolated in their mental health experience.",
          href: "https://www.youtube.com/watch?v=mNnP6eP0Q0o",
          meta: "Video",
          tags: ["Understanding", "Honesty"],
        },
      ],
    },
  },

  music: {
    title: "Uplifting Music Videos",
    description:
      "There is something powerful about music that can instantly shift our emotions and lift our mood. A great uplifting song can remind us of hope, resilience, and the beauty of life even during difficult moments. Music has the ability to capture joy, empowerment, and encouragement in a way words sometimes cannot.",
    longDescription:
      "Take a moment when you need motivation or positivity and listen to one of these uplifting songs. Many of these songs have inspired people across generations and continue to remind us to keep moving forward.",
    category: "Mood & Inspiration",
    icon: "🎵",
    color: "from-amber-400 to-pink-500",
    heroImage: "/images/resources/uplifting-music.jpg",
    resourceColumns: 4,
    sections: [
      {
        heading: "How to use uplifting music",
        items: [
          "Pick one song and listen fully without distractions.",
          "Let the music change your mood gradually.",
          "Notice the lyrics and what message they bring.",
          "If the song helps, save it to your playlist for difficult days.",
        ],
      },
      {
        heading: "Small reflection",
        items: [
          "Which lyric stood out to you?",
          "Did the music change your mood even a little?",
          "What is one thing you feel grateful for right now?",
        ],
      },
    ],
    resources: {
      heading: "Uplifting songs to listen to",
      items: [
        {
          title: "What a Wonderful World — Louis Armstrong",
          description:
            "This timeless classic reminds us to appreciate the beauty in everyday life. Even during difficult moments, the world still contains kindness, color, and hope.",
          href: "https://www.youtube.com/watch?v=rBrd_3VMC3c",
          meta: "Music Video",
          tags: ["Hope", "Classic"],
        },
        {
          title: "Stand By Me — Ben E. King",
          description:
            "A legendary song about friendship, loyalty, and standing together during difficult times. It reminds us that we are stronger when we support each other.",
          href: "https://www.youtube.com/watch?v=hwZNL7QVJjE",
          meta: "Music Video",
          tags: ["Friendship", "Support"],
        },
        {
          title: "Ordinary World — Duran Duran",
          description:
            "A powerful song about healing and perseverance after loss. It reminds us that even after difficult experiences, life continues and we can rebuild.",
          href: "https://www.youtube.com/watch?v=FqIACCH20JU",
          meta: "Music Video",
          tags: ["Healing", "Reflection"],
        },
        {
          title: "Take On Me — A-ha",
          description:
            "An energetic 80s classic known for its iconic music video. The upbeat rhythm and hopeful lyrics make it a great mood booster.",
          href: "https://www.youtube.com/watch?v=djV11Xbc914",
          meta: "Music Video",
          tags: ["Energy", "Classic"],
        },
        {
          title: "Don't Worry Be Happy — Bobby McFerrin",
          description:
            "A joyful song that reminds us not to let stress take over our lives. Its simple message encourages us to focus on positivity.",
          href: "https://www.youtube.com/watch?v=d-diB65scQU",
          meta: "Music Video",
          tags: ["Positive", "Relax"],
        },
        {
          title: "Lovely Day — Bill Withers",
          description:
            "A soulful song that celebrates the feeling of waking up and realizing it will be a good day. A reminder that small moments matter.",
          href: "https://www.youtube.com/watch?v=bEeaS6fuUoA",
          meta: "Music Video",
          tags: ["Joy", "Motivation"],
        },
        {
          title: "Beautiful Day — U2",
          description:
            "A powerful anthem about appreciating life even when things are imperfect. It encourages gratitude and resilience.",
          href: "https://www.youtube.com/watch?v=co6WMzDOh1o",
          meta: "Music Video",
          tags: ["Gratitude", "Inspiration"],
        },
        {
          title: "Always Look on the Bright Side of Life — Monty Python",
          description:
            "A humorous but uplifting song reminding us that sometimes laughter and optimism are the best ways to deal with life’s challenges.",
          href: "https://www.youtube.com/watch?v=SJUhlRoBL8M",
          meta: "Music Video",
          tags: ["Humor", "Optimism"],
        },
        {
          title: "Imagine — John Lennon",
          description:
            "One of the most inspiring songs ever written. It encourages listeners to imagine a world of peace, unity, and hope.",
          href: "https://www.youtube.com/watch?v=YkgkThdzX-8",
          meta: "Music Video",
          tags: ["Peace", "Hope"],
        },
        {
          title: "Stronger — Kelly Clarkson",
          description:
            "An empowering anthem about resilience and learning from difficult experiences. A reminder that challenges can make us stronger.",
          href: "https://www.youtube.com/watch?v=Xn676-fLq7I",
          meta: "Music Video",
          tags: ["Strength", "Empowerment"],
        },
        {
          title: "You're Beautiful — James Blunt",
          description:
            "A heartfelt song about appreciating beauty and emotional connection in unexpected moments.",
          href: "https://www.youtube.com/watch?v=oofSnsGkops",
          meta: "Music Video",
          tags: ["Emotion", "Reflection"],
        },
        {
          title: "Don't Stop Believin' — Journey",
          description:
            "One of the most motivational songs ever recorded. It encourages listeners to keep believing in themselves and their dreams.",
          href: "https://www.youtube.com/watch?v=1k8craCGpgs",
          meta: "Music Video",
          tags: ["Motivation", "Classic"],
        },
      ],
    },
  },

  books: {
    title: "Life Changing Books",
    description:
      "Reading can be a quiet reset — it helps you step outside your current stress, learn new ideas, and rebuild hope one page at a time.",
    longDescription:
      "These picks are a mix of mindset, resilience, purpose, and uplifting stories. Use them as a gentle routine: 10–15 minutes a day is enough to feel progress.",
    category: "Mood & Inspiration",
    icon: "📚",
    color: "from-violet-400 to-fuchsia-500",
    heroImage: "/images/resources/life-changing-books.jpg",
    resourceLayout: "list",
    sections: [
      {
        heading: "How to use this page",
        items: [
          "Pick ONE book only (don’t overload).",
          "Read 10–15 minutes daily — keep it simple.",
          "Write 1 line: “What’s my takeaway today?”",
        ],
      },
      {
        heading: "Small reflection",
        items: [
          "Which idea felt most personal?",
          "What’s one habit you can try for 7 days?",
          "Who could you share this with?",
        ],
      },
    ],
    resources: {
      heading: "Books that can shift your mindset",
      subheading: "Click a book to open it in a new tab.",
      items: [
        {
          title: "The Book of Virtues — William J. Bennett",
          description:
            "A collection of classic stories and poems that teach character, courage, and kindness. Great if you want something meaningful and grounded.",
          href: "https://www.amazon.ca/s?k=The+Book+of+Virtues+William+J+Bennett",
          image: "/images/resources/books/book-of-virtues.jpg",
          meta: "Book",
          tags: ["Character", "Values"],
          kind: "book",
        },
        {
          title: "The 7 Habits of Highly Effective People — Stephen R. Covey",
          description:
            "A practical framework for building better habits, relationships, and purpose. Strong for structure and long-term change.",
          href: "https://www.amazon.ca/s?k=7+Habits+of+Highly+Effective+People+Stephen+Covey",
          image: "/images/resources/books/7-habits.jpg",
          meta: "Book",
          tags: ["Habits", "Purpose"],
          kind: "book",
        },
        {
          title: "How to Win Friends & Influence People — Dale Carnegie",
          description:
            "Classic communication and confidence builder. Helps with social anxiety, connection, and better conversations.",
          href: "https://www.amazon.ca/s?k=How+to+Win+Friends+and+Influence+People+Dale+Carnegie",
          image: "/images/resources/books/how-to-win-friends.jpg",
          meta: "Book",
          tags: ["Confidence", "Relationships"],
          kind: "book",
        },
        {
          title: "The Secret — Rhonda Byrne",
          description:
            "Popular mindset book focused on hope, visualization, and positive direction. Use it as motivation, not pressure.",
          href: "https://www.amazon.ca/s?k=The+Secret+Rhonda+Byrne",
          image: "/images/resources/books/the-secret.jpg",
          meta: "Book",
          tags: ["Mindset", "Hope"],
          kind: "book",
        },
        {
          title: "The Book Thief — Markus Zusak",
          description:
            "A powerful story about resilience and humanity during hard times. Emotional, meaningful, and unforgettable.",
          href: "https://www.amazon.ca/s?k=The+Book+Thief+Markus+Zusak",
          image: "/images/resources/books/the-book-thief.jpg",
          meta: "Book",
          tags: ["Resilience", "Story"],
          kind: "book",
        },
        {
          title: "The Shack — William P. Young",
          description:
            "A reflective novel about grief, healing, and finding meaning again after loss.",
          href: "https://www.amazon.ca/s?k=The+Shack+William+P+Young",
          image: "/images/resources/books/the-shack.jpg",
          meta: "Book",
          tags: ["Healing", "Grief"],
          kind: "book",
        },
        {
          title: "The Lion, the Witch and the Wardrobe — C.S. Lewis",
          description:
            "A comforting classic about courage, hope, and good overcoming darkness — easy to read, big impact.",
          href: "https://www.amazon.ca/s?k=The+Lion+the+Witch+and+the+Wardrobe",
          image: "/images/resources/books/narnia.jpg",
          meta: "Book",
          tags: ["Hope", "Comfort"],
          kind: "book",
        },
        {
          title: "The Great Divorce — C.S. Lewis",
          description:
            "A short, thought-provoking book about choices, growth, and the direction of your life.",
          href: "https://www.amazon.ca/s?k=The+Great+Divorce+C.S.+Lewis",
          image: "/images/resources/books/the-great-divorce.jpg",
          meta: "Book",
          tags: ["Reflection", "Growth"],
          kind: "book",
        },
        {
          title: "The Seven Paths — Anasazi Foundation",
          description:
            "A journey-style book about restoration, responsibility, and reconnecting with what matters.",
          href: "https://www.amazon.ca/s?k=The+Seven+Paths+Anasazi",
          image: "/images/resources/books/the-seven-paths.jpg",
          meta: "Book",
          tags: ["Restoration", "Identity"],
          kind: "book",
        },
        {
          title: "Les Misérables — Victor Hugo",
          description:
            "A deep story of redemption, compassion, and rebuilding life after hardship.",
          href: "https://www.amazon.ca/s?k=Les+Miserables+Victor+Hugo",
          image: "/images/resources/books/les-miserables.jpg",
          meta: "Book",
          tags: ["Redemption", "Meaning"],
          kind: "book",
        },
      ],
    },
  },

  "movies-of-inspiration": {
    title: "Movies of Inspiration",
    description:
      "Inspiring movies are a powerful way to uplift your soul, fill your heart with hope, and remind you that better days are possible.",
    heroImage:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=80",
    category: "Mood & Inspiration",
    icon: "🎬",
    color: "from-violet-400 to-purple-400",
    sections: [
      {
        heading: "After Watching",
        items: [
          "Write down one lesson from the story.",
          "Pick one small action to try tomorrow.",
          "Share one scene that inspired you with a friend.",
        ],
      },
    ],
    resources: {
      heading: "Inspirational Movies based on True Stories & Events",
      items: [
        {
          title: "The Theory of Everything",
          description:
            "A story of love, resilience, and staying hopeful while facing life-changing challenges.",
          href: "https://www.imdb.com/title/tt2980516/",
          tags: ["Hope", "Resilience", "True story"],
          icon: "📘",
          meta: "2014",
          image:
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "42",
          description:
            "Courage and persistence in the face of hate—changing history one step at a time.",
          href: "https://www.imdb.com/title/tt0453562/",
          tags: ["Inspiring", "True story", "Perseverance"],
          icon: "⚾",
          meta: "2013",
          image:
            "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "Lincoln",
          description:
            "A powerful reminder that leadership and sacrifice can move a nation toward justice.",
          href: "https://www.imdb.com/title/tt0443272/",
          tags: ["Leadership", "Courage", "True story"],
          icon: "🏛️",
          meta: "2012",
          image:
            "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "Intouchables",
          description:
            "Friendship can change everything—hope and laughter during hard seasons.",
          href: "https://www.imdb.com/title/tt1675434/",
          tags: ["Friendship", "Hope", "Inspiring"],
          icon: "🤝",
          meta: "2011",
          image:
            "https://images.unsplash.com/photo-1520975958221-6d283a9d82bb?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "Moneyball",
          description:
            "Challenging the old way of thinking—learning, adapting, and staying confident.",
          href: "https://www.imdb.com/title/tt1210166/",
          tags: ["Growth", "Perseverance", "True story"],
          icon: "🏀",
          meta: "2011",
          image:
            "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "Invictus",
          description:
            "Unity and leadership—how sport can bring people together and inspire purpose.",
          href: "https://www.imdb.com/title/tt1057500/",
          tags: ["Leadership", "Hope", "True story"],
          icon: "🏉",
          meta: "2009",
          image:
            "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "The Blind Side",
          description:
            "Support, second chances, and the impact of someone believing in you.",
          href: "https://www.imdb.com/title/tt0878804/",
          tags: ["Second chances", "Kindness", "True story"],
          icon: "🏈",
          meta: "2009",
          image:
            "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "Into the Wild",
          description:
            "A reflective journey about searching for meaning, identity, and freedom.",
          href: "https://www.imdb.com/title/tt0758758/",
          tags: ["Growth", "Reflection", "Hope"],
          icon: "🏔️",
          meta: "2007",
          image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "The Pursuit of Happyness",
          description:
            "Resilience and hope through hard times—small steps can lead to big change.",
          href: "https://www.imdb.com/title/tt0454921/",
          tags: ["Hope", "Resilience"],
          icon: "🌤️",
          meta: "2006",
          image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "Hotel Rwanda",
          description:
            "Bravery during an unimaginable crisis—choosing compassion when the world feels unsafe.",
          href: "https://www.imdb.com/title/tt0395169/",
          tags: ["Courage", "True story", "Hope"],
          icon: "🕊️",
          meta: "2004",
          image:
            "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "Catch Me If You Can",
          description:
            "Identity, consequences, and second chances—surprisingly human beneath the excitement.",
          href: "https://www.imdb.com/title/tt0264464/",
          tags: ["Growth", "Second chances"],
          icon: "💳",
          meta: "2002",
          image:
            "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "A Beautiful Mind",
          description:
            "Brilliance, love, and recovery—accepting support and finding hope through connection.",
          href: "https://www.imdb.com/title/tt0268978/",
          tags: ["Hope", "Growth", "Inspiring"],
          icon: "🧠",
          meta: "2001",
          image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
        },
      ],
    },
  },

  "helpful-movies": {
    title: "Helpful Movies",
    description: "Helpful movies that support reflection and healing.",
    category: "Mood & Inspiration",
    icon: "🎥",
    color: "from-indigo-400 to-blue-400",
    sections: [
      {
        heading: "Use It as Support",
        items: ["Watch with someone if you can.", "Pause and breathe if emotions rise."],
      },
    ],
    resources: {
      heading: "Helpful & Healing Movies",
      items: [
        {
          title: "Good Will Hunting",
          description: "Healing, mentorship, and learning to accept help.",
          href: "https://www.imdb.com/title/tt0119217/",
          tags: ["Healing", "Growth"],
          meta: "1997",
          image:
            "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "Inside Out",
          description: "Understanding emotions and how they shape us.",
          href: "https://www.imdb.com/title/tt2096673/",
          tags: ["Emotions", "Healing"],
          meta: "2015",
          image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "The Intouchables",
          description: "Friendship and perspective during difficult seasons.",
          href: "https://www.imdb.com/title/tt1675434/",
          tags: ["Friendship", "Support"],
          meta: "2011",
          image:
            "https://images.unsplash.com/photo-1520975958221-6d283a9d82bb?auto=format&fit=crop&w=900&q=80",
        },
      ],
    },
  },
};