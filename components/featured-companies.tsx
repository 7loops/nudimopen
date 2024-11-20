'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Building2, Star } from 'lucide-react';

interface Company {
  id: string;
  name: string;
  description: string;
  rating: number;
  reviewCount: number;
  image: string;
}

const FEATURED_COMPANIES: Company[] = [
  {
    id: 'ace-home-services',
    name: 'Ace Home Services',
    description: 'Complete home maintenance and repair solutions',
    rating: 4.8,
    reviewCount: 1250,
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    id: 'green-clean-pros',
    name: 'Green Clean Pros',
    description: 'Eco-friendly cleaning services for homes and offices',
    rating: 4.9,
    reviewCount: 980,
    image:
      'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    id: 'tech-masters',
    name: 'Tech Masters',
    description: 'Professional IT and smart home solutions',
    rating: 4.7,
    reviewCount: 850,
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400&h=300',
  },
];

export default function FeaturedCompanies() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {FEATURED_COMPANIES.map((company) => (
        <Link
          key={company.id}
          href={`/podjetje/${company.id}`}
          className="group block"
        >
          <div className="bg-white rounded-lg border overflow-hidden transition-shadow hover:shadow-lg">
            <div className="relative h-48 w-full">
              <Image
                src={company.image}
                alt={company.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
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
              <p className="text-sm text-muted-foreground mt-4">
                {company.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
