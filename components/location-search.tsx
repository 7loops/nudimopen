'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { getLocations } from '@/lib/locations';
import type { Location } from '@/lib/locations';

interface LocationSearchProps {
  serviceSlug?: string;
}

export default function LocationSearch({ serviceSlug }: LocationSearchProps) {
  const router = useRouter();
  const [location, setLocation] = useState('');
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const locationsData = await getLocations();
      setLocations(locationsData);
    };
    fetchLocations();
  }, []);

  const handleSearch = () => {
    if (location && serviceSlug) {
      router.push(`/${serviceSlug}/${location}`);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-2 flex gap-2">
        <div className="flex-1">
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="h-12 border-0 focus:ring-0">
              <MapPin className="w-5 h-5 text-muted-foreground mr-2" />
              <SelectValue placeholder="Izberite lokacijo" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem
                  key={location['location-slug']}
                  value={location['location-slug']}
                >
                  {location['location-name']}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          size="lg"
          className="h-12 px-8 bg-primary hover:bg-primary/90"
          onClick={handleSearch}
        >
          Išči
        </Button>
      </div>
    </div>
  );
}