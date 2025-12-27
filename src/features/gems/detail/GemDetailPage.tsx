import { Link, useNavigate, useParams } from 'react-router-dom';
import { getGemById } from '../../../data/gems';

export default function GemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const gem = id ? getGemById(id) : undefined;

  if (!gem) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-dark mb-4">Gemstone Not Found</h2>
          <p className="text-gray-600 mb-6">The gemstone you are looking for does not exist</p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-primary text-white font-light hover:bg-secondary transition-colors"
          >
            Back to Gemstone List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-[120px] py-4">
          <div className="flex items-center gap-2 text-sm font-light text-gray-600">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/" className="hover:text-primary transition-colors">
              Gems
            </Link>
            <span>/</span>
            <span className="text-dark">{gem.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-[120px] py-8 md:py-12">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-light text-gray-600 hover:text-primary transition-colors mb-8"
        >
          ← Back to List
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-[3/4] bg-white shadow-lg overflow-hidden">
              <img src={gem.imageUrl} alt={gem.name} className="w-full h-full object-cover" />
            </div>
            {gem.certified && (
              <div className="absolute top-4 right-4 bg-primary text-white text-sm font-light px-4 py-2">
                ✓ Certified
              </div>
            )}
          </div>

          {/* Information Section */}
          <div className="space-y-6">
            <div>
              <div className="text-sm font-light text-secondary mb-2">{gem.category}</div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-dark mb-4">
                {gem.name}
              </h1>
            </div>

            {/* Price & Stock */}
            <div className="flex items-center gap-6 py-6 border-y border-gray-200">
              <div className="text-3xl md:text-4xl font-light text-primary">
                ${gem.price.toLocaleString()}
              </div>
              <div
                className={`px-4 py-1.5 text-sm font-light ${
                  gem.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {gem.inStock ? 'In Stock' : 'Out of Stock'}
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold text-dark mb-3">Product Description</h2>
              <p className="text-base font-light text-gray-700 leading-relaxed">
                {gem.description}
              </p>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-xl font-semibold text-dark mb-4">Specifications</h2>
              <div className="bg-white shadow-sm divide-y divide-gray-200">
                <div className="flex justify-between py-3 px-4">
                  <span className="text-sm font-light text-gray-600">Weight</span>
                  <span className="text-sm font-normal text-dark">{gem.weight} carats</span>
                </div>
                <div className="flex justify-between py-3 px-4">
                  <span className="text-sm font-light text-gray-600">Color</span>
                  <span className="text-sm font-normal text-dark">{gem.color}</span>
                </div>
                <div className="flex justify-between py-3 px-4">
                  <span className="text-sm font-light text-gray-600">Clarity</span>
                  <span className="text-sm font-normal text-dark">{gem.clarity}</span>
                </div>
                <div className="flex justify-between py-3 px-4">
                  <span className="text-sm font-light text-gray-600">Cut</span>
                  <span className="text-sm font-normal text-dark">{gem.cut}</span>
                </div>
                <div className="flex justify-between py-3 px-4">
                  <span className="text-sm font-light text-gray-600">Origin</span>
                  <span className="text-sm font-normal text-dark">{gem.origin}</span>
                </div>
                <div className="flex justify-between py-3 px-4">
                  <span className="text-sm font-light text-gray-600">Category</span>
                  <span className="text-sm font-normal text-dark">{gem.category}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              {gem.inStock ? (
                <>
                  <button
                    type="button"
                    className="w-full py-4 bg-primary text-white font-light hover:bg-secondary transition-colors duration-300"
                  >
                    Inquire Now
                  </button>
                  <button
                    type="button"
                    className="w-full py-4 border border-primary text-primary font-light hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    Schedule Viewing
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  disabled
                  className="w-full py-4 bg-gray-300 text-gray-500 font-light cursor-not-allowed"
                >
                  Temporarily Out of Stock
                </button>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-3 pt-6">
              <div className="flex items-start gap-3 p-4 bg-white shadow-sm">
                <div className="text-primary text-xl">🔒</div>
                <div>
                  <h3 className="text-sm font-semibold text-dark mb-1">Secure Transaction</h3>
                  <p className="text-xs font-light text-gray-600">
                    All transactions are protected by secure payment systems and insurance
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white shadow-sm">
                <div className="text-primary text-xl">📜</div>
                <div>
                  <h3 className="text-sm font-semibold text-dark mb-1">
                    Certificate of Authenticity
                  </h3>
                  <p className="text-xs font-light text-gray-600">
                    Each gemstone comes with a professional certificate of authenticity
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white shadow-sm">
                <div className="text-primary text-xl">🚚</div>
                <div>
                  <h3 className="text-sm font-semibold text-dark mb-1">Worldwide Shipping</h3>
                  <p className="text-xs font-light text-gray-600">
                    Secure insured shipping service available worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
