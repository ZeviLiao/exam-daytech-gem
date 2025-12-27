import { type ReactNode, useState } from 'react';

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  variant?: 'default' | 'footer';
}

export default function Accordion({
  title,
  children,
  defaultOpen = true,
  variant = 'default',
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const isFooter = variant === 'footer';

  return (
    <div
      className={`flex flex-col ${
        isFooter
          ? 'py-2 border-b-[0.5px] border-secondary/20'
          : 'py-4 md:px-10 border-b-[0.5px] border-gold-light'
      }`}
    >
      <button
        type="button"
        className={`flex justify-between items-center w-full ${isFooter ? 'px-4 py-2' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h5
          className={`${
            isFooter
              ? 'text-secondary text-mobileNormal font-semibold'
              : 'text-mobileTitle md:text-title2'
          } text-left`}
        >
          {title}
        </h5>
        <svg
          width={isFooter ? '10' : '32'}
          height={isFooter ? '10' : '32'}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transform duration-500 shrink-0 ${isOpen ? 'rotate-0' : 'rotate-180'}`}
          aria-label="Toggle accordion"
        >
          <title>Toggle accordion</title>
          <path
            d="M18 15L12 9L6 15"
            stroke={isFooter ? '#FAF9F9' : 'black'}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`flex flex-col w-full ${isFooter ? 'px-4 pt-3' : 'px-0 py-5'}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
