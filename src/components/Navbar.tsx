'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Sparkles, Menu, X, ChevronRight, Layers, Calendar, Users } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-2.5 shadow-sm dark:shadow-xl'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Dual Logo Header & Brand Identity */}
          <a href="#" className="flex items-center group">
            <div className="flex items-center gap-3">
              {/* Club Logo */}
              <img
                src="/assets/apex-logo.png"
                alt="APEX DIGITAL Logo"
                width={42}
                height={42}
                className="h-10 w-10 object-contain rounded-full border border-slate-200 dark:border-slate-700 bg-white p-0.5 shadow-sm"
              />

              {/* Divider */}
              <div className="h-6 w-[1px] bg-slate-300 dark:bg-slate-700 hidden sm:block" />

              {/* University Logo */}
              <img
                src="/assets/uib-logo.png"
                alt="UIB SupTech Logo"
                height={36}
                className="h-9 w-auto max-w-[120px] object-contain"
              />

              {/* Brand Label */}
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-wide text-[#1B365D] dark:text-white leading-tight">
                  APEX DIGITAL
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold tracking-wide">
                  Université Internationale Bleue
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
            <button
              onClick={() => scrollToSection('project-tracks')}
              className="hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors flex items-center gap-1.5 cursor-pointer py-1"
            >
              <Layers className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              <span>Projets</span>
            </button>

            <button
              onClick={() => scrollToSection('cellules')}
              className="hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors flex items-center gap-1.5 cursor-pointer py-1"
            >
              <Users className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              <span>Cellules & Équipe</span>
            </button>

            <button
              onClick={() => scrollToSection('calendrier')}
              className="hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors flex items-center gap-1.5 cursor-pointer py-1"
            >
              <Calendar className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              <span>Calendrier</span>
            </button>

            <button
              onClick={() => scrollToSection('recruitment-form')}
              className="hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors flex items-center gap-1.5 cursor-pointer py-1"
            >
              <span>Postuler</span>
            </button>
          </nav>

          {/* Right Action Controls: Theme Toggle & Primary CTA */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Dark / Light Mode Switcher */}
            <button
              onClick={toggleTheme}
              aria-label="Basculer le mode sombre / clair"
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-[#F97316] dark:hover:text-[#F97316] hover:border-[#F97316]/50 transition-all cursor-pointer shadow-sm"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Primary Action CTA */}
            <button
              onClick={() => scrollToSection('recruitment-form')}
              className="relative inline-flex items-center justify-center px-4 py-2 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#E06D24] to-[#F97316] hover:from-[#F97316] hover:to-[#ea580c] transition-all shadow-md shadow-orange-500/20 hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-white" />
              <span>Rejoindre</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Basculer le mode sombre / clair"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <button
              onClick={() => scrollToSection('recruitment-form')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#F97316] text-white shadow-sm"
            >
              Rejoindre
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-xl shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
              <button
                onClick={() => scrollToSection('project-tracks')}
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left"
              >
                <span className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#F97316]" />
                  <span>Projets (HealthTech & GreenTech)</span>
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => scrollToSection('cellules')}
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left"
              >
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#F97316]" />
                  <span>Gouvernance & Cellules</span>
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => scrollToSection('calendrier')}
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#F97316]" />
                  <span>Calendrier Annuel 2026-2027</span>
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => scrollToSection('recruitment-form')}
                  className="w-full py-3 rounded-xl font-bold text-center text-white bg-gradient-to-r from-[#E06D24] to-[#F97316] shadow-md shadow-orange-500/20"
                >
                  Remplir le Formulaire Officiel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
