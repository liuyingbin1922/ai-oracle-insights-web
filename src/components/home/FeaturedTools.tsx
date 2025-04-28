
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FeaturedTools: React.FC = () => {
  const { t } = useLanguage();

  const tools = [
    {
      id: 'tarot',
      title: t('toolTarot'),
      description: 'Get insights into your past, present, and future with our AI-powered tarot reading.',
      image: 'https://images.unsplash.com/photo-1601314167099-232775b3d6fd?q=80&w=600&auto=format&fit=crop',
      link: '/tools/tarot'
    },
    {
      id: 'horoscope',
      title: t('toolHoroscope'),
      description: 'Receive personalized horoscope readings based on your zodiac sign and current celestial alignments.',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=600&auto=format&fit=crop',
      link: '/tools/horoscope'
    },
    {
      id: 'palmistry',
      title: t('toolPalmistry'),
      description: 'Upload a photo of your palm and let our AI analyze your lifeline, love line, and more.',
      image: 'https://images.unsplash.com/photo-1513757303913-c9ba27fdb3dc?q=80&w=600&auto=format&fit=crop',
      link: '/tools/palmistry'
    },
    {
      id: 'numerology',
      title: t('toolNumerology'),
      description: 'Discover the hidden meaning behind your birthdate, name, and significant numbers in your life.',
      image: 'https://images.unsplash.com/photo-1585944349433-2b39b3005983?q=80&w=600&auto=format&fit=crop',
      link: '/tools/numerology'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-mystic-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-celestial-800">
            {t('featuredTools')}
          </h2>
          <div className="w-24 h-1 bg-golden-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <Card key={tool.id} className="border border-mystic-100 hover:border-mystic-300 transition-all duration-300 overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-xl text-celestial-800">{tool.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>{tool.description}</p>
              </CardContent>
              <CardFooter>
                <Link to={tool.link} className="w-full">
                  <Button variant="outline" className="w-full border-mystic-300 hover:bg-mystic-100">
                    {t('getStarted')}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
