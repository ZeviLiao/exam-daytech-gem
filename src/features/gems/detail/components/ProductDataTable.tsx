interface ProductDataTableProps {
  sku: string;
  category: string;
  weight: number;
  cut: string;
}

export default function ProductDataTable({ sku, category, weight, cut }: ProductDataTableProps) {
  return (
    <div className="bg-white border border-dark rounded-[5px] p-4 w-3/4">
      <h2 className="text-mobileTitle md:text-title font-bold text-dark mb-4">產品資料</h2>
      <div className="flex flex-col gap-3">
        <div className="flex justify-start items-center border-b border-gray-300 pb-3">
          <div className="flex-1 text-normal text-gray-700">款號：</div>
          <div className="flex-1 text-normal text-gray-700 text-left">{sku}</div>
        </div>
        <div className="flex justify-start items-center border-b border-gray-300 pb-3">
          <div className="flex-1 text-normal text-gray-700">主石：</div>
          <div className="flex-1 text-normal text-gray-700 text-left">{category}</div>
        </div>
        <div className="flex justify-start items-center border-b border-gray-300 pb-3">
          <div className="flex-1 text-normal text-gray-700">主石克拉：</div>
          <div className="flex-1 text-normal text-gray-700 text-left">{weight}卡</div>
        </div>
        <div className="flex justify-start items-center">
          <div className="flex-1 text-normal text-gray-700">主石形狀：</div>
          <div className="flex-1 text-normal text-gray-700 text-left">{cut}</div>
        </div>
      </div>
    </div>
  );
}
