import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideExample1Widget, provideExample2Widget } from './widgets/definitions';
import { provideWidgetDefinitionClient } from './widget-definition';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    // provide all possible definitions of widget in DI - they should be small
    // of course you can scope them to a route etc.
    provideExample1Widget(),
    provideExample2Widget(),
    provideWidgetDefinitionClient(),
  ],
};
