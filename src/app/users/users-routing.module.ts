import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'user/create', component: UserFormComponent },
  { path: 'user/:id', component: UserFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
