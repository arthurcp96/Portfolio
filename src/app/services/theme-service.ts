import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  darkMode = signal<boolean>(false);
  
  // 1. Inyectamos el identificador de la plataforma
  private platformId = inject(PLATFORM_ID);

  constructor() {
    // 2. Envolvemos la lógica inicial en un chequeo
    // "Solo ejecuta esto si es un navegador (Browser)"
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        this.darkMode.set(true);
      }
    }

    effect(() => {
      // 3. También protegemos el efecto para que no falle en el servidor
      if (isPlatformBrowser(this.platformId)) {
        if (this.darkMode()) {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
        }
      }
    });
  }

  toggleTheme() {
    this.darkMode.update(val => !val);
  }
}