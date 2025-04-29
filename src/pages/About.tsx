
import React from 'react';
import Layout from '../components/layout/Layout';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { language } = useLanguage();
  
  return (
    <Layout>
      <Helmet>
        <html lang={language} />
        <title>About Us - Celestial Fortune</title>
        <meta name="description" content="Learn about Celestial Fortune's mission to blend ancient divination practices with cutting-edge AI technology for accurate fortune telling." />
        <meta name="keywords" content="about celestial fortune, AI fortune telling company, divination technology" />
      </Helmet>
      
      <div className="pt-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-center">About Celestial Fortune</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl mb-6">
                At Celestial Fortune, we're pioneering the fusion of ancient divination practices with cutting-edge artificial intelligence to provide personalized spiritual guidance for the modern age.
              </p>
              
              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
              <p>
                Our mission is to make the wisdom of traditional fortune telling accessible to everyone, regardless of their background or expertise. We believe that AI can help democratize access to spiritual insights by removing barriers to understanding complex divination systems.
              </p>
              
              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">The Technology</h2>
              <p>
                Our advanced AI models have been trained on thousands of years of divinatory knowledge, from ancient tarot practices to numerological systems across cultures. We've collaborated with spiritual practitioners, data scientists, and AI experts to create tools that respect traditional practices while enhancing them with technological precision.
              </p>
              
              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Our Philosophy</h2>
              <p>
                We believe that fortune telling isn't about predicting exact events, but rather about providing guidance, reflection, and perspective. Our AI tools are designed to help you better understand yourself, consider different paths, and make more informed choices about your future.
              </p>
              
              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">The Team</h2>
              <p>
                Our team brings together experts from diverse fields including machine learning, psychology, cultural anthropology, and various spiritual traditions. This interdisciplinary approach allows us to create tools that are both technologically advanced and spiritually respectful.
              </p>
              
              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Join Us on the Journey</h2>
              <p>
                Whether you're a lifelong practitioner of divination arts or simply curious about what your future might hold, we invite you to explore our tools and discover new perspectives on your life's path. The stars have stories to tell, and we're here to help you listen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
