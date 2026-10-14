'use client';

import React, { useState } from 'react';
import { Shield, Cpu, Trophy, Palette, Handshake, Users, Sparkles, ChevronRight, UserPlus } from 'lucide-react';

export interface TeamMember {
  name: string;
  role: string;
  subRole?: string;
  cellule?: string;
  image?: string;
  initials?: string;
  mission?: string;
  description?: string;
  tags?: string[];
  icon?: React.ReactNode;
  isOpen?: boolean;
}

export const boardMembers: TeamMember[] = [
  {
    name: 'Mr. Adam DANI',
    role: 'Président',
    subRole: 'Présidium Exécutif',
    image: '/team/adam-dani.jpg',
    initials: 'AD',
    mission: 'Représentant légal, arbitrage stratégique et validation institutionnelle UIB.',
  },
  {
    name: 'Mr. Samir BARRADAH',
    role: 'Vice-Président',
    subRole: 'Co-Garant Exécutif',
    image: '/team/samir-barradah.jpg',
    initials: 'SB',
    mission: 'Coordination inter-cellules, adéquation budgétaire et co-contrôle exécutif.',
  },
  {
    name: 'Mr. Mohamed LHIKIOUI',
    role: 'Secrétaire Général',
    subRole: 'Gestion Administrative',
    image: '/team/mohamed-lhikioui.jpg',
    initials: 'ML',
    mission: 'Centralisation administrative, traçabilité des PV et circulation documentaire.',
  },
  {
    name: 'Poste Ouvert',
    role: 'Trésorier(e)',
    subRole: 'Gestion Financière',
    image: '',
    initials: '',
    isOpen: true,
    mission: 'Gestionnaire opérationnelle des fonds, bilans financiers et conformité budgétaire UIB.',
  },
];

export const cellHeads: TeamMember[] = [
  {
    name: 'Mr. Souhail HAFIDI',
    role: 'Responsable (Head)',
    cellule: 'Tech et Innovation',
    image: '/team/souhail-hafidi.jpg',
    initials: 'SH',
    icon: <Cpu className="w-5 h-5 text-[#F97316]" />,
    description:
      'Supervision des projets technologiques, architectures logicielles, intelligence artificielle biomédicale et prototypage IoT embarqué.',
    tags: ['HealthTech', 'GreenTech', 'IoT ESP32', 'Deep Learning', 'Web/Cloud'],
  },
  {
    name: 'Mr. Mohamed Amine MOUSTAID',
    role: 'Responsable (Head)',
    cellule: 'Événementiel et Compétition',
    image: '/team/mohamed-amine-moustaid.jpg',
    initials: 'MM',
    icon: <Trophy className="w-5 h-5 text-sky-400" />,
    description:
      'Planification logistique des conférences, hackathons internes (Grand Hackathon UIB), workshops et préparation aux salons nationaux (GITEX Africa, Medical Expo).',
    tags: ['Grand Hackathon', 'Salons Tech', 'Workshops', 'Logistique'],
  },
  {
    name: 'Mr. Hamza OUECHEN',
    role: 'Responsable (Head)',
    cellule: 'Communication et Marketing',
    image: '/team/hamza-ouechen.jpg',
    initials: 'HO',
    icon: <Palette className="w-5 h-5 text-purple-400" />,
    description:
      "Gestion de l'identité visuelle de la communauté, couverture médiatique des événements, création de contenus UI/UX et rayonnement digital.",
    tags: ['Design UI/UX', 'Brand Identity', 'Social Media', 'Vidéographie'],
  },
  {
    name: 'Mme. Aya AJAFARI',
    role: 'Responsable (Head)',
    cellule: 'Relations Extérieures / Partenariat',
    image: '/team/aya-ajafari.jpg',
    initials: 'AA',
    icon: <Handshake className="w-5 h-5 text-emerald-400" />,
    description:
      'Prospection et négociation des partenariats institutionnels, relations avec les entreprises HealthTech/GreenTech et levée de sponsorings.',
    tags: ['Sponsorings', 'Partenariats B2B', 'Réseau Alumni', 'Conventions'],
  },
  {
    name: 'Poste Ouvert',
    role: 'Responsable (Head)',
    cellule: 'Ressources Humaines et Cohésion',
    image: '',
    initials: '',
    isOpen: true,
    icon: <Users className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
    description:
      "Gestion du recrutement, intégration des nouveaux membres (Team Building), suivi de l'engagement hebdomadaire (règle des 3h/semaine) et cohésion interne.",
    tags: ['Recrutement', 'Team Building', 'Suivi Membres', 'Médiation', 'Poste Ouvert'],
  },
];

