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
import { CurrentTransitionService } from './services/view-transition.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions({
        onViewTransitionCreated: (info) => {
          const currentTransitionService = inject(CurrentTransitionService);
          currentTransitionService.currentTransition.set(info);
          info.transition.finished.finally(() => {
            currentTransitionService.currentTransition.set(null);
          });
        },
      }),
    ),
    provideClientHydration(),
  ],
};
