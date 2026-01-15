import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../components/project-card.component';
import { Project } from '../../models/project.interface';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <header class="hero">
      <h1>Hola, soy <span class="highlight">Arthur</span></h1>
      <p class="subtitle">Desarrollador de Software</p>
    </header>

    <main class="container">
      <section id="projects">
        <h2>Mis Proyectos</h2>
        <div class="grid">
          @for (item of projects(); track item.id) {
            <app-project-card [project]="item"></app-project-card>
          }
        </div>
      </section>
    </main>

    <footer>
      <p>© 2025 Arthur</p>
    </footer>
  `,
  styles: [`
    :host { display: block; font-family: 'Segoe UI', sans-serif; }
    
    .hero {
      background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
      color: white;
      text-align: center;
      padding: 5rem 1rem;
    }
    h1 { font-size: 3rem; margin-bottom: 0.5rem; }
    .highlight { color: #536dfe; background: white; padding: 0 10px; border-radius: 4px; }
    .subtitle { font-size: 1.5rem; opacity: 0.9; }

    .container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
    h2 { text-align: center; font-size: 2rem; margin-bottom: 3rem; color: #333; }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    footer { text-align: center; padding: 2rem; background: #f5f5f5; margin-top: 4rem; }
  `]
})
export class PortfolioComponent {
  // Usamos Signals para mejor reactividad
  projects = signal<Project[]>([
    {
      id: 1,
      title: 'Zenki',
      description: 'Aplicación web de gestor de tareas personal con un asistente IA utilizando API de openAI.',
      imageUrl: 'https://i.imgur.com/9zEJkg7.jpeg', // Reemplaza con tus imágenes
      techStack: ['Angular', 'TypeScript', 'Amazon Web Services'],
      demoUrl: 'https://www.youtube.com/watch?v=h9nPMUcCpD8',
      repoUrl: 'https://github.com/ProyectoIntegrado2025/pp4'
    },
    {
      id: 2,
      title: 'Libro Bit',
      description: 'Sistema backend con Node que permite gestionar una biblioteca digital, administrando libros, autores, usuarios y préstamos.',
      imageUrl: 'https://i.imgur.com/94uT9Ul.jpeg',
      techStack: ['Node', 'SQL Server', 'Javascript'],
      repoUrl: 'https://github.com/MelanieZurdo/Backend_Grupo2'
    },
    {
      id: 3,
      title: 'AVerSiLLueve',
      description: 'Aplicación híbrida de clma que permite guardar ciudades favoritas y alertar lluvias en base a lo guardado',
      imageUrl: 'https://i.imgur.com/LdcldS9.png',
      techStack: ['Angular', 'Amazon Web services', 'Ionic'],
      repoUrl: 'https://github.com/BitKND/AVerSiLLueve/tree/develop'
    },
    {
      id: 4,
      title: '3dstore',
      description: 'Sistema backend con Java consistente en un e-commerce para la venta de impresoras 3D y accesorios.',
      imageUrl: 'https://i.imgur.com/Ee6wv5z.jpeg',
      techStack: ['Node', 'SQL Server', 'Javascript'],
      repoUrl: 'https://github.com/No-Country-simulation/s16-16-t-java-react'
    },
    {
      id: 5,
      title: 'Menu',
      description: 'Proyecto backend personal en Java consistente en un sistema de registro de menús para restaurantes.',
      imageUrl: 'https://i.imgur.com/4eUPOFH.png',
      techStack: ['Java', 'Springboot', 'OpenWeather API', 'MySQL'],
      repoUrl: 'https://github.com/arthurcp96/API-ABM-Service'
    }
  ]);
}