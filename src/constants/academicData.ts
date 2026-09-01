export interface SchoolData {
  id: string;
  name: string;
  levels: {
    [levelKey: string]: string[];
  };
}

export const ACADEMIC_PROGRAMS: Record<string, SchoolData> = {
  sante: {
    id: "sante",
    name: "Suptech Santé",
    levels: {
      "Bac / Bac 2026": [
        "Classes préparatoires intégrées",
        "Licence en Maintenance Médicale (L2M)",
        "Licence en Génie Industriel et Logistique Hospitalière (LGILH)",
        "Licence en Informatique Décisionnelle et e-Santé (LIDe-S)",
        "Licence en Sciences de Gestion (LSG)",
        "Licence en Techniques de Laboratoires de Biologie Médicale (LTech-Labo)",
        "Licence Infirmier Polyvalent (LIP)",
        "Licence Infirmier en Anesthésie et Réanimation (LIAR)",
        "Licence Infirmier en Instrumentalisation de Bloc Opératoire (L2IBO)",
        "Licence en Management et Marketing Digital du Sport et Santé (L2MD2S)",
        "Licence en Ingénierie et fabrication des dispositifs médicaux",
        "Licence en Management et Business International du Sport (LMBS)"
      ],
      "Bac + 2 (Passerelle / Prépa / DUT / BTS / DEUG)": [
        "Licence en Maintenance Médicale (L2M)",
        "Licence en Génie Industriel et Logistique Hospitalière (LGILH)",
        "Licence en Informatique Décisionnelle et e-Santé (LIDe-S)",
        "Licence en Sciences de Gestion (LSG)",
        "Licence en Techniques de Laboratoires de Biologie Médicale (LTech-Labo)",
        "Licence Infirmier Polyvalent (LIP)",
        "Licence Infirmier en Anesthésie et Réanimation (LIAR)",
        "Licence Infirmier en Instrumentalisation de Bloc Opératoire (L2IBO)",
        "Licence en Management et Marketing Digital du Sport et Santé (L2MD2S)",
        "Licence en Ingénierie et fabrication des dispositifs médicaux",
        "Licence en Management et Business International du Sport (LMBS)",
        "Génie Digital et Intelligence Artificielle en Santé (GDIAS)",
        "Génie Biomédical",
        "Génie Biotechnologie",
        "Génie Industriel des Industries Cosmétique et Pharmaceutique"
      ],
      "Bac + 3 (Licence / Bachelor)": [
        "Génie Digital et Intelligence Artificielle en Santé (GDIAS)",
        "Génie Biomédical",
        "Génie Biotechnologie",
        "Génie Industriel des Industries Cosmétique et Pharmaceutique",
        "Master en dispositifs médicaux et affaires réglementaires",
        "Master en Maintenance et Génie biomédical",
        "Master en entrepreneuriat et Management Technologique",
        "Master en pratique infirmière avancée",
        "Master en infirmière avancée en réanimation et soins intensifs"
      ]
    }
  },
  environnement: {
    id: "environnement",
    name: "Suptech Environnement",
    levels: {
      "Bac / Bac 2026": [
        "Classes préparatoires intégrées",
        "Licence Génie de l'Assainissement et des Systèmes de Traitement des Eaux",
        "Licence Qualité, Hygiène, Sécurité et Environnement (QHSE)",
        "Licence Technologie Des Energies Renouvelables",
        "Licence Gestion Intégrée du Littoral et Valorisation Halieutique",
        "Licence Métiers Subaquatiques et Plongée Sous-Marine : Plongeur Inspecteur",
        "Licence Métiers Subaquatiques et Plongée Sous-Marine : Travaux Public, Ouvrages",
        "Licence en Sécurité alimentaire et santé globale",
        "Licence en Génie plasturgie : Revalorisation & recyclage"
      ],
      "Bac + 2 (Passerelle / Prépa / DUT / BTS / DEUG)": [
        "Licence Génie de l'Assainissement et des Systèmes de Traitement des Eaux",
        "Licence Qualité, Hygiène, Sécurité et Environnement (QHSE)",
        "Licence Technologie Des Energies Renouvelables",
        "Licence Gestion Intégrée du Littoral et Valorisation Halieutique",
        "Licence Métiers Subaquatiques et Plongée Sous-Marine : Plongeur Inspecteur",
        "Licence Métiers Subaquatiques et Plongée Sous-Marine : Travaux Public, Ouvrages",
        "Licence en Sécurité alimentaire et santé globale",
        "Licence en Génie plasturgie : Revalorisation & recyclage",
        "Génie de l'Eau et de l'Environnement",
        "Génie Digital des Systèmes Énergétiques"
      ],
      "Bac + 3 (Licence / Bachelor)": [
        "Génie de l'Eau et de l'Environnement",
        "Génie Digital des Systèmes Énergétiques",
        "Master en Sciences et ingénierie de l'eau, de l'agriculture de précision et l'environnement",
        "Master en Ingénierie et management des systèmes Industriels"
      ]
    }
  },
  info: {
    id: "info",
    name: "Suptech Sciences Informatiques",
    levels: {
      "Bac / Bac 2026": [
        "Classes préparatoires intégrées",
        "Licence en transformation digitale et intelligence artificielle (TDIA)",
        "Licence en cybersécurité",
        "Licence en Méthodes Informatiques Appliquées à la Gestion des Entreprises (MIAGE)"
      ],
      "Bac + 2 (Passerelle / Prépa / DUT / BTS / DEUG)": [
        "Licence en transformation digitale et intelligence artificielle (TDIA)",
        "Licence en cybersécurité",
        "Licence en Méthodes Informatiques Appliquées à la Gestion des Entreprises (MIAGE)",
        "Génie Informatique : Systèmes d'information",
        "Génie Informatique : Cybersécurité et Cyberdéfense"
      ],
      "Bac + 3 (Licence / Bachelor)": [
        "Génie Informatique : Systèmes d'information",
        "Génie Informatique : Cybersécurité et Cyberdéfense",
        "Master en Intelligence Artificielle et Sciences de Données",
        "Master en Cybersécurité"
      ]
    }
  }
};

export const CURRENT_YEAR_OPTIONS = [
  "1ère Année",
  "2ème Année",
  "3ème Année",
  "4ème Année (Master 1 / 2ème Année Cycle Ingénieur)",
  "5ème Année (Master 2 / 3ème Année Cycle Ingénieur)",
] as const;

export const AGE_OPTIONS = Array.from({ length: 19 }, (_, i) => `${17 + i} ans`);
