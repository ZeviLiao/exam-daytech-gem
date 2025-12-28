import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DiamondIcon from '../ui/DiamondIcon';
import GoldIcon from '../ui/GoldIcon';
import RingIcon from '../ui/RingIcon';
import StarIcon from '../ui/StarIcon';
import MobileMenuItem from './MobileMenuItem';

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

  const mobileMenuItems = [
    {
      id: 'sale',
      icon: <StarIcon />,
      label: 'SALE',
      to: '/sale',
      color: 'text-[#c40000]',
    },
    {
      id: 'new',
      icon: <StarIcon />,
      label: '新品上架',
      to: '/new',
    },
    {
      id: 'gems',
      icon: <StarIcon />,
      label: '寶石',
      to: '/',
    },
    {
      id: 'fashion',
      icon: <StarIcon />,
      label: '時尚系列',
      subLinks: [
        { to: '/fashion/ring', label: '戒指' },
        { to: '/fashion/bracelet', label: '手鐲/手鏈' },
        { to: '/fashion/pendant', label: '吊墜' },
        { to: '/fashion/necklace', label: '項鏈' },
        { to: '/fashion/earrings', label: '耳環' },
      ],
    },
    {
      id: 'diamonds',
      icon: <DiamondIcon />,
      label: '鑽石',
      subLinks: [{ to: '/diamonds', label: '天然鑽石' }],
    },
    {
      id: 'wedding',
      icon: <RingIcon />,
      label: '婚戒系列',
      subLinks: [
        { to: '/engagement-rings', label: '求婚戒指托' },
        { to: '/wedding-rings', label: '結婚戒指托' },
      ],
    },
    {
      id: 'gold',
      icon: <GoldIcon />,
      label: '黃金系列',
      subLinks: [
        { to: '/gold-prices', label: '黃金報價' },
        { to: '/gold-jewelry', label: '黃金首飾' },
      ],
    },
    {
      id: 'custom',
      icon: <StarIcon />,
      label: '珠寶訂製',
      to: '/custom-jewelry',
    },
    {
      id: 'about',
      icon: <StarIcon />,
      label: '關於 DAY KARKAL',
      subLinks: [
        { to: '/about', label: '關於我們' },
        { to: '/contact', label: '聯絡我們' },
        { to: '/stores', label: '店舖位置' },
      ],
    },
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
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Shopping cart"
                  >
                    <title>Shopping cart</title>
                    <path
                      d="M6.30778 11.9533C7.27812 11.9533 8.06472 12.7473 8.06472 13.7267C8.06472 14.7061 7.27812 15.5 6.30778 15.5C5.33747 15.5 4.55084 14.7061 4.55084 13.7267C4.55084 12.7473 5.33744 11.9533 6.30778 11.9533ZM6.30778 14.5C6.73095 14.5 7.07398 14.1538 7.07398 13.7267C7.07398 13.2995 6.73095 12.9533 6.30779 12.9533C5.88465 12.9533 5.54162 13.2995 5.54162 13.7267C5.54162 14.1538 5.88465 14.5 6.30781 14.5H6.30778ZM11.9815 11.9533C12.9519 11.9533 13.7385 12.7473 13.7385 13.7267C13.7385 14.7061 12.9519 15.5 11.9815 15.5C11.0112 15.5 10.2246 14.7061 10.2246 13.7267C10.2246 12.7473 11.0112 11.9533 11.9815 11.9533ZM11.9815 14.5C12.4047 14.5 12.7477 14.1538 12.7477 13.7267C12.7477 13.2995 12.4047 12.9533 11.9815 12.9533C11.5584 12.9533 11.2153 13.2995 11.2153 13.7267C11.2153 14.1538 11.5583 14.5 11.9815 14.5H11.9815ZM11.9683 12.9533H5.36327C5.35682 12.9534 5.3492 12.9535 5.34156 12.9535C4.19794 12.9535 3.27089 12.0177 3.27089 10.8635C3.27089 9.82646 4.01918 8.96585 5.00049 8.80171L5.01254 8.80003L3.09116 2.48272C2.9067 1.90818 2.38125 1.50005 1.76134 1.50005H0V0.500029H1.75694L1.76716 0.5C2.82713 0.5 3.7254 1.19887 4.03428 2.16501L4.03898 2.18203V2.18736L6.34218 9.774H5.36327C4.76686 9.774 4.28336 10.262 4.28336 10.864C4.28336 11.466 4.76686 11.954 5.36327 11.954H11.9683V12.9533ZM13.6169 9.77336H5.67371V8.77336H12.8666L14.0092 4.75003V4.0467H4.41877V3.0467H15V4.89002L13.6169 9.77336Z"
                      fill="black"
                    />
                  </svg>
                  <div className="text-body text-dark">購物車</div>
                </button>
              </Link>
              <Link to="/appointment">
                <button type="button" className="flex-1 px-4 flex gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 46 46"
                    fill="none"
                    role="img"
                    aria-label="Appointment calendar"
                  >
                    <title>Appointment calendar</title>
                    <path
                      d="M11.7646 5.13477C11.7646 4.617 12.1844 4.19727 12.7021 4.19727C13.2199 4.19727 13.6396 4.617 13.6396 5.13477V10.7598C13.6396 11.2775 13.2199 11.6973 12.7021 11.6973C12.1844 11.6973 11.7646 11.2775 11.7646 10.7598V5.13477Z"
                      fill="black"
                    />
                    <path
                      d="M26.7651 5.13477C26.7651 4.617 27.1849 4.19727 27.7026 4.19727C28.2204 4.19727 28.6401 4.617 28.6401 5.13477V10.7598C28.6401 11.2775 28.2204 11.6973 27.7026 11.6973C27.1849 11.6973 26.7651 11.2775 26.7651 10.7598V5.13477Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.6392 22.0098H11.7642V23.8848H13.6392V22.0098ZM11.7642 20.1348C10.7286 20.1348 9.88916 20.9742 9.88916 22.0098V23.8848C9.88916 24.9203 10.7286 25.7598 11.7642 25.7598H13.6392C14.6747 25.7598 15.5142 24.9203 15.5142 23.8848V22.0098C15.5142 20.9742 14.6747 20.1348 13.6392 20.1348H11.7642Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.1387 22.0098H19.2637V23.8848H21.1387V22.0098ZM19.2637 20.1348C18.2281 20.1348 17.3887 20.9742 17.3887 22.0098V23.8848C17.3887 24.9203 18.2281 25.7598 19.2637 25.7598H21.1387C22.1742 25.7598 23.0137 24.9203 23.0137 23.8848V22.0098C23.0137 20.9742 22.1742 20.1348 21.1387 20.1348H19.2637Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.6382 22.0098H26.7632V23.8848H28.6382V22.0098ZM26.7632 20.1348C25.7276 20.1348 24.8882 20.9742 24.8882 22.0098V23.8848C24.8882 24.9203 25.7276 25.7598 26.7632 25.7598H28.6382C29.6737 25.7598 30.5132 24.9203 30.5132 23.8848V22.0098C30.5132 20.9742 29.6737 20.1348 28.6382 20.1348H26.7632Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.6392 29.5098H11.7642V31.3848H13.6392V29.5098ZM11.7642 27.6348C10.7286 27.6348 9.88916 28.4742 9.88916 29.5098V31.3848C9.88916 32.4203 10.7286 33.2598 11.7642 33.2598H13.6392C14.6747 33.2598 15.5142 32.4203 15.5142 31.3848V29.5098C15.5142 28.4742 14.6747 27.6348 13.6392 27.6348H11.7642Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.1387 29.5098H19.2637V31.3848H21.1387V29.5098ZM19.2637 27.6348C18.2281 27.6348 17.3887 28.4742 17.3887 29.5098V31.3848C17.3887 32.4203 18.2281 33.2598 19.2637 33.2598H21.1387C22.1742 33.2598 23.0137 32.4203 23.0137 31.3848V29.5098C23.0137 28.4742 22.1742 27.6348 21.1387 27.6348H19.2637Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.95166 9.82227H31.4517C32.4872 9.82227 33.3267 10.6617 33.3267 11.6973V26.6973C33.9741 26.6973 34.6024 26.7793 35.2017 26.9335V11.6973C35.2017 9.6262 33.5227 7.94727 31.4517 7.94727H8.95166C6.88059 7.94727 5.20166 9.6262 5.20166 11.6973V34.1973C5.20166 36.2683 6.88059 37.9473 8.95166 37.9473H26.8301C26.4943 37.367 26.2342 36.7374 26.0629 36.0723H8.95166C7.91613 36.0723 7.07666 35.2328 7.07666 34.1973V11.6973C7.07666 10.6617 7.91613 9.82227 8.95166 9.82227Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M34.2647 18.2598H6.13965V16.3848H34.2647V18.2598Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M33.3262 39.8223C36.4328 39.8223 38.9512 37.3039 38.9512 34.1973C38.9512 31.0907 36.4328 28.5723 33.3262 28.5723C30.2196 28.5723 27.7012 31.0907 27.7012 34.1973C27.7012 37.3039 30.2196 39.8223 33.3262 39.8223ZM33.3262 41.6973C37.4683 41.6973 40.8262 38.3394 40.8262 34.1973C40.8262 30.0551 37.4683 26.6973 33.3262 26.6973C29.184 26.6973 25.8262 30.0551 25.8262 34.1973C25.8262 38.3394 29.184 41.6973 33.3262 41.6973Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M33.3252 29.6777C33.843 29.6777 34.2627 30.0975 34.2627 30.6152V34.6447L36.561 36.24C36.9863 36.5353 37.0918 37.1194 36.7965 37.5448C36.5013 37.9701 35.9171 38.0756 35.4918 37.7804L32.3877 35.6257V30.6152C32.3877 30.0975 32.8074 29.6777 33.3252 29.6777Z"
                      fill="black"
                    />
                  </svg>
                  <div className="text-body text-dark">預約到訪</div>
                </button>
              </Link>
            </div>

            <div className="h-[1px] bg-divider w-full" />

            <div className="flex flex-col gap-2">
              {mobileMenuItems.map((item) => (
                <MobileMenuItem
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  to={item.to}
                  subLinks={item.subLinks}
                  color={item.color}
                  onNavigate={() => setMobileMenuOpen(false)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
