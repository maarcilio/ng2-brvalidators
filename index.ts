import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationService } from './src/validation.service';

export * from './src/validation.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [  ],
  exports: [  ]
})
export class BrValidatorsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BrValidatorsModule,
      providers: [ValidationService]
    };
  }
}
