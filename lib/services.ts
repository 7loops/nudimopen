export interface Service {
  'service-name': string;
  'service-slug': string;
  'service-description': string;
  'service-long-description'?: string;
  category?: string;
}

export interface Category {
  'category-name': string;
  'category-slug': string;
  'category-description': string;
  'category-services': Service[];
}

export async function getServices(): Promise<Category[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`, {
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store'
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch services');
  }
  return response.json();
}

export async function getAllServices(): Promise<Service[]> {
  const categories = await getServices();
  return categories.flatMap(category => 
    category['category-services'].map(service => ({
      ...service,
      category: category['category-name']
    }))
  );
}

export async function getService(slug: string): Promise<Service | undefined> {
  const services = await getAllServices();
  return services.find(service => service['service-slug'] === slug);
}