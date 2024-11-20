import { Search, CalendarCheck, Star } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Poiščite storitve',
    description: 'Poiščite lokalne ponudnike storitev v vaši okolici',
  },
  {
    icon: CalendarCheck,
    title: 'Primerjajte in izberite',
    description: 'Preberite ocene, primerjajte ponudbe in izberite najboljšega ponudnika',
  },
  {
    icon: Star,
    title: 'Rezervirajte in ocenite',
    description: 'Rezervirajte termin in delite svoje izkušnje',
  },
];

export default function HowItWorks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center space-y-4"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <step.icon className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-semibold text-xl">{step.title}</h3>
          <p className="text-muted-foreground">{step.description}</p>
        </div>
      ))}
    </div>
  );
}