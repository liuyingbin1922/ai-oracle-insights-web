
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-mystic-900 to-celestial-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
          {t('subscribeTitle')}
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-white/80">
          {t('subscribeText')}
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder={t('subscribePlaceholder')}
              className="px-4 py-3 rounded-t-md sm:rounded-l-md sm:rounded-r-none text-gray-800 w-full"
            />
            <Button className="bg-golden-500 hover:bg-golden-600 rounded-b-md sm:rounded-r-md sm:rounded-l-none text-white font-medium py-3 px-6 transition-colors">
              {t('subscribe')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
