import type { Gem } from '@/types/gem';
import gemsData from './gems.json';

export const GEMS_DATA: Gem[] = gemsData as Gem[];

export const getGemById = (id: string): Gem | undefined => {
  return GEMS_DATA.find((gem) => gem.id === id);
};

export const getGemsByCategory = (category: string): Gem[] => {
  if (category === 'All') return GEMS_DATA;
  return GEMS_DATA.filter((gem) => gem.category === category);
};
