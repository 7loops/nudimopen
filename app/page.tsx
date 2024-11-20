import { Suspense } from 'react';
import SearchServices from '@/components/search-services';
import PopularServices from '@/components/popular-services';
import HowItWorks from '@/components/how-it-works';
import AllServices from '@/components/all-services';
import FeaturedCompanies from '@/components/featured-companies';
import { getServices } from '@/lib/services';

export const metadata = {
  title: 'Najdite lokalne ponudnike storitev - StoritveFinder',
  description:
    'Poiščite in rezervirajte zaupanja vredne lokalne ponudnike storitev',
  keywords:
    'lokalne storitve, ponudniki storitev, obrtniki, domače storitve, profesionalne storitve',
};

export default async function HomePage() {
  const categories = await getServices();

  return (
    <>
      {/* Hero Section with Search */}
      <section className="relative py-16 lg:py-24 bg-[#FFE8B2]">
        <div className="container text-center px-4 mx-auto relative">
          <div className="w-full max-w-2xl mx-auto">
            <div className="max-w-3xl mb-8 lg:mb-12">
              <h1 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
                Najdite zaupanja vredne
                <br />
                lokalne ponudnike storitev
              </h1>
            </div>
            <SearchServices />
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-xl font-semibold mb-8">
            Najbolj priljubljene storitve
          </h2>
          <Suspense fallback={<div>Loading...</div>}>
            <PopularServices categories={categories} />
          </Suspense>
        </div>
      </section>

      {/* Featured Companies Section */}
      <section className="py-12 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="text-xl font-semibold mb-4">Priporočeni ponudniki</h2>
          <p className="text-muted-foreground mb-8">
            Najboljše ocenjeni ponudniki, ki jim zaupa na tisoče strank
          </p>
          <FeaturedCompanies />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-xl font-semibold mb-8 text-center">
            Kako deluje
          </h2>
          <HowItWorks />
        </div>
      </section>

      {/* All Services Section */}
      <section className="py-12 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="text-xl font-semibold mb-8">
            Prebrskajte vse storitve
          </h2>
          <Suspense fallback={<div>Loading...</div>}>
            <AllServices categories={categories} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
