import { Link } from 'react-router-dom';

interface FooterLink {
  to: string;
  label: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-1 xl:gap-2 w-[130px]">
      <h3 className="text-subtitle mb">{title}</h3>
      <ul className="flex flex-col gap-1 xl:gap-2">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="text-normal hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
