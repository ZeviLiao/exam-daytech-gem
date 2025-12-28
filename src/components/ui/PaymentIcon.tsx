import { useState } from 'react';

interface PaymentIconProps {
  name: string;
  alt: string;
}

export default function PaymentIcon({ name, alt }: PaymentIconProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex flex-row" style={{ width: '60px' }}>
      <div
        className="relative inline-flex items-center justify-center overflow-hidden"
        style={{ width: '34px', height: '24px' }}
      >
        {!isLoaded && (
          <div className="absolute inset-0 animate-pulse bg-neutral-200 rounded-[inherit] pointer-events-none z-10" />
        )}
        <img
          draggable="false"
          alt={alt}
          loading="lazy"
          width="34"
          height="24"
          decoding="async"
          data-nimg="1"
          style={{
            color: 'transparent',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.2s ease-in-out',
          }}
          src={`/footer/${name}.svg`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
}
