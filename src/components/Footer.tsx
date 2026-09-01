import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAFCFF] dark:bg-[#0B1120] text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800/80 pt-12 pb-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-10">
          
          {/* Left Column: Brand & Sister Schools */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/apex-logo.png" 
                alt="APEX DIGITAL" 
                className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700 shadow-sm" 
              />
              <div>
                <span className="text-lg font-bold tracking-wider text-slate-900 dark:text-white">APEX DIGITAL</span>
                <p className="text-xs text-orange-600 dark:text-orange-400 font-semibold tracking-wide">
                  Communauté Digitale Officielle de l'UIB
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Communauté technologique et pôle d'innovation étudiant dédié à l'excellence en IA, IoT et développement d'impact.
            </p>

            {/* Sister Establishments */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
              <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                Établissements SupTech :
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <a 
                  href="https://uib.ma/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60 hover:border-orange-500 transition-colors shadow-xs"
                >
                  SupTech Santé
                </a>
                <a 
                  href="https://www.suptech-environnement.ma/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60 hover:border-orange-500 transition-colors shadow-xs"
                >
                  SupTech Environnement
                </a>
                <a 
                  href="https://www.suptech-sciences-informatiques.ma/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60 hover:border-orange-500 transition-colors shadow-xs"
                >
                  SupTech Sciences Informatiques
                </a>
              </div>
            </div>
          </div>

          {/* Center Column: Suivez-nous & Official Portal */}
          <div className="flex flex-col items-start md:items-center justify-center space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wide">
              Suivez-nous
            </h3>
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/apex-digital-%E2%80%93-uib/home/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 hover:bg-[#E06D24] text-slate-600 dark:text-slate-300 hover:text-white dark:hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-200 dark:border-slate-700 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/apexdigital.suptech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 hover:bg-[#E06D24] text-slate-600 dark:text-slate-300 hover:text-white dark:hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-200 dark:border-slate-700 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* University Portal Link Button */}
            <a
              href="https://uib.ma/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:border-orange-500 hover:text-[#E06D24] dark:hover:text-white transition-colors shadow-xs"
            >
              <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>Portail Officiel UIB (uib.ma)</span>
            </a>
          </div>

          {/* Right Column: Contact Rapide */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right space-y-2">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wide mb-1">
              Contact Rapide
            </h3>
            <a 
              href="mailto:apexdigital.uib@gmail.com" 
              className="text-xs text-slate-600 dark:text-slate-300 hover:text-[#E06D24] dark:hover:text-orange-400 transition-colors font-medium"
            >
              apexdigital.uib@gmail.com
            </a>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 italic pt-1">
              « Connecter, Créer, Conquérir »
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Developer Credit */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2026 APEX DIGITAL — Université Internationale Bleue (UIB). Tous droits réservés.</p>
          
          <div className="flex items-center gap-2">
            <span>Conçu & Développé par <strong className="text-slate-800 dark:text-slate-200 font-semibold">—Cellule Tech & Innovation</strong> </span>
            
            <div className="flex items-center gap-1.5 ml-1">
              {/* GitHub Link */}
              <a
                href="https://github.com/DrSouHou"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Souhail HAFIDI"
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/souhail-hafidi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Souhail HAFIDI"
                className="text-slate-400 hover:text-[#0A66C2] transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
