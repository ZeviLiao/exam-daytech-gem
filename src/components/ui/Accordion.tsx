import { type ReactNode, useState } from 'react';

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({ title, children, defaultOpen = true }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col py-4 md:px-10 border-b-[0.5px] border-[#D9C29B]">
      <button
        type="button"
        className="flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-[20px]">{title}</div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transform duration-500 ${isOpen ? 'rotate-0' : 'rotate-180'}`}
          aria-label="Toggle accordion"
        >
          <title>Toggle accordion</title>
          <path
            d="M18 15L12 9L6 15"
            stroke="black"
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
        <div className="flex flex-col w-full px-0 py-5">{children}</div>
      </div>
    </div>
  );
}
