import { Gem } from '../types/gem';

export const GEMS_DATA: Gem[] = [
  // Ruby Category
  {
    id: '21690bf6-86a6-47b0-8254-aa0996784040',
    name: 'Burmese Ruby',
    category: 'Ruby',
    price: 125000,
    weight: 3.45,
    color: 'Pigeon Blood Red',
    clarity: 'VVS1',
    cut: 'Oval',
    origin: 'Myanmar (Burma)',
    description: 'A stunning Burmese ruby featuring the highly coveted "pigeon blood" red color. This exceptional gemstone exhibits excellent clarity and a brilliant oval cut that maximizes its natural beauty. Sourced from the legendary Mogok Valley in Myanmar, this ruby represents the pinnacle of quality and rarity in colored gemstones.',
    imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    certified: true,
    inStock: true
  },
  {
    id: 'ruby-002',
    name: 'Thai Ruby',
    category: 'Ruby',
    price: 68000,
    weight: 2.85,
    color: 'Deep Red',
    clarity: 'VS2',
    cut: 'Cushion',
    origin: 'Thailand',
    description: 'A beautiful Thai ruby with deep red coloration and excellent cushion cut. This gemstone showcases the rich color saturation that Thai rubies are known for, with minimal inclusions visible to the naked eye.',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    certified: true,
    inStock: true
  },
  {
    id: 'ruby-003',
    name: 'Mozambique Ruby',
    category: 'Ruby',
    price: 42000,
    weight: 4.12,
    color: 'Bright Red',
    clarity: 'SI1',
    cut: 'Round Brilliant',
    origin: 'Mozambique',
    description: 'An impressive Mozambique ruby with vibrant bright red color. This larger carat weight stone offers excellent value while maintaining beautiful color and a classic round brilliant cut.',
    imageUrl: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=800&q=80',
    certified: true,
    inStock: false
  },
  {
    id: 'ruby-004',
    name: 'Star Ruby',
    category: 'Ruby',
    price: 89000,
    weight: 5.67,
    color: 'Deep Pink-Red',
    clarity: 'Translucent',
    cut: 'Cabochon',
    origin: 'Sri Lanka',
    description: 'A rare star ruby displaying a distinct six-ray star pattern (asterism) under direct light. This phenomenon is caused by needle-like inclusions of rutile, making each star ruby absolutely unique.',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    certified: true,
    inStock: true
  },

  // Sapphire Category
  {
    id: 'sapphire-001',
    name: 'Kashmir Blue Sapphire',
    category: 'Sapphire',
    price: 185000,
    weight: 4.23,
    color: 'Cornflower Blue',
    clarity: 'VVS2',
    cut: 'Cushion',
    origin: 'Kashmir',
    description: 'An exceptional Kashmir sapphire displaying the legendary "cornflower blue" color with a distinctive velvety appearance. Kashmir sapphires are among the most sought-after gemstones in the world, with production from the original mines having ceased decades ago.',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    certified: true,
    inStock: true
  },
  {
    id: 'sapphire-002',
    name: 'Ceylon Blue Sapphire',
    category: 'Sapphire',
    price: 72000,
    weight: 3.89,
    color: 'Royal Blue',
    clarity: 'VS1',
    cut: 'Oval',
    origin: 'Sri Lanka',
    description: 'A magnificent Ceylon sapphire featuring a vibrant royal blue color with excellent transparency. Sri Lankan sapphires are renowned for their exceptional clarity and brilliant blue hues.',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
    certified: true,
    inStock: true
  },
  {
    id: 'sapphire-003',
    name: 'Padparadscha Sapphire',
    category: 'Sapphire',
    price: 156000,
    weight: 2.34,
    color: 'Sunset Orange-Pink',
    clarity: 'VVS1',
    cut: 'Oval',
    origin: 'Sri Lanka',
    description: 'A rare and coveted Padparadscha sapphire displaying the perfect blend of pink and orange, reminiscent of a tropical sunset. These are among the rarest and most valuable sapphires in the world.',
    imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    certified: true,
    inStock: true
  },
  {
    id: 'sapphire-004',
    name: 'Montana Sapphire',
    category: 'Sapphire',
    price: 38000,
    weight: 3.12,
    color: 'Teal Blue-Green',
    clarity: 'VS2',
    cut: 'Round Brilliant',
    origin: 'Montana, USA',
    description: 'A unique Montana sapphire with distinctive teal coloration, blending blue and green tones. American-mined sapphires are increasingly popular for their ethical sourcing and unique colors.',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    certified: true,
    inStock: true
  },

  // Emerald Category
  {
    id: 'emerald-001',
    name: 'Colombian Emerald',
    category: 'Emerald',
    price: 145000,
    weight: 4.56,
    color: 'Vivid Green',
    clarity: 'VS1',
    cut: 'Emerald Cut',
    origin: 'Colombia',
    description: 'A stunning Colombian emerald with exceptional vivid green color and remarkable clarity for an emerald. Sourced from the famous Muzo mines, this gemstone exemplifies the finest quality Colombian emeralds are known for.',
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80',
    certified: true,
    inStock: true
  },
  {
    id: 'emerald-002',
    name: 'Zambian Emerald',
    category: 'Emerald',
    price: 86000,
    weight: 3.78,
    color: 'Deep Bluish-Green',
    clarity: 'SI1',
    cut: 'Oval',
    origin: 'Zambia',
    description: 'A beautiful Zambian emerald with the characteristic deep bluish-green color. Zambian emeralds are prized for their rich saturation and excellent durability.',
    imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    certified: true,
    inStock: true
  },
  {
    id: 'emerald-003',
    name: 'Brazilian Emerald',
    category: 'Emerald',
    price: 54000,
    weight: 5.23,
    color: 'Light Green',
    clarity: 'SI2',
    cut: 'Cushion',
    origin: 'Brazil',
    description: 'A sizable Brazilian emerald with a lighter, more yellowish-green color. This emerald offers excellent value for its carat weight and displays good transparency.',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    certified: true,
    inStock: false
  },
  {
    id: 'emerald-004',
    name: 'Trapiche Emerald',
    category: 'Emerald',
    price: 198000,
    weight: 3.45,
    color: 'Medium Green',
    clarity: 'Translucent',
    cut: 'Cabochon',
    origin: 'Colombia',
    description: 'An extremely rare Trapiche emerald displaying a unique six-spoke wheel pattern. This natural phenomenon is found exclusively in Colombian emeralds and is highly sought after by collectors.',
    imageUrl: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=800&q=80',
    certified: true,
    inStock: true
  },

  // Diamond Category
  {
    id: 'diamond-001',
    name: 'Round Brilliant Diamond',
    category: 'Diamond',
    price: 215000,
    weight: 2.05,
    color: 'D (Colorless)',
    clarity: 'IF (Internally Flawless)',
    cut: 'Excellent Round Brilliant',
    origin: 'Botswana',
    description: 'An exceptional round brilliant diamond with the highest color grade (D) and internally flawless clarity. This diamond exhibits superior brilliance, fire, and scintillation with an excellent cut grade.',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    certified: true,
    inStock: true
  },
  {
    id: 'diamond-002',
    name: 'Princess Cut Diamond',
    category: 'Diamond',
    price: 128000,
    weight: 1.75,
    color: 'E (Colorless)',
    clarity: 'VVS1',
    cut: 'Ideal Princess',
    origin: 'Canada',
    description: 'A stunning princess cut diamond from Canadian mines, offering excellent fire and brilliance. This modern square cut is the second most popular diamond shape for engagement rings.',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
    certified: true,
    inStock: true
  },
  {
    id: 'diamond-003',
    name: 'Fancy Intense Yellow Diamond',
    category: 'Diamond',
    price: 275000,
    weight: 3.12,
    color: 'Fancy Intense Yellow',
    clarity: 'VS2',
    cut: 'Radiant',
    origin: 'South Africa',
    description: 'A rare fancy colored diamond with intense yellow saturation. Fancy colored diamonds are exceptionally rare, with only one in every 10,000 diamonds possessing natural color.',
    imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    certified: true,
    inStock: true
  },
  {
    id: 'diamond-004',
    name: 'Cushion Cut Diamond',
    category: 'Diamond',
    price: 165000,
    weight: 2.50,
    color: 'F (Colorless)',
    clarity: 'VVS2',
    cut: 'Very Good Cushion',
    origin: 'Russia',
    description: 'A classic cushion cut diamond with romantic, pillow-like appearance. This cut combines vintage charm with modern brilliance, featuring larger facets that increase the diamond\'s fire.',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    certified: true,
    inStock: false
  }
];

export const getGemById = (id: string): Gem | undefined => {
  return GEMS_DATA.find(gem => gem.id === id);
};

export const getGemsByCategory = (category: string): Gem[] => {
  if (category === 'All') return GEMS_DATA;
  return GEMS_DATA.filter(gem => gem.category === category);
};
