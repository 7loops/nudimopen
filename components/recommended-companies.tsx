'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Building2, Star, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RecommendedCompaniesProps {
  location?: string;
}

const COMPANIES = [
  {
    id: 'ace-home-services',
    name: 'Ace Home Services',
    description: 'Celovite storitve vzdrževanja in popravila doma',
    rating: 4.8,
    reviewCount: 1250,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=400&h=300',
    phone: '01 234 5678',
    address: 'Slovenska cesta 1, Ljubljana'
  },
  {
    id: 'green-clean-pros',
    name: 'Green Clean Pros',
    description: 'Ekološko čiščenje za dom in pisarno',
    rating: 4.9,
    reviewCount: 980,
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=400&h=300',
    phone: '01 234 5679',
    address: 'Celovška cesta 2, Ljubljana'
  },
  {
    id: 'tech-masters',
    name: 'Tech Masters',
    description: 'Profesionalne IT in pametne rešitve za dom',
    rating: 4.7,
    reviewCount: 850,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400&h=300',
    phone: '01 234 5680',
    address: 'Dunajska cesta 3, Ljubljana'
  }
].slice(0, 8);

export default function RecommendedCompanies({ location }: RecommendedCompaniesProps) {
  return (
    <div className="space-y-4">
      {COMPANIES.map((company) => (
        <div
          key={company.id}
          className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-4">
            <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={company.image}
                alt={company.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">
                    <Link 
                      href={`/companies/${company.id}`}
                      className="hover:text-primary transition-colors"
                    >
                      {company.name}
                    </Link>
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
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
                <Button>Kontaktiraj</Button>
              </div>
              
              <p className="text-muted-foreground text-sm mt-2">
                {company.description}
              </p>
              
              <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{company.address}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>{company.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}