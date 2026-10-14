import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectTracks from '@/components/ProjectTracks';
import GovernanceTeam from '@/components/GovernanceTeam';
import TimelineCalendar from '@/components/TimelineCalendar';
import RecruitmentForm from '@/components/RecruitmentForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFCFF] dark:bg-[#0B1320] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-[#F97316] selection:text-white">
      {/* Top Sticky Navigation with Dual Logo and Theme Switcher */}
      <Navbar />

      {/* Hero Section with Minimalist Developer Metrics */}
      <Hero />

      {/* Project Tracks (2 Grands Projets Majeurs + 5 Micro-Innovations) */}
      <ProjectTracks />

      {/* Governance & Operational Cells (Tier A Executive Board + Tier B Cell Heads) */}
      <GovernanceTeam />

      {/* ========================================================= */}
      {/* SECTION : PROFESSEURS SUPERVISEURS TECHNIQUES            */}
      {/* ========================================================= */}
      <section id="superviseurs" className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* En-tête de section */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 dark:border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Encadrement Académique & Scientifique
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Professeurs Superviseurs Techniques
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Supervision technique de la communauté dans la cellule de Tech & Innovation
            </p>
          </div>

          {/* Grille des Superviseurs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Mme. Aya Khirania',
                title: 'Professeure Superviseuse',
                image: '/assets/superviseurs/aya-khirania.jpg',
                cellule: 'Tech & Innovation',
              },
              {
                name: 'Mr. Achraf Akkaoui',
                title: 'Professeur Superviseur',
                image: '/assets/superviseurs/achraf-akkaoui.jpg',
                cellule: 'Tech & Innovation',
              },
              {
                name: 'Mr. Issam Rajab',
                title: 'Professeur Superviseur',
                image: '/assets/superviseurs/issam-rajab.jpg',
                cellule: 'Tech & Innovation',
              },
            ].map((supervisor, idx) => (
              <div
                key={idx}
                className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl dark:shadow-slate-950/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Liseré supérieur en dégradé au survol */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Photo Officielle */}
                <div className="relative w-24 h-24 mb-5">
                  <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-md group-hover:scale-105 transition-transform duration-300 relative">
                    <Image
                      alt={supervisor.name}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 96px"
                      src={supervisor.image}
                    />
                  </div>
                  <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 text-[10px] font-mono font-bold text-blue-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-700 shadow-xs">
                    UIB
                  </span>
                </div>

                {/* Nom & Titre */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {supervisor.name}
                </h3>
                <span className="text-xs font-semibold text-blue-600 dark:text-cyan-400 uppercase tracking-wider mt-0.5 mb-2 block">
                  {supervisor.title}
                </span>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-2 mb-4">
                  Supervision technique de la communauté dans la cellule de Tech & Innovation
                </p>

                {/* Badge Cellule */}
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80 w-full flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    {supervisor.cellule}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Calendar & Workshops Timeline (2026-2027 Roadmap) */}
      <TimelineCalendar />

      {/* Interactive Multi-Step Recruitment Form with Validation */}
      <RecruitmentForm />

      {/* Footer */}
      <Footer />
    </main>
  );
}
