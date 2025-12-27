import { Link } from 'react-router-dom';

interface GemCardProps {
  gem: {
    id: string;
    name: string;
    sku: string;
    price: number;
    imageUrl: string;
    certified: boolean;
    inStock: boolean;
  };
  isLoading: boolean;
  onImageLoad: (gemId: string) => void;
}

export default function GemCard({ gem, isLoading, onImageLoad }: GemCardProps) {
  return (
    <Link to={`/gem/${gem.id}`} className="flex flex-col gap-2 group">
      <div className="relative block items-center justify-center overflow-hidden w-full">
        {isLoading && (
          <div className="absolute inset-0 animate-pulse bg-neutral-200 rounded-[inherit] pointer-events-none z-10" />
        )}

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
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.2s ease-in-out',
          }}
          src={gem.imageUrl}
          onLoad={() => onImageLoad(gem.id)}
        />

        {gem.certified && (
          <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1">認證</div>
        )}
        {!gem.inStock && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1">缺貨</div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-normal text-center">{gem.name}</h3>

        <div className="text-normal text-center">{gem.sku}</div>

        <div className="text-normal text-center text-[#BF9959] font-bold">
          HK${gem.price.toLocaleString()}
        </div>
      </div>
    </Link>
  );
}
