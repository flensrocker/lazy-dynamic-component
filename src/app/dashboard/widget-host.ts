import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  resource,
  ViewContainerRef,
} from '@angular/core';
import { WidgetDefinition } from '../widget-definition';

@Component({
  selector: 'ldc-widget-host',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h2>{{ title() }}</h2>
    <ng-container #widget />`,
})
export class WidgetHost {
  readonly #vcr = inject(ViewContainerRef);

  readonly definition = input.required<WidgetDefinition>();

  protected readonly title = computed(() => this.definition().title);

  readonly #widgetType = resource({
    params: this.definition,
    loader: ({ params: definition }) => {
      return definition.getComponentType();
    },
  });

  constructor() {
    effect(() => {
      if (!this.#widgetType.hasValue()) {
        return;
      }

      const widgetType = this.#widgetType.value();
      // add injector, bindings or whatever you need for your widgets
      this.#vcr.createComponent(widgetType);
    });
  }
}
