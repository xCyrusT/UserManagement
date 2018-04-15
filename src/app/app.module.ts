import { ApiMockBackEnd } from './shared/mocks/api.mockbackend';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

import { CoresModule } from './cores/cores.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';

import { AuthRoutingModule } from './auth/auth-routing.module';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoresModule.forRoot(),
    HttpModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ApiMockBackEnd),
    UsersModule,
    RolesModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
