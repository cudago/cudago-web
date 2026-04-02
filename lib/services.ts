export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  priceRange: {
    min: number;
    max: number;
  };
  rating: number;
  reviewCount: number;
  professionals: number;
  verified: boolean;
  image?: string;
}

export const SERVICES_DATA: Service[] = [
  {
    id: 'deep-clean',
    name: 'Deep House Cleaning',
    category: 'cleaning',
    description: 'Professional deep cleaning service for your entire home',
    priceRange: { min: 80, max: 150 },
    rating: 4.9,
    reviewCount: 234,
    professionals: 120,
    verified: true,
  },
  {
    id: 'post-event',
    name: 'Post-Event Cleaning',
    category: 'cleaning',
    description: 'Quick cleanup after parties and events',
    priceRange: { min: 60, max: 120 },
    rating: 4.8,
    reviewCount: 156,
    professionals: 85,
    verified: true,
  },
  {
    id: 'meal-prep',
    name: 'Meal Preparation',
    category: 'cooking',
    description: 'Weekly meal planning and preparation for your family',
    priceRange: { min: 40, max: 80 },
    rating: 4.9,
    reviewCount: 189,
    professionals: 95,
    verified: true,
  },
  {
    id: 'dinner-chef',
    name: 'Private Chef Service',
    category: 'cooking',
    description: 'Professional chef for special dinners and events',
    priceRange: { min: 150, max: 300 },
    rating: 4.9,
    reviewCount: 104,
    professionals: 45,
    verified: true,
  },
  {
    id: 'laundry-iron',
    name: 'Laundry & Ironing',
    category: 'laundry',
    description: 'Professional laundry service with ironing included',
    priceRange: { min: 30, max: 60 },
    rating: 4.7,
    reviewCount: 98,
    professionals: 72,
    verified: true,
  },
  {
    id: 'nanny-care',
    name: 'Professional Nanny',
    category: 'childcare',
    description: 'Trusted childcare for your little ones',
    priceRange: { min: 18, max: 25 },
    rating: 4.9,
    reviewCount: 267,
    professionals: 150,
    verified: true,
  },
  {
    id: 'dog-walking',
    name: 'Dog Walking Service',
    category: 'pet-care',
    description: 'Daily dog walking and pet care',
    priceRange: { min: 15, max: 30 },
    rating: 4.8,
    reviewCount: 142,
    professionals: 110,
    verified: true,
  },
  {
    id: 'math-tutor',
    name: 'Math Tutoring',
    category: 'tutoring',
    description: 'Expert math tuition for all levels',
    priceRange: { min: 25, max: 50 },
    rating: 4.9,
    reviewCount: 176,
    professionals: 85,
    verified: true,
  },
  {
    id: 'home-repair',
    name: 'Home Repairs & Maintenance',
    category: 'handyman',
    description: 'General home repairs and maintenance services',
    priceRange: { min: 50, max: 150 },
    rating: 4.6,
    reviewCount: 203,
    professionals: 130,
    verified: true,
  },
];

export function getServicesByCategory(categoryId: string): Service[] {
  return SERVICES_DATA.filter((service) => service.category === categoryId);
}

export function getServiceById(id: string): Service | undefined {
  return SERVICES_DATA.find((service) => service.id === id);
}

export function getTopRatedServices(limit: number = 6): Service[] {
  return [...SERVICES_DATA]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}
