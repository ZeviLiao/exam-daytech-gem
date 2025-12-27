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

interface CutFilterProps {
  selectedCuts: string[];
  onToggleCut: (cut: string) => void;
  onClearFilters: () => void;
}

export default function CutFilter({ selectedCuts, onToggleCut, onClearFilters }: CutFilterProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-8 rounded-[20px] bg-secondary-100 md:p-12 p-5">
        <div className="lg:flex grid lg:flex-row grid-cols-5 justify-center md:gap-[25px] gap-3">
          {CUT_CATEGORIES.map(({ value, label, name }) => (
            <button
              key={value}
              type="button"
              onClick={() => onToggleCut(value)}
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
                <div className="text-normal text-center">{label}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-end">
          <button type="button" onClick={onClearFilters}>
            清除選項
          </button>
        </div>
      </div>
    </div>
  );
}
