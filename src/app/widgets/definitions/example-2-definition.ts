import { WidgetDefinition, createWidgetProvider } from '../../widget-definition';

const Example2Widget: WidgetDefinition = {
  selector: 'example-2-widget',
  title: 'Example 2',
  getComponentType: () => import('../example-2').then((m) => m.Example2),
};

export const provideExample2Widget = createWidgetProvider(Example2Widget);
