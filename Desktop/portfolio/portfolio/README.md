# Portfolio

Portfolio développeur — Saida Moussa (Développeuse Frontend Angular).  
Généré avec [Angular CLI](https://github.com/angular/angular-cli) 21 + Tailwind CSS.

## Prérequis

- Node.js 18+
- npm 9+

## Installation

**Important :** exécuter les commandes depuis le dossier du projet `portfolio` (là où se trouvent `package.json` et `angular.json`).

```bash
cd portfolio
npm install
```

## Démarrage (development server)

```bash
cd portfolio
ng serve
```

Ou avec le script npm :

```bash
npm start
```

Puis ouvrir **http://localhost:4200/** dans le navigateur.

## Dépannage

### Erreur « Cannot find module 'rxjs' » ou « ng serve not available outside a workspace »

- Vérifier que vous êtes bien dans le dossier **portfolio** (celui qui contient `package.json` et `angular.json`), pas dans le dossier parent.
- Réinstaller les dépendances :
  ```bash
  cd portfolio
  Remove-Item -Recurse -Force node_modules
  npm install
  ng serve
  ```
  (Sous PowerShell ; sous CMD : `rmdir /s /q node_modules` puis `npm install`.)

### Build

```bash
ng build
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
