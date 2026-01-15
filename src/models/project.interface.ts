export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string; // URL de la captura del proyecto
  techStack: string[]; // Ej: ['Angular', 'Node.js', 'Firebase']
  demoUrl?: string; // Link al sitio en vivo
  repoUrl?: string; // Link a GitHub
}