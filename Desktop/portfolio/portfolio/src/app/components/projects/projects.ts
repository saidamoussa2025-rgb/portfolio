import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title';
import { ProjectCardComponent } from '../project-card/project-card';

const OTHER_PROJECTS = [
  {
    name: 'Hackathon Project',
    description: "Création d'un projet complet lors d'un hackathon en HTML et CSS. Conception UI/UX et développement front-end. Collaboration en équipe, gestion du temps.",
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop',
    tags: ['HTML', 'CSS', 'UI/UX', 'Travail d\'équipe'],
    link: undefined,
  },
  {
    name: 'Web Project – Cause Palestinienne',
    description: 'Développement d\'une page web complète avec HTML et CSS.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop',
    tags: ['HTML', 'CSS'],
    link: undefined,
  },
];

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionTitleComponent, ProjectCardComponent],
  template: `
    <section id="projects" class="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 scroll-mt-20">
      <div class="max-w-6xl mx-auto">
        <app-section-title
          title="Projets"
          subtitle="Sélection de réalisations et contributions."
        />

        <!-- Projet vedette : Luxe Wheels -->
        <div
          class="mt-12 rounded-3xl overflow-hidden bg-slate-900 dark:bg-slate-950 border border-amber-500/30 shadow-2xl shadow-amber-500/5 hover:shadow-amber-500/10 transition-all duration-500 group hover:border-amber-500/50"
        >
          <div class="grid md:grid-cols-2 gap-0">
            <div class="relative aspect-video md:aspect-auto md:min-h-[320px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop"
                alt="Luxe Wheels - Plateforme voitures de luxe"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <span
                class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/90 text-slate-900"
              >
                Vedette
              </span>
            </div>
            <div class="p-8 md:p-10 flex flex-col justify-center">
              <h3 class="text-2xl md:text-3xl font-bold text-white">Luxe Wheels</h3>
              <p class="mt-4 text-slate-400 leading-relaxed">
                Plateforme de présentation de voitures de luxe : catalogue, filtres, fiches détaillées
                et formulaire de demande de test drive ou réservation. Thème sombre premium avec
                accents dorés et design automobile luxe.
              </p>
              <ul class="mt-6 space-y-2 text-slate-400 text-sm">
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  Catalogue voitures avec cartes
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  Filtre par marque et prix
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  Page détails voiture
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  Formulaire demande test drive / réservation
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  Design responsive et animations
                </li>
              </ul>
              <div class="mt-8 flex flex-wrap gap-2">
                @for (tag of luxeWheelsTags; track tag) {
                  <span
                    class="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-amber-400 border border-amber-500/30"
                  >
                    {{ tag }}
                  </span>
                }
              </div>
            </div>
          </div>
        </div>

        <!-- Autres projets -->
        <div class="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (project of otherProjects; track project.name) {
            <app-project-card
              [name]="project.name"
              [description]="project.description"
              [image]="project.image"
              [tags]="project.tags"
              [link]="project.link ?? undefined"
            />
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  readonly luxeWheelsTags = ['Angular', 'TypeScript', 'Tailwind', 'Luxury UI', 'Responsive'];
  readonly otherProjects = OTHER_PROJECTS;
}
