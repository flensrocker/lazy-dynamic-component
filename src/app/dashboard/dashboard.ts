import { ChangeDetectionStrategy, Component, computed, linkedSignal, signal } from '@angular/core';

import { injectWidgetDefinitions } from '../widget-definition';
import { WidgetHost } from './widget-host';

@Component({
  selector: 'ldc-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [WidgetHost],
  template: `<h1>Dashboard</h1>

    <select #configSelector (change)="setOption(configSelector.selectedIndex)">
      @for (option of configs(); track $index) {
        <option [value]="option.value">{{ option.label }}</option>
      }
    </select>

    @for (widget of widgets(); track $index) {
      <ldc-widget-host [definition]="widget" />
    }`,
})
export class Dashboard {
  protected readonly configs = computed(() => [
    { label: 'widget 1', value: ['example-1-widget'] },
    { label: 'widget 2', value: ['example-2-widget'] },
    { label: 'widgets 1, 2', value: ['example-1-widget', 'example-2-widget'] },
    {
      label: 'widgets 1, 2, 1',
      value: ['example-1-widget', 'example-2-widget', 'example-1-widget'],
    },
    {
      label: 'widgets 2, 1, 2',
      value: ['example-2-widget', 'example-1-widget', 'example-2-widget'],
    },
    { label: 'no widgets', value: [] },
  ]);

  // can be an input, resource whatever... but Signal ofc!
  protected readonly selectedWidgets = linkedSignal({
    source: this.configs,
    computation: (source) => (source.length === 0 ? [] : source[0].value),
  });

  protected readonly widgets = injectWidgetDefinitions(this.selectedWidgets);

  setOption(index: number) {
    const configs = this.configs();

    if (index >= 0 && index < configs.length) {
      this.selectedWidgets.set(configs[index].value);
    }
  }
}
