import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionTitleComponent],
  template: `
    <section id="about" class="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 scroll-mt-20">
      <div class="max-w-4xl mx-auto">
        <app-section-title
          title="À propos"
          subtitle="Un court résumé de mon parcours et de mes centres d'intérêt."
        />
        <div class="mt-10 prose prose-slate dark:prose-invert max-w-none">
          <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            Développeuse frontend Angular passionnée par les interfaces modernes, la performance
            et l'expérience utilisateur (UX). Je conçois des applications web réactives et
            accessibles en m'appuyant sur Angular, TypeScript et les bonnes pratiques du front-end.
          </p>
          <p class="mt-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            J'aime transformer des besoins complexes en interfaces claires et agréables à utiliser,
            et je reste à l'écoute des évolutions du secteur pour continuer à progresser et à
            livrer un code maintenable et de qualité.
          </p>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {}
