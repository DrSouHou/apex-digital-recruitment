'use client';

import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle, MessageSquare, X, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  candidateName: string;
  candidateId: string;
  primaryCell: string;
}

export default function SuccessModal({
  isOpen,
  onClose,
  candidateName,
  candidateId,
  primaryCell,
}: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Trigger festive confetti
      const count = 200;
      const defaults = {
        origin: { y: 0.7 },
        colors: ['#F97316', '#0284C7', '#1B365D', '#10B981', '#F59E0B'],
      };

      function fire(particleRatio: number, opts: confetti.Options) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
        });
      }

      fire(0.25, { spread: 26, startVelocity: 55 });
      fire(0.2, { spread: 60 });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      fire(0.1, { spread: 120, startVelocity: 45 });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg tech-card rounded-3xl p-8 shadow-2xl overflow-hidden bg-white dark:bg-[#131E33] border border-slate-200 dark:border-slate-800">
        {/* Subtle accent glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Header Icon */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-[#F97316] mb-5 shadow-sm">
            <CheckCircle className="w-9 h-9" />
          </div>

          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Candidature Validée & Transmise</span>
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
            Félicitations, {candidateName.split(' ')[0]} !
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Votre dossier de candidature pour la{' '}
            <strong className="text-slate-900 dark:text-white font-semibold">{primaryCell}</strong> pour le mandat 2026-2027 a bien été reçu par la Cellule RH d'APEX DIGITAL.
          </p>

          {/* Reference ID Pill */}
          <div className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 mb-6 text-left">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span>Référence Candidat :</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Enregistré
              </span>
            </div>
            <div className="text-lg font-mono font-extrabold text-[#F97316] tracking-wider">
              {candidateId || 'APEX-2026-CONFIRMED'}
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
              Conservez cet identifiant. Une convocation vous sera transmise sur votre numéro WhatsApp pour l'entretien individuel.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="w-full flex flex-col gap-3">
            <a
              href="https://chat.whatsapp.com/demo-apex-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Rejoindre le Canal WhatsApp Candidats</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <button
              onClick={onClose}
              className="w-full py-3 px-5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer"
            >
              Retour au Portail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
