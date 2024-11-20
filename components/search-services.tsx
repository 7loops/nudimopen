"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { getAllServices } from '@/lib/services';
import { getLocations } from '@/lib/locations';
import { useEffect } from 'react';
import type { Service } from '@/lib/services';
import type { Location } from '@/lib/locations';

export default function SearchServices() {
  const router = useRouter();
  const [service, setService] = useState('');
  const [location, setLocation] = useState('');
  const [services, setServices] = useState<Service[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [servicesData, locationsData] = await Promise.all([
        getAllServices(),
        getLocations(),
      ]);
      setServices(servicesData);
      setLocations(locationsData);
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    if (service && location) {
      router.push(`/${service}/${location}`);
    } else if (service) {
      router.push(`/${service}`);
    }
  };

  return (
    <div className="w-full max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-2 flex flex-col md:flex-row gap-2">
        <div className="flex-1">
          <Select value={service} onValueChange={setService}>
            <SelectTrigger className="h-12 border-0 focus:ring-0">
              <Search className="w-5 h-5 text-muted-foreground mr-2" />
              <SelectValue placeholder="Katero storitev iščete?" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem
                  key={service['service-slug']}
                  value={service['service-slug']}
                >
                  {service['service-name']}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="h-12 border-0 focus:ring-0">
              <MapPin className="w-5 h-5 text-muted-foreground mr-2" />
              <SelectValue placeholder="Vaša lokacija" />
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