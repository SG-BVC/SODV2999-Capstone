/* eslint-disable @typescript-eslint/no-explicit-any */
export const groupLinksByCategory = (links: any[]) => {
  const groups: Record<string, any[]> = {};
  links.forEach((link) => {
    const category = link.category || 'General';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(link);
  });
  return groups;
};

export const getCategoryIcon = (category: string) => {
  const icons: Record<string, string> = {
    'Mental Health Topics': '🧠',
    Survivors: '🕊️',
    Communities: '👥',
    Professionals: '🎓',
    Other: '📦',
    'Mood & Inspiration': '🌟',
    'Self Help & Tools': '🛠️',
  };
  return icons[category] || '📁';
};
