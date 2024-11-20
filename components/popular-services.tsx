'use client';

import Link from 'next/link';
import { Home, Scissors, Laptop, Wrench, Car, Paintbrush } from 'lucide-react';
import type { Category } from '@/lib/services';

const iconMap = {
  Dom: Home,
  Poroka: Scissors,
  Posel: Laptop,
  'Gradnja in obnova': Wrench,
  'Storitve za avto': Car,
  'Osebne storitve': Paintbrush,
} as const;

interface PopularServicesProps {
  categories: Category[];
}

export default function PopularServices({ categories }: PopularServicesProps) {
  const popularCategories = categories.slice(0, 6);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {popularCategories.map((category) => {
        const Icon =
          iconMap[category['category-name'] as keyof typeof iconMap] || Home;
        const mainService = category['category-services'][0];

        return (
          <Link
            key={category['category-slug']}
            href={`/${mainService['service-slug']}`}
            className="group block"
          >
            <div className="p-6 rounded-2xl bg-amber-100 transition-transform group-hover:scale-105">
              <div className="flex items-start space-x-4">
                <Icon className="w-8 h-8 mt-1 text-amber-700" />
                <div>
                  <h3 className="font-semibold mb-1 text-amber-900">
                    {category['category-name']}
                  </h3>
                  <p className="text-sm text-amber-700">
                    {category['category-description']}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
