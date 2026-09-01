import { z } from 'zod';
import {
  SchoolData,
  ACADEMIC_PROGRAMS,
  CURRENT_YEAR_OPTIONS,
  AGE_OPTIONS,
} from '@/constants/academicData';

export type { SchoolData };
export { ACADEMIC_PROGRAMS, CURRENT_YEAR_OPTIONS, AGE_OPTIONS };

export const recruitmentFormSchema = z.object({
  // Step 1: Personal & Academic Info
  fullName: z
    .string()
    .min(3, 'Veuillez saisir votre nom complet (minimum 3 caractères)'),
  email: z
    .string()
    .email('Adresse email invalide')
    .min(5, "L'email est obligatoire"),
  whatsapp: z
    .string()
    .min(8, 'Numéro WhatsApp valide obligatoire (ex: +212600000000)'),
  age: z.string().min(1, 'Veuillez sélectionner votre âge'),
  school: z.string().min(1, 'Veuillez sélectionner votre établissement'),
  accessLevel: z.string().min(1, "Veuillez sélectionner votre niveau d'accès"),
  filiere: z.string().min(1, 'Veuillez sélectionner votre filière'),
  currentYear: z.string().min(1, "Veuillez sélectionner votre année d'étude actuelle"),
  portfolioUrl: z
    .string()
    .url('Veuillez fournir une URL valide (ex: https://github.com/username ou LinkedIn)')
    .optional()
    .or(z.literal('')),

  // Step 2: Technical Interests & Skills (Locked to Cellule Tech & Innovation)
  interests: z
    .array(z.string())
    .min(1, "Veuillez sélectionner au moins un domaine d'intérêt ou compétence"),

  // Step 3: Motivation & Regulatory Commitment
  motivation: z
    .string()
    .min(50, 'Votre motivation doit comporter au moins 50 caractères pour être étudiée par la Cellule RH'),
  pastExperience: z.string().optional(),
  commitmentArticle19: z
    .boolean()
    .refine((val) => val === true, {
      message: 'L\'engagement formel de 3 heures par semaine selon l\'Article 19-bis est obligatoire',
    }),
});

export type RecruitmentFormData = z.infer<typeof recruitmentFormSchema>;
