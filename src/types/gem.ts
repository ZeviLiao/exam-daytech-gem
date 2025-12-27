export interface Gem {
  id: string;
  name: string;
  category: string;
  price: number;
  weight: number;
  color: string;
  clarity: string;
  cut: string;
  origin: string;
  description: string;
  imageUrl: string;
  certified: boolean;
  inStock: boolean;
}

export type GemCategory = 'Ruby' | 'Sapphire' | 'Emerald' | 'Diamond' | 'All';
export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';
