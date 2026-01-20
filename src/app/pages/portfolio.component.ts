import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../components/project-card.component';
import { Project } from '../../models/project.interface';
import { ContactComponent } from '../components/contact-Component';
import { ThemeService } from '../services/theme-service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, ContactComponent],
  template: `

  <nav class="navbar">
      <div class="nav-content">
        <span class="logo">Arthur</span>
        <ul class="nav-links">
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>

          <li>
            <button class="theme-btn" (click)="themeService.toggleTheme()" [attr.aria-label]="'Cambiar tema'">
              @if (themeService.darkMode()) {
                <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              } 
              @else {
                <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              }
            </button>
          </li>

        </ul>
      </div>
    </nav>

    <header class="hero">
      <div class="container hero-content">
        <h1>Hola, soy <span class="highlight">Arthur</span></h1>
        
        <p class="subtitle">
          Soy un Técnico Superior en Desarrollo de Software, recientemente graduado y en búsqueda de mi primera experiencia laboral. 
          Aquí comparto proyectos que reflejan mi enfoque en calidad y aprendizaje continuo.
        </p>
        
        <a href="#projects" class="cta-button">Ver mi trabajo</a>
      </div>
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

    <app-contact></app-contact>

    <footer class="footer">
      <p>© 2023 - 2025 Arthur</p>
    </footer>
  `,
  styles: [`
    :host { display: block; font-family: 'Segoe UI', sans-serif; }
    
    .hero {
      background-color: var(--bg-color); color: var(--text-secondary);
      padding: 5rem 0;
      display: flex;
      justify-content: center;
      
          
    }

    .footer {background-color: var(--bg-color); color: var(--text-secondary); }

    .hero-content {
      text-align: left;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .subtitle {
      font-size: 1.5rem;
      opacity: 0.9;
      max-width: 800px; /* Opcional: Evita que las líneas sean eternas */
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    h1 { font-size: 3rem; margin-bottom: 0.5rem; }
    .highlight { color: var(--text-main); background: white; padding: 0 10px; border-radius: 4px; }

    

    .container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
    h2 { text-align: center; font-size: 2rem; margin-bottom: 3rem; color: color: var(--text-main); }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    footer { text-align: center; padding: 2rem; background: #f5f5f5; margin-top: 4rem; }

    .navbar {
      background: var(--nav-bg); 
      padding: 1rem 0;
      position: sticky; /* Se queda pegado arriba al hacer scroll */
      top: 0;
      z-index: 1000;
      backdrop-filter: blur(5px); /* Efecto vidrio borroso */
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      
    }

    .nav-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
    }

    .logo {
      color: white;
      font-weight: bold;
      font-size: 1.2rem;
    }

    .nav-links {
      list-style: none;
      display: flex;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }

    .nav-links a {
      color: var(--nav-text);
      text-decoration: none;
      font-weight: 500;
      opacity: 0.8;
      transition: opacity 0.2s;
    }

    .nav-links a:hover {
      opacity: 1;
    }

    /* Estilo para el botón del Hero */
    .cta-button {
      display: inline-block;
      margin-top: 2rem;
      padding: 0.8rem 2rem;
      background: var(--nav-bg);
      color: var(--nav-text);
      text-decoration: none;
      border-radius: 50px;
      font-weight: bold;
      transition: transform 0.2s;
    }
    .cta-button:hover {
      transform: scale(1.05);
    }

    /* Estilo boton dark theme */

    .theme-btn {
      background: transparent;
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--nav-text);
      transition: all 0.3s ease;
    }
    
    .theme-btn:hover {
      background: rgba(255,255,255,0.1);
      transform: rotate(15deg);
    }

    .theme-btn .icon {
      width: 20px;
      height: 20px;
    }
  `]
})
export class PortfolioComponent {
  themeService = inject(ThemeService);
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