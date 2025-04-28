
import React from 'react';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Blog = () => {
  const { t, language } = useLanguage();

  const articles = [
    {
      id: 1,
      title: 'The Science Behind AI Fortune Telling',
      excerpt: 'Discover how modern artificial intelligence is revolutionizing ancient divination practices.',
      image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=600&auto=format&fit=crop',
      date: '2025-04-15',
      category: 'Technology',
      slug: 'science-behind-ai-fortune-telling'
    },
    {
      id: 2,
      title: 'Understanding Your Tarot Reading',
      excerpt: 'Learn the deeper meanings behind the Major Arcana cards and how to interpret them in your readings.',
      image: 'https://images.unsplash.com/photo-1591492654773-6756035a583e?q=80&w=600&auto=format&fit=crop',
      date: '2025-04-10',
      category: 'Tarot',
      slug: 'understanding-your-tarot-reading'
    },
    {
      id: 3,
      title: 'The History of Astrology Across Cultures',
      excerpt: 'Explore how different civilizations have looked to the stars for guidance throughout human history.',
      image: 'https://images.unsplash.com/photo-1475318675449-f538e0f58cdb?q=80&w=600&auto=format&fit=crop',
      date: '2025-04-05',
      category: 'History',
      slug: 'history-of-astrology-across-cultures'
    },
    {
      id: 4,
      title: 'Modern Applications of Numerology',
      excerpt: 'How the ancient practice of numerology is finding new applications in the digital age.',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop',
      date: '2025-04-01',
      category: 'Numerology',
      slug: 'modern-applications-of-numerology'
    },
    {
      id: 5,
      title: 'The Psychology of Fortune Telling',
      excerpt: 'Understanding the psychological factors that make divination practices so compelling across cultures.',
      image: 'https://images.unsplash.com/photo-1502230831726-fe5549140034?q=80&w=600&auto=format&fit=crop',
      date: '2025-03-25',
      category: 'Psychology',
      slug: 'psychology-of-fortune-telling'
    },
    {
      id: 6,
      title: 'AI and the Future of Divination',
      excerpt: 'How artificial intelligence is changing the landscape of fortune telling and spiritual practices.',
      image: 'https://images.unsplash.com/photo-1580894912989-0bc892f4efd0?q=80&w=600&auto=format&fit=crop',
      date: '2025-03-20',
      category: 'Technology',
      slug: 'ai-and-future-of-divination'
    }
  ];
  
  return (
    <Layout>
      <Helmet>
        <html lang={language} />
        <title>Blog - Celestial Fortune</title>
        <meta name="description" content="Explore articles on fortune telling, divination practices, astrology, tarot reading, and the intersection of ancient wisdom with modern AI technology." />
        <meta name="keywords" content="fortune telling blog, divination articles, astrology guides, tarot reading tips" />
      </Helmet>
      
      <div className="pt-10 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-center">
            {t('blog')}
          </h1>
          <p className="text-lg mb-12 text-center max-w-3xl mx-auto">
            Explore our articles on fortune telling, divination practices, and the intersection of ancient wisdom with modern AI technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="border border-border hover:border-mystic-300 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                    <span>{article.category}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold">{article.title}</h3>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link to={`/blog/${article.slug}`} className="w-full">
                    <Button variant="link" className="text-mystic-600 hover:text-mystic-800 p-0">
                      {t('readMore')}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
