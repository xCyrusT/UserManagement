import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesRoutingModule } from './roles/roles-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { UsersRoutingModule } from './users/users-routing.module';

const routes: Routes = [
  { path: 'users', component: UsersRoutingModule },
  { path: 'roles', component: RolesRoutingModule },
  { path: 'auth', component: AuthRoutingModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
