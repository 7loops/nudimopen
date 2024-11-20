export interface Location {
  'location-name': string;
  'location-slug': string;
}

export async function getLocations(): Promise<Location[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/locations`, {
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store'
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch locations');
  }
  return response.json();
}

export async function getLocation(slug: string): Promise<Location | undefined> {
  const locations = await getLocations();
  return locations.find(location => location['location-slug'] === slug);
}