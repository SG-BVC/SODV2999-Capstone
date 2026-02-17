// constants/mental-health-cards.ts

export interface MentalHealthCard {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  link?: string;
  category?:string;
}


export const mentalHealthCards: MentalHealthCard[] = [
  {
    id: 'depression-001',
    image: 'assets/ResourceImages/Mission-img-600x635.png',
    title: "Depression",
    subtitle: "Understand depression, its symptoms, and healthy coping strategies.",
    link: "/resources/depression",
    category: "depression"
  },
  {
    id: 'anxiety-001',
    image: 'assets/ResourceImages/axiety.jpg',
    title: "Anxiety",
    subtitle: "Find tools and support for managing fear, worry, and stress.",
    link: "/resources/anxiety",
    category: "anxiety"
  },
  {
    id: 'grief-001',
    image: 'assets/ResourceImages/griefSupport-600x338.png',
    title: "Grief Support",
    subtitle: "Support and guidance for coping with the loss of a loved one.",
    link: "/resources/grief",
    category: "grief"
  },
  {
    id: 'crisis-001',
    image: 'assets/ResourceImages/crisis-600x316.png',
    title: "Crisis Centres",
    subtitle: "Access immediate help through call, text, or emergency support.",
    link: "/resources/crisis",
    category: "crisis"
  },
  {
    id: 'counselling-001',
    image: 'assets/ResourceImages/e-counselling.png',
    title: "E-Counselling",
    subtitle: "Connect with licensed professionals for online therapy and support.",
    link: "/resources/counselling",
    category: "counselling"
  },
  {
    id: 'parents-001',
    image: 'assets/parents.png',
    title: "Resources for Parents",
    subtitle: "Guidance and tools to support your child’s mental well-being.",
    link: "/resources/parents",
    category: "parents"
  }
];
