import {
  ApplicationConfig,
  inject,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  Router,
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions({
        onViewTransitionCreated: (info) => {
          const router = inject(Router);
          const fromPath = router.url;
          const toPath = router.getCurrentNavigation().finalUrl.toString();

          const  cards = document.querySelectorAll('.card')
            .forEach((card) => card.classList.remove('with-transition'));


          let target;
          if (toPath === '/') {
            target = document.querySelector(`a[href="${fromPath}"]`);
          } else {
            target = document.querySelector(`a[href="${toPath}"]`);
          }

          if (target) {
            target.classList.add('with-transition');
          }
        },
      }),
    ),
    provideClientHydration(),
  ],
};
