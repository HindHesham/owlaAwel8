// import { IMPORT_PREFIX } from '@angular/compiler-cli/src/ngcc/src/constants';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule,      
  MatMenuModule,
  MatCheckboxModule, 
  MatToolbarModule,      
  MatIconModule,      
  MatCardModule,      
  MatFormFieldModule,      
  MatInputModule,           
  MatNativeDateModule,      
  MatRadioModule,      
  MatSelectModule,      
  MatOptionModule,
 } from '@angular/material';


import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { VideosComponent } from './teacher/videos/videos.component';
import { ListStudentsComponent } from './students/list-students/list-students.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule, 
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,      
    MatMenuModule,
    MatCheckboxModule, 
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,
    MatNativeDateModule,      
    MatRadioModule,         
    MatOptionModule,
  ],
  declarations: [
    SignupComponent,
    DashboardComponent,
    ListTeacherComponent,
    AddTeacherComponent,
    VideosComponent,
    ListStudentsComponent
    
  ],
  exports: [
  
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
