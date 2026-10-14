'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  recruitmentFormSchema,
  RecruitmentFormData,
  ACADEMIC_PROGRAMS,
  CURRENT_YEAR_OPTIONS,
  AGE_OPTIONS,
  isBlockedName,
} from '@/lib/schema';
import SuccessModal from './SuccessModal';
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Calendar,
  Link as LinkIcon,
  Cpu,
  Check,
  ChevronRight,
  ChevronLeft,
  FileText,
  Loader2,
  Sparkles,
  Award,
  Lock,
  Building2,
  Layers,
  Clock,
  AlertCircle,
  Palette,
  Megaphone,
} from 'lucide-react';

const TECH_INTEREST_DOMAINS = [
  'IA Biomédicale & Deep Learning',
  'Systèmes Embarqués & IoT (ESP32)',
  'Frontend React / Next.js / Tailwind',
  'Backend Python / Flask / FastAPI',
  'Prototypage Hardware & Boîtiers 3D',
  'Capteurs Biomédicaux (ECG, PPG, FSR)',
  'Computer Vision & Edge AI (TinyML)',
  'Réseaux Sans-Fil (LoRa, BLE, WiFi)',
  'Cartographie WebGIS & Analyse de Données',
];

const COMM_INTEREST_DOMAINS = [
  'Design UI/UX (Figma, Maquettage Web/Mobile)',
  'Design Graphique & Branding (Illustrator, Photoshop)',
  'Création de Contenu & Réseaux Sociaux (Instagram, LinkedIn)',
  'Vidéographie & Montage Vidéo (Premiere Pro, CapCut)',
  'Motion Design & Animation Visuelle (After Effects)',
  'Photographie & Couverture Événementielle',
  'Rédaction de Contenus & Copywriting (Storytelling)',
  'Stratégie Marketing Digital & Campagnes Ads',
  'Relations Publiques & Communication Événementielle',
];

