import { InjectionToken, makeEnvironmentProviders, Type } from '@angular/core';

export type WidgetDefinition = Readonly<{
  selector: string;
  title: string;
  // this is the key: don't couple your definition at compile time to the component, make it a "lazy function"
  // you can replace `unknown` with a common base type every widget has to implement
  // with that you can enforce common inputs/outputs to hook up in the WidgetHost
  // similar to `loadComponent` on a route
  getComponentType: () => Promise<Type<unknown>>;
}>;

export const WidgetDefinition = new InjectionToken<WidgetDefinition>('WidgetDefinition');

export const createWidgetProvider =
  <T extends WidgetDefinition>(definition: T) =>
  () =>
    makeEnvironmentProviders([
      {
        provide: WidgetDefinition,
        multi: true,
        useValue: definition,
      },
    ]);
