import ProductDataTable from './ProductDataTable';

interface Gem {
  name: string;
  price: number;
  inStock: boolean;
  weight: number;
  sku: string;
  category: string;
  cut: string;
}

interface ProductInfoProps {
  gem: Gem;
}

export default function ProductInfo({ gem }: ProductInfoProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-title2 md:text-heading mb-4">{gem.name}</h1>
        <div className="text-mobileTitle md:text-title text-primary mb-6">
          HK${gem.price.toLocaleString()}
        </div>
      </div>

      <button
        type="button"
        disabled={!gem.inStock}
        className={`w-full py-2 px-2 text-normal transition-colors duration-300 rounded-[5px] border border-solid text-center ${
          gem.inStock
            ? 'bg-white text-primary hover:bg-[#FFF9F0] border-primary cursor-pointer'
            : 'bg-[#E0E0E0] text-[#9E9E9E] border-[#E0E0E0] cursor-not-allowed'
        }`}
      >
        {gem.inStock ? '現貨' : '缺貨'}
      </button>

      {gem.inStock && (
        <div>
          <label htmlFor="gem-size" className="block text-normal text-gray-600 mb-2">
            主石尺寸：
          </label>
          <input
            id="gem-size"
            type="text"
            value={`${gem.weight} 卡`}
            readOnly
            className="w-1/2 py-2 px-4 text-normal text-primary border border-primary rounded-[5px] bg-white text-center cursor-pointer hover:bg-[#FFF9F0] transition-colors duration-300"
          />
        </div>
      )}

      <ProductDataTable sku={gem.sku} category={gem.category} weight={gem.weight} cut={gem.cut} />

      <button
        type="button"
        className="flex gap-2 items-center hover:bg-[#FFF9F0] transform duration-500 rounded-[5px] px-4 border justify-center border-[#D9C29B] border-solid cursor-pointer"
        style={{ width: '100%', padding: '10px' }}
      >
        <div className="text-[14px] font-medium text-[#8A5D11]">WhatsApp查詢</div>
      </button>
    </div>
  );
}
