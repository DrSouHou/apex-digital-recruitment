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
                  href="https://suptech-sante.ma/" 
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

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@apexdigital.suptech?_r=1&_t=ZS-99fraIXpZ7U"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 hover:bg-black text-slate-600 dark:text-slate-300 hover:text-white dark:hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-200 dark:border-slate-700 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>

              {/* WhatsApp Channel */}
              <a
                href="https://whatsapp.com/channel/0029VbD8ZjdAzNbwVgidWd16"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chaîne WhatsApp APEX DIGITAL - UIB"
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 hover:bg-[#25D366] text-slate-600 dark:text-slate-300 hover:text-white dark:hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-200 dark:border-slate-700 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.77.813 2.796.814 3.183 0 5.768-2.586 5.769-5.766.001-3.182-2.585-5.766-5.769-5.766zm3.385 8.167c-.145.409-.844.757-1.157.785-.314.029-.71.042-2.029-.481-1.684-.667-2.766-2.39-2.85-2.502-.084-.113-.687-.912-.687-1.74 0-.827.433-1.233.587-1.391.154-.158.337-.198.45-.198.113 0 .226 0 .325.006.105.006.246-.04.385.293.144.346.49 1.196.533 1.282.043.087.072.189.014.303-.058.114-.087.185-.173.287-.086.101-.182.227-.26.305-.087.087-.178.182-.077.355.101.173.45.742.966 1.202.664.591 1.224.774 1.397.86.173.086.275.072.376-.043.102-.115.434-.505.549-.679.115-.174.231-.144.389-.086.158.058 1.002.472 1.175.558.173.086.289.129.332.202.043.073.043.423-.102.832zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.435 5.176L2 22l4.981-1.307A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.637 0-3.155-.477-4.437-1.298l-.318-.204-2.966.778.792-2.893-.225-.358C4.01 14.774 3.5 13.435 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z"/>
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
