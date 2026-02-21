import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionTitleComponent],
  template: `
    <section id="experience" class="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 scroll-mt-20">
      <div class="max-w-4xl mx-auto">
        <app-section-title
          title="Expérience"
          subtitle="Parcours professionnel et missions réalisées."
        />
        <div class="mt-10 space-y-8">
          <div
            class="relative pl-8 pb-8 border-l-2 border-indigo-200 dark:border-indigo-900 last:pb-0 last:border-l-0"
          >
            <div class="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-white dark:ring-slate-950"></div>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 class="text-xl font-semibold text-slate-800 dark:text-slate-100">Angular Frontend Developer Intern</h3>
              <span class="text-sm text-slate-500 dark:text-slate-400">Stage</span>
            </div>
            <ul class="mt-4 space-y-2 text-slate-600 dark:text-slate-400 list-none">
              <li class="flex items-start gap-2">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                Création de composants UI
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                Correction de bugs
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                Optimisation des performances
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                Travail en méthode agile
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ExperienceComponent {}