import Link from 'next/link';
import { Building2, Star } from 'lucide-react';

interface Company {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
}

interface ServiceProvidersProps {
  companies: Company[];
}

export function ServiceProviders({ companies }: ServiceProvidersProps) {
  if (companies.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg border">
        <p className="text-muted-foreground">No service providers available in this category yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {companies.map((company) => (
        <Link
          key={company.id}
          href={`/companies/${company.id}`}
          className="group block"
        >
          <div className="bg-white rounded-lg border p-6 transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 relative rounded-full bg-gray-100 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-gray-500" />
              </div>
              <div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {company.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(company.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({company.reviewCount})
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}