import { ArrowUpRight, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../components/ScrollReveal';
import { Magnetic } from '../components/Magnetic';
import { ParallaxImage } from '../components/ParallaxImage';

export function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.items.ai.title'),
      category: t('projects.items.ai.category'),
      desc: t('projects.items.ai.desc'),
      tags: ['React', 'Next.js', 'Zustand', 'Tailwind', 'OpenAI API'],
      color: 'bg-yellow text-black',
      image: 'https://picsum.photos/seed/ai/800/600?grayscale',
      href: '#contact',
    },
    {
      title: t('projects.items.dex.title'),
      category: t('projects.items.dex.category'),
      desc: t('projects.items.dex.desc'),
      tags: ['TypeScript', 'Ethers.js', 'Wagmi', 'TradingView', 'The Graph'],
      color: 'bg-blue text-white',
      image: 'https://picsum.photos/seed/crypto/800/600?grayscale',
      href: '#contact',
    },
    {
      title: t('projects.items.data.title'),
      category: t('projects.items.data.category'),
      desc: t('projects.items.data.desc'),
      tags: ['React', 'Three.js', 'D3.js', 'WebSockets', 'Go'],
      color: 'bg-surface',
      image: 'https://picsum.photos/seed/data/800/600?grayscale',
      href: '#contact',
    },
    {
      title: t('projects.items.mono.title'),
      category: t('projects.items.mono.category'),
      desc: t('projects.items.mono.desc'),
      tags: ['Backstage', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes'],
      color: 'bg-ink text-bg',
      image: 'https://picsum.photos/seed/code/800/600?grayscale',
      href: '#contact',
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <ScrollReveal>
        <section className="px-6 md:px-12 py-16 md:py-24 bg-bg">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black leading-[0.85] tracking-tighter uppercase">
            {t('projects.title1')}<br />
            <span className="text-blue">{t('projects.title2')}</span>
          </h1>
        </section>
      </ScrollReveal>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 brutal-border-t">
        {projects.map((project, i) => (
          <ScrollReveal key={i} delay={i * 0.1} className={`brutal-border-b ${i % 2 === 0 ? 'md:brutal-border-r' : ''} flex flex-col`}>
            {/* Project Image */}
            <div className="aspect-video brutal-border-b relative overflow-hidden group bg-ink">
              <ParallaxImage 
                src={project.image} 
                alt={project.title} 
                imageClassName="opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-ink/40 backdrop-blur-sm">
                <Magnetic>
                  <a href={project.href} className="bg-yellow text-black px-6 py-3 font-display font-bold tracking-widest brutal-border brutal-shadow-sm brutal-shadow-hover flex items-center gap-2">
                    {t('projects.viewCase')} <ArrowUpRight size={20} />
                  </a>
                </Magnetic>
              </div>
            </div>

            {/* Project Details */}
            <div className={`p-8 md:p-12 flex-grow flex flex-col ${project.color}`}>
              <div className="font-display font-bold text-sm tracking-widest mb-4 opacity-80">
                {project.category}
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight uppercase mb-6">
                {project.title}
              </h2>
              <p className="text-lg font-medium leading-relaxed mb-8 opacity-90 flex-grow">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, j) => (
                  <span key={j} className={`px-3 py-1 font-display font-bold text-xs tracking-widest brutal-border ${project.color === 'bg-ink text-bg' || project.color === 'bg-blue text-white' ? 'border-current' : 'border-ink'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* CTA Banner */}
      <ScrollReveal>
        <section className="bg-yellow text-black p-6 md:p-12 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase mb-8">
            {t('projects.cta.title1')}<br />{t('projects.cta.title2')}
          </h2>
          <Magnetic>
            <a href="#contact" className="inline-flex bg-ink text-bg px-10 py-5 font-display font-bold text-xl tracking-widest brutal-border brutal-shadow brutal-shadow-hover brutal-shadow-active items-center gap-4">
              {t('projects.cta.button')} <ArrowUpRight size={24} />
            </a>
          </Magnetic>
        </section>
      </ScrollReveal>
    </div>
  );
}
