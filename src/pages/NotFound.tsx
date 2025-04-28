
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-background to-mystic-50">
        <div className="text-center px-4">
          <h1 className="text-6xl font-serif font-bold text-celestial-800 mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">Oops! The stars couldn't align for this page</p>
          <div className="relative w-40 h-40 mx-auto mb-10">
            <div className="absolute inset-0 bg-celestial-100 rounded-full opacity-70"></div>
            <div className="absolute w-8 h-8 bg-golden-400 rounded-full top-4 left-6 animate-pulse"></div>
            <div className="absolute w-6 h-6 bg-mystic-400 rounded-full bottom-10 right-8 animate-float"></div>
            <div className="absolute w-4 h-4 bg-celestial-500 rounded-full top-20 right-4 animate-pulse"></div>
          </div>
          <Link to="/">
            <Button size="lg" className="bg-mystic-600 hover:bg-mystic-700">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
