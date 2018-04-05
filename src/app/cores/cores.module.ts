import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
  ]
})
export class CoresModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoresModule,
      providers: []
    };
  }
}
