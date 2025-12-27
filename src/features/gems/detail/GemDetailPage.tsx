import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '@/components/navigation/Breadcrumb';
import Accordion from '@/components/ui/Accordion';
import ImageMagnifier from '@/components/ui/ImageMagnifier';
import { getGemById } from '@/data/gems';

export default function GemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const gem = id ? getGemById(id) : undefined;
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock multiple images for gallery (in real app, this would come from gem data)
  const images = gem ? [gem.imageUrl, gem.imageUrl, gem.imageUrl, gem.imageUrl] : [];

  if (!gem) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-mobileTitle md:text-title mb-4">找不到寶石</h2>
          <p className="text-mobileNormal md:text-normal mb-6">您查找的寶石不存在</p>
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
      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="lg:px-[120px] md:px-5 px-[20px] pt-[20px]">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Main Content */}
      <main className="lg:px-[120px] md:px-5 px-[20px] py-8">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Images */}
          <div className="flex md:flex-row flex-col gap-4">
            {/* Thumbnail Gallery - Vertical on desktop, horizontal on mobile */}
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

            {/* Main Image with Magnifier */}
            <div className="md:order-2 order-1 flex-1">
              <ImageMagnifier
                src={images[selectedImage]}
                alt={gem.name}
                zoomLevel={2.5}
                borderRadius={10}
              />
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="flex flex-col gap-6">
            {/* Product Title */}
            <div>
              <h1 className="text-title2 md:text-heading mb-4">{gem.name}</h1>
              <div className="text-mobileTitle md:text-title text-primary mb-6">
                HK${gem.price.toLocaleString()}
              </div>
            </div>

            {/* Action Button */}
            <button
              type="button"
              disabled={!gem.inStock}
              className={`w-full py-2 px-2 text-mobileNormal md:text-normal transition-colors duration-300 rounded-[5px] border border-solid text-center ${
                gem.inStock
                  ? 'bg-white text-primary hover:bg-[#FFF9F0] border-primary cursor-pointer'
                  : 'bg-[#E0E0E0] text-[#9E9E9E] border-[#E0E0E0] cursor-not-allowed'
              }`}
            >
              {gem.inStock ? '現貨' : '缺貨'}
            </button>

            {/* Gem Size Input - Only show for in-stock items */}
            {gem.inStock && (
              <div>
                <label
                  htmlFor="gem-size"
                  className="block text-mobileNormal md:text-normal text-gray-600 mb-2"
                >
                  主石尺寸：
                </label>
                <input
                  id="gem-size"
                  type="text"
                  value={`${gem.weight} 卡`}
                  readOnly
                  className="w-1/2 py-2 px-4 text-mobileNormal md:text-normal text-primary border border-primary rounded-[5px] bg-white text-center cursor-pointer hover:bg-[#FFF9F0] transition-colors duration-300"
                />
              </div>
            )}

            {/* Product Attributes Table */}
            <div className="bg-white border border-gray-400 rounded-[5px] p-4 w-3/4">
              <h2 className="text-[20px] mb-4">產品資料</h2>
              <div className="flex flex-col gap-3">
                <div className="flex justify-start items-center border-b border-gray-300 pb-3">
                  <div className="flex-1 text-mobileNormal md:text-normal">款號：</div>
                  <div className="flex-1 text-mobileNormal md:text-normal text-left">{gem.sku}</div>
                </div>
                <div className="flex justify-start items-center border-b border-gray-300 pb-3">
                  <div className="flex-1 text-mobileNormal md:text-normal">主石：</div>
                  <div className="flex-1 text-mobileNormal md:text-normal text-left">
                    {gem.category}
                  </div>
                </div>
                <div className="flex justify-start items-center border-b border-gray-300 pb-3">
                  <div className="flex-1 text-mobileNormal md:text-normal">主石克拉：</div>
                  <div className="flex-1 text-mobileNormal md:text-normal text-left">
                    {gem.weight}卡
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <div className="flex-1 text-mobileNormal md:text-normal">主石形狀：</div>
                  <div className="flex-1 text-mobileNormal md:text-normal text-left">{gem.cut}</div>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <button
              type="button"
              className="flex gap-2 items-center hover:bg-[#FFF9F0] transform duration-500 rounded-[5px] px-4 border justify-center border-[#D9C29B] border-solid cursor-pointer"
              style={{ width: '100%', padding: '10px' }}
            >
              <div className="text-[14px] font-medium text-[#8A5D11]">WhatsApp查詢</div>
            </button>
          </div>
        </div>

        {/* Product Details Section - Collapsible */}
        <Accordion title="產品細節" defaultOpen={true}>
          <div className="md:text-[16px] text-[14px]">
            <div className="flex flex-col gap-3 md:w-1/3">
              <div className="flex justify-start items-center">
                <h6 className="flex-1 font-[400] text-normal">主石：</h6>
                <div className="flex-1 text-left">
                  <p className="text-normal">{gem.category}</p>
                </div>
              </div>
              <div className="flex justify-start items-center">
                <h6 className="flex-1 font-[400] text-normal">主石克拉：</h6>
                <div className="flex-1 text-left">
                  <p className="text-normal">約{gem.weight}卡</p>
                </div>
              </div>
              <div className="flex justify-start items-center">
                <h6 className="flex-1 font-[400] text-normal">主石形狀：</h6>
                <div className="flex-1 text-left">
                  <p className="text-normal">{gem.cut}</p>
                </div>
              </div>
            </div>
          </div>
        </Accordion>

        {/* Other Information Section - Collapsible */}
        <Accordion title="其他資訊" defaultOpen={true}>
          <div className="md:text-[16px] text-[14px]">
            <div className="flex flex-col gap-2">
              <div className="text-[16px] underline">製作時間及運送細節</div>
              <div className="md:text-[16px] text-[14px]">
                ‧每件產品需大約 14 個工作天由專業工匠手工製作
              </div>
              <div className="md:text-[16px] text-[14px]">‧出貨時間或受節日或運輸時間影響</div>
              <div className="md:text-[16px] text-[14px]">‧您可選擇到店自取或以順豐到付</div>
              <div className="md:text-[16px] text-[14px]">
                ‧主石及副石大小可能會因尺寸而有所變更。
              </div>
            </div>
          </div>
        </Accordion>

        {/* Featured Offers Banner */}
        <div className="flex flex-row justify-center py-10">
          <div
            className="flex flex-row w-full items-center p-5 bg-[#0a0a0a] rounded-[10px]"
            style={{
              backgroundImage: 'url(/productsSubBanner.jfif)',
              backgroundColor: 'black',
              backgroundPosition: 'center right -5rem',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'auto',
            }}
          >
            <div className="lg:px-12 flex flex-col gap-[20px] lg:gap-[22px] rounded-[10px] md:w-full w-1/2">
              <div className="text-mobileTitle md:text-title text-[#FFFFFF]">精選優惠</div>
              <div className="text-mobileNormal md:text-normal font-light text-[#FFFFFF]">
                精選優惠不時推出，為您帶來無限驚喜。 立即探索更多！
              </div>
              <div className="lg:block">
                <Link to="/sale">
                  <button
                    className="hover:bg-neutral-400 text-[#FAF9F9] border-[#FAF9F9] flex gap-2 items-center transform duration-500 rounded-[5px] px-4 py-1 w-fit border justify-center border-solid"
                    type="button"
                  >
                    立即前往
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
