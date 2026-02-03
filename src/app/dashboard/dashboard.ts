import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { injectWidgetDefinitions } from '../widget-definition';
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
  // should be an input/resource whatever...
  readonly #widgetSelectors = computed(() => ['example-1-widget', 'example-2-widget'] as const);

  protected readonly widgets = injectWidgetDefinitions(this.#widgetSelectors);
}
