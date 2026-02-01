import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { injectMulti } from '../utils';
import { WidgetDefinition } from '../widget-definition';
import { WidgetHost } from './widget-host';

@Component({
  selector: 'ldc-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [WidgetHost],
  template: `<h1>Dashboard</h1>
    @for (widget of widgets(); track $index) {
      <ldc-widget-host [definition]="widget" />
    }`,
})
export class Dashboard {
  readonly #widgetDefinitions: readonly WidgetDefinition[] = injectMulti(WidgetDefinition);
  readonly #widgetDefinitionMap = computed(() => {
    return this.#widgetDefinitions.reduce(
      (map, def) => map.set(def.selector, def),
      new Map<string, WidgetDefinition>(),
    );
  });

  // should be an input/resource whatever...
  readonly #widgetSelectors = computed(() => ['example-1-widget', 'example-2-widget'] as const);

  protected readonly widgets = computed(() => {
    const definitionMap = this.#widgetDefinitionMap();
    const selectors = this.#widgetSelectors();

    return selectors.map((selector) => definitionMap.get(selector)).filter((def) => def != null);
  });
}