export function MemberAvatar({
  member,
  sizeClass = 'w-20 h-20 sm:w-24 sm:h-24',
  className = 'mb-3 mx-auto',
}: {
  member: TeamMember;
  sizeClass?: string;
  className?: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (member.isOpen) {
    return (
      <div
        className={`relative ${sizeClass} rounded-full p-1 border-2 border-dashed border-emerald-500/70 dark:border-emerald-400/70 bg-emerald-500/5 dark:bg-emerald-950/20 shadow-md flex-shrink-0 flex items-center justify-center ${className}`}
      >
        <div className="w-full h-full rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 flex flex-col items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
          <UserPlus className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="text-[8px] sm:text-[9px] font-bold font-mono tracking-wider uppercase mt-0.5">OPEN</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${sizeClass} rounded-full p-1 bg-gradient-to-tr from-[#E06D24] to-[#1B365D] shadow-md flex-shrink-0 ${className}`}>
      <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
        {!hasError && member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            onError={() => setHasError(true)}
          />
        ) : (
          <span className="text-sm sm:text-base font-bold text-[#1B365D] dark:text-[#E06D24] font-mono">
            {member.initials || '?'}
          </span>
        )}
      </div>
    </div>
  );
}

export default function GovernanceTeam() {
  return (
    <section id="cellules" className="py-24 relative overflow-hidden bg-[#FAFCFF] dark:bg-[#0B1120] border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 mb-3">
            <Shield className="w-3.5 h-3.5 text-[#F97316]" />
            <span>ORGANIGRAMME OFFICIEL 2026–2027</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Gouvernance & <span className="gradient-text-orange">Cellules Opérationnelles</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Une structure organisationnelle rigoureuse assurant l'alignement stratégique avec l'UIB (Université Internationale Bleue) et ses pôles SupTech, ainsi qu'un encadrement agile par projet.
          </p>
        </div>

        {/* ================= TIER A: LE BUREAU DIRECTEUR (Executive Board) ================= */}
        <div className="mb-20">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-8">
            <div className="flex items-center space-x-2.5">
              <span className="w-2 h-6 rounded-full bg-[#F97316]"></span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Tier A : Le Bureau Directeur <span className="text-xs font-normal text-slate-500 dark:text-slate-400 font-mono ml-1">(Executive Board)</span>
              </h3>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-orange-500/10 text-[#F97316] border border-orange-500/20">
              4 Membres Exécutifs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((exec, idx) => (
              <div
                key={idx}
                className={`tech-card rounded-2xl p-6 flex flex-col items-center text-center group relative overflow-hidden ${
                  exec.isOpen ? 'border-2 border-dashed border-emerald-500/40 bg-emerald-500/[0.02]' : ''
                }`}
              >
                {/* Subtle top role accent */}
                <div
                  className={`absolute top-0 inset-x-0 h-1 ${
                    exec.isOpen
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                      : 'bg-gradient-to-r from-[#1B365D] via-[#F97316] to-[#E06D24] opacity-0 group-hover:opacity-100 transition-opacity'
                  }`}
                ></div>

                {/* Circular Avatar with Gradient Ring & Photo/Fallback */}
                <MemberAvatar member={exec} sizeClass="w-20 h-20 sm:w-24 sm:h-24" className="mb-3 mx-auto" />

                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono tracking-wider mb-2 border ${
                    exec.isOpen
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {exec.isOpen ? 'Poste Ouvert' : (exec.subRole || exec.role)}
                </span>

                <h4
                  className={`text-base font-bold mb-1 ${
                    exec.isOpen ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-900 dark:text-white'
                  }`}
                >
                  {exec.name}
                </h4>

                <p className="text-xs font-semibold text-[#F97316] mb-3">
                  {exec.role}
                </p>

                {exec.mission && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    {exec.mission}
                  </p>
                )}

                {exec.isOpen && (
                  <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 w-full">
                    <button
                      onClick={() => {
                        const el = document.getElementById('recruitment-form');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full text-xs font-semibold px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <span>Postuler à ce poste</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ================= TIER B: LES 5 CELLULES OPÉRATIONNELLES ================= */}
        <div>
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-8">
            <div className="flex items-center space-x-2.5">
              <span className="w-2 h-6 rounded-full bg-sky-500"></span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Tier B : Les 5 Cellules Opérationnelles & Leurs Responsables
              </h3>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
              5 Cellules Spécialisées
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cellHeads.map((cell, idx) => (
              <div
                key={idx}
                className={`tech-card rounded-2xl p-6 flex flex-col justify-between group ${
                  cell.isOpen ? 'border-2 border-dashed border-emerald-500/40 bg-emerald-500/[0.02]' : ''
                }`}
              >
                <div>
                  {/* Card Header: Icon & Cell Title */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                        {cell.icon || <Sparkles className="w-5 h-5 text-[#F97316]" />}
                      </div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                        {cell.cellule || cell.role}
                      </h4>
                    </div>

                    {/* Status Badge */}
                    {cell.isOpen ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        Poste Ouvert
                      </span>
                    ) : cell.cellule === 'Tech et Innovation' ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-orange-500/10 text-[#F97316] border border-orange-500/25">
                        Recrutement Ouvert
                      </span>
                    ) : cell.cellule === 'Communication et Marketing' ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/25 flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        Inscriptions Réouvertes
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-slate-400 border border-slate-200 dark:border-slate-700/60">
                        Clôturé
                      </span>
                    )}
                  </div>

                  {/* Cell Responsable Head Profile Bubble with Avatar */}
                  <div
                    className={`flex items-center space-x-3.5 p-3 rounded-xl border mb-4 ${
                      cell.isOpen
                        ? 'bg-emerald-500/[0.04] border-emerald-500/30'
                        : 'bg-slate-100/70 dark:bg-slate-900/70 border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <MemberAvatar member={cell} sizeClass="w-14 h-14" className="mb-0" />
                    <div>
                      <span className="text-[10px] font-mono font-semibold uppercase text-slate-500 dark:text-slate-400 block">
                        {cell.role}
                      </span>
                      <p
                        className={`text-xs font-bold ${
                          cell.isOpen
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-slate-900 dark:text-white'
                        }`}
                      >
                        {cell.name}
                        {cell.isOpen && (
                          <span className="text-[10px] font-normal text-emerald-500 font-mono ml-1.5">
                            (Open for Joining)
                          </span>
                        )}
                      </p>
                      <p className="text-[11px] text-[#F97316] font-medium">
                        {cell.cellule}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  {cell.description && (
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {cell.description}
                    </p>
                  )}
                </div>

                {/* Tags / Project tracks */}
                <div>
                  {cell.tags && (
                    <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80">
                      <div className="flex flex-wrap gap-1.5">
                        {cell.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/80"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA if cell is recruiting or open */}
                  {(cell.cellule === 'Tech et Innovation' ||
                    cell.cellule === 'Communication et Marketing' ||
                    cell.isOpen) && (
                    <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                      <button
                        onClick={() => {
                          const targetCell =
                            cell.cellule === 'Communication et Marketing'
                              ? 'Cellule Communication et Marketing'
                              : 'Cellule Tech & Innovation';
                          window.dispatchEvent(
                            new CustomEvent('select-cellule', { detail: targetCell })
                          );
                          const el = document.getElementById('recruitment-form');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
                          cell.isOpen
                            ? 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                            : cell.cellule === 'Communication et Marketing'
                            ? 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/30'
                            : 'bg-orange-500/10 hover:bg-orange-500/20 text-[#F97316] border border-orange-500/30'
                        }`}
                      >
                        <span>{cell.isOpen ? 'Postuler pour cette cellule' : 'Rejoindre cette cellule'}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
