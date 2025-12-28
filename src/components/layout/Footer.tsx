import { Link } from 'react-router-dom';
import Accordion from '../ui/Accordion';
import PaymentIcon from '../ui/PaymentIcon';
import FooterColumn from './FooterColumn';

export default function Footer() {
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

  const paymentMethods = [
    { name: 'visa', alt: 'visa' },
    { name: 'masterCard', alt: 'masterCard' },
    { name: 'unionpay', alt: 'unionpay' },
    { name: 'alipay', alt: 'alipay' },
    { name: 'alipayhk', alt: 'alipayhk' },
    { name: 'wechat', alt: 'wechat' },
    { name: 'fps', alt: 'fps' },
  ];

  return (
    <footer className="bg-dark text-light md:py-16 py-8">
      <div className="flex flex-col bg-dark p-[28px] md:p-[100px] md:px-[150px] md:items-start items-center justify-center gap-[32px] md:gap-[40px]">
        <div
          className="block md:hidden w-fit"
          style={{ borderBottom: '1px solid rgba(209, 175, 116, 0.60)' }}
        >
          <img src="/mobileFooterLogo.svg" width={150} height={125} alt="Daykarkal" />
        </div>

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
                      className="text-secondary text-normal hover:text-primary transition-colors duration-300 cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Accordion>
          ))}
        </div>

        <div className="block md:hidden">
          <Link to="/appointment">
            <button
              type="button"
              className="rounded-[5px] hover:bg-secondary-800 transform duration-500 bg-brown px-[12px] py-[8px] flex gap-3 items-center justify-center w-fit cursor-pointer"
              style={{ minWidth: '135px' }}
            >
              <div className="text-secondary">預約到店</div>
            </button>
          </Link>
        </div>

        <div className="hidden md:grid md:grid-cols-4 gap-[40px]">
          {footerSections.map((section) => (
            <FooterColumn key={section.title} title={section.title} links={section.links} />
          ))}
        </div>

        <div className="w-full flex justify-center md:justify-start">
          <div className="grid grid-cols-4 gap-2 md:flex md:flex-wrap">
            {paymentMethods.map((method) => (
              <PaymentIcon key={method.name} name={method.name} alt={method.alt} />
            ))}
          </div>
        </div>

        <div className="text-center md:text-left w-full">
          <p className="text-normal mb-2">©DAY KARKAL LTD 2024. ALL RIGHTS RESERVED</p>
          <p className="text-normal">香港貴金屬及寶石業商會 B 類登記號: B-B-23-06-00567</p>
        </div>
      </div>
    </footer>
  );
}
