import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', loadChildren: './users/users.module#UsersModule', data: { preload: true} },
  { path: 'role', loadChildren: './roles/roles.module#RolesModule', data: { preload: true} },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
