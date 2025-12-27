import { useState } from 'react';
import { Link } from 'react-router-dom';
import Accordion from '../ui/Accordion';

export default function Footer() {
  const [imageLoading, setImageLoading] = useState<Record<string, boolean>>({});

  // Footer menu sections data
  const footerSections = [
    {
      title: '網上選購',
      links: [
        { to: '/jewelry', label: '珠寶產品' },
        { to: '/gold', label: '黃金產品' },
        { to: '/gold-raw', label: '裸金產品' },
        { to: '/diamonds', label: '裸鑽' },
      ],
    },
    {
      title: '關於我們',
      links: [
        { to: '/contact', label: '聯絡我們' },
        { to: '/about', label: '關於我們' },
        { to: '/store', label: '店舖位置' },
      ],
    },
    {
      title: '客戶專區',
      links: [
        { to: '/member', label: '會員優惠' },
        { to: '/shipping-returns', label: '運送及退貨' },
        { to: '/privacy', label: '私隱政策' },
        { to: '/faq', label: '常見問題' },
      ],
    },
    {
      title: '關於網頁',
      links: [
        { to: '/terms', label: '條款及細則' },
        { to: '/privacy-policy', label: '隱私政策' },
        { to: '/cookies', label: 'Cookie 政策' },
      ],
    },
  ];

  return (
    <footer className="bg-dark text-light md:py-16 py-8">
      <div className="flex flex-col bg-[#201C15] p-[28px] md:p-[100px] md:px-[150px] md:items-start items-center justify-center gap-[32px] md:gap-[40px]">
        {/* Mobile Logo - visible only on mobile */}
        <div
          className="block md:hidden w-fit"
          style={{ borderBottom: '1px solid rgba(209, 175, 116, 0.60)' }}
        >
          <img src="/mobileFooterLogo.svg" width={150} height={125} alt="Daykarkal" />
        </div>

        {/* Mobile Accordion Menu - visible only on mobile */}
        <div className="block md:hidden w-[150px]">
          {footerSections.map((section) => (
            <Accordion
              key={section.title}
              title={section.title}
              defaultOpen={false}
              variant="footer"
            >
              <ul className="space-y-2 flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-secondary text-[10px] hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Accordion>
          ))}
        </div>

        {/* Mobile Appointment Button - visible only on mobile */}
        <div className="block md:hidden">
          <Link to="/appointment">
            <button
              type="button"
              className="rounded-[5px] hover:bg-secondary-800 transform duration-500 bg-[#78480F] px-[12px] py-[8px] flex gap-3 items-center justify-center w-fit"
              style={{ minWidth: '135px' }}
            >
              <div className="text-secondary">預約到店</div>
            </button>
          </Link>
        </div>

        {/* Desktop Grid - visible only on medium screens and up */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px]">
          {/* Column 1 - Online Shopping */}
          <div className="flex flex-col gap-1 xl:gap-2 w-[130px]">
            <h3 className="text-mobileNormal md:text-normal mb-4">網上選購</h3>
            <ul className="flex flex-col gap-1 xl:gap-2">
              <li>
                <Link
                  to="/jewelry"
                  className="text-mobileNormal md:text-normal hover:text-primary transition-colors duration-300"
                >
                  珠寶產品
                </Link>
              </li>
              <li>
                <Link
                  to="/gold"
                  className="text-mobileNormal md:text-normal hover:text-primary transition-colors duration-300"
                >
                  黃金產品
                </Link>
              </li>
              <li>
                <Link
                  to="/gold-raw"
                  className="text-mobileNormal md:text-normal hover:text-primary transition-colors duration-300"
                >
                  裸金產品
                </Link>
              </li>
              <li>
                <Link
                  to="/diamonds"
                  className="text-mobileNormal md:text-normal hover:text-primary transition-colors duration-300"
                >
                  裸鑽
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - About Us */}
          <div className="flex flex-col gap-1 xl:gap-2 w-[130px]">
            <h3 className="text-mobileNormal md:text-normal mb-4">關於我們</h3>
            <ul className="flex flex-col gap-1 xl:gap-2">
              <li>
                <Link
                  to="/contact"
                  className="text-mobileNormal md:text-normal hover:text-primary transition-colors duration-300"
                >
                  聯絡我們
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-mobileNormal md:text-normal hover:text-primary transition-colors duration-300"
                >
                  關於我們
                </Link>
              </li>
              <li>
                <Link
                  to="/store"
                  className="text-mobileNormal md:text-normal hover:text-primary transition-colors duration-300"
                >
                  店舖位置
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Customer Area */}
          <div className="flex flex-col gap-1 xl:gap-2 w-[130px]">
            <h3 className="text-mobileNormal md:text-normal mb-4">客戶專區</h3>
            <ul className="flex flex-col gap-1 xl:gap-2">
              <li>
                <Link
                  to="/member"
                  className="text-mobileNormal md:text-normal hover:text-primary transition-colors duration-300"
                >
                  會員優惠
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping-returns"
                  className="text-mobileNormal md:text-normal hover:text-primary transition-colors duration-300"
                >
                  運送及退貨
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-mobileNormal md:text-normal hover:text-primary transition-colors duration-300"
                >
                  私隱政策
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-mobileNormal md:text-normal hover:text-primary transition-colors duration-300"
                >
                  常見問題
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Website Info */}
          <div className="flex flex-col gap-1 xl:gap-2 w-[130px]">
            <h3 className="text-mobileNormal md:text-normal mb-4">關於網頁</h3>
            <ul className="flex flex-col gap-1 xl:gap-2">
              <li>
                <Link
                  to="/terms"
                  className="text-mobileNormal md:text-normal hover:text-primary transition-colors duration-300"
                >
                  條款及細則
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-mobileNormal md:text-normal hover:text-primary transition-colors duration-300"
                >
                  隱私政策
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="text-mobileNormal md:text-normal hover:text-primary transition-colors duration-300"
                >
                  Cookie 政策
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="w-full flex justify-center md:justify-start">
          <div className="grid grid-cols-4 gap-2 md:flex md:flex-wrap">
            {/* Visa */}
            <div className="flex flex-row" style={{ width: '60px' }}>
              <div
                className="relative inline-flex items-center justify-center overflow-hidden"
                style={{ width: '34px', height: '24px' }}
              >
                {imageLoading.visa !== false && (
                  <div className="absolute inset-0 animate-pulse bg-neutral-200 rounded-[inherit] pointer-events-none z-10" />
                )}
                <img
                  draggable="false"
                  alt="visa"
                  loading="lazy"
                  width="34"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{
                    color: 'transparent',
                    opacity: imageLoading.visa === false ? 1 : 0,
                    transition: 'opacity 0.2s ease-in-out',
                  }}
                  src="/footer/visa.svg"
                  onLoad={() => setImageLoading((prev) => ({ ...prev, visa: false }))}
                />
              </div>
            </div>

            {/* Mastercard */}
            <div className="flex flex-row" style={{ width: '60px' }}>
              <div
                className="relative inline-flex items-center justify-center overflow-hidden"
                style={{ width: '34px', height: '24px' }}
              >
                {imageLoading.masterCard !== false && (
                  <div className="absolute inset-0 animate-pulse bg-neutral-200 rounded-[inherit] pointer-events-none z-10" />
                )}
                <img
                  draggable="false"
                  alt="masterCard"
                  loading="lazy"
                  width="34"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{
                    color: 'transparent',
                    opacity: imageLoading.masterCard === false ? 1 : 0,
                    transition: 'opacity 0.2s ease-in-out',
                  }}
                  src="/footer/masterCard.svg"
                  onLoad={() => setImageLoading((prev) => ({ ...prev, masterCard: false }))}
                />
              </div>
            </div>

            {/* UnionPay */}
            <div className="flex flex-row" style={{ width: '60px' }}>
              <div
                className="relative inline-flex items-center justify-center overflow-hidden"
                style={{ width: '34px', height: '24px' }}
              >
                {imageLoading.unionpay !== false && (
                  <div className="absolute inset-0 animate-pulse bg-neutral-200 rounded-[inherit] pointer-events-none z-10" />
                )}
                <img
                  draggable="false"
                  alt="unionpay"
                  loading="lazy"
                  width="34"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{
                    color: 'transparent',
                    opacity: imageLoading.unionpay === false ? 1 : 0,
                    transition: 'opacity 0.2s ease-in-out',
                  }}
                  src="/footer/unionpay.svg"
                  onLoad={() => setImageLoading((prev) => ({ ...prev, unionpay: false }))}
                />
              </div>
            </div>

            {/* Alipay */}
            <div className="flex flex-row" style={{ width: '60px' }}>
              <div
                className="relative inline-flex items-center justify-center overflow-hidden"
                style={{ width: '34px', height: '24px' }}
              >
                {imageLoading.alipay !== false && (
                  <div className="absolute inset-0 animate-pulse bg-neutral-200 rounded-[inherit] pointer-events-none z-10" />
                )}
                <img
                  draggable="false"
                  alt="alipay"
                  loading="lazy"
                  width="34"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{
                    color: 'transparent',
                    opacity: imageLoading.alipay === false ? 1 : 0,
                    transition: 'opacity 0.2s ease-in-out',
                  }}
                  src="/footer/alipay.svg"
                  onLoad={() => setImageLoading((prev) => ({ ...prev, alipay: false }))}
                />
              </div>
            </div>

            {/* Alipay HK */}
            <div className="flex flex-row" style={{ width: '60px' }}>
              <div
                className="relative inline-flex items-center justify-center overflow-hidden"
                style={{ width: '34px', height: '24px' }}
              >
                {imageLoading.alipayhk !== false && (
                  <div className="absolute inset-0 animate-pulse bg-neutral-200 rounded-[inherit] pointer-events-none z-10" />
                )}
                <img
                  draggable="false"
                  alt="alipayhk"
                  loading="lazy"
                  width="34"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{
                    color: 'transparent',
                    opacity: imageLoading.alipayhk === false ? 1 : 0,
                    transition: 'opacity 0.2s ease-in-out',
                  }}
                  src="/footer/alipayhk.svg"
                  onLoad={() => setImageLoading((prev) => ({ ...prev, alipayhk: false }))}
                />
              </div>
            </div>

            {/* WeChat */}
            <div className="flex flex-row" style={{ width: '60px' }}>
              <div
                className="relative inline-flex items-center justify-center overflow-hidden"
                style={{ width: '34px', height: '24px' }}
              >
                {imageLoading.wechat !== false && (
                  <div className="absolute inset-0 animate-pulse bg-neutral-200 rounded-[inherit] pointer-events-none z-10" />
                )}
                <img
                  draggable="false"
                  alt="wechat"
                  loading="lazy"
                  width="34"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{
                    color: 'transparent',
                    opacity: imageLoading.wechat === false ? 1 : 0,
                    transition: 'opacity 0.2s ease-in-out',
                  }}
                  src="/footer/wechat.svg"
                  onLoad={() => setImageLoading((prev) => ({ ...prev, wechat: false }))}
                />
              </div>
            </div>

            {/* FPS */}
            <div className="flex flex-row" style={{ width: '60px' }}>
              <div
                className="relative inline-flex items-center justify-center overflow-hidden"
                style={{ width: '34px', height: '24px' }}
              >
                {imageLoading.fps !== false && (
                  <div className="absolute inset-0 animate-pulse bg-neutral-200 rounded-[inherit] pointer-events-none z-10" />
                )}
                <img
                  draggable="false"
                  alt="fps"
                  loading="lazy"
                  width="34"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{
                    color: 'transparent',
                    opacity: imageLoading.fps === false ? 1 : 0,
                    transition: 'opacity 0.2s ease-in-out',
                  }}
                  src="/footer/fps.svg"
                  onLoad={() => setImageLoading((prev) => ({ ...prev, fps: false }))}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center md:text-left w-full">
          <p className="text-mobileNormal md:text-normal mb-2">
            ©DAY KARKAL LTD 2024. ALL RIGHTS RESERVED
          </p>
          <p className="text-mobileNormal md:text-normal">
            香港貴金屬及寶石業商會 B 類登記號: B-B-23-06-00567
          </p>
        </div>
      </div>
    </footer>
  );
}
