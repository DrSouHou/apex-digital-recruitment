'use client';

import React, { useState } from 'react';
import { HeartPulse, Leaf, Stethoscope, Droplets, Eye, Wind, Cpu, Sparkles, ArrowUpRight, Zap, CheckCircle2, Box, Radio, Lock } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  semester?: string;
  category: 'healthtech' | 'greentech';
  type: 'Grand Projet Majeur' | 'Micro-Innovation';
  domain: string;
  subtitle: string;
  description: string;
  techTags: string[];
  deliverables?: string;
  icon: React.ReactNode;
  impactMetric: string;
}

export default function ProjectTracks() {
  const [filterType, setFilterType] = useState<'all' | 'major' | 'micro'>('all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'healthtech' | 'greentech'>('all');

  const projects: Project[] = [
    // --- 2 GRANDS PROJETS MAJEURS ---
    {
      id: 'cardiopulse',
      title: 'CardioPulse IoT & AI',
      semester: 'Semestre 1',
      category: 'healthtech',
      type: 'Grand Projet Majeur',
      domain: 'HealthTech & IA en Santé (Digital Healthcare)',
      subtitle: 'Surveillance cardiaque continue & Prédiction d\'arythmie par IA',
      description:
        'Système biomédical portable intégrant capteurs PPG/ECG synchronisés avec des algorithmes d\'IA pour la détection précoce des anomalies cardiaques et la télémédecine.',
      techTags: ['ESP32-S3', 'PPG (MAX30102)', 'ECG (AD8232)', '1D-CNN / Random Forest', 'React / Flask API'],
      deliverables: 'Boîtier portable 3D, API télémédecine temps réel et validation clinique simulée.',
      icon: <HeartPulse className="w-6 h-6 text-[#F97316]" />,
      impactMetric: 'Surveillance ECG & Détection continue',
    },
    {
      id: 'aquasmart',
      title: 'AquaSmart Guardian & EcoSense',
      semester: 'Semestre 2',
      category: 'greentech',
      type: 'Grand Projet Majeur',
      domain: 'GreenTech & Écologie (Journée de l\'Eau & Smart Cities)',
      subtitle: 'Monitoring autonome de la qualité & préservation de l\'eau',
      description:
        'Réseau de nœuds solaires communicants mesurant la potabilité de l\'eau et prédisant l\'indice de qualité (WQI) via modèle LSTM géolocalisé.',
      techTags: ['Nœuds solaires ESP32 LoRa', 'Sondes pH / Turbidité / TDS', 'WQI (LSTM)', 'WebGIS Dashboard'],
      deliverables: 'Déploiement pilote points d\'eau UIB le 22 Mars, présentation Grand Hackathon & Salons.',
      icon: <Droplets className="w-6 h-6 text-sky-400" />,
      impactMetric: 'Cartographie & Alertes Qualité 24/7',
    },

    // --- 5 MICRO-INNOVATIONS (GROUPES MEMBRES) ---
    {
      id: 'neurovision',
      title: 'NeuroVision AI',
      semester: 'Groupe Membre 1',
      category: 'healthtech',
      type: 'Micro-Innovation',
      domain: 'HealthTech & IA Biomédicale',
      subtitle: 'Segmentation & classification d\'IRM cérébrales par Deep Learning',
      description:
        'Développement d\'un modèle d\'aide au diagnostic neurologique pour la segmentation précise des lésions et anomalies sur scans IRM cérébraux.',
      techTags: ['Deep Learning', 'PyTorch', 'OpenCV', 'FastAPI'],
      icon: <Eye className="w-5 h-5 text-purple-400" />,
      impactMetric: 'Segmentation assistée par Deep Learning',
    },
    {
      id: 'smart-insoles',
      title: 'Semelle Podométrique Intelligente',
      semester: 'Groupe Membre 2',
      category: 'healthtech',
      type: 'Micro-Innovation',
      domain: 'HealthTech & Capteurs Embarqués',
      subtitle: 'Prévention du pied diabétique via matrice de pression FSR & BLE',
      description:
        'Semelle instrumentée mesurant la distribution des pressions plantaires en temps réel pour prévenir les ulcérations diabétiques et analyser la marche.',
      techTags: ['Matrice FSR', 'Bluetooth BLE', 'Microcontrôleur', 'Mobile App'],
      icon: <Stethoscope className="w-5 h-5 text-amber-400" />,
      impactMetric: 'Matrice de pression dynamique',
    },
    {
      id: 'ecoair',
      title: 'EcoAir Station',
      semester: 'Groupe Membre 3',
      category: 'greentech',
      type: 'Micro-Innovation',
      domain: 'GreenTech & Environnement',
      subtitle: 'Station de mesure & prédiction de l\'indice qualité de l\'air campus',
      description:
        'Micro-station météo et pollution analysant en temps réel les particules fines PM2.5, PM10 et CO₂ avec tableau de bord public pour le campus.',
      techTags: ['Capteurs PM2.5 / PM10 / CO₂', 'ESP32 WiFi', 'TimescaleDB', 'Grafana'],
      icon: <Wind className="w-5 h-5 text-emerald-400" />,
      impactMetric: 'Indice qualité de l\'air en direct',
    },
    {
      id: 'biowaste',
      title: 'BioWaste Scanner',
      semester: 'Groupe Membre 4',
      category: 'greentech',
      type: 'Micro-Innovation',
      domain: 'GreenTech & Vision IA',
      subtitle: 'Poubelle de tri sélectif automatique assistée par vision (YOLOv8)',
      description:
        'Dispositif intelligent de reconnaissance d\'objets pour orienter automatiquement les déchets dans le compartiment approprié.',
      techTags: ['Computer Vision (YOLOv8)', 'Raspberry Pi / Jetson', 'Servomoteurs', 'Edge AI'],
      icon: <Box className="w-5 h-5 text-teal-400" />,
      impactMetric: 'Classification instantanée des déchets',
    },
    {
      id: 'meditrack',
      title: 'MediTrack & Drug Reminder',
      semester: 'Groupe Membre 5',
      category: 'healthtech',
      type: 'Micro-Innovation',
      domain: 'HealthTech & Observance Médicale',
      subtitle: 'Pilulier connecté à pesée dynamique (HX711) & alertes Telegram',
      description:
        'Système d\'observance thérapeutique mesurant le prélèvement des doses médicamenteuses avec notifications automatiques envoyées aux soignants.',
      techTags: ['Jauge de contrainte (HX711)', 'ESP32', 'Telegram Bot API', 'Cloud Sync'],
      icon: <Radio className="w-5 h-5 text-rose-400" />,
      impactMetric: 'Suivi dynamique de la prise de médicaments',
    },
  ];

  // Filtering Logic
  const filteredProjects = projects.filter((p) => {
    const matchesType =
      filterType === 'all'
        ? true
        : filterType === 'major'
        ? p.type === 'Grand Projet Majeur'
        : p.type === 'Micro-Innovation';

    const matchesCategory =
      categoryFilter === 'all' ? true : p.category === categoryFilter;

    return matchesType && matchesCategory;
  });

  return (
    <section id="project-tracks" className="py-24 relative overflow-hidden bg-white dark:bg-[#0F172A] border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-[#F97316] mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>ROADMAP TECHNIQUE 2026–2027</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Projets <span className="gradient-text-orange">HealthTech</span> & <span className="gradient-text-navy">GreenTech</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Découvrez nos 2 grands projets phares annuels et les 5 projets micro-innovations développés par les groupes membres d'APEX DIGITAL.
          </p>

          {/* Interactive Filters Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            {/* Type Filters */}
            <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold">
              <button
                onClick={() => setFilterType('all')}
                className={`py-2 px-3.5 rounded-lg transition-all cursor-pointer ${
                  filterType === 'all'
                    ? 'bg-white dark:bg-[#1B365D] text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Tous les Projets ({projects.length})
              </button>
              <button
                onClick={() => setFilterType('major')}
                className={`py-2 px-3.5 rounded-lg transition-all cursor-pointer ${
                  filterType === 'major'
                    ? 'bg-[#F97316] text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                2 Grands Projets Majeurs
              </button>
              <button
                onClick={() => setFilterType('micro')}
                className={`py-2 px-3.5 rounded-lg transition-all cursor-pointer ${
                  filterType === 'micro'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                5 Micro-Innovations
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold">
              <button
                onClick={() => setCategoryFilter('all')}
                className={`py-2 px-3 rounded-lg transition-all cursor-pointer ${
                  categoryFilter === 'all'
                    ? 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                Toutes Catégories
              </button>
              <button
                onClick={() => setCategoryFilter('healthtech')}
                className={`py-2 px-3 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                  categoryFilter === 'healthtech'
                    ? 'bg-orange-500/20 text-[#F97316] font-bold'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                <HeartPulse className="w-3.5 h-3.5" />
                <span>HealthTech</span>
              </button>
              <button
                onClick={() => setCategoryFilter('greentech')}
                className={`py-2 px-3 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                  categoryFilter === 'greentech'
                    ? 'bg-sky-500/20 text-sky-500 font-bold'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                <Leaf className="w-3.5 h-3.5" />
                <span>GreenTech</span>
              </button>
            </div>
          </div>
        </div>

        {/* Project Cards Grid with Coming Soon Locked Blur State */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`tech-card rounded-2xl p-6 relative overflow-hidden group min-h-[380px] flex flex-col justify-between ${
                project.type === 'Grand Projet Majeur'
                  ? 'border-orange-500/30 dark:border-orange-500/30'
                  : ''
              }`}
            >
              {/* Blurred underlying card content */}
              <div className="filter blur-[6px] pointer-events-none select-none opacity-40 transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  {/* Header: Icon, Tag & Semester */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center border border-slate-200 dark:border-slate-800">
                      {project.icon}
                    </div>

                    <div className="flex items-center space-x-2">
                      {project.semester && (
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {project.semester}
                        </span>
                      )}
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          project.type === 'Grand Projet Majeur'
                            ? 'bg-[#F97316]/15 text-[#F97316] border border-[#F97316]/30'
                            : 'bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/30'
                        }`}
                      >
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Title & Domain */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400" />
                  </h3>

                  <p className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 mb-2">
                    {project.domain}
                  </p>

                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2.5">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Deliverables */}
                  {project.deliverables && (
                    <div className="p-3 rounded-xl bg-orange-500/5 dark:bg-orange-500/10 border border-orange-500/20 mb-4">
                      <span className="text-[10px] font-mono font-bold uppercase text-[#F97316] block mb-1">
                        Livrables :
                      </span>
                      <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                        {project.deliverables}
                      </p>
                    </div>
                  )}
                </div>

                {/* Technologies & Footer */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techTags.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                    <span className="text-[11px] font-semibold text-[#F97316]">
                      {project.impactMetric}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-slate-400">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Unblurred, Centered "Coming Soon" Lock Overlay */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-slate-50/40 dark:bg-[#0F172A]/50 backdrop-blur-[3px]">
                <div className="flex flex-col items-center max-w-[260px]">
                  {/* Lock Badge Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 shadow-lg flex items-center justify-center text-[#F97316] mb-3.5 group-hover:scale-105 transition-transform">
                    <Lock className="w-5 h-5" />
                  </div>

                  {/* Coming Soon Pill */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>Coming Soon</span>
                  </span>

                  {/* Confidentiel Title & Subtext */}
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    Projet Confidentiel
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Dévoilé prochainement lors du lancement officiel.
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
