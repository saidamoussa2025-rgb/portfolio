import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section
      id="hero"
      class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950"
    >
      <div class="max-w-4xl mx-auto text-center">
        <div
          class="inline-block rounded-2xl overflow-hidden ring-4 ring-white dark:ring-slate-800 shadow-2xl mb-8 animate-fade-in"
        >
          <img
            src="assets/Gemini_Generated_Image_osajq1osajq1osaj.png"
            alt="Saida Moussa"
            class="w-40 h-40 md:w-52 md:h-52 object-cover"
            width="208"
            height="208"
          />
        </div>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight animate-slide-up">
          Saida Moussa
        </h1>
        <p class="mt-4 text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 font-medium animate-slide-up animation-delay-100">
          Développeuse Frontend Angular
        </p>
        <p class="mt-6 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg animate-slide-up animation-delay-200">
          Développeuse Angular spécialisée en interfaces modernes.
        </p>
        <div class="mt-10 flex flex-wrap justify-center gap-4 animate-slide-up animation-delay-300">
          <a
            href="#projects"
            (click)="scrollTo($event)"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Voir Projets
          </a>
          <a
            href="#contact"
            (click)="scrollTo($event)"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Contact
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  scrollTo(event: Event): void {
    event.preventDefault();
    const target = (event.currentTarget as HTMLAnchorElement).getAttribute('href');
    if (target) {
      const id = target.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
