import { ArrowRight, Mail, MapPin, Phone, FileText, Github, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FormEvent, useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Magnetic } from '../components/Magnetic';
import { ParallaxImage } from '../components/ParallaxImage';

export function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('project');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subjectMap: Record<string, string> = {
      project: t('contact.form.subjects.project'),
      job: t('contact.form.subjects.job'),
      consulting: t('contact.form.subjects.consulting'),
      other: t('contact.form.subjects.other')
    };

    const emailSubject = `[Portfolio] ${subjectMap[subject] ?? subject}`;
    const emailBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      message
    ].join('\n');

    window.location.href = `mailto:Parker928@proton.me?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <ScrollReveal>
        <section className="px-6 md:px-12 py-16 md:py-24 bg-bg brutal-border">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] tracking-tighter uppercase max-w-5xl">
            {t('contact.title1')} <span className="bg-yellow text-black px-4 brutal-border inline-block transform -rotate-2 my-2">{t('contact.title2')}</span> {t('contact.title3')}
          </h1>
        </section>
      </ScrollReveal>

      <section className="grid grid-cols-1 lg:grid-cols-12 brutal-border-t">
        {/* Contact Form */}
        <ScrollReveal className="lg:col-span-7 p-6 md:p-12 brutal-border-b lg:brutal-border-b-0 lg:brutal-border-r bg-surface">
          <h2 className="text-3xl font-display font-black tracking-tight uppercase mb-8">
            {t('contact.form.title')}
          </h2>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-display font-bold text-sm tracking-widest">{t('contact.form.name')}</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-4 bg-bg brutal-border focus:outline-none focus:ring-4 focus:ring-yellow/50 transition-all font-medium"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>
              <div className="space-y-2">
                <label className="font-display font-bold text-sm tracking-widest">{t('contact.form.email')}</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-4 bg-bg brutal-border focus:outline-none focus:ring-4 focus:ring-yellow/50 transition-all font-medium"
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="font-display font-bold text-sm tracking-widest">{t('contact.form.subject')}</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-4 bg-bg brutal-border focus:outline-none focus:ring-4 focus:ring-yellow/50 transition-all font-medium appearance-none rounded-none"
              >
                <option value="project">{t('contact.form.subjects.project')}</option>
                <option value="job">{t('contact.form.subjects.job')}</option>
                <option value="consulting">{t('contact.form.subjects.consulting')}</option>
                <option value="other">{t('contact.form.subjects.other')}</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-display font-bold text-sm tracking-widest">{t('contact.form.message')}</label>
              <textarea 
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full p-4 bg-bg brutal-border focus:outline-none focus:ring-4 focus:ring-yellow/50 transition-all font-medium resize-none"
                placeholder={t('contact.form.messagePlaceholder')}
              ></textarea>
            </div>

            <Magnetic className="w-full">
              <button type="submit" className="w-full bg-ink text-bg px-8 py-5 font-display font-bold text-lg tracking-widest brutal-border brutal-shadow brutal-shadow-hover brutal-shadow-active flex items-center justify-center gap-3">
                {t('contact.form.submit')} <ArrowRight size={20} />
              </button>
            </Magnetic>
          </form>
        </ScrollReveal>

        {/* Contact Info */}
        <div className="lg:col-span-5 flex flex-col">
          {/* Direct Access */}
          <ScrollReveal delay={0.1} className="p-6 md:p-12 bg-blue text-white brutal-border-b">
            <h2 className="text-2xl font-display font-black tracking-tight uppercase mb-8">
              {t('contact.info.direct')}
            </h2>
            <div className="space-y-6">
              <a href="mailto:Parker928@proton.me" className="flex items-center gap-4 font-display font-bold text-lg tracking-widest hover:text-yellow transition-colors">
                <div className="p-3 brutal-border border-white bg-ink"><Mail size={24} /></div>
                Parker928@proton.me
              </a>
              <a href="tel:15807488252" className="flex items-center gap-4 font-display font-bold text-lg tracking-widest hover:text-yellow transition-colors">
                <div className="p-3 brutal-border border-white bg-ink"><Phone size={24} /></div>
                15807488252
              </a>
            </div>
          </ScrollReveal>

          {/* CV & Socials */}
          <ScrollReveal delay={0.2} className="grid grid-cols-2 brutal-border-b">
            <a href="#" className="p-8 bg-red text-white brutal-border-r flex flex-col items-center justify-center gap-4 hover:bg-ink hover:text-bg transition-colors group">
              <FileText size={40} className="group-hover:-translate-y-2 transition-transform" />
              <span className="font-display font-bold text-sm tracking-widest text-center">{t('contact.info.cv')}</span>
            </a>
            <div className="p-8 bg-bg flex flex-col items-center justify-center gap-6">
              <span className="font-display font-bold text-sm tracking-widest">{t('contact.info.socials')}</span>
              <div className="flex gap-4">
                <Magnetic>
                  <a href="https://github.com/Parker0928" target="_blank" rel="noreferrer" className="p-2 brutal-border brutal-shadow-sm hover:bg-yellow hover:text-black transition-colors block"><Github size={24} /></a>
                </Magnetic>
                <Magnetic>
                  <a href="#" className="p-2 brutal-border brutal-shadow-sm hover:bg-blue hover:text-white transition-colors block"><Linkedin size={24} /></a>
                </Magnetic>
                <Magnetic>
                  <a href="https://x.com/zhi_yu56061" target="_blank" rel="noreferrer" className="p-2 brutal-border brutal-shadow-sm hover:bg-ink hover:text-white transition-colors block" aria-label="X">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current">
                      <g>
                        <path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path>
                      </g>
                    </svg>
                  </a>
                </Magnetic>
              </div>
            </div>
          </ScrollReveal>

          {/* Location */}
          <ScrollReveal delay={0.3} className="relative flex-grow min-h-[250px] bg-ink">
            <ParallaxImage 
              src="/shenzhen-city.png" 
              alt="Location" 
              className="absolute inset-0 opacity-50"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
              <div className="bg-yellow text-black self-start px-4 py-2 font-display font-bold tracking-widest brutal-border flex items-center gap-2 pointer-events-auto">
                <MapPin size={16} /> REMOTE
              </div>
              <div className="bg-surface p-4 brutal-border font-medium text-sm max-w-xs pointer-events-auto">
                <strong className="font-display tracking-widest block mb-1">{t('contact.info.availability')}</strong>
                {t('contact.info.availabilityDesc')}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
