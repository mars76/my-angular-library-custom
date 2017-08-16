import { NgModule, ModuleWithProviders } from '@angular/core';
import { SampleComponent } from './components/sample.component';
import { ChildComponent } from './components/child.component';

export * from './components/sample.component';
export * from './components/child.component';

@NgModule({
  imports: [
  ],
  declarations: [
    SampleComponent,
    ChildComponent,
  ],
  exports: [
    SampleComponent,
    ChildComponent,
  ]
})
export class SampleModule {
  
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
    };
  }
}
