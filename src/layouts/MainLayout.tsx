import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function MainLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation Bar */}
      <nav className="bg-dark text-light sticky top-0 z-50 shadow-lg">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-[120px]">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl md:text-3xl font-light tracking-[0.2em] hover:opacity-80 transition-opacity"
            >
              <span className="text-primary">DAYKARKAL</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                to="/sale"
                className="text-sm font-light hover:text-primary transition-colors duration-300"
              >
                特價產品
              </Link>
              <Link
                to="/new"
                className="text-sm font-light hover:text-primary transition-colors duration-300"
              >
                新品上架
              </Link>
              <Link
                to="/fashion"
                className="text-sm font-light hover:text-primary transition-colors duration-300"
              >
                時尚系列
              </Link>
              <Link to="/" className="text-sm font-light text-primary border-b border-primary pb-1">
                寶石
              </Link>
              <Link
                to="/diamonds"
                className="text-sm font-light hover:text-primary transition-colors duration-300"
              >
                鑽石
              </Link>
              <Link
                to="/engagement"
                className="text-sm font-light hover:text-primary transition-colors duration-300"
              >
                求婚戒指
              </Link>
              <Link
                to="/gold-prices"
                className="text-sm font-light hover:text-primary transition-colors duration-300"
              >
                黃金報價
              </Link>
              <Link
                to="/about"
                className="text-sm font-light hover:text-primary transition-colors duration-300"
              >
                關於我們
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-light hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <title>{mobileMenuOpen ? '關閉選單' : '開啟選單'}</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-700">
              <div className="flex flex-col gap-4">
                <Link
                  to="/sale"
                  className="text-sm font-light hover:text-primary transition-colors"
                >
                  特價產品
                </Link>
                <Link to="/new" className="text-sm font-light hover:text-primary transition-colors">
                  新品上架
                </Link>
                <Link
                  to="/fashion"
                  className="text-sm font-light hover:text-primary transition-colors"
                >
                  時尚系列
                </Link>
                <Link to="/" className="text-sm font-light text-primary">
                  寶石
                </Link>
                <Link
                  to="/diamonds"
                  className="text-sm font-light hover:text-primary transition-colors"
                >
                  鑽石
                </Link>
                <Link
                  to="/engagement"
                  className="text-sm font-light hover:text-primary transition-colors"
                >
                  求婚戒指
                </Link>
                <Link
                  to="/gold-prices"
                  className="text-sm font-light hover:text-primary transition-colors"
                >
                  黃金報價
                </Link>
                <Link
                  to="/about"
                  className="text-sm font-light hover:text-primary transition-colors"
                >
                  關於我們
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <Outlet />

      {/* Footer */}
      <footer className="bg-dark text-light py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Column 1 - Online Shopping */}
            <div>
              <h3 className="text-base font-semibold text-primary mb-4">網上選購</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/jewelry"
                    className="text-sm font-light text-cream/70 hover:text-primary transition-colors duration-300"
                  >
                    珠寶產品
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gold"
                    className="text-sm font-light text-cream/70 hover:text-primary transition-colors duration-300"
                  >
                    黃金產品
                  </Link>
                </li>
                <li>
                  <Link
                    to="/diamonds"
                    className="text-sm font-light text-cream/70 hover:text-primary transition-colors duration-300"
                  >
                    裸鑽
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 - About Us */}
            <div>
              <h3 className="text-base font-semibold text-primary mb-4">關於我們</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/contact"
                    className="text-sm font-light text-cream/70 hover:text-primary transition-colors duration-300"
                  >
                    聯絡我們
                  </Link>
                </li>
                <li>
                  <Link
                    to="/store"
                    className="text-sm font-light text-cream/70 hover:text-primary transition-colors duration-300"
                  >
                    店舖地址
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Customer Area */}
            <div>
              <h3 className="text-base font-semibold text-primary mb-4">客戶專區</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/member"
                    className="text-sm font-light text-cream/70 hover:text-primary transition-colors duration-300"
                  >
                    會員優惠
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shipping"
                    className="text-sm font-light text-cream/70 hover:text-primary transition-colors duration-300"
                  >
                    運送方式
                  </Link>
                </li>
                <li>
                  <Link
                    to="/returns"
                    className="text-sm font-light text-cream/70 hover:text-primary transition-colors duration-300"
                  >
                    退換貨政策
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-sm font-light text-cream/70 hover:text-primary transition-colors duration-300"
                  >
                    常見問題
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Website Info */}
            <div>
              <h3 className="text-base font-semibold text-primary mb-4">關於網頁</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/terms"
                    className="text-sm font-light text-cream/70 hover:text-primary transition-colors duration-300"
                  >
                    條款及細則
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-sm font-light text-cream/70 hover:text-primary transition-colors duration-300"
                  >
                    隱私政策
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cookies"
                    className="text-sm font-light text-cream/70 hover:text-primary transition-colors duration-300"
                  >
                    Cookie 政策
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Payment */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Contact Info */}
              <div className="text-center md:text-left">
                <p className="text-sm font-light text-cream/70 mb-2">
                  電話:{' '}
                  <a href="tel:+85262244788" className="hover:text-primary transition-colors">
                    +852-6224 4788
                  </a>
                </p>
                <p className="text-sm font-light text-cream/70">WhatsApp 查詢</p>
              </div>

              {/* Payment Methods */}
              <div className="flex items-center gap-3 flex-wrap justify-center">
                <div className="text-xs font-light text-cream/50">接受付款方式:</div>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-white text-dark px-2 py-1 rounded">Visa</span>
                  <span className="text-xs bg-white text-dark px-2 py-1 rounded">Mastercard</span>
                  <span className="text-xs bg-white text-dark px-2 py-1 rounded">UnionPay</span>
                  <span className="text-xs bg-white text-dark px-2 py-1 rounded">Alipay</span>
                  <span className="text-xs bg-white text-dark px-2 py-1 rounded">WeChat Pay</span>
                  <span className="text-xs bg-white text-dark px-2 py-1 rounded">FPS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p className="text-xs font-light text-cream/50 mb-2">
              ©DAY KARKAL LTD 2024. ALL RIGHTS RESERVED
            </p>
            <p className="text-xs font-light text-cream/50">
              香港貴金屬及寶石業商會 B 類登記號: B-B-23-06-00567
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
