import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  template: `
    <h2 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
      {{ title() }}
    </h2>
    @if (subtitle()) {
      <p class="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl">{{ subtitle() }}</p>
    }
  `,
})
export class SectionTitleComponent {
  title = input.required<string>();
  subtitle = input<string>();
}
