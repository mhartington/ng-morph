import {
  ApplicationConfig,
  inject,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
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
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
      withComponentInputBinding(),
      withViewTransitions({
        skipInitialTransition: true,
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
