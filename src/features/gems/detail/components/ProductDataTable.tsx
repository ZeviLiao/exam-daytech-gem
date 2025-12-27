interface ProductDataTableProps {
  sku: string;
  category: string;
  weight: number;
  cut: string;
}

export default function ProductDataTable({ sku, category, weight, cut }: ProductDataTableProps) {
  return (
    <div className="bg-white border border-gray-400 rounded-[5px] p-4 w-3/4">
      <h2 className="text-mobileTitle md:text-title2 mb-4">產品資料</h2>
      <div className="flex flex-col gap-3">
        <div className="flex justify-start items-center border-b border-gray-300 pb-3">
          <div className="flex-1 text-normal">款號：</div>
          <div className="flex-1 text-normal text-left">{sku}</div>
        </div>
        <div className="flex justify-start items-center border-b border-gray-300 pb-3">
          <div className="flex-1 text-normal">主石：</div>
          <div className="flex-1 text-normal text-left">{category}</div>
        </div>
        <div className="flex justify-start items-center border-b border-gray-300 pb-3">
          <div className="flex-1 text-normal">主石克拉：</div>
          <div className="flex-1 text-normal text-left">{weight}卡</div>
        </div>
        <div className="flex justify-start items-center">
          <div className="flex-1 text-normal">主石形狀：</div>
          <div className="flex-1 text-normal text-left">{cut}</div>
        </div>
      </div>
    </div>
  );
}
