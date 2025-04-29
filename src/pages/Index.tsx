import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedTools from '../components/home/FeaturedTools';
import BlogPreview from '../components/home/BlogPreview';
import CTASection from '../components/home/CTASection';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();
  
  return (
    <HelmetProvider>
      <Layout>
        <Helmet>
          <html lang={language} />
          <title>Celestial Fortune - AI Fortune Telling</title>
          <meta name="description" content="Discover your destiny with Celestial Fortune's AI-powered fortune telling tools. Get personalized insights into your future through our advanced AI technology." />
          <meta name="keywords" content="AI fortune telling, tarot reading, horoscope, palmistry, numerology, divination, future prediction" />
        </Helmet>
        
        <Hero />
        <FeaturedTools />
        <BlogPreview />
        <CTASection />
      </Layout>
    </HelmetProvider>
  );
};

export default Index;
