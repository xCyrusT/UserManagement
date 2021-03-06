import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RoleComponent } from './role/role.component';
import { RoleFormComponent } from './role-form/role-form.component';
import { RoleListComponent } from './role-list/role-list.component';
import { LayoutsModule } from '../shared/layouts/layouts.module';
import { ComponentsModule } from '../shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RolesRoutingModule,
    LayoutsModule,
    ComponentsModule
  ],
  declarations: [
    RoleComponent,
    RoleFormComponent,
    RoleListComponent
  ]
})
export class RolesModule { }
