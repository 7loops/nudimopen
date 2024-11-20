import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Building2, MapPin, Phone, Mail, Star, CheckCircle, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Review {
  id: string;
  user: {
    name: string;
    image: string;
  };
  rating: number;
  date: string;
  content: string;
  helpful: number;
  service: string;
}

interface Company {
  name: string;
  description: string;
  rating: number;
  reviewCount: number;
  services: string[];
  locations: string[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  certifications: string[];
  images: {
    url: string;
    alt: string;
  }[];
  reviews: Review[];
}

const COMPANIES: Record<string, Company> = {
  'ace-home-services': {
    name: 'Ace Home Services',
    description: 'Complete home maintenance and repair solutions with over 15 years of experience serving local communities. Our team of certified professionals delivers quality workmanship and exceptional customer service.',
    rating: 4.8,
    reviewCount: 1250,
    services: [
      'Plumbing repairs and installation',
      'Electrical services',
      'HVAC maintenance',
      'Carpentry and repairs',
      'Painting services',
      'Emergency repairs'
    ],
    locations: [
      'New York City, NY',
      'Long Island, NY',
      'Westchester County, NY',
      'Northern New Jersey'
    ],
    contact: {
      phone: '(555) 123-4567',
      email: 'info@acehomeservices.com',
      address: '123 Service Ave, New York, NY 10001'
    },
    certifications: [
      'Licensed and Insured',
      'BBB Accredited Business',
      'EPA Certified',
      'NATE Certified Technicians'
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800&h=600',
        alt: 'Plumber fixing sink'
      },
      {
        url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800&h=600',
        alt: 'Electrician working on wiring'
      },
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800&h=600',
        alt: 'HVAC maintenance'
      },
      {
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800&h=600',
        alt: 'Home repair service'
      }
    ],
    reviews: [
      {
        id: '1',
        user: {
          name: 'Sarah Johnson',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
        },
        rating: 5,
        date: '2023-10-15',
        content: 'Excellent service! The plumber arrived on time and fixed our leaking pipe quickly and professionally. Very reasonable pricing too.',
        helpful: 24,
        service: 'Plumbing repairs'
      },
      {
        id: '2',
        user: {
          name: 'Michael Chen',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100'
        },
        rating: 4,
        date: '2023-10-12',
        content: 'Great HVAC maintenance service. The technician was knowledgeable and took time to explain everything. Only giving 4 stars because scheduling took longer than expected.',
        helpful: 18,
        service: 'HVAC maintenance'
      },
      {
        id: '3',
        user: {
          name: 'Emily Rodriguez',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100'
        },
        rating: 5,
        date: '2023-10-08',
        content: 'Had them install new electrical outlets in my home office. The electrician was professional, clean, and made sure everything was up to code. Highly recommend!',
        helpful: 31,
        service: 'Electrical services'
      }
    ]
  },
  'green-clean-pros': {
    name: 'Green Clean Pros',
    description: 'Eco-friendly cleaning services for homes and offices.',
    rating: 4.9,
    reviewCount: 980,
    services: [
      'Home cleaning',
      'Office cleaning',
      'Deep cleaning',
      'Move-in/out cleaning',
      'Carpet cleaning',
      'Window cleaning'
    ],
    locations: [
      'Manhattan, NY',
      'Brooklyn, NY',
      'Queens, NY',
      'Bronx, NY'
    ],
    contact: {
      phone: '(555) 234-5678',
      email: 'info@greencleanpros.com',
      address: '456 Clean St, Brooklyn, NY 11201'
    },
    certifications: [
      'Green Seal Certified',
      'ISSA Member',
      'EPA Safer Choice Partner',
      'OSHA Compliant'
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800&h=600',
        alt: 'Professional cleaning service'
      },
      {
        url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800&h=600',
        alt: 'Office cleaning'
      },
      {
        url: 'https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&q=80&w=800&h=600',
        alt: 'Deep cleaning service'
      },
      {
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800&h=600',
        alt: 'Window cleaning'
      }
    ],
    reviews: [
      {
        id: '1',
        user: {
          name: 'David Wilson',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100'
        },
        rating: 5,
        date: '2023-10-14',
        content: 'Outstanding deep cleaning service! They transformed our home and paid attention to every detail. Love that they use eco-friendly products.',
        helpful: 42,
        service: 'Deep cleaning'
      },
      {
        id: '2',
        user: {
          name: 'Lisa Martinez',
          image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100'
        },
        rating: 5,
        date: '2023-10-11',
        content: 'Regular office cleaning client here. They consistently do an excellent job and are very professional. Our workspace always looks immaculate.',
        helpful: 28,
        service: 'Office cleaning'
      },
      {
        id: '3',
        user: {
          name: 'James Thompson',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100'
        },
        rating: 4,
        date: '2023-10-09',
        content: 'Very satisfied with their move-out cleaning service. They made our old apartment spotless. Only minor feedback is they arrived a bit late.',
        helpful: 15,
        service: 'Move-out cleaning'
      }
    ]
  }
};

type Props = {
  params: { id: string }
};

export async function generateStaticParams() {
  return Object.keys(COMPANIES).map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const company = COMPANIES[params.id];
  
  if (!company) {
    return {
      title: 'Company Not Found',
    };
  }

  return {
    title: `${company.name} - Service Provider Profile | ServiceFinder`,
    description: company.description,
    openGraph: {
      title: company.name,
      description: company.description,
      type: 'website',
    },
  };
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={review.user.image}
              alt={review.user.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold">{review.user.name}</h4>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {new Date(review.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
        </div>
        <span className="text-sm text-primary font-medium">{review.service}</span>
      </div>
      <p className="mt-4 text-muted-foreground">{review.content}</p>
      <div className="mt-4 flex items-center space-x-2 text-sm text-muted-foreground">
        <Button variant="ghost" size="sm" className="h-8">
          <ThumbsUp className="w-4 h-4 mr-2" />
          Helpful ({review.helpful})
        </Button>
      </div>
    </div>
  );
}

export default function CompanyPage({ params }: Props) {
  const company = COMPANIES[params.id];

  if (!company) {
    notFound();
  }

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                <Building2 className="w-10 h-10 text-gray-500" />
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-2">{company.name}</h1>
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
                    ({company.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>
            <Button size="lg">Contact Now</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                {company.images.map((image, index) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p className="text-muted-foreground">{company.description}</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Services</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {company.services.map((service) => (
                  <li key={service} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Service Areas</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {company.locations.map((location) => (
                  <li key={location} className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{location}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Customer Reviews</h2>
                <Button>Write a Review</Button>
              </div>
              <div className="space-y-4">
                {company.reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>{company.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>{company.contact.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{company.contact.address}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Certifications</h2>
              <ul className="space-y-3">
                {company.certifications.map((cert) => (
                  <li key={cert} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}