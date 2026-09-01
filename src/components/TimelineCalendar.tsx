'use client';

import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, CheckCircle2, Award, Terminal, Flag, Sparkles, ChevronRight } from 'lucide-react';

interface TimelineEvent {
  month: string;
  quarter: 'S1 (Automne-Hiver)' | 'S2 (Printemps-Été)';
  title: string;
  badge: string;
  events: string[];
  type: 'workshop' | 'project' | 'hackathon' | 'gala' | 'exam';
}

export default function TimelineCalendar() {
  const [selectedSemester, setSelectedSemester] = useState<'all' | 's1' | 's2'>('all');

  const timeline: TimelineEvent[] = [
    {
      month: 'Octobre 2026',
      quarter: 'S1 (Automne-Hiver)',
      title: 'Intégration & Onboarding Technique',
      badge: 'Bootcamp & Kick-off',
      events: [
        'Bootcamp Git, GitHub & Environnements Linux',
        'Journée d\'intégration des nouvelles recrues APEX DIGITAL',
        'Constitution des équipes projets et assignation des mentors',
      ],
      type: 'workshop',
    },
    {
      month: 'Novembre 2026',
      quarter: 'S1 (Automne-Hiver)',
      title: 'Lancement Projets S1 & Embarqué',
      badge: 'Prototypage IoT',
      events: [
        'Lancement officiel du Grand Projet S1 : CardioPulse IoT & AI',
        'Atelier Systèmes Embarqués & Programmation ESP32',
        'Mise en place des environnements de développement microcontrôleur',
      ],
      type: 'project',
    },
    {
      month: 'Décembre 2026',
      quarter: 'S1 (Automne-Hiver)',
      title: 'Conférence IA Santé & Masterclass',
      badge: 'Conférence & IA',
      events: [
        'Conférence « IA & Cybersécurité en Santé » avec intervenants experts',
        'Masterclass Vision Médicale & Traitement d\'Images cliniques',
        'Revue technique intermédiaire des 5 groupes micro-innovations',
      ],
      type: 'workshop',
    },
    {
      month: 'Janvier 2027',
      quarter: 'S1 (Automne-Hiver)',
      title: 'Trêve Opérationnelle & Examens',
      badge: 'Session Examens',
      events: [
        'Trêve opérationnelle officielle des activités du club',
        'Session d\'Examens Semestre 1 UIB / SupTech',
        'Support d\'entraide académique entre membres',
      ],
      type: 'exam',
    },
    {
      month: 'Février 2027',
      quarter: 'S2 (Printemps-Été)',
      title: 'Lancement Projet S2 & TinyML',
      badge: 'GreenTech & Edge AI',
      events: [
        'Lancement officiel Projet S2 : AquaSmart Guardian & EcoSense',
        'Workshop Edge AI, TinyML & Modélisation de séries temporelles',
        'Début du prototypage des capteurs physico-chimiques d\'eau',
      ],
      type: 'project',
    },
    {
      month: 'Mars 2027',
      quarter: 'S2 (Printemps-Été)',
      title: 'Journée de l\'Eau & Grand Hackathon',
      badge: 'Événement Phare',
      events: [
        'Journée Mondiale de l\'Eau (22 Mars) : Déploiement pilote points d\'eau UIB',
        'Grand Hackathon Annuel APEX-UIB (48h non-stop)',
        'Remise des prix d\'innovation technologique et mentorat',
      ],
      type: 'hackathon',
    },
    {
      month: 'Avril 2027',
      quarter: 'S2 (Printemps-Été)',
      title: 'Conférence HealthTech/GreenTech & SIG',
      badge: 'Masterclass Data',
      events: [
        'Conférence « HealthTech & GreenTech : Convergences Numériques »',
        'Atelier Data Science, Cartographie WebGIS & Visualisation',
        'Phase finale d\'intégration matérielle des micro-innovations',
      ],
      type: 'workshop',
    },
    {
      month: 'Mai 2027',
      quarter: 'S2 (Printemps-Été)',
      title: 'Salons Nationaux & Examens S2',
      badge: 'Compétitions & Examens',
      events: [
        'Participation aux salons d\'excellence : GITEX Africa & Medical Expo',
        'Présentation des prototypes APEX devant les délégations industrielles',
        'Session d\'Examens Semestre 2 UIB',
      ],
      type: 'hackathon',
    },
    {
      month: 'Juin 2027',
      quarter: 'S2 (Printemps-Été)',
      title: 'Gala de Clôture & Démo Live',
      badge: 'Gala & Bilan',
      events: [
        'Gala de Clôture annuel & Assemblée Générale Ordinaire',
        'Démonstration Live des 7 Projets Technologiques devant le jury',
        'Remise des attestations officielles et passation de mandat',
      ],
      type: 'gala',
    },
  ];

  const filteredTimeline = timeline.filter((item) => {
    if (selectedSemester === 's1') return item.quarter.startsWith('S1');
    if (selectedSemester === 's2') return item.quarter.startsWith('S2');
    return true;
  });

  return (
    <section id="calendrier" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0F172A] border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 mb-3">
            <CalendarIcon className="w-3.5 h-3.5 text-[#F97316]" />
            <span>CHRONOLOGIE DU MANDAT 2026–2027</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Calendrier & <span className="gradient-text-orange">Workshops Annuel</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Un calendrier structuré alliant montées en compétences techniques, conférences spécialisées, hackathons et respect des périodes d'examens académiques.
          </p>

          {/* Semester Selector */}
          <div className="inline-flex p-1 rounded-xl bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs font-semibold mt-6">
            <button
              onClick={() => setSelectedSemester('all')}
              className={`py-2 px-4 rounded-lg transition-all cursor-pointer ${
                selectedSemester === 'all'
                  ? 'bg-white dark:bg-[#1B365D] text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              Année Complète (9 Mois)
            </button>
            <button
              onClick={() => setSelectedSemester('s1')}
              className={`py-2 px-4 rounded-lg transition-all cursor-pointer ${
                selectedSemester === 's1'
                  ? 'bg-[#F97316] text-white shadow-sm'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              Semestre 1 (Octobre – Janvier)
            </button>
            <button
              onClick={() => setSelectedSemester('s2')}
              className={`py-2 px-4 rounded-lg transition-all cursor-pointer ${
                selectedSemester === 's2'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              Semestre 2 (Février – Juin)
            </button>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTimeline.map((item, index) => (
            <div
              key={index}
              className="tech-card rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Month & Badge Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-slate-900 dark:text-white px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    {item.month}
                  </span>
                  <span
                    className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full ${
                      item.type === 'hackathon' || item.type === 'gala'
                        ? 'bg-[#F97316]/15 text-[#F97316] border border-[#F97316]/30'
                        : item.type === 'exam'
                        ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                        : 'bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/30'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>

                {/* Bullets */}
                <ul className="space-y-2 mb-4">
                  {item.events.map((evt, eIdx) => (
                    <li
                      key={eIdx}
                      className="text-xs text-slate-600 dark:text-slate-300 flex items-start space-x-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-1.5 flex-shrink-0"></span>
                      <span>{evt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Semester Tag */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-mono text-slate-400">{item.quarter}</span>
                <span className="text-[#F97316] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Mandat 2026-27</span>
                  <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
