import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-slate-900 dark:bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p class="text-sm">
          &copy; {{ currentYear }} Saida Moussa. Tous droits réservés.
        </p>
        <div class="flex items-center gap-6">
          <a
            href="mailto:saidamoussa&#64;example.com"
            class="text-sm hover:text-indigo-400 transition-colors"
            aria-label="Email"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/saida-moussa"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/saidamoussa"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm hover:text-indigo-400 transition-colors"
            aria-label="GitHub"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
}
