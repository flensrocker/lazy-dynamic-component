import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ldc-example-1',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `Content of Example 1`,
})
export class Example1 {}
