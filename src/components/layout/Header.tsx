import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/sale', label: 'SALE', highlight: true },
    { path: '/new', label: '新品上架' },
    { path: '/fashion', label: '時尚系列' },
    { path: '/', label: '寶石' },
    { path: '/diamonds', label: '鑽石' },
    { path: '/engagement', label: '求婚戒指' },
    { path: '/gold-prices', label: '黃金報價' },
    { path: '/about', label: '關於我們' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="relative z-50 flex-col py-[18px] bg-dark text-secondary">
      <div className="justify-end py-1 hidden md:grid px-0 grid-cols-3 divide-x divide-gray-400 space-x-2" />

      <div className="flex justify-between items-center px-4">
        <div>
          <Link to="/">
            <div className="relative block items-center justify-center overflow-hidden w-[129px]">
              {!logoLoaded && (
                <div className="absolute inset-0 animate-pulse bg-neutral-200 rounded-[inherit] pointer-events-none z-10" />
              )}
              <img
                draggable="false"
                alt="Daykarkal"
                loading="lazy"
                width="1000"
                height="100"
                decoding="async"
                data-nimg="1"
                className="w-[129px] md:w-[120px]"
                style={{
                  color: 'transparent',
                  opacity: logoLoaded ? 1 : 0,
                  transition: 'opacity 0.2s ease-in-out',
                  height: 'auto',
                }}
                src="/logo.svg"
                onLoad={() => setLogoLoaded(true)}
              />
            </div>
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="flex gap-2 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                    transition-all duration-100 border-b-2 text-xs md:text-sm
                    ${isActive(link.path) ? 'border-gold' : 'border-dark hover:border-gold'}
                    ${link.highlight ? 'text-highlight font-semibold' : ''}
                  `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="flex gap-[12px] md:hidden">
            <Link to="/appointment">
              <img
                src="/calendar.svg"
                alt="booking"
                width="20"
                height="20"
                style={{ color: 'transparent' }}
              />
            </Link>
            <Link to="/cart">
              <img
                src="/shoppingCart.svg"
                alt="shopping-cart"
                width="20"
                height="20"
                style={{ color: 'transparent' }}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-0 bg-transparent border-0"
            >
              <img
                src="/menu.svg"
                alt="menu"
                width="20"
                height="20"
                style={{ color: 'transparent' }}
              />
            </button>
          </div>

          <div className="hidden md:block">
            <Link to="/appointment">
              <button
                type="button"
                className="rounded-[5px] hover:bg-secondary-800 transform duration-500 bg-brown px-[12px] py-[8px] flex gap-3 items-center justify-center w-fit"
              >
                <div>
                  <img
                    src="/calendar.svg"
                    alt="booking"
                    width="0"
                    height="0"
                    style={{ color: 'transparent', width: 'auto', height: 'auto' }}
                  />
                </div>
                <div className="text-secondary">預約到店</div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`
            fixed right-0 top-0 z-40 h-full p-4 overflow-y-auto w-[280px]
            bg-[rgba(255,255,255,0.85)] ease-in-out duration-300 transform transition-all
            ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
      >
        <div className="flex flex-col gap-2">
          <div className="self-end">
            <button type="button" onClick={() => setMobileMenuOpen(false)}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                role="img"
                aria-label="Close menu"
              >
                <path
                  d="M4 4L16.0002 16.0002"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.99984 16.0002L16 4"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex">
              <Link to="/cart">
                <button type="button" className="flex-1 px-4 flex gap-3 items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 16"
                    fill="none"
                    role="img"
                    aria-label="Shopping cart"
                  >
                    <path
                      d="M6.30778 11.9533C7.27812 11.9533 8.06472 12.7473 8.06472 13.7267C8.06472 14.7061 7.27812 15.5 6.30778 15.5C5.33747 15.5 4.55084 14.7061 4.55084 13.7267C4.55084 12.7473 5.33744 11.9533 6.30778 11.9533Z"
                      fill="black"
                    />
                  </svg>
                  <div className="text-body text-dark">購物車</div>
                </button>
              </Link>
              <Link to="/appointment">
                <button type="button" className="flex-1 px-4 flex gap-3 items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 46 46"
                    fill="none"
                    role="img"
                    aria-label="Appointment"
                  >
                    <path
                      d="M11.7646 5.13477C11.7646 4.617 12.1844 4.19727 12.7021 4.19727C13.2199 4.19727 13.6396 4.617 13.6396 5.13477V10.7598C13.6396 11.2775 13.2199 11.6973 12.7021 11.6973C12.1844 11.6973 11.7646 11.2775 11.7646 10.7598V5.13477Z"
                      fill="black"
                    />
                  </svg>
                  <div className="text-body text-dark">預約到訪</div>
                </button>
              </Link>
            </div>

            <div className="h-[1px] bg-divider w-full" />

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.path} className="px-4 py-2 flex gap-2 items-center">
                  <Link
                    to={link.path}
                    className={`text-body ${link.highlight ? 'text-highlight' : 'text-dark'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
