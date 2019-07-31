import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes.service';
import { RouterModule } from '@angular/router';

import { ViewsModule } from './pages/views.module';
import { LoginService } from './services/login/login.service';
import { SignupService } from './services/signup/signup.service';
import { AddTeacherService } from './services/teacher/add-teacher.service';
import { LevelsService } from './services/levels/levels.service'

import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import { LoginComponent } from './pages/login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainNavComponent,
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
    FlexLayoutModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
    
  ],
  providers: [ LoginService, SignupService, AddTeacherService, LevelsService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
