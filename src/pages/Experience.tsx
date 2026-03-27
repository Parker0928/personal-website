import { ArrowRight, CheckCircle2, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../components/ScrollReveal';
import { AnimatedCounter } from '../components/AnimatedCounter';

export function Experience() {
  const { t } = useTranslation();

  const experiences = [
    {
      role: t('experience.roles.arch.title'),
      company: t('experience.roles.arch.company'),
      period: t('experience.roles.arch.period'),
      desc: t('experience.roles.arch.desc')
    },
    {
      role: t('experience.roles.lead.title'),
      company: t('experience.roles.lead.company'),
      period: t('experience.roles.lead.period'),
      desc: t('experience.roles.lead.desc')
    },
    {
      role: t('experience.roles.full.title'),
      company: t('experience.roles.full.company'),
      period: t('experience.roles.full.period'),
      desc: t('experience.roles.full.desc')
    }
  ];

  const skills = [
    { name: 'REACT / NEXT.JS', level: 95 },
    { name: 'TYPESCRIPT', level: 90 },
    { name: 'TAILWIND CSS', level: 95 },
    { name: 'WEB3 / ETHER.JS', level: 85 },
    { name: 'NODE.JS', level: 80 },
    { name: 'SYSTEM ARCHITECTURE', level: 85 },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <ScrollReveal>
        <section className="px-6 md:px-12 py-16 md:py-24 bg-ink text-bg">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black leading-[0.85] tracking-tighter uppercase mb-8">
            {t('experience.title1')}<br />
            <span className="text-outline-yellow">{t('experience.title2')}</span>
          </h1>
          <div className="flex flex-wrap gap-4">
            <div className="bg-blue text-white px-4 py-2 font-display font-bold tracking-widest brutal-border border-white flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              {t('experience.status')}
            </div>
            <div className="bg-red text-white px-4 py-2 font-display font-bold tracking-widest brutal-border border-white">
              {t('experience.timeline')}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Timeline & Skills */}
      <section className="grid grid-cols-1 lg:grid-cols-12 brutal-border-t">
        {/* Timeline */}
        <div className="lg:col-span-7 p-6 md:p-12 brutal-border-b lg:brutal-border-b-0 lg:brutal-border-r bg-bg">
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.15} className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute left-[-48px] top-2 w-4 h-4 bg-ink brutal-border rounded-full"></div>
                <div className="hidden md:block absolute left-[-41px] top-8 bottom-[-48px] w-[2px] bg-ink"></div>
                
                <div className="font-display font-bold text-sm tracking-widest text-red mb-2">
                  {exp.period}
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-black tracking-tight uppercase mb-2">
                  {exp.role}
                </h3>
                <div className="font-display font-bold text-lg tracking-widest mb-4 opacity-70">
                  {exp.company}
                </div>
                <p className="text-lg font-medium leading-relaxed max-w-xl">
                  {exp.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="lg:col-span-5 flex flex-col">
          <ScrollReveal className="p-6 md:p-12 bg-yellow text-black brutal-border-b flex-grow">
            <h2 className="text-3xl font-display font-black tracking-tight uppercase mb-8 flex items-center gap-3">
              <Terminal size={32} /> {t('experience.skills.title')}
            </h2>
            <div className="space-y-6">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between font-display font-bold text-sm tracking-widest mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-4 w-full bg-surface brutal-border">
                    <div 
                      className="h-full bg-ink border-r-3 border-ink" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="p-6 md:p-12 bg-surface flex-grow">
            <h2 className="text-2xl font-display font-black tracking-tight uppercase mb-6">
              {t('experience.skills.tooling')}
            </h2>
            <div className="flex flex-wrap gap-3">
              {['VS Code', 'Figma', 'Git', 'Turborepo', 'Docker', 'Vercel', 'AWS', 'Jira', 'Notion', 'Linear'].map((tool, i) => (
                <span key={i} className="px-4 py-2 brutal-border font-display font-bold text-sm tracking-widest bg-bg flex items-center gap-2">
                  <CheckCircle2 size={16} /> {tool}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 brutal-border-t">
        {[
          { isNumber: true, value: 25, suffix: '+', label: t('experience.stats.projects') },
          { isNumber: true, value: 1, suffix: 'M+', label: t('experience.stats.lines') },
          { isNumber: true, value: 42, suffix: '', label: t('experience.stats.certs') },
          { isNumber: false, text: 'BAUHAUS', label: t('experience.stats.design') },
        ].map((stat, i) => (
          <ScrollReveal key={i} delay={i * 0.1} className={`p-8 md:p-12 flex flex-col items-center justify-center text-center brutal-border
            ${i % 2 !== 0 ? 'brutal-border-l' : ''} 
            ${i < 2 ? 'brutal-border-b md:brutal-border-b-0' : ''}
            ${i > 0 && i % 2 === 0 ? 'md:brutal-border-l' : ''}
            bg-bg hover:bg-ink hover:text-bg transition-colors duration-300
          `}>
            <div className="text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter mb-2">
              {stat.isNumber ? (
                <AnimatedCounter value={stat.value as number} suffix={stat.suffix} />
              ) : (
                stat.text
              )}
            </div>
            <div className="font-display font-bold text-xs md:text-sm tracking-widest opacity-80">
              {stat.label}
            </div>
          </ScrollReveal>
        ))}
      </section>
    </div>
  );
}
