import { Metadata } from 'next';
import Image from 'next/image';
import { Shield, Users, BadgeCheck, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'O nas - StoritveFinder',
  description: 'Spoznajte StoritveFinder - vaš zaupanja vreden partner pri iskanju kvalitetnih lokalnih storitev.',
};

const values = [
  {
    icon: Shield,
    title: 'Preverjeni ponudniki',
    description: 'Vsak ponudnik storitev gre skozi temeljit postopek preverjanja, da zagotovimo najvišjo kakovost storitev.'
  },
  {
    icon: Users,
    title: 'Skupnost',
    description: 'Gradimo močno skupnost zadovoljnih strank in zaupanja vrednih ponudnikov storitev.'
  },
  {
    icon: BadgeCheck,
    title: 'Zagotovljena kakovost',
    description: 'Spremljamo in preverjamo kakovost opravljenih storitev ter zagotavljamo visoke standarde.'
  },
  {
    icon: Heart,
    title: 'Osebni pristop',
    description: 'Vsako stranko obravnavamo individualno in ji pomagamo najti najprimernejšega ponudnika.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#FFE8B2] py-16 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200&h=400"
            alt="O nas"
            fill
            className="object-cover mix-blend-overlay opacity-20"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Povezujemo ljudi z zaupanja vrednimi storitvami
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              StoritveFinder je vodilna slovenska platforma, ki povezuje preverjene ponudnike storitev z ljudmi, ki iščejo kakovostne rešitve za svoje potrebe.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Mission Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">Naše poslanstvo</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Naše poslanstvo je olajšati povezovanje med ljudmi, ki potrebujejo storitve, in zaupanja vrednimi ponudniki. Verjamemo, da si vsak zasluži dostop do kakovostnih storitev brez skrbi in nepotrebnega stresa pri iskanju pravega izvajalca.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Z našo platformo smo ustvarili prostor, kjer lahko stranke enostavno najdejo preverjene ponudnike storitev, preberejo pristne ocene drugih uporabnikov in sprejmejo informirano odločitev. Hkrati ponudnikom storitev omogočamo, da dosežejo nove stranke in gradijo svoj ugled na podlagi kakovostno opravljenega dela.
            </p>
          </section>

          {/* Values Section */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-12">Naše vrednote</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quality Assurance Section */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">Zagotavljanje kakovosti</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Pri StoritveFinder se zavzemamo za najvišje standarde kakovosti. Vsak ponudnik storitev mora pred pridružitvijo naši platformi izpolnjevati stroge kriterije:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Preverjanje poslovne dokumentacije in dovoljenj</li>
                <li>Preverjanje referenc in preteklih izkušenj</li>
                <li>Osebni razgovor in ocena strokovnosti</li>
                <li>Redno spremljanje zadovoljstva strank</li>
                <li>Stalno preverjanje kakovosti opravljenih storitev</li>
              </ul>
            </div>
          </section>

          {/* Customer Focus Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Osredotočenost na stranke</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Naše stranke so v središču vsega, kar počnemo. Razumemo, da je iskanje pravega ponudnika storitev lahko stresno, zato smo razvili sistem, ki omogoča:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Enostavno primerjavo ponudnikov</li>
              <li>Transparentne ocene in mnenja</li>
              <li>Hitro in učinkovito komunikacijo</li>
              <li>24/7 podporo strankam</li>
              <li>Garancijo zadovoljstva</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}