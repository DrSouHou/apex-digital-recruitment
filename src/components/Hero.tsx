'use client';

import React from 'react';
import { ArrowDown, ChevronRight, CheckCircle2, ShieldCheck, Terminal, Activity, Layers, Cpu } from 'lucide-react';

export default function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById('recruitment-form');
    if (formElement) {
      const yOffset = -70;
      const y = formElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTracks = () => {
    const tracksElement = document.getElementById('project-tracks');
    if (tracksElement) {
      const yOffset = -70;
      const y = tracksElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24 transition-colors duration-300 bg-[#FAFCFF] dark:bg-[#0B1320]">
      {/* Subtle grid pattern: visible in both themes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Top Institutional Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 mb-8 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97316] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F97316]"></span>
            </span>
            <span className="text-[#F97316] font-bold">RECRUTEMENT OFFICIEL</span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="font-mono text-slate-600 dark:text-slate-400">2026–2027</span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-sky-600 dark:text-sky-400 font-medium">Université Internationale Bleue (UIB)</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1B365D] dark:text-white leading-[1.12] mb-6">
            Façonnez l'avenir de la{' '}
            <span className="gradient-text-orange inline-block">
              HealthTech
            </span>{' '}
            & de la{' '}
            <span className="gradient-text-navy inline-block">
              GreenTech
            </span>{' '}
            à l'UIB
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-10 max-w-3xl mx-auto">
            Rejoignez la communauté technologique d'
            <strong className="text-[#1B365D] dark:text-white font-semibold">APEX DIGITAL</strong> pour le mandat 2026–2027. Développez des prototypes concrets en IA biomédicale, systèmes embarqués IoT et solutions durables.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#E06D24] via-[#F97316] to-[#ea580c] hover:opacity-95 transition-all shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Déposer ma Candidature</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToTracks}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Terminal className="w-4 h-4 text-slate-400" />
              <span>Consulter la Roadmap & Projets</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Pillars List */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs text-slate-600 dark:text-slate-400 font-medium mb-16">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
              <span>Projets Encadrés & Certifiés</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
              <span>Participation aux Salons Nationaux (GITEX Africa)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Gouvernance & Suivi Personnalisé</span>
            </div>
          </div>
        </div>

        {/* Minimalist Stats Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="tech-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pôle Majeur
              </span>
              <span className="w-8 h-8 rounded-lg bg-orange-500/10 text-[#F97316] flex items-center justify-center">
                <Activity className="w-4 h-4" />
              </span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
              2 Majeurs
            </div>
            <div className="text-xs font-semibold text-[#F97316] mb-1.5">
              CardioPulse & AquaSmart
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Santé connectée IA et monitoring écologique LoRaWAN pour les 2 semestres.
            </p>
          </div>

          {/* Card 2 */}
          <div className="tech-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Laboratoires
              </span>
              <span className="w-8 h-8 rounded-lg bg-sky-500/10 text-[#0284C7] dark:text-[#38BDF8] flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
              5 Micro-Innov
            </div>
            <div className="text-xs font-semibold text-sky-600 dark:text-sky-400 mb-1.5">
              Groupes Membres Actifs
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              NeuroVision, Podométrie, Stations Air, Poubelles Tri IA et Pilulier IoT.
            </p>
          </div>

          {/* Card 3 */}
          <div className="tech-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Structure
              </span>
              <span className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
              5 Cellules
            </div>
            <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-1.5">
              Organisation Opérationnelle
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Tech, Événements, Com & Design, Relations B2B et Ressources Humaines.
            </p>
          </div>

          {/* Card 4 */}
          <div className="tech-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Événements
              </span>
              <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
              Hackathon UIB
            </div>
            <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1.5">
              Grand Hackathon & Salons
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Masterclasses certifiantes et participation aux compétitions d'élite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
