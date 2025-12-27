import { useMemo, useRef, useState } from 'react';
import Breadcrumb from '@/components/navigation/Breadcrumb';
import { GEMS_DATA } from '@/data/gems';
import GemCard from '../components/GemCard';
import Pagination from '../components/Pagination';
import CutFilter from './components/CutFilter';
import PageSizeSelector from './components/PageSizeSelector';

type PageSize = 25 | 50 | 100;

export default function GemListPage() {
  const [pageSize, setPageSize] = useState<PageSize>(50);
  const [selectedCuts, setSelectedCuts] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imageLoading, setImageLoading] = useState<Record<string, boolean>>({});
  const productGridRef = useRef<HTMLDivElement>(null);

  const toggleCut = (cut: string) => {
    setSelectedCuts((prev) =>
      prev.includes(cut) ? prev.filter((c) => c !== cut) : [...prev, cut]
    );
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedCuts([]);
    setCurrentPage(1);
  };

  const filteredGems = useMemo(() => {
    let filtered = GEMS_DATA;

    if (selectedCuts.length > 0) {
      filtered = filtered.filter((gem) => {
        if (selectedCuts.includes('Other')) {
          return selectedCuts.includes(gem.cut) || gem.cut === 'Unknown' || gem.cut === 'Triangle';
        }
        return selectedCuts.includes(gem.cut);
      });
    }

    return filtered;
  }, [selectedCuts]);

  const totalPages = Math.ceil(filteredGems.length / pageSize);

  const paginatedGems = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredGems.slice(startIndex, endIndex);
  }, [filteredGems, currentPage, pageSize]);

  const handlePageSizeChange = (newSize: PageSize) => {
    setPageSize(newSize);
    setCurrentPage(1);
  };

  const handleImageLoad = (gemId: string) => {
    setImageLoading((prev) => ({ ...prev, [gemId]: false }));
  };

  const handlePageChange = (direction: 'prev' | 'next') => {
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
    <div className="bg-[#fff] min-h-[400px]">
      <div className="flex flex-col lg:px-[120px] md:px-5 md:py-[92px] px-[20px] gap-4 mb-[30px]">
        <Breadcrumb items={[{ label: '首頁', href: '/' }, { label: '寶石' }]} />

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="text-mobileTitle md:text-title">寶石</div>
            <div className="text-normal md:text-[16px] md:leading-5">
              在 Day
              Karkal，從輕奢日常到極致奢華的珠寶首飾均能一一找到。不論是鑽石、彩色寶石或其他單品，我們也能滿足您的需求。
            </div>
          </div>

          <CutFilter
            selectedCuts={selectedCuts}
            onToggleCut={toggleCut}
            onClearFilters={clearFilters}
          />

          <div className="flex flex-col items-end px-1 text-normal">
            <div className="py-3">總共: {filteredGems.length}件產品</div>
            <PageSizeSelector pageSize={pageSize} onPageSizeChange={handlePageSizeChange} />
          </div>

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
                  <GemCard
                    key={gem.id}
                    gem={gem}
                    isLoading={imageLoading[gem.id] !== false}
                    onImageLoad={handleImageLoad}
                  />
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
