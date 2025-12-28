import { useState } from 'react';

type PageSize = 25 | 50 | 100;

interface PageSizeSelectorProps {
  pageSize: PageSize;
  onPageSizeChange: (size: PageSize) => void;
}

export default function PageSizeSelector({ pageSize, onPageSizeChange }: PageSizeSelectorProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handlePageSizeChange = (newSize: PageSize) => {
    onPageSizeChange(newSize);
    setDropdownOpen(false);
  };

  return (
    <div className="flex items-center py-3">
      顯示數量:
      <div className="relative">
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="transform duration-500 px-6 py-2 text-left border border-solid border-primary-500 rounded-[5px] w-[120px] ml-2 text-sm cursor-pointer"
        >
          <div className="flex justify-between items-center w-full">
            <div></div>
            <h5 className="text-normal">{pageSize}</h5>
            <div className={`transform duration-500 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
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
                    className="px-6 py-2 text-normal w-full border-b border-solid border-primary-500 hover:bg-gray-100 cursor-pointer"
                  >
                    25
                  </button>
                )}
                {pageSize !== 50 && (
                  <button
                    type="button"
                    onClick={() => handlePageSizeChange(50)}
                    className={`px-6 py-2 text-normal w-full ${
                      pageSize !== 100 ? 'border-b border-solid border-primary-500' : ''
                    } hover:bg-gray-100 cursor-pointer`}
                  >
                    50
                  </button>
                )}
                {pageSize !== 100 && (
                  <button
                    type="button"
                    onClick={() => handlePageSizeChange(100)}
                    className="px-6 py-2 text-normal w-full hover:bg-gray-100 cursor-pointer"
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
  );
}
