interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (direction: 'prev' | 'next') => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-6 flex items-center justify-between text-sm">
      <button
        type="button"
        onClick={() => onPageChange('prev')}
        disabled={currentPage === 1}
        className="text-dark hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors duration-300"
      >
        上一頁
      </button>

      <div className="text-dark">
        {currentPage} of {totalPages}
      </div>

      <button
        type="button"
        onClick={() => onPageChange('next')}
        disabled={currentPage === totalPages}
        className="text-dark hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors duration-300"
      >
        下一頁
      </button>
    </div>
  );
}
