import Image from 'next/image';
import { Button } from '@/components/ui/button';

const INSURANCE_PROVIDERS = [
  { name: 'Aetna', logo: '/aetna.svg' },
  { name: 'Cigna', logo: '/cigna.svg' },
  { name: 'United Healthcare', logo: '/united.svg' },
  { name: 'Medicare', logo: '/medicare.svg' },
  { name: 'Blue Cross Blue Shield', logo: '/bluecross.svg' },
];

export function InsuranceSection() {
  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-6">
        {INSURANCE_PROVIDERS.map((provider) => (
          <div
            key={provider.name}
            className="flex items-center justify-center bg-white border rounded-lg p-4 min-w-[140px] hover:border-primary transition-colors"
          >
            <span className="font-medium">{provider.name}</span>
          </div>
        ))}
        <Button variant="link" className="text-primary">
          See all (1,000+)
        </Button>
      </div>
      <Button variant="outline" className="w-full md:w-auto">
        Add your insurance coverage
      </Button>
    </div>
  );
}