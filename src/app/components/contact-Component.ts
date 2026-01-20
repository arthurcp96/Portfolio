import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="contact-section">
      <div class="container">
        <h2>Contacto</h2>
        <p class="description">
          
        </p>

        <div class="social-links">
          <a href="https://www.linkedin.com/in/arthur-ca%C3%B1ari-07b1871b2/" target="_blank" class="social-btn linkedin">
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>LinkedIn</span>
          </a>

          <a href="https://github.com/arthurcp96" target="_blank" class="social-btn github">
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>

          <a href="mailto:arthurcp96@gmail.com" class="social-btn email">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
               <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
               <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      background-color: var(--bg-color); /* Ligeramente diferente al fondo general para separar visualmente */
      padding: 5rem 1rem;
      text-align: center;
      border-top: 1px solid var(--border-color);
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      
    }

    h2 {
      font-size: 2.0rem;
      color: var(--text-main);
      margin-bottom: 1rem;
    }

    .description {
      color: var(--text-secondary);
      font-size: 1.1rem;
      margin-bottom: 3rem;
      line-height: 1.6;
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      flex-wrap: wrap;
    }

    .social-btn {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.8rem 1.5rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      color: white;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .social-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0,0,0,0.15);
    }

    .icon {
      width: 24px;
      height: 24px;
    }

    /* Colores de marca */
    .linkedin { background-color: #0077b5; }
    .linkedin:hover { background-color: #005582; }

    .github { background-color: #333; }
    .github:hover { background-color: #000; }

    .email { background-color: #ea4335; } /* Color estilo Gmail */
    .email:hover { background-color: #c5221f; }
  `]
})
export class ContactComponent { }