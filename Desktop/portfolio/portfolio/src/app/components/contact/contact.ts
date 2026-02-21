import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SectionTitleComponent } from '../section-title/section-title';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionTitleComponent, ReactiveFormsModule],
  template: `
    <section id="contact" class="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 scroll-mt-20">
      <div class="max-w-4xl mx-auto">
        <app-section-title
          title="Contact"
          subtitle="Une idée de projet ou une question ? Envoyez-moi un message."
        />

        <div class="mt-12 flex flex-wrap justify-center gap-6 md:gap-10">
          <a
            href="mailto:saidamoussa&#64;example.com"
            class="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-700 dark:hover:text-indigo-400 transition-all duration-200 shadow-sm"
          >
            <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/saida-moussa"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] transition-all duration-200 shadow-sm"
          >
            <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/saidamoussa"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-800 dark:hover:bg-slate-700 hover:text-white transition-all duration-200 shadow-sm"
          >
            <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>

        <form
          [formGroup]="contactForm"
          (ngSubmit)="onSubmit()"
          class="mt-12 max-w-xl mx-auto text-left"
        >
          <div class="space-y-5">
            <div>
              <label for="name" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Nom
              </label>
              <input
                id="name"
                type="text"
                formControlName="name"
                class="w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-colors"
                placeholder="Votre nom"
              />
              @if (contactForm.get('name')?.invalid && contactForm.get('name')?.touched) {
                <p class="mt-1 text-sm text-red-600 dark:text-red-400">
                  Le nom est requis (min. 2 caractères).
                </p>
              }
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                formControlName="email"
                class="w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-colors"
                placeholder="votre&#64;email.com"
              />
              @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
                <p class="mt-1 text-sm text-red-600 dark:text-red-400">
                  Entrez une adresse email valide.
                </p>
              }
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                formControlName="message"
                rows="4"
                class="w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-colors resize-y"
                placeholder="Votre message..."
              ></textarea>
              @if (contactForm.get('message')?.invalid && contactForm.get('message')?.touched) {
                <p class="mt-1 text-sm text-red-600 dark:text-red-400">
                  Le message est requis (min. 10 caractères).
                </p>
              }
            </div>
            @if (submitSuccess()) {
              <p class="text-sm text-green-600 dark:text-green-400 font-medium">
                Message envoyé avec succès. Je vous recontacterai rapidement.
              </p>
            }
            <button
              type="submit"
              [disabled]="contactForm.invalid || submitSuccess()"
              class="w-full sm:w-auto px-8 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg hover:shadow-xl"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  `,
})
export class ContactComponent {
  contactForm: FormGroup;
  submitSuccess = signal(false);

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) return;
    this.contactForm.markAllAsTouched();
    this.submitSuccess.set(true);
    this.contactForm.reset();
  }
}
