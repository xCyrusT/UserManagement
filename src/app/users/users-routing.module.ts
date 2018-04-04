import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserGridComponent } from './user-grid/user-grid.component';

const routes: Routes = [
  { path: 'user', component: UserComponent, pathMatch: 'full' },
  { path: 'user-form', component: UserFormComponent },
  { path: 'user-grid', component: UserGridComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
