"use client";

import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceLocationsProps {
  locations: string[];
}

export function ServiceLocations({ locations }: ServiceLocationsProps) {
  const [expanded, setExpanded] = useState(false);
  const displayCount = expanded ? locations.length : 8;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {locations.slice(0, displayCount).map((location) => (
          <div
            key={location}
            className="flex items-center space-x-2 text-sm hover:text-primary transition-colors cursor-pointer"
          >
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        ))}
      </div>
      
      {locations.length > 8 && (
        <div className="text-center">
          <Button
            variant="outline"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show Less' : `Show All Locations (${locations.length})`}
          </Button>
        </div>
      )}
    </div>
  );
}