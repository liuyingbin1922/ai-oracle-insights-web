
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the available languages
export type Language = 'en' | 'zh';

// Define the content for each language
export type TranslationKey = 
  | 'home'
  | 'tools'
  | 'blog'
  | 'about'
  | 'contact'
  | 'language'
  | 'heroTitle'
  | 'heroSubtitle'
  | 'getStarted'
  | 'learnMore'
  | 'featuredTools'
  | 'latestArticles'
  | 'readMore'
  | 'subscribeTitle'
  | 'subscribeText'
  | 'subscribePlaceholder'
  | 'subscribe'
  | 'footer.rights'
  | 'footer.privacy'
  | 'footer.terms'
  | 'toolTarot'
  | 'toolHoroscope'
  | 'toolPalmistry'
  | 'toolNumerology';

type TranslationsType = {
  [key in Language]: {
    [key in TranslationKey]: string;
  };
};

const translations: TranslationsType = {
  en: {
    home: 'Home',
    tools: 'Tools',
    blog: 'Blog',
    about: 'About',
    contact: 'Contact',
    language: 'Language',
    heroTitle: 'Discover Your Destiny with AI',
    heroSubtitle: 'Our advanced AI reveals insights about your future through ancient divination methods enhanced by modern technology',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    featuredTools: 'Featured Divination Tools',
    latestArticles: 'Latest Articles',
    readMore: 'Read More',
    subscribeTitle: 'Subscribe for Cosmic Updates',
    subscribeText: 'Get weekly fortune insights and exclusive offers',
    subscribePlaceholder: 'Enter your email',
    subscribe: 'Subscribe',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    toolTarot: 'AI Tarot Reading',
    toolHoroscope: 'Daily Horoscope',
    toolPalmistry: 'Digital Palmistry',
    toolNumerology: 'Numerology Analysis'
  },
  zh: {
    home: '首页',
    tools: '工具',
    blog: '博客',
    about: '关于我们',
    contact: '联系我们',
    language: '语言',
    heroTitle: '通过AI发现您的命运',
    heroSubtitle: '我们先进的人工智能通过现代技术增强的古老占卜方法揭示关于您未来的见解',
    getStarted: '开始使用',
    learnMore: '了解更多',
    featuredTools: '特色占卜工具',
    latestArticles: '最新文章',
    readMore: '阅读更多',
    subscribeTitle: '订阅宇宙更新',
    subscribeText: '获取每周的命运洞察和独家优惠',
    subscribePlaceholder: '输入您的电子邮件',
    subscribe: '订阅',
    'footer.rights': '保留所有权利',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    toolTarot: 'AI塔罗牌阅读',
    toolHoroscope: '每日星座运势',
    toolPalmistry: '数字手相术',
    toolNumerology: '数字学分析'
  }
};

// Create context
interface LanguageContextType {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: TranslationKey): string => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
