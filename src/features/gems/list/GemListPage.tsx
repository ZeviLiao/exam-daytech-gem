import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { GEMS_DATA } from '../../../data/gems';
import type { GemCategory, SortOption } from '../../../types/gem';

const CATEGORIES: GemCategory[] = ['All', 'Ruby', 'Sapphire', 'Emerald', 'Diamond'];

export default function GemListPage() {
  const [selectedCategory, setSelectedCategory] = useState<GemCategory>('All');
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');

  const filteredAndSortedGems = useMemo(() => {
    const filtered =
      selectedCategory === 'All'
        ? GEMS_DATA
        : GEMS_DATA.filter((gem) => gem.category === selectedCategory);

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    return sorted;
  }, [selectedCategory, sortBy]);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark via-secondary to-dark text-light py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-[120px] text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 tracking-wide">寶石</h1>
          <p className="text-base md:text-lg font-light text-cream/90 max-w-2xl mx-auto">
            在 Day
            Karkal，從輕奢日常到極致奢華的珠寶首飾均能一一找到。不論是鑽石、彩色寶石或其他單品，我們也能滿足您的需求。
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-[120px]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Category Filter */}
            <div className="w-full md:w-auto">
              <h3 className="text-sm font-semibold text-dark mb-3">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2 text-sm font-light border rounded-sm transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-dark border-gray-300 hover:border-primary hover:text-primary'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="w-full md:w-auto">
              <label htmlFor="sort" className="block text-sm font-semibold text-dark mb-3">
                Sort By
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full md:w-auto px-4 py-2 text-sm font-light border border-gray-300 rounded-sm focus:outline-none focus:border-primary"
              >
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Info */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-[120px] py-6">
        <p className="text-sm font-light text-gray-600">
          Showing {filteredAndSortedGems.length}{' '}
          {filteredAndSortedGems.length === 1 ? 'gemstone' : 'gemstones'}
        </p>
      </div>

      {/* Gem Grid */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-[120px] pb-16 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredAndSortedGems.map((gem) => (
            <Link
              to={`/gem/${gem.id}`}
              key={gem.id}
              className="group bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={gem.imageUrl}
                  alt={gem.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {!gem.inStock && (
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-light px-3 py-1">
                    Out of Stock
                  </div>
                )}
                {gem.certified && (
                  <div className="absolute top-3 right-3 bg-primary text-white text-xs font-light px-3 py-1">
                    Certified
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="text-xs font-light text-secondary mb-2">{gem.category}</div>
                <h3 className="text-lg font-semibold text-dark mb-3 group-hover:text-primary transition-colors">
                  {gem.name}
                </h3>

                <div className="space-y-1.5 text-sm font-light text-gray-600 mb-4">
                  <div className="flex justify-between">
                    <span>Weight:</span>
                    <span className="font-normal text-dark">{gem.weight} ct</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Color:</span>
                    <span className="font-normal text-dark">{gem.color}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Origin:</span>
                    <span className="font-normal text-dark">{gem.origin}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="text-xl font-semibold text-primary">
                    ${gem.price.toLocaleString()}
                  </div>
                  <button
                    type="button"
                    className="text-sm font-light text-dark hover:text-primary transition-colors"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
