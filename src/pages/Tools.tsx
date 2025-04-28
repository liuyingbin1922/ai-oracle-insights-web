
import React from 'react';
import Layout from '../components/layout/Layout';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import FeaturedTools from '../components/home/FeaturedTools';

const Tools = () => {
  const { t, language } = useLanguage();
  
  return (
    <Layout>
      <Helmet>
        <html lang={language} />
        <title>Divination Tools - Celestial Fortune</title>
        <meta name="description" content="Explore our collection of AI-powered divination tools including tarot reading, horoscope, palmistry, and numerology analysis." />
        <meta name="keywords" content="fortune telling tools, tarot reading, horoscope, palmistry, numerology, divination tools" />
      </Helmet>
      
      <div className="pt-10 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-center">
            {t('tools')}
          </h1>
          <p className="text-lg mb-12 text-center max-w-3xl mx-auto">
            Explore our collection of AI-powered fortune telling tools designed to provide insights into your past, present, and future.
          </p>
          
          <FeaturedTools />
        </div>
      </div>
    </Layout>
  );
};

export default Tools;
