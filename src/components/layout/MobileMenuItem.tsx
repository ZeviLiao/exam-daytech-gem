import { type ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';

interface SubLink {
  to: string;
  label: string;
}

interface MobileMenuItemProps {
  icon: ReactNode;
  label: string;
  to?: string;
  subLinks?: SubLink[];
  color?: string;
  onNavigate: () => void;
}

export default function MobileMenuItem({
  icon,
  label,
  to,
  subLinks,
  color,
  onNavigate,
}: MobileMenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const textColor = color || 'text-dark';

  if (subLinks && subLinks.length > 0) {
    return (
      <div className="flex flex-col">
        <button
          type="button"
          className="px-4 py-2 flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex gap-2 items-center">
            {icon}
            <div className={`text-body ${textColor}`}>{label}</div>
          </div>
          <div
            className={`transform duration-500 origin-center flex items-center ${isOpen ? 'rotate-0' : 'rotate-180'}`}
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Expand menu"
            >
              <title>Expand menu</title>
              <path
                d="M8 4.19374L5.5 6.69374L3 4.19374"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
        <div
          aria-hidden={!isOpen}
          className={`transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2 py-2 pl-[45px]">
            {subLinks.map((subLink) => (
              <Link
                key={subLink.to}
                to={subLink.to}
                className="text-normal text-dark"
                onClick={onNavigate}
              >
                {subLink.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-2 flex gap-2 items-center">
      {icon}
      <Link to={to || '/'} className={`text-body ${textColor}`} onClick={onNavigate}>
        {label}
      </Link>
    </div>
  );
}
