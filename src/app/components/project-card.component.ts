import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.interface';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-image">
        @if (project.imageUrl && project.imageUrl !== '') {
          <img [src]="project.imageUrl" [alt]="project.title" loading="lazy">
        }
      </div>
      <div class="card-content">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        
        <div class="tags">
          @for (tech of project.techStack; track tech) {
            <span class="tag">{{ tech }}</span>
          }
        </div>

        <div class="actions">
          @if (project.repoUrl) {
            <a [href]="project.repoUrl" target="_blank" class="btn secondary">GitHub</a>
          }
          @if (project.demoUrl) {
            <a [href]="project.demoUrl" target="_blank" class="btn primary">Demo</a>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      background: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.2s, box-shadow 0.2s;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px rgba(0,0,0,0.15);
    }
    .card-image img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .card-content {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    h3 { margin: 0 0 0.5rem; color: #333; }
    p { color: #666; font-size: 0.95rem; line-height: 1.5; flex-grow: 1; }
    
    .tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 1rem 0; }
    .tag {
      background: #f0f0f0; color: #555;
      padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.8rem; font-weight: 500;
    }

    .actions { display: flex; gap: 1rem; margin-top: auto; }
    .btn {
      padding: 0.5rem 1rem; border-radius: 6px; text-decoration: none; font-weight: 600; text-align: center; flex: 1;
    }
    .primary { background: #3f51b5; color: white; }
    .secondary { background: #e0e0e0; color: #333; }
  `]
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}