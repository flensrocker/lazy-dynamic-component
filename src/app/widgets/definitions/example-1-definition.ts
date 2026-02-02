import { WidgetDefinition, createWidgetProvider } from '../../widget-definition';

const Example1Widget: WidgetDefinition = {
  selector: 'example-1-widget',
  title: 'Example 1',
  getComponentType: () => import('../example-1').then((m) => m.Example1),
};

export const provideExample1Widget = createWidgetProvider(Example1Widget);
