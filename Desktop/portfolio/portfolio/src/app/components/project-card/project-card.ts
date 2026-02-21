import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  template: `
    <article
      class="group rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div class="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-700">
        <img
          [src]="image()"
          [alt]="name()"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div class="p-5">
        <h3 class="text-xl font-semibold text-slate-800 dark:text-slate-100">{{ name() }}</h3>
        <p class="mt-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
          {{ description() }}
        </p>
        <div class="mt-4 flex flex-wrap gap-2">
          @for (tag of tags(); track tag) {
            <span
              class="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
            >
              {{ tag }}
            </span>
          }
        </div>
        @if (link()) {
          <a
            [href]="link()"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Voir le projet
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        }
      </div>
    </article>
  `,
})
export class ProjectCardComponent {
  name = input.required<string>();
  description = input.required<string>();
  image = input.required<string>();
  tags = input<string[]>([]);
  link = input<string>();
}
