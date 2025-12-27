import { type MouseEvent, useRef, useState } from 'react';

interface ImageMagnifierProps {
  src: string;
  alt: string;
  zoomLevel?: number;
  borderRadius?: number;
}

export default function ImageMagnifier({
  src,
  alt,
  zoomLevel = 2.5,
  borderRadius = 10,
}: ImageMagnifierProps) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    const elem = e.currentTarget;
    const { width, height } = elem.getBoundingClientRect();
    setSize([width, height]);
    setShowMagnifier(true);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const elem = e.currentTarget;
    const { top, left } = elem.getBoundingClientRect();

    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;
    setXY([x, y]);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  const magnifierWidth = imgWidth * 1.2;
  const magnifierHeight = imgHeight * 1.2;

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        className="relative w-full max-w-[600px] mx-auto aspect-square cursor-crosshair"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        role="img"
        aria-label={alt}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />

        {showMagnifier && (
          <div
            style={{
              position: 'absolute',
              pointerEvents: 'none',
              height: `${magnifierHeight}px`,
              width: `${magnifierWidth}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: '1',
              border: '3px solid rgba(0, 0, 0, 0.5)',
              backgroundColor: 'white',
              backgroundImage: `url('${src}')`,
              backgroundRepeat: 'no-repeat',
              borderRadius: `${borderRadius}px`,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
              backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
              backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
            }}
          />
        )}
      </div>
    </div>
  );
}
