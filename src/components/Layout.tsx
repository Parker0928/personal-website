import { useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, Globe } from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollProgress } from './ScrollProgress';

export function Layout({ children }: { children: ReactNode }) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash || '#home');
    window.addEventListener('hashchange', handleHashChange);
    // Set initial hash
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const normalizedLang = i18n.language.startsWith('zh') ? 'zh' : 'en';
    document.documentElement.lang = normalizedLang;
    document.title = t('seo.title');

    const description = t('seo.description');
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', description);
    }
  }, [i18n.language, t]);

  const toggleTheme = () => setIsDark(!isDark);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const navItems = [
    { name: t('nav.home'), path: '#home' },
    { name: t('nav.projects'), path: '#projects' },
    { name: t('nav.experience'), path: '#experience' },
    { name: t('nav.contact'), path: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-yellow selection:text-black">
      <ScrollProgress />
      <nav className="flex items-center justify-between py-5 px-6 md:px-12 brutal-border-b sticky top-0 bg-bg/45 backdrop-blur-md backdrop-saturate-125 z-50">
        <a href="#home" className="font-display font-bold text-2xl tracking-tight hover:text-blue transition-colors">
          PARKER
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-display font-bold text-sm tracking-widest">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className={`px-3 py-1.5 transition-all ${
                activeHash === item.path
                  ? 'bg-yellow text-black brutal-border brutal-shadow-sm'
                  : 'hover:text-blue hover:-translate-y-1'
              }`}
            >
              {item.name}
            </a>
          ))}
          <button 
            onClick={toggleLanguage}
            className="p-2 brutal-border brutal-shadow-sm brutal-shadow-hover brutal-shadow-active bg-surface text-ink flex items-center gap-2"
          >
            <Globe size={20} />
            <span className="text-xs">{i18n.language.toUpperCase()}</span>
          </button>
          <button 
            onClick={toggleTheme}
            className="p-2 brutal-border brutal-shadow-sm brutal-shadow-hover brutal-shadow-active bg-surface text-ink"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="p-2 brutal-border brutal-shadow-sm bg-surface text-ink flex items-center gap-1"
          >
            <Globe size={16} />
            <span className="text-xs">{i18n.language.toUpperCase()}</span>
          </button>
          <button 
            onClick={toggleTheme}
            className="p-2 brutal-border brutal-shadow-sm bg-surface text-ink"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="p-2 brutal-border brutal-shadow-sm bg-yellow text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[85px] bg-bg z-40 brutal-border-b flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`p-6 font-display font-bold text-2xl tracking-widest brutal-border-b ${
                activeHash === item.path ? 'bg-yellow text-black' : 'hover:bg-blue hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-ink text-bg py-12 px-6 md:px-12 mt-24">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="font-display font-bold text-yellow tracking-widest text-sm md:text-base">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </div>
          <div className="flex flex-wrap gap-6 font-display font-bold text-xs md:text-sm tracking-widest">
            <a href="https://github.com/Parker0928" target="_blank" rel="noreferrer" className="hover:text-yellow transition-colors">{t('footer.github')}</a>
            <a href="https://x.com/zhi_yu56061" target="_blank" rel="noreferrer" className="hover:text-yellow transition-colors">{t('footer.x')}</a>
            <a href="mailto:Parker928@proton.me" className="hover:text-yellow transition-colors">{t('footer.email')}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
