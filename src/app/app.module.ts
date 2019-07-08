import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes.service';
import { RouterModule } from '@angular/router';

import { ViewsModule } from './pages/views.module';
import { LoginService } from './services/login/login.service';
import { SignupService } from './services/signup/signup.service';
import { AddTeacherService } from './services/teacher/add-teacher.service'

import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  entryComponents: [
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: 'login', component: LoginComponent
      }
    ]),
    BrowserModule,
    AppRoutes,
    RouterModule,
    ViewsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule, 
    FlexLayoutModule,
  ],
  providers: [ LoginService, SignupService, AddTeacherService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
