import { describe, expect, it } from 'vitest';
import { GEMS_DATA, getGemById, getGemsByCategory } from '../gems';

describe('Gems Data', () => {
  it('should have 16 gems in total', () => {
    expect(GEMS_DATA).toHaveLength(16);
  });

  it('should have 4 gems per category', () => {
    const categories = ['Ruby', 'Sapphire', 'Emerald', 'Diamond'];
    categories.forEach((category) => {
      const gems = GEMS_DATA.filter((gem) => gem.category === category);
      expect(gems).toHaveLength(4);
    });
  });

  it('should get gem by id', () => {
    const gem = getGemById('ruby-001');
    expect(gem).toBeDefined();
    expect(gem?.name).toBe('Burmese Ruby');
  });

  it('should return undefined for invalid id', () => {
    const gem = getGemById('invalid-id');
    expect(gem).toBeUndefined();
  });

  it('should get gems by category', () => {
    const rubies = getGemsByCategory('Ruby');
    expect(rubies).toHaveLength(4);
    rubies.forEach((gem) => {
      expect(gem.category).toBe('Ruby');
    });
  });

  it('should return all gems when category is All', () => {
    const allGems = getGemsByCategory('All');
    expect(allGems).toHaveLength(16);
  });
});
