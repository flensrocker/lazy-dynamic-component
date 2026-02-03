import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ldc-example-2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `Content of Example 2`,
})
export class Example2 {}
