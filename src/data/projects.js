export const projects = [
  {
    id: 1,
    title: "RDV Médecin- Gestion de rendez-vous médicaux",
    shortDesc: "Application de gestion de rendez-vous pour médecins permettant aux patients de prendre rendez-vous en ligne.",
    longDesc: "Application Java complète pour la gestion des rendez-vous médicaux. Interface intuitive pour les médecins et les patients. Gestion des plannings, notifications et historiques.",
    tech: ["Java", "JavaFX", "MySQL", "JDBC"],
    github: "https://github.com/mitiarj05/rdv_Medecin",
    demo: "https://rdv-medical-urrr.onrender.com",
    category: "Healthcare",
    type: "Académique",
    year: 2026,
    image: "/images/projects/RDV.png",
    features: [
      "Gestion des patients et médecins",
      "Prise de rendez-vous en ligne",
      "Calendrier interactif",
      "Notifications par email",
      "Historique des consultations"
    ]
  },
  {
    id: 2,
    title: "Gestion de bibliothèque - Système de bibliothèque",
    shortDesc: "Système complet de gestion de bibliothèque pour la gestion des livres, membres et emprunts.",
    longDesc: "Application Java avec interface Swing et base de données MySQL. Permet la gestion complète d'une bibliothèque : livres, adhérents, emprunts et retours.",
    tech: ["Java", "Swing", "MySQL", "JDBC"],
    github: "https://github.com/mitiarj05/GestionBibliotheque",
    demo: null,
    category: "Education",
    type: "Stage",
    year: 2025,
    image: "/images/projects/GestionBibliotheque.png",
    features: [
      "Gestion des livres et catégories",
      "Gestion des membres",
      "Système d'emprunt et retour",
      "Calcul automatique des pénalités",
      "Recherche avancée"
    ]
  },
  {
    id: 3,
    title: "Gestion des congés",
    shortDesc: "Application web de gestion des congés et permissions pour entreprise privée.",
    longDesc: "Application web full-stack pour la gestion des demandes de congés. Interface pour employés et administrateurs avec workflow de validation.",
    tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/mitiarj05/gestion-conges",
    demo: "https://gestion-conges-frontend.onrender.com",
    category: "HR Tech",
    type: "Académique",
    year: 2026,
    image: "/images/projects/conge.png",
    features: [
      "Demande de congés en ligne",
      "Workflow de validation",
      "Suivi du solde de congés",
      "Dashboard administrateur",
      "Notifications en temps réel"
    ]
  },
  {
    id: 4,
    title: "Vente de Vêtements - E-commerce",
    shortDesc: "Application de vente de vêtements en ligne avec gestion de panier et paiement.",
    longDesc: "Application complète de e-commerce pour la vente de vêtements. Catalogue produits, panier, système de commande et interface administrateur.",
    tech: ["Java", "C#", ".NET", "SQL Server"],
    github: "https://github.com/mitiarj05/VenteDeVetement",
    demo: null,
    category: "E-commerce",
    type: "Académique",
    year: 2025,
    //image: "/images/projects/vente-vetement.png",
    features: [
      "Catalogue de produits",
      "Panier d'achat",
      "Système de commande",
      "Interface administrateur",
      "Gestion des stocks"
    ]
  },
  {
    id: 5,
    title: "Gestion de notes étudiantes",
    shortDesc: "Application de gestion de notes pour étudiants avec suivi des performances et tableaux de bord.",
    longDesc: "Application web développée en collaboration pour la gestion des notes d'étudiants. Permet aux professeurs de saisir les notes et aux étudiants de consulter leurs résultats avec des statistiques détaillées.",
    tech: ["JavaScript", "React", "Node.js", "MongoDB"],
    github: "https://github.com/mitiarj05/note_Etudiant",
    demo: null,
    category: "Education",
    type: "Collaboratif",
    year: 2026,
    image: "/images/projects/Note.png",
    features: [
      "Saisie des notes par les professeurs",
      "Consultation des résultats par les étudiants",
      "Tableau de bord avec statistiques",
      "Calcul automatique des moyennes",
      "Génération de relevés de notes"
    ]
  },
  {
    id: 6,
    title: "Gestion vente de voiture - Système de vente de voitures",
    shortDesc: "Application de gestion des ventes de voitures avec gestion des clients, véhicules et transactions.",
    longDesc: "Application Java développée en L2 pour la gestion complète d'un parc automobile. Permet de gérer les clients, les voitures, les ventes et les contrôleurs.",
    tech: ["Java", "Spring Boot", "MySQL", "Hibernate"],
    github: "https://github.com/mitiarj05/GestionVenteVoiture",
    demo: null,
    category: "Automobile",
    type: "Académique",
    year: 2025,
    //image: "/images/projects/voiture.png",
    features: [
      "Gestion des clients",
      "Gestion des véhicules",
      "Gestion des ventes",
      "Gestion des contrôleurs",
      "Statistiques des ventes"
    ]
  }
];

export const skills = [
  { name: "Java", level: "Advanced", progress: 85, description: "JavaFX, Swing, JDBC" },
  { name: "JavaScript", level: "Intermediate", progress: 70, description: "ES6, Node.js, Express" },
  { name: "Node.js", level: "Intermediate", progress: 65, description: "API REST, MongoDB" },
  { name: "MySQL", level: "Advanced", progress: 80, description: "Requêtes, JDBC" },
  { name: "MongoDB", level: "Intermediate", progress: 60, description: "Modélisation, Aggrégation" },
  { name: "Git", level: "Advanced", progress: 80, description: "GitHub, versioning" },
  { name: "React", level: "Intermediate", progress: 65, description: "Hooks, Components" },
  { name: "Express", level: "Intermediate", progress: 60, description: "API, Middleware" },
  { name: "HTML/CSS", level: "Advanced", progress: 85, description: "Responsive, Flexbox" },
  { name: "C#", level: "Beginner", progress: 50, description: ".NET, SQL Server" },
  { name: "Spring Boot", level: "Intermediate", progress: 60, description: "API REST, Hibernate" }
];

export const contactInfo = {
  email: "mitiarj05@gmail.com",
  phone: [
    { number: "0328725411", provider: "Telma" },
    { number: "0389815487", provider: "Orange" }
  ],
  location: "Fianarantsoa, Madagascar"
};

export const socialLinks = {
  github: "https://github.com/mitiarj05",
  linkedin: "https://www.linkedin.com/in/mitia-rj05",
  facebook: "https://facebook.com/rj.mitia",
  email: "mitiarj05@gmail.com"
};