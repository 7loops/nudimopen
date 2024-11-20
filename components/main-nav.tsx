import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export default function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container px-4 mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Search className="h-6 w-6" />
          <span className="font-bold">Nudim.si</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/o-nas"
            className="text-sm font-medium hover:text-primary"
          >
            O nas
          </Link>
          <Link
            href="/pomoc"
            className="text-sm font-medium hover:text-primary"
          >
            Pomoč
          </Link>
          <Link
            href="/dodaj-storitev"
            className="text-sm font-medium hover:text-primary"
          >
            Dodaj storitev
          </Link>
          <Button variant="ghost">Prijava</Button>
          <Button className="bg-primary hover:bg-primary/90">
            Registracija
          </Button>
        </nav>
      </div>
    </header>
  );
}
