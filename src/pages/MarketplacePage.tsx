
import MarketplaceGrid from '@/components/MarketplaceGrid';

const MarketplacePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Browse <span className="bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent">Marketplace</span>
          </h1>
          <p className="text-lg text-gray-600">
            Discover amazing side hustles from talented entrepreneurs around the world
          </p>
        </div>
        <MarketplaceGrid />
      </div>
    </div>
  );
};

export default MarketplacePage;
