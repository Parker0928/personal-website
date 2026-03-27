import { ArrowRight, Download, Code, Cpu, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../components/ScrollReveal';
import { Magnetic } from '../components/Magnetic';

export function Home() {
  const { t } = useTranslation();
  const heroBackgroundSrc = "/hero-project-card.png";

  return (
    <div className="animate-in fade-in duration-500 relative">
      {/* First-screen cinematic background (banner + hero) */}
      <div className="absolute inset-x-0 top-0 h-[100svh] z-0 overflow-hidden bg-black pointer-events-none">
        <img
          className="absolute inset-0 w-full h-full object-cover saturate-125 contrast-110"
          src={heroBackgroundSrc}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
        />
        {/* Frosted glass + cyber neon tint */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_46%,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_76%_22%,rgba(217,70,239,0.15),transparent_34%)]" />
        <div className="absolute inset-0 bg-bg/18 backdrop-blur-md backdrop-saturate-125" />
        {/* Subtle scan grid for AI/Web3 tone */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:46px_46px]" />
        {/* Vignette + readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/12 via-bg/48 to-bg/78" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(0,0,0,0.38)_100%)]" />
      </div>

      {/* Banner */}
      <div className="relative z-10 bg-red text-white py-3 px-6 brutal-border-b font-display font-bold text-sm tracking-widest flex items-center justify-between overflow-hidden">
        <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] flex gap-8">
          <span>{t('home.banner.available')}</span>
          <span>•</span>
          <span>{t('home.banner.based')}</span>
          <span>•</span>
          <span>{t('home.banner.available')}</span>
          <span>•</span>
          <span>{t('home.banner.based')}</span>
        </div>
      </div>

      {/* Hero Section */}
      <ScrollReveal>
        <section className="relative z-10 px-6 md:px-12 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-8 items-center min-h-[calc(100svh-48px)] md:min-h-[calc(100svh-52px)]">
          
          <div className="lg:col-span-7 space-y-8 relative z-10">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.85] tracking-tighter uppercase drop-shadow-lg">
              {t('home.hero.title1')}<br />
              {t('home.hero.title2')}<br />
              <span className="text-blue drop-shadow-md">{t('home.hero.title3')}</span> {t('home.hero.title4')}
            </h1>
            
            <p className="text-xl md:text-2xl font-medium max-w-2xl leading-relaxed drop-shadow-md">
              {t('home.hero.desc')}
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <Magnetic>
                <a href="#projects" className="bg-ink text-bg px-8 py-4 font-display font-bold text-lg tracking-widest brutal-border brutal-shadow brutal-shadow-hover brutal-shadow-active flex items-center gap-3">
                  {t('home.hero.viewProjects')} <ArrowRight size={20} />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="https://github.com/Parker0928/CV" target="_blank" rel="noreferrer" className="bg-surface text-ink px-8 py-4 font-display font-bold text-lg tracking-widest brutal-border brutal-shadow brutal-shadow-hover brutal-shadow-active flex items-center gap-3">
                  {t('home.hero.downloadCv')} <Download size={20} />
                </a>
              </Magnetic>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex lg:justify-center xl:justify-end">
            <div className="w-[95%] max-w-[560px] bg-surface text-ink brutal-border brutal-shadow overflow-hidden">
              <div className="relative bg-ink brutal-border-b">
                <img
                  src="/hero-project-card.png"
                  alt="AI agent visual"
                  className="w-full aspect-[16/9] object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-ink text-bg px-3 py-1.5 brutal-border border-bg/50 font-display text-xs tracking-widest">
                  {t('home.projectCard.badge')}
                </div>
              </div>

              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display font-black text-3xl md:text-5xl tracking-tight uppercase leading-[0.95]">
                    {t('home.projectCard.title')}
                  </h3>
                  <div className="shrink-0 bg-red text-white px-3 py-2.5 brutal-border text-center">
                    <div className="font-display font-black text-4xl md:text-5xl leading-none">0.8s</div>
                    <div className="mt-1 font-display text-[10px] tracking-widest">{t('home.projectCard.metricLabel')}</div>
                  </div>
                </div>

                <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/85 max-w-[90%]">
                  {t('home.projectCard.desc')}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    t('home.projectCard.tags.llm'),
                    t('home.projectCard.tags.rag'),
                    t('home.projectCard.tags.nestjs'),
                    t('home.projectCard.tags.postgresql'),
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-yellow text-black px-3 py-1.5 brutal-border font-display text-xs tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Focus Areas */}
      <ScrollReveal>
        <section className="px-6 md:px-12 py-16 brutal-border-t bg-surface">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase">
              {t('home.focus.title1')}<br />{t('home.focus.title2')}
            </h2>
            <p className="text-lg font-medium max-w-md">
              {t('home.focus.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t('home.focus.aiTitle'), icon: <Cpu size={32} />, color: 'bg-yellow text-black', desc: t('home.focus.aiDesc') },
              { title: t('home.focus.defiTitle'), icon: <Code size={32} />, color: 'bg-blue text-white', desc: t('home.focus.defiDesc') },
              { title: t('home.focus.monoTitle'), icon: <Layers size={32} />, color: 'bg-ink text-bg', desc: t('home.focus.monoDesc') },
            ].map((area, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className={`p-8 brutal-border brutal-shadow ${area.color} flex flex-col h-full`}>
                  <div className="mb-16">{area.icon}</div>
                  <div className="mt-auto">
                    <h3 className="text-2xl font-display font-bold tracking-tight mb-4">{area.title}</h3>
                    <p className="font-medium opacity-90">{area.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Map & CTA */}
      <ScrollReveal>
        <section className="grid grid-cols-1 lg:grid-cols-2 brutal-border-t">
          <div className="p-6 md:p-12 brutal-border-b lg:brutal-border-b-0 lg:brutal-border-r bg-bg flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase mb-6">
              {t('home.map.title1')}<br />{t('home.map.title2')}
            </h2>
            <div className="aspect-video brutal-border brutal-shadow relative overflow-hidden bg-ink">
              <img 
                src="/shenzhen-city.png" 
                alt="Map" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-yellow text-black px-4 py-2 font-display font-bold brutal-border tracking-widest flex items-center gap-2">
                  <div className="w-3 h-3 bg-red rounded-full animate-pulse"></div>
                  REMOTE / GLOBAL
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-12 bg-yellow text-black flex flex-col justify-center items-start">
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase mb-8">
              {t('home.cta.title1')}<br />{t('home.cta.title2')}
            </h2>
            <p className="text-xl font-medium mb-12 max-w-md">
              {t('home.cta.desc')}
            </p>
            <Magnetic>
              <a href="#contact" className="bg-ink text-bg px-10 py-5 font-display font-bold text-xl tracking-widest brutal-border brutal-shadow brutal-shadow-hover brutal-shadow-active flex items-center gap-4">
                {t('home.cta.button')} <ArrowRight size={24} />
              </a>
            </Magnetic>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
