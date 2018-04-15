import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { SidebarsComponent } from './sidebars/sidebars.component';
import { PageContentComponent } from './page-content/page-content.component';
import { FbInputComponent } from './fb-input/fb-input.component';

const COMPONENTS = [
  HeadersComponent,
  SidebarsComponent,
  PageContentComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [...COMPONENTS, FbInputComponent],
  exports: [...COMPONENTS]
})
export class ComponentsModule { }
