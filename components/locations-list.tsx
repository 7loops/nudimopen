'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Location } from '@/lib/locations';

interface LocationsListProps {
  locations: Location[];
  serviceSlug: string;
}

export default function LocationsList({
  locations,
  serviceSlug,
}: LocationsListProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const itemsPerRow = 4;
  const rowsToShow = 3;
  const initialItems = itemsPerRow * rowsToShow;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2">
        {locations.map((location, index) => (
          <Link
            key={location['location-slug']}
            href={`/${serviceSlug}/${location['location-slug']}`}
            className={`text-sm hover:text-primary transition-colors ${
              index >= initialItems && !isExpanded ? 'hidden' : ''
            }`}
          >
            {location['location-name']}
          </Link>
        ))}
      </div>

      {locations.length > initialItems && (
        <div className="text-center mt-6">
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="gap-2"
          >
            {isExpanded ? (
              <>
                Prikaži manj
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Prikaži vse lokacije
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
