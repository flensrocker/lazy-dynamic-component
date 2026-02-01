import { InjectionToken, Type } from '@angular/core';

export type WidgetDefinition = Readonly<{
  selector: string;
  title: string;
  // replace 'unknown' with a common base type every widget has to implement
  // with that you can enforce common inputs/outputs to hook up in the WidgetHost
  getComponentType: () => Promise<Type<unknown>>;
}>;

export const WidgetDefinition = new InjectionToken<WidgetDefinition>('WidgetDefinition');
