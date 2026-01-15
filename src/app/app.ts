import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PortfolioComponent],
  template: `
    <app-portfolio></app-portfolio>
  `,
  styleUrl: './app.css',
  
})
export class App {
  protected readonly title = signal('portfolio');
}
