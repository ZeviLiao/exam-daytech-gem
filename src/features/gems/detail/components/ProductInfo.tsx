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
        <h1 className="text-heading md:text-[40px] mb-4">{gem.name}</h1>
        <div className="text-mobileTitle md:text-title text-primary mb-6">
          HK${gem.price.toLocaleString()}
        </div>
      </div>

      <button
        type="button"
        disabled={!gem.inStock}
        className={`w-full py-2 px-2 text-normal transition-colors duration-300 rounded-[5px] border border-solid text-center ${
          gem.inStock
            ? 'bg-white text-primary hover:bg-hover-cream border-primary cursor-pointer'
            : 'bg-disabled text-disabled border-disabled cursor-not-allowed'
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
            className="w-1/2 py-2 px-4 text-normal text-primary border border-primary rounded-[5px] bg-white text-center cursor-pointer hover:bg-hover-cream transition-colors duration-300"
          />
        </div>
      )}

      <ProductDataTable sku={gem.sku} category={gem.category} weight={gem.weight} cut={gem.cut} />

      <button
        type="button"
        className="w-full py-[10px] px-4 flex gap-2 items-center justify-center hover:bg-hover-cream transform duration-500 rounded-[5px] border border-solid border-gold-light cursor-pointer"
      >
        <img src="/service.svg" alt="service" width={18} height={17} />
        <div className="text-normal font-medium text-gold-dark">WhatsApp查詢</div>
      </button>
    </div>
  );
}
