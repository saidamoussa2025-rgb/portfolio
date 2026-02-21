import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title';

const SKILLS = [
  'Angular',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Git',
  'GitHub',
  'Python',
  'C',
  'C++',
];

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionTitleComponent],
  template: `
    <section id="skills" class="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 scroll-mt-20">
      <div class="max-w-4xl mx-auto">
        <app-section-title
          title="Compétences"
          subtitle="Technologies et outils que j'utilise au quotidien."
        />
        <div class="mt-10 flex flex-wrap gap-3">
          @for (skill of skills; track skill) {
            <span
              class="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-200"
            >
              {{ skill }}
            </span>
          }
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  readonly skills = SKILLS;
}
