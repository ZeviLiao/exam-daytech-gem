import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/navigation/Breadcrumb';
import { GEMS_DATA } from '@/data/gems';

type PageSize = 25 | 50 | 100;

// Cut categories with icons
const CUT_CATEGORIES = [
  { value: 'Round', label: '圓形', name: 'round' },
  { value: 'Square', label: '公主方形', name: 'princess' },
  { value: 'Cushion', label: '枕形', name: 'cushion' },
  { value: 'Oval', label: '橢圓形', name: 'oval' },
  { value: 'Emerald', label: '祖母綠形', name: 'emerald' },
  { value: 'Pear', label: '梨形', name: 'pear' },
  { value: 'Asscher', label: '上丁方形', name: 'asscher' },
  { value: 'Heart', label: '心形', name: 'heart' },
  { value: 'Marquise', label: '欖攬形', name: 'marquise' },
  { value: 'Other', label: '其他', name: 'other' },
];

export default function GemListPage() {
  const [pageSize, setPageSize] = useState<PageSize>(50);
  const [selectedCuts, setSelectedCuts] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imageLoading, setImageLoading] = useState<Record<string, boolean>>({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const productGridRef = useRef<HTMLDivElement>(null);

  // Toggle cut filter
  const toggleCut = (cut: string) => {
    setSelectedCuts((prev) =>
      prev.includes(cut) ? prev.filter((c) => c !== cut) : [...prev, cut]
    );
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCuts([]);
    setCurrentPage(1);
  };

  // Filter gems
  const filteredGems = useMemo(() => {
    let filtered = GEMS_DATA;

    // Filter by cut
    if (selectedCuts.length > 0) {
      filtered = filtered.filter((gem) => {
        // Handle "Other" category (Unknown + Triangle)
        if (selectedCuts.includes('Other')) {
          return selectedCuts.includes(gem.cut) || gem.cut === 'Unknown' || gem.cut === 'Triangle';
        }
        return selectedCuts.includes(gem.cut);
      });
    }

    return filtered;
  }, [selectedCuts]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredGems.length / pageSize);

  const paginatedGems = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredGems.slice(startIndex, endIndex);
  }, [filteredGems, currentPage, pageSize]);

  // Handle page size change
  const handlePageSizeChange = (newSize: PageSize) => {
    setPageSize(newSize);
    setCurrentPage(1); // Reset to first page
    setDropdownOpen(false);
  };

  const handleImageLoad = (gemId: string) => {
    setImageLoading((prev) => ({ ...prev, [gemId]: false }));
  };

  const handlePageChange = (direction: 'prev' | 'next') => {
    // Scroll to product grid instead of page top
    if (productGridRef.current) {
      productGridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (direction === 'prev') {
      setCurrentPage((prev) => Math.max(1, prev - 1));
    } else {
      setCurrentPage((prev) => Math.min(totalPages, prev + 1));
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb and Title Section */}
      <div className="bg-[#fff] min-h-[400px]">
        <div className="flex flex-col lg:px-[120px] md:px-5 md:py-[92px] px-[20px] gap-4">
          {/* Breadcrumb */}
          <Breadcrumb items={[{ label: '首頁', href: '/' }, { label: '寶石' }]} />

          {/* Title and Description */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="md:text-title text-mobileTitle">寶石</div>
              <div className="md:text-[16px] md:leading-5 text-mobileNormal">
                在 Day
                Karkal，從輕奢日常到極致奢華的珠寶首飾均能一一找到。不論是鑽石、彩色寶石或其他單品，我們也能滿足您的需求。
              </div>
            </div>

            {/* Filter Panel */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-8 rounded-[20px] bg-secondary-100 md:p-12 p-5">
                {/* Icon Grid - 10 columns */}
                <div className="lg:flex grid lg:flex-row grid-cols-5 justify-center md:gap-[25px] gap-3">
                  {CUT_CATEGORIES.map(({ value, label, name }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => toggleCut(value)}
                      className={`
                    flex flex-col md:gap-6 gap-3 md:p-[10px] items-center justify-center hover:bg-[rgba(128,124,124,0.3)]
                    ${
                      selectedCuts.includes(value) ? 'border-secondary-700' : 'border-secondary-100'
                    } border border-solid rounded-[10px] md:w-[100px]
                  `}
                    >
                      <img
                        width={46}
                        height={46}
                        className="h-[23px] md:h-[60px]"
                        src={`/homePage/diamonds/${name}.svg`}
                        alt={label}
                        loading="lazy"
                      />
                      <div className="md:p-[10px]">
                        <div className="md:text-normal text-mobileNormal text-center">{label}</div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Clear Filter Button */}
                <div className="flex justify-end">
                  <button type="button" onClick={clearFilters}>
                    清除選項
                  </button>
                </div>
              </div>
            </div>

            {/* Page Size Selector */}
            <div className="flex flex-row-reverse px-1">
              <div className="flex flex-col md:items-end items-center justify-between py-3 md:text-normal text-mobileNormal">
                <div className="py-3">總共: {filteredGems.length}件產品</div>
                <div className="flex items-center py-3">
                  顯示數量:
                  <div className="relative">
                    {/* Dropdown Button */}
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="transform duration-500 px-6 py-2 text-left border border-solid border-primary-500 rounded-[5px] w-[120px] ml-2 text-sm"
                    >
                      <div className="flex justify-between items-center w-full">
                        <div></div>
                        <h5 className="md:text-normal text-mobileNormal">{pageSize}</h5>
                        <div
                          className={`transform duration-500 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                        >
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Dropdown arrow"
                          >
                            <path
                              d="M8 4.19374L5.5 6.69374L3 4.19374"
                              stroke="black"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 z-20">
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          dropdownOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="flex flex-col bg-neutral-50 border border-t-0 border-solid border-primary-500 rounded-b-[5px] overflow-hidden w-[120px] ml-2">
                          <div className="md:max-h-[250px] max-h-[80px] overflow-auto">
                            {pageSize !== 25 && (
                              <button
                                type="button"
                                onClick={() => handlePageSizeChange(25)}
                                className="px-6 py-2 md:text-normal text-mobileNormal w-full border-b border-solid border-primary-500 hover:bg-gray-100"
                              >
                                25
                              </button>
                            )}
                            {pageSize !== 50 && (
                              <button
                                type="button"
                                onClick={() => handlePageSizeChange(50)}
                                className={`px-6 py-2 md:text-normal text-mobileNormal w-full ${
                                  pageSize !== 100 ? 'border-b border-solid border-primary-500' : ''
                                } hover:bg-gray-100`}
                              >
                                50
                              </button>
                            )}
                            {pageSize !== 100 && (
                              <button
                                type="button"
                                onClick={() => handlePageSizeChange(100)}
                                className="px-6 py-2 md:text-normal text-mobileNormal w-full hover:bg-gray-100"
                              >
                                100
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {paginatedGems.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-lg text-gray-600 font-light">沒有找到符合條件的產品</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 px-6 py-2 bg-primary text-white rounded hover:bg-secondary transition-colors"
                >
                  清除過濾器
                </button>
              </div>
            ) : (
              <>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-5 gap-y-10">
                  {paginatedGems.map((gem) => (
                    <Link to={`/gem/${gem.id}`} key={gem.id} className="flex flex-col gap-2 group">
                      {/* Image Container with Loading Skeleton */}
                      <div className="relative block items-center justify-center overflow-hidden w-full">
                        {/* Loading Skeleton */}
                        {imageLoading[gem.id] !== false && (
                          <div className="absolute inset-0 animate-pulse bg-neutral-200 rounded-[inherit] pointer-events-none z-10" />
                        )}

                        {/* Product Image */}
                        <img
                          draggable="false"
                          alt={gem.name}
                          loading="lazy"
                          width="300"
                          height="300"
                          decoding="async"
                          data-nimg="1"
                          className="w-full h-auto object-cover transition-opacity duration-200"
                          style={{
                            color: 'transparent',
                            opacity: imageLoading[gem.id] === false ? 1 : 0,
                            transition: 'opacity 0.2s ease-in-out',
                          }}
                          src={gem.imageUrl}
                          onLoad={() => handleImageLoad(gem.id)}
                        />

                        {/* Badges */}
                        {gem.certified && (
                          <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1">
                            認證
                          </div>
                        )}
                        {!gem.inStock && (
                          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1">
                            缺貨
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="flex flex-col gap-2">
                        {/* Product Name */}
                        <h3 className="text-[13px] text-center">{gem.name}</h3>

                        {/* Product Code - SKU */}
                        <div className="text-[13px] text-center">{gem.sku}</div>

                        {/* Price */}
                        <div className="text-mobileInput text-center text-[#BF9959] font-bold">
                          HK${gem.price.toLocaleString()}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="mt-12 flex items-center justify-between text-sm">
                    {/* Previous Button */}
                    <button
                      type="button"
                      onClick={() => handlePageChange('prev')}
                      disabled={currentPage === 1}
                      className="text-dark hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-300"
                    >
                      上一頁
                    </button>

                    {/* Page Info */}
                    <div className="text-dark">
                      {currentPage} of {totalPages}
                    </div>

                    {/* Next Button */}
                    <button
                      type="button"
                      onClick={() => handlePageChange('next')}
                      disabled={currentPage === totalPages}
                      className="text-dark hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-300"
                    >
                      下一頁
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
