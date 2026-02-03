import { computed, inject, Injectable, Signal } from '@angular/core';
import { injectMulti } from '../utils';
import { WidgetDefinition } from './widget-definition';

@Injectable()
export class WidgetDefinitionClient {
  readonly #widgetDefinitions = injectMulti(WidgetDefinition);
  readonly #widgetDefinitionMap = computed(() => {
    return this.#widgetDefinitions.reduce(
      (map, def) => map.set(def.selector, def),
      new Map<string, WidgetDefinition>(),
    );
  });

  get(selectors: Signal<readonly string[]>): Signal<readonly WidgetDefinition[]> {
    return computed(() => {
      const definitionMap = this.#widgetDefinitionMap();

      return selectors()
        .map((selector) => definitionMap.get(selector))
        .filter((def) => def != null);
    });
  }
}

export const provideWidgetDefinitionClient = () => [WidgetDefinitionClient];

export const injectWidgetDefinitions = (selectors: Signal<readonly string[]>) =>
  inject(WidgetDefinitionClient).get(selectors);
