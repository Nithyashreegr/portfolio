export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features?: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'QuitHabit',
    category: 'Web Development',
    description:
      'A responsive habit-tracking web application designed to help users monitor and reduce habits such as excessive scrolling, sugar consumption, and smoking.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
    features: [
      'Habit & streak tracking',
      'Visual progress charts',
      'Relapse logging with persistent data',
    ],
    // liveUrl: '', // Add when available
    // sourceUrl: '', // Add when available
  },
  {
    id: '02',
    title: 'Hotel Room Management System',
    category: 'Web Development · Mini Project',
    description:
      'A responsive web application for managing hotel room information, availability, and reservations through a dynamic interactive interface.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Manager login interface',
      'Dynamic room availability tracking',
      'Add and manage room listings',
    ],
    // sourceUrl: '', // Add when available
  },
  {
    id: '03',
    title: 'Zombie Survival City',
    category: 'Interactive Game Development',
    description:
      'An interactive zombie-survival-themed game featuring survival challenges and custom gameplay logic built entirely with web technologies.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Survival challenge mechanics',
      'Core game logic & state management',
      'Interactive user experience',
    ],
    // sourceUrl: '', // Add when available
  },
  {
    id: '04',
    title: 'AI Dungeon Explorer',
    category: 'Interactive Project',
    description:
      'An interactive dungeon exploration project centered on navigation, decision-making, and problem-solving through structured gameplay.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Map navigation & exploration',
      'Decision-driven problem-solving',
      'Structured game progression',
    ],
    // sourceUrl: '', // Add when available
  },
];
