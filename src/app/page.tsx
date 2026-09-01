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

      {/* Calendar & Workshops Timeline (2026-2027 Roadmap) */}
      <TimelineCalendar />

      {/* Interactive Multi-Step Recruitment Form with Validation */}
      <RecruitmentForm />

      {/* Footer */}
      <Footer />
    </main>
  );
}
