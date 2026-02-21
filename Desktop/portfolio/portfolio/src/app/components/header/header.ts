import { Component, signal, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';

const NAV_LINKS = [
  { label: 'À propos', id: 'about' },
  { label: 'Compétences', id: 'skills' },
  { label: 'Expérience', id: 'experience' },
  { label: 'Projets', id: 'projects' },
  { label: 'Contact', id: 'contact' },
] as const;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [class]="scrolled() ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur shadow-sm' : 'bg-transparent'"
    >
      <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 md:h-20">
          <a
            href="#hero"
            (click)="scrollTo($event, 'hero')"
            class="text-lg font-bold text-slate-800 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            SM
          </a>
          <button
            type="button"
            class="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            (click)="menuOpen.set(!menuOpen())"
            aria-label="Toggle menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              @if (menuOpen()) {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              } @else {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
          <div
            class="hidden md:flex items-center gap-8 md:flex-row flex-col absolute md:relative top-16 left-4 right-4 md:top-0 md:left-0 md:right-0 py-4 md:py-0 bg-white dark:bg-slate-900 md:bg-transparent rounded-xl md:rounded-none shadow-lg md:shadow-none"
            [class.flex]="menuOpen()"
            [class.hidden]="!menuOpen()"
          >
            @for (link of navLinks; track link.id) {
              <a
                [href]="'#' + link.id"
                (click)="scrollTo($event, link.id); menuOpen.set(false)"
                class="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
              >
                {{ link.label }}
              </a>
            }
          </div>
        </div>
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  readonly navLinks = NAV_LINKS;
  scrolled = signal(false);
  menuOpen = signal(false);

  constructor() {
    afterNextRender(() => {
      window.addEventListener('scroll', () => this.scrolled.set(window.scrollY > 40));
    });
  }

  scrollTo(event: Event, id: string): void {
    event.preventDefault();
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
