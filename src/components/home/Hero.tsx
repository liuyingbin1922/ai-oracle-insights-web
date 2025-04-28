
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Moon, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative bg-gradient-to-b from-celestial-900 to-mystic-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-golden-300 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-2 h-2 bg-golden-400 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-golden-200 rounded-full opacity-50 animate-pulse"></div>
        <Star className="absolute top-1/4 right-1/5 h-6 w-6 text-golden-300 opacity-60 animate-glow" />
        <Star className="absolute bottom-1/4 left-1/5 h-8 w-8 text-golden-300 opacity-50 animate-glow" />
        <Moon className="absolute top-1/3 right-1/3 h-12 w-12 text-celestial-200 opacity-20 animate-float" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl mb-10 text-white/80 leading-relaxed">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-mystic-600 hover:bg-mystic-700 text-white border-none">
              {t('getStarted')}
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              {t('learnMore')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
