

// import { Profile1Component } from './views/profile/profile1/profile1.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListTeacherComponent } from './pages/teacher/list-teacher/list-teacher.component';
import { AddTeacherComponent } from './pages/teacher/add-teacher/add-teacher.component';
import { VideosComponent } from './pages/teacher/videos/videos.component';
import { ListStudentsComponent } from './pages/students/list-students/list-students.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  // { path: 'dashboards/v1', pathMatch: 'full', redirectTo: 'dashboards/v1' },

  { path: 'teachers', children:
    [
      { path: 'allTeachers', component: ListTeacherComponent},
      { path: 'addTeachers', component: AddTeacherComponent},
      { path: 'listVideos', component: VideosComponent}
    ]
  },

  { path: 'students', children:
    [
      { path: 'allStudents', component: ListStudentsComponent}
    ]
  },
  { path: 'signUp', component: SignupComponent},
  { path: 'dashboard', component: DashboardComponent}
  // { path: '**', component: NotFoundComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);