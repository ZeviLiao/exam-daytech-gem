import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="flex gap-1 pb-2 border-b-[1px] border-solid border-neutral-300 pt-2">
      {items.map((item) => (
        <div key={item.label} className="flex gap-1">
          {item.href ? (
            <Link to={item.href} className="text-normal">
              {item.label}
            </Link>
          ) : (
            <div className="text-normal">{item.label}</div>
          )}
          {items.indexOf(item) < items.length - 1 && <div className="text-normal">/</div>}
        </div>
      ))}
    </div>
  );
}
