'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Category } from '@/lib/services';

interface AllServicesProps {
  categories: Category[];
}

export default function AllServices({ categories }: AllServicesProps) {
  const [expanded, setExpanded] = useState(false);
  const displayCount = expanded ? categories.length : 6;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.slice(0, displayCount).map((category) => (
          <div
            key={category['category-slug']}
            className="bg-white rounded-lg p-6 shadow-sm"
          >
            <div className="block group">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {category['category-name']}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {category['category-description']}
              </p>
            </div>

            <ul className="space-y-2 divide-y">
              {category['category-services'].slice(0, 5).map((service) => (
                <li key={service['service-slug']} className="pt-2 first:pt-0">
                  <Link
                    href={`/${service['service-slug']}`}
                    className="text-sm hover:text-primary transition-colors block"
                  >
                    {service['service-name']}
                  </Link>
                </li>
              ))}
              {category['category-services'].length > 5 && (
                <li className="pt-2">
                  <span className="text-sm text-primary block">
                    +{category['category-services'].length - 5} more services
                  </span>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>

      {categories.length > 6 && (
        <div className="text-center mt-8">
          <Button
            variant="outline"
            onClick={() => setExpanded(!expanded)}
            className="gap-2"
          >
            {expanded ? (
              <>
                Show Less
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show All Categories
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
