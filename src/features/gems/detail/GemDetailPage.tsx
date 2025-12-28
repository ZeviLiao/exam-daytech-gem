import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '@/components/navigation/Breadcrumb';
import Accordion from '@/components/ui/Accordion';
import ImageMagnifier from '@/components/ui/ImageMagnifier';
import { getGemById } from '@/data/gems';
import PromotionBanner from '../components/PromotionBanner';
import ProductInfo from './components/ProductInfo';

export default function GemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const gem = id ? getGemById(id) : undefined;
  const [selectedImage, setSelectedImage] = useState(0);

  const images = gem ? [gem.imageUrl, gem.imageUrl, gem.imageUrl, gem.imageUrl] : [];

  if (!gem) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-mobileTitle md:text-title mb-4">找不到寶石</h2>
          <p className="text-normal mb-6">您查找的寶石不存在</p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-primary text-white hover:bg-secondary transition-colors"
          >
            返回寶石列表
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: '首頁', href: '/' },
    { label: '寶石', href: '/' },
    { label: gem.sku },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white">
        <div className="lg:px-[120px] md:px-5 px-[20px] pt-[20px]">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <main className="lg:px-[120px] md:px-5 px-[20px] py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex md:flex-row flex-col gap-4">
            <div className="flex md:flex-col flex-row gap-2 md:order-1 order-2">
              {images.map((image, idx) => {
                const uniqueKey = `${image}-${idx}`;
                return (
                  <button
                    key={uniqueKey}
                    type="button"
                    onClick={() => setSelectedImage(idx)}
                    className={`w-[50px] md:w-[80px] aspect-square cursor-pointer transition-all duration-300 ${
                      selectedImage === idx
                        ? 'border-2 border-primary shadow-lg scale-105'
                        : 'border border-gray-200 hover:opacity-90'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>

            <div className="md:order-2 order-1 flex-1">
              <ImageMagnifier
                src={images[selectedImage]}
                alt={gem.name}
                zoomLevel={2.5}
                borderRadius={10}
              />
            </div>
          </div>

          <ProductInfo gem={gem} />
        </div>

        <Accordion title="產品細節" defaultOpen={true}>
          <div className="text-normal md:text-subtitle">
            <div className="flex flex-col gap-3 md:w-1/3">
              <div className="flex justify-start items-center">
                <h6 className="flex-1 font-normal text-normal">主石：</h6>
                <div className="flex-1 text-left">
                  <p className="text-normal">{gem.category}</p>
                </div>
              </div>
              <div className="flex justify-start items-center">
                <h6 className="flex-1 font-normal text-normal">主石克拉：</h6>
                <div className="flex-1 text-left">
                  <p className="text-normal">約{gem.weight}卡</p>
                </div>
              </div>
              <div className="flex justify-start items-center">
                <h6 className="flex-1 font-normal text-normal">主石形狀：</h6>
                <div className="flex-1 text-left">
                  <p className="text-normal">{gem.cut}</p>
                </div>
              </div>
            </div>
          </div>
        </Accordion>

        <Accordion title="其他資訊" defaultOpen={true}>
          <div className="text-normal md:text-subtitle">
            <div className="flex flex-col gap-2">
              <div className="text-subtitle underline">製作時間及運送細節</div>
              <div className="text-normal md:text-subtitle">
                ‧每件產品需大約 14 個工作天由專業工匠手工製作
              </div>
              <div className="text-normal md:text-subtitle">‧出貨時間或受節日或運輸時間影響</div>
              <div className="text-normal md:text-subtitle">‧您可選擇到店自取或以順豐到付</div>
              <div className="text-normal md:text-subtitle">
                ‧主石及副石大小可能會因尺寸而有所變更。
              </div>
            </div>
          </div>
        </Accordion>

        <PromotionBanner />
      </main>
    </div>
  );
}
