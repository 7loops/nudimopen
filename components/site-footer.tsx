'use client';

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  company: [{ title: 'O nas', href: '/o-nas' }],
  support: [{ title: 'Pomoč', href: '/pomoc' }],
  legal: [{ title: 'Pogoji uporabe', href: '/pogoji' }],
  providers: [{ title: 'Storitve', href: '/storitve' }],
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com' },
  { icon: Twitter, href: 'https://twitter.com' },
  { icon: Instagram, href: 'https://instagram.com' },
  { icon: Linkedin, href: 'https://linkedin.com' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-3">O podjetju</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Podpora</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Pravna obvestila</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Za ponudnike</h3>
            <ul className="space-y-2">
              {footerLinks.providers.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p className="mb-2">
              © {new Date().getFullYear()} Nudim.si Vse pravice pridržane.
            </p>
            <p className="max-w-2xl">
              Nudim.si je platforma, ki povezuje ponudnike storitev s strankami.
              Ne zagotavljamo storitev neposredno in nismo odgovorni za kakovost
              zagotovljenih storitev. Pred najemom katerega koli ponudnika
              storitev vedno preverite reference in zavarovanje.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
