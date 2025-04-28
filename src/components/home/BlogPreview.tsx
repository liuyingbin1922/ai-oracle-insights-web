
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const BlogPreview: React.FC = () => {
  const { t } = useLanguage();

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
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-celestial-800">
            {t('latestArticles')}
          </h2>
          <div className="w-24 h-1 bg-golden-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        <div className="text-center mt-10">
          <Link to="/blog">
            <Button variant="outline" className="border-mystic-300 hover:bg-mystic-100">
              {t('blog')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
