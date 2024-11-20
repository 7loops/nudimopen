import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getService } from '@/lib/services';
import { getLocation } from '@/lib/locations';
import RecommendedCompanies from '@/components/recommended-companies';

type Props = {
  params: {
    slug: string;
    location: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const [service, location] = await Promise.all([
    getService(params.slug),
    getLocation(params.location),
  ]);

  if (!service || !location) {
    return {
      title: 'Storitev ni najdena',
    };
  }

  return {
    title: `${service['service-name']} v ${location['location-name']} - StoritveFinder`,
    description: `${service['service-description']} v ${location['location-name']}`,
  };
}

export default async function ServiceLocationPage({ params }: Props) {
  const [service, location] = await Promise.all([
    getService(params.slug),
    getLocation(params.location),
  ]);

  if (!service || !location) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-[#FFE8B2]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200&h=400"
            alt={service['service-name']}
            fill
            className="object-cover mix-blend-overlay opacity-20"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 py-12">
          <div className="w-full max-w-2xl mx-auto">
            <div className="max-w-3xl text-center">
              {service.category && (
                <div className="text-sm mb-4 text-muted-foreground">
                  {service.category}
                </div>
              )}
              <h1 className="text-4xl font-bold mb-4">
                {service['service-name']} v {location['location-name']}
              </h1>
              <p className="text-lg mb-8">{service['service-description']}</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Pridobite ponudbe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">O storitvi</h2>
            <p className="text-muted-foreground mb-6">
              {service['service-long-description'] ||
                service['service-description']}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Priporočeni ponudniki v {location['location-name']}
            </h2>
            <RecommendedCompanies location={location['location-name']} />
          </div>
        </div>
      </div>
    </div>
  );
}