export default function RecruitmentForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successModalData, setSuccessModalData] = useState<{
    isOpen: boolean;
    candidateName: string;
    candidateId: string;
    primaryCell: string;
  }>({
    isOpen: false,
    candidateName: '',
    candidateId: '',
    primaryCell: 'Cellule Tech & Innovation',
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<RecruitmentFormData>({
    resolver: zodResolver(recruitmentFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      whatsapp: '',
      age: '',
      school: 'sante',
      accessLevel: '',
      filiere: '',
      currentYear: '',
      portfolioUrl: '',
      primaryCell: 'Cellule Tech & Innovation',
      interests: ['IA Biomédicale & Deep Learning', 'Systèmes Embarqués & IoT (ESP32)'],
      motivation: '',
      pastExperience: '',
      commitmentArticle19: false,
    },
  });

  const watchSchool = watch('school') || 'sante';
  const watchLevel = watch('accessLevel') || '';
  const watchFiliere = watch('filiere') || '';
  const watchCurrentYear = watch('currentYear') || '';
  const watchAge = watch('age') || '';
  const watchMotivation = watch('motivation') || '';
  const watchInterests = watch('interests') || [];
  const watchPrimaryCell = watch('primaryCell') || 'Cellule Tech & Innovation';

  React.useEffect(() => {
    const handleSelectCellule = (e: any) => {
      const selected = e.detail;
      if (selected) {
        handleCelluleSelect(selected);
      }
    };
    window.addEventListener('select-cellule', handleSelectCellule);
    return () => window.removeEventListener('select-cellule', handleSelectCellule);
  }, []);

  const handleCelluleSelect = (celluleName: string) => {
    setValue('primaryCell', celluleName, { shouldValidate: true });
    if (celluleName === 'Cellule Communication et Marketing') {
      setValue('interests', [
        'Design UI/UX (Figma, Maquettage Web/Mobile)',
        'Création de Contenu & Réseaux Sociaux (Instagram, LinkedIn)',
      ], { shouldValidate: true });
    } else {
      setValue('interests', [
        'IA Biomédicale & Deep Learning',
        'Systèmes Embarqués & IoT (ESP32)',
      ], { shouldValidate: true });
    }
  };

  // Cascading lists
  const availableLevels =
    (watchSchool && ACADEMIC_PROGRAMS[watchSchool]?.levels)
      ? Object.keys(ACADEMIC_PROGRAMS[watchSchool].levels)
      : [];

  const availableFilieres =
    (watchSchool && watchLevel && ACADEMIC_PROGRAMS[watchSchool]?.levels[watchLevel])
      ? ACADEMIC_PROGRAMS[watchSchool].levels[watchLevel]
      : [];

  // Cascading Reset Handlers
  const handleSchoolChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSchool = e.target.value;
    setValue('school', newSchool, { shouldValidate: true });
    // Reset child dropdowns
    setValue('accessLevel', '', { shouldValidate: false });
    setValue('filiere', '', { shouldValidate: false });
    setValue('currentYear', '', { shouldValidate: false });
  };

  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLevel = e.target.value;
    setValue('accessLevel', newLevel, { shouldValidate: true });
    // Reset child dropdowns
    setValue('filiere', '', { shouldValidate: false });
    setValue('currentYear', '', { shouldValidate: false });
  };

  const handleFiliereChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFiliere = e.target.value;
    setValue('filiere', newFiliere, { shouldValidate: true });
    // Reset child dropdown
    setValue('currentYear', '', { shouldValidate: false });
  };

  const handleCurrentYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = e.target.value;
    setValue('currentYear', newYear, { shouldValidate: true });
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newAge = e.target.value;
    setValue('age', newAge, { shouldValidate: true });
  };

  const toggleInterest = (domain: string) => {
    const current = watchInterests;
    if (current.includes(domain)) {
      setValue(
        'interests',
        current.filter((item) => item !== domain),
        { shouldValidate: true }
      );
    } else {
      setValue('interests', [...current, domain], { shouldValidate: true });
    }
  };

  const nextStep = async () => {
    setErrorMessage(null);
    let isValid = false;
    if (currentStep === 1) {
      isValid = await trigger([
        'fullName',
        'email',
        'whatsapp',
        'age',
        'school',
        'accessLevel',
        'filiere',
        'currentYear',
        'portfolioUrl',
      ]);
      if (isBlockedName(watch('fullName'))) {
        isValid = false;
      }
    } else if (currentStep === 2) {
      isValid = await trigger(['primaryCell', 'interests']);
    }

    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
      const element = document.getElementById('recruitment-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const prevStep = () => {
    setErrorMessage(null);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const GOOGLE_SCRIPT_URL =
    process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
    'https://script.google.com/macros/s/AKfycbzlqb7icR0N7nYg5EtszTFLVLE1sMaVBLtlm6xCELCV-nhPfYyD9IuS-lgb6R9wVWLU/exec';

  const onSubmit = async (data: RecruitmentFormData) => {
    if (isBlockedName(data.fullName)) {
      setErrorMessage('Nom invalide / Name invalid');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const uniqueSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
    const isComm = data.primaryCell.includes('Communication');
    const candidateCode = isComm ? `APEX-COMM-${uniqueSuffix}` : `APEX-TECH-${uniqueSuffix}`;
    const timestamp = new Date().toISOString();
    const schoolName = ACADEMIC_PROGRAMS[data.school]?.name || data.school;

    // Backend Payload strictly matched to Google Apps Script backend
    // Includes aliases (primaryCell, cellule, cell, pole) so any script property reader works
    const payload = {
      fullName: data.fullName,
      age: data.age,
      email: data.email,
      whatsapp: data.whatsapp,
      school: schoolName,
      accessLevel: data.accessLevel,
      filiere: data.filiere,
      currentYear: data.currentYear,
      primaryCell: data.primaryCell,
      cellule: data.primaryCell,
      cell: data.primaryCell,
      pole: data.primaryCell,
      interests: data.interests,
      motivation: data.motivation,
      commitment: data.commitmentArticle19,
      pastProjects: data.pastExperience || '',
      portfolio: data.portfolioUrl || '',
      candidateId: candidateCode,
      timestamp,
    };

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      let result: any = null;
      try {
        result = await response.json();
      } catch {
        // If response is not JSON or redirected
      }

      if (result && (result.status === 'duplicate' || result.result === 'duplicate')) {
        setErrorMessage(
          result.message ||
            'Cette candidature existe déjà. Un compte avec cet e-mail ou ce téléphone a déjà été enregistré.'
        );
        return;
      }

      if (result && (result.status === 'error' || result.result === 'error')) {
        setErrorMessage(
          result.message || 'Une erreur est survenue lors du traitement de votre candidature.'
        );
        return;
      }

      setErrorMessage(null);
      setSuccessModalData({
        isOpen: true,
        candidateName: data.fullName,
        candidateId: result?.candidateId || candidateCode,
        primaryCell: data.primaryCell,
      });
    } catch (error) {
      console.error('Submission failed:', error);
      setErrorMessage(
        'Erreur de connexion au serveur de candidature. Veuillez vérifier votre connexion et réessayer.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="recruitment-form" className="py-24 relative overflow-hidden bg-white dark:bg-[#0F172A] border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-xs font-semibold text-[#F97316] mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CAMPAGNE DE RECRUTEMENT • 2026–2027</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Rejoindre une <span className="gradient-text-orange">Cellule APEX DIGITAL</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Rejoignez notre équipe : postulez pour la <strong className="text-slate-900 dark:text-white font-semibold">Cellule Tech & Innovation</strong> ou la <strong className="text-slate-900 dark:text-white font-semibold">Cellule Communication & Marketing</strong> pour le mandat 2026–2027.
          </p>
        </div>

        {/* Multi-Step Card */}
        <div className="tech-card rounded-3xl p-6 sm:p-10 shadow-xl bg-white dark:bg-[#131E33]">
          
          {/* Step Progress Indicators */}
          <div className="mb-10">
            <div className="flex items-center justify-between relative mb-4">
              {/* Progress Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0"></div>
              <div
                className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#E06D24] to-[#F97316] -translate-y-1/2 z-0 transition-all duration-500"
                style={{
                  width: `${((currentStep - 1) / 2) * 100}%`,
                }}
              ></div>

              {/* Step 1 Circle */}
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                    currentStep >= 1
                      ? 'bg-[#F97316] text-white shadow-md shadow-orange-500/30 ring-4 ring-white dark:ring-[#131E33]'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 ring-4 ring-white dark:ring-[#131E33]'
                  }`}
                >
                  {currentStep > 1 ? <Check className="w-4 h-4" /> : '1'}
                </div>
                <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 mt-2 hidden sm:block">
                  Informations
                </span>
              </div>

              {/* Step 2 Circle */}
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                    currentStep >= 2
                      ? 'bg-[#F97316] text-white shadow-md shadow-orange-500/30 ring-4 ring-white dark:ring-[#131E33]'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 ring-4 ring-white dark:ring-[#131E33]'
                  }`}
                >
                  {currentStep > 2 ? <Check className="w-4 h-4" /> : '2'}
                </div>
                <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 mt-2 hidden sm:block">
                  Cellule & Compétences
                </span>
              </div>

              {/* Step 3 Circle */}
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                    currentStep === 3
                      ? 'bg-[#F97316] text-white shadow-md shadow-orange-500/30 ring-4 ring-white dark:ring-[#131E33]'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 ring-4 ring-white dark:ring-[#131E33]'
                  }`}
                >
                  3
                </div>
                <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 mt-2 hidden sm:block">
                  Motivation & Engagement
                </span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Hidden Input for Primary Cell */}
            <input type="hidden" {...register('primaryCell')} />
            
            {/* ================= STEP 1: Personal & Academic Info ================= */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <User className="w-5 h-5 text-[#F97316]" />
                    <span>Étape 1 : Informations Personnelles & Cursus Académique</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Renseignez vos coordonnées, votre âge et votre filière pour l'intégration APEX DIGITAL.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                      Nom & Prénom <span className="text-[#F97316]">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="ex: Amina Benali"
                        {...register('fullName', {
                          onChange: (e) => {
                            if (isBlockedName(e.target.value)) {
                              trigger('fullName');
                            }
                          },
                          onBlur: () => {
                            trigger('fullName');
                          },
                        })}
                        className={`w-full tech-input rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm ${
                          errors.fullName ? 'border-rose-500 ring-1 ring-rose-500' : ''
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-xs text-rose-500 mt-1 font-medium">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                      Adresse Email <span className="text-[#F97316]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        type="email"
                        placeholder="ex: amina.benali@uib.ac.ma"
                        {...register('email')}
                        className="w-full tech-input rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-rose-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* WhatsApp */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                      Numéro WhatsApp <span className="text-[#F97316]">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        type="tel"
                        placeholder="ex: +212 6 00 00 00 00"
                        {...register('whatsapp')}
                        className="w-full tech-input rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm"
                      />
                    </div>
                    {errors.whatsapp && (
                      <p className="text-xs text-rose-500 mt-1">{errors.whatsapp.message}</p>
                    )}
                  </div>

                  {/* Age Selector */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                      Âge <span className="text-[#F97316]">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <select
                        {...register('age')}
                        onChange={handleAgeChange}
                        value={watchAge}
                        className="w-full tech-input rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm cursor-pointer"
                      >
                        <option value="">Sélectionnez votre âge</option>
                        {AGE_OPTIONS.map((ageOpt) => (
                          <option key={ageOpt} value={ageOpt}>
                            {ageOpt}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.age && (
                      <p className="text-xs text-rose-500 mt-1">{errors.age.message}</p>
                    )}
                  </div>

                  {/* Section Divider: Dynamic Academic Hierarchy */}
                  <div className="col-span-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#F97316] flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4" />
                        Cursus Académique & Orientation
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                        Sélectionnez l'établissement pour filtrer les niveaux et filières
                      </span>
                    </div>
                  </div>

                  {/* Établissement Selector */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                      Établissement / École <span className="text-[#F97316]">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <select
                        {...register('school')}
                        value={watchSchool}
                        onChange={handleSchoolChange}
                        className="w-full tech-input rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm cursor-pointer"
                      >
                        {Object.values(ACADEMIC_PROGRAMS).map((school) => (
                          <option key={school.id} value={school.id}>
                            {school.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.school && (
                      <p className="text-xs text-rose-500 mt-1">{errors.school.message}</p>
                    )}
                  </div>

                  {/* Niveau d'accès Selector */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                      Niveau d'accès <span className="text-[#F97316]">*</span>
                    </label>
                    <div className="relative">
                      <Layers className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <select
                        {...register('accessLevel')}
                        value={watchLevel}
                        onChange={handleLevelChange}
                        className="w-full tech-input rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm cursor-pointer"
                      >
                        <option value="">Sélectionnez votre niveau d'accès</option>
                        {availableLevels.map((level) => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.accessLevel && (
                      <p className="text-xs text-rose-500 mt-1">{errors.accessLevel.message}</p>
                    )}
                  </div>

                  {/* Filière Selector (Disabled until level chosen) */}
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                      Filière / Spécialité <span className="text-[#F97316]">*</span>
                    </label>
                    <div className="relative">
                      <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <select
                        {...register('filiere')}
                        value={watchFiliere}
                        onChange={handleFiliereChange}
                        disabled={!watchLevel}
                        className="w-full tech-input rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="">
                          {watchLevel
                            ? 'Sélectionnez votre filière'
                            : "Sélectionnez d'abord un niveau d'accès"}
                        </option>
                        {availableFilieres.map((filiere) => (
                          <option key={filiere} value={filiere}>
                            {filiere}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.filiere && (
                      <p className="text-xs text-rose-500 mt-1">{errors.filiere.message}</p>
                    )}
                  </div>

                  {/* Année d'étude actuelle Selector (Disabled until filiere chosen) */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                      Année d'étude actuelle <span className="text-[#F97316]">*</span>
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <select
                        {...register('currentYear')}
                        value={watchCurrentYear}
                        onChange={handleCurrentYearChange}
                        disabled={!watchFiliere}
                        className="w-full tech-input rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="">
                          {watchFiliere
                            ? "Sélectionnez votre année d'études"
                            : "Sélectionnez d'abord une filière"}
                        </option>
                        {CURRENT_YEAR_OPTIONS.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.currentYear && (
                      <p className="text-xs text-rose-500 mt-1">{errors.currentYear.message}</p>
                    )}
                  </div>

                  {/* Portfolio URL */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                      Lien Portfolio / LinkedIn / GitHub / Behance <span className="text-slate-400 font-normal">(Optionnel)</span>
                    </label>
                    <div className="relative">
                      <LinkIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/... ou https://behance.net/..."
                        {...register('portfolioUrl')}
                        className="w-full tech-input rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm"
                      />
                    </div>
                    {errors.portfolioUrl && (
                      <p className="text-xs text-rose-500 mt-1">{errors.portfolioUrl.message}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ================= STEP 2: Cellule Choice & Skills ================= */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#F97316]" />
                    <span>Étape 2 : Choix de la Cellule & Domaines de Compétences</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Sélectionnez la cellule opérationnelle que vous souhaitez intégrer ainsi que vos compétences clés.
                  </p>
                </div>

                {/* Choosing Step: Cellule Selector Cards */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                      Cellule à Rejoindre <span className="text-[#F97316]">*</span>
                    </label>
                    <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 font-mono">
                      ● 2 Cellules Ouvertes au Recrutement
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Option 1: Cellule Tech & Innovation */}
                    <div
                      onClick={() => handleCelluleSelect('Cellule Tech & Innovation')}
                      className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                        watchPrimaryCell === 'Cellule Tech & Innovation'
                          ? 'border-[#F97316] bg-orange-500/5 dark:bg-orange-950/20 shadow-md shadow-orange-500/10 ring-2 ring-orange-500/20'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2.5 rounded-xl border transition-colors ${
                              watchPrimaryCell === 'Cellule Tech & Innovation'
                                ? 'bg-[#F97316] text-white border-[#F97316] shadow-sm'
                                : 'bg-slate-100 dark:bg-slate-800 text-[#F97316] border-slate-200 dark:border-slate-700'
                            }`}
                          >
                            <Cpu className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                              Cellule Tech & Innovation
                            </h4>
                            <span className="text-[11px] text-slate-500 dark:text-slate-400">
                              Responsable : Mr. Souhail HAFIDI
                            </span>
                          </div>
                        </div>

                        {/* Selected Radio Indicator */}
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            watchPrimaryCell === 'Cellule Tech & Innovation'
                              ? 'border-[#F97316] bg-[#F97316] text-white'
                              : 'border-slate-300 dark:border-slate-600'
                          }`}
                        >
                          {watchPrimaryCell === 'Cellule Tech & Innovation' && (
                            <Check className="w-3 h-3 stroke-[3]" />
                          )}
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
                        Systèmes Embarqués ESP32, IA biomédicale, Prototypage hardware & IoT, architectures Cloud & solutions Web.
                      </p>

                      <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 dark:border-slate-800/80">
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-orange-500/10 text-[#F97316] border border-orange-500/25">
                          Recrutement Ouvert
                        </span>
                        <span className="text-[11px] font-medium text-slate-400">
                          IoT, IA & Cloud
                        </span>
                      </div>
                    </div>

                    {/* Option 2: Cellule Communication et Marketing */}
                    <div
                      onClick={() => handleCelluleSelect('Cellule Communication et Marketing')}
                      className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                        watchPrimaryCell === 'Cellule Communication et Marketing'
                          ? 'border-purple-500 bg-purple-500/5 dark:bg-purple-950/20 shadow-md shadow-purple-500/10 ring-2 ring-purple-500/20'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2.5 rounded-xl border transition-colors ${
                              watchPrimaryCell === 'Cellule Communication et Marketing'
                                ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                                : 'bg-slate-100 dark:bg-slate-800 text-purple-600 dark:text-purple-400 border-slate-200 dark:border-slate-700'
                            }`}
                          >
                            <Palette className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                              Cellule Communication et Marketing
                            </h4>
                            <span className="text-[11px] text-slate-500 dark:text-slate-400">
                              Responsable : Mr. Hamza OUECHEN
                            </span>
                          </div>
                        </div>

                        {/* Selected Radio Indicator */}
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            watchPrimaryCell === 'Cellule Communication et Marketing'
                              ? 'border-purple-600 bg-purple-600 text-white'
                              : 'border-slate-300 dark:border-slate-600'
                          }`}
                        >
                          {watchPrimaryCell === 'Cellule Communication et Marketing' && (
                            <Check className="w-3 h-3 stroke-[3]" />
                          )}
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
                        Design UI/UX, Identité visuelle & branding, Vidéographie & montage, Réseaux sociaux et couverture médiatique.
                      </p>

                      <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 dark:border-slate-800/80">
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/25 flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" />
                          Inscriptions Réouvertes
                        </span>
                        <span className="text-[11px] font-medium text-slate-400">
                          UI/UX & Stratégie Digitale
                        </span>
                      </div>
                    </div>
                  </div>

                  {errors.primaryCell && (
                    <p className="text-xs text-rose-500 mt-2 font-medium">{errors.primaryCell.message}</p>
                  )}

                  {/* Informational Closed Status Bar */}
                  <div className="mt-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>
                        Autres cellules (Événementiel & Compétition, Partenariats B2B) :
                      </span>
                    </div>
                    <span className="font-semibold text-slate-500 dark:text-slate-400 bg-slate-200/60 dark:bg-slate-800/60 px-2 py-0.5 rounded">
                      Inscriptions Clôturées
                    </span>
                  </div>
                </div>

                {/* Domain Pills */}
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-2.5">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-200">
                      Domaines d'Intérêt & Compétences Clés (
                      {watchPrimaryCell === 'Cellule Communication et Marketing'
                        ? 'Communication & Marketing'
                        : 'Tech & Innovation'}
                      ) <span className="text-[#F97316]">*</span>
                    </label>
                    <span className="text-[11px] font-medium text-slate-400">
                      Sélectionnez au moins une compétence
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {(watchPrimaryCell === 'Cellule Communication et Marketing'
                      ? COMM_INTEREST_DOMAINS
                      : TECH_INTEREST_DOMAINS
                    ).map((domain) => {
                      const isSelected = watchInterests.includes(domain);
                      const isComm = watchPrimaryCell === 'Cellule Communication et Marketing';
                      return (
                        <button
                          type="button"
                          key={domain}
                          onClick={() => toggleInterest(domain)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                            isSelected
                              ? isComm
                                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm'
                                : 'bg-gradient-to-r from-[#E06D24] to-[#F97316] text-white shadow-sm'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                          <span>{domain}</span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.interests && (
                    <p className="text-xs text-rose-500 mt-1.5 font-medium">{errors.interests.message}</p>
                  )}
                </div>
              </div>
            )}

            {/* ================= STEP 3: Motivation & Regulatory Commitment ================= */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#F97316]" />
                    <span>Étape 3 : Motivation & Engagement Formel</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Exprimez vos motivations pour rejoindre la{' '}
                    <strong className="text-slate-800 dark:text-slate-200">
                      {watchPrimaryCell}
                    </strong>{' '}
                    et validez l'engagement de temps requis par le règlement intérieur.
                  </p>
                </div>

                {/* Motivation Textarea */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-200">
                      Pourquoi souhaitez-vous rejoindre la{' '}
                      {watchPrimaryCell === 'Cellule Communication et Marketing'
                        ? 'Cellule Communication & Marketing'
                        : 'Cellule Tech & Innovation'}{' '}
                      d'APEX DIGITAL ? <span className="text-[#F97316]">*</span>
                    </label>
                    <span
                      className={`text-xs font-mono font-semibold ${
                        watchMotivation.length >= 50
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-slate-400'
                      }`}
                    >
                      {watchMotivation.length} / 50 min.
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    placeholder={
                      watchPrimaryCell === 'Cellule Communication et Marketing'
                        ? "Décrivez vos motivations, votre sensibilité créative, les outils de communication que vous maîtrisez (Figma, Photoshop, Première, Réseaux Sociaux...) et vos attentes pour faire rayonner APEX DIGITAL..."
                        : "Décrivez vos motivations, ce que vous attendez du club APEX DIGITAL et ce que vous comptez apporter aux projets HealthTech / GreenTech..."
                    }
                    {...register('motivation')}
                    className="w-full tech-input rounded-xl p-3.5 text-xs sm:text-sm"
                  ></textarea>
                  {errors.motivation && (
                    <p className="text-xs text-rose-500 mt-1">{errors.motivation.message}</p>
                  )}
                </div>

                {/* Past Experience */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                    Projets passés, réalisations ou compétences clés <span className="text-slate-400 font-normal">(Optionnel)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder={
                      watchPrimaryCell === 'Cellule Communication et Marketing'
                        ? "Créations graphiques antérieures, comptes réseaux sociaux gérés, tournages ou montages vidéo, portfolios visuels..."
                        : "Hackathons passés, projets académiques, compétences logicielles ou électroniques..."
                    }
                    {...register('pastExperience')}
                    className="w-full tech-input rounded-xl p-3.5 text-xs sm:text-sm"
                  ></textarea>
                </div>

                {/* Mandatory Checkbox: Article 19-bis */}
                <div className="p-4 rounded-xl bg-orange-500/5 dark:bg-orange-500/10 border border-orange-500/30">
                  <div className="flex items-start space-x-3">
                    <div className="pt-0.5">
                      <input
                        type="checkbox"
                        id="commitment"
                        {...register('commitmentArticle19')}
                        className="w-4 h-4 rounded border-slate-300 dark:border-slate-700 text-[#F97316] focus:ring-[#F97316] accent-[#F97316] cursor-pointer"
                      />
                    </div>
                    <label htmlFor="commitment" className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed cursor-pointer">
                      <strong className="text-[#F97316] font-bold block mb-0.5">
                        ENGAGEMENT FORMEL : ARTICLE 19-BIS
                      </strong>
                      « Conformément à l'Article 19-bis du Règlement Intérieur, je m'engage à consacrer au minimum 3 heures par semaine aux activités et projets de la communauté. »
                    </label>
                  </div>
                  {errors.commitmentArticle19 && (
                    <p className="text-xs text-rose-500 mt-2 font-semibold pl-7">
                      {errors.commitmentArticle19.message}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Red Error Alert Box above submit button for duplicates or server errors */}
            {errorMessage && (
              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs sm:text-sm flex items-start gap-3 mt-6 animate-in fade-in duration-200">
                <AlertCircle className="w-5 h-5 shrink-0 text-rose-500 mt-0.5" />
                <div>
                  <strong className="font-bold block mb-0.5">Attention :</strong>
                  <span>{errorMessage}</span>
                </div>
              </div>
            )}

            {/* Navigation Controls */}
            <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Précédent</span>
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E06D24] to-[#F97316] hover:from-[#F97316] hover:to-[#ea580c] transition-all shadow-md shadow-orange-500/20 flex items-center gap-1 cursor-pointer ml-auto"
                >
                  <span>Étape Suivante</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#E06D24] via-[#F97316] to-[#ea580c] hover:opacity-95 transition-all shadow-lg shadow-orange-500/30 flex items-center gap-2 cursor-pointer disabled:opacity-50 ml-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Transmission en cours...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-white" />
                      <span>Soumettre ma Candidature</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={successModalData.isOpen}
        onClose={() => setSuccessModalData((prev) => ({ ...prev, isOpen: false }))}
        candidateName={successModalData.candidateName}
        candidateId={successModalData.candidateId}
        primaryCell={successModalData.primaryCell}
      />
    </section>
  );
}
