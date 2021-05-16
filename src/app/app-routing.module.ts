import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsulterPatientComponent } from './pages/consulterPatient/consulter-patient/consulter-patient.component';
import { ConsulterUserComponent } from './pages/consulterUser/consulter-user/consulter-user.component';
import { CreatepatientComponent } from './pages/createPatient/createpatient/createpatient.component';
import { DetailPatientComponent } from './pages/detailPatient/detail-patient/detail-patient.component';
import { LoginComponent } from './pages/login/login/login.component';
import { MessageComponent } from './pages/message/message.component';
import { RegisterComponent } from './pages/rgisterUser/register/register.component';
import { UpdateComponent } from './pages/updateUser/update/update.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path:'dashboard', component: DashboardComponent},
  {path:'register', component: RegisterComponent},
  {path:'consulterUser', component: ConsulterUserComponent},
  {path:'message', component: MessageComponent},
  {path:'updateUser', component: UpdateComponent},
  {path:'createPatient', component: CreatepatientComponent},
  {path:'consulterPatient',component: ConsulterPatientComponent},
  {path:'detailPatient', component: DetailPatientComponent}
  
  //{ path: 'basic-ui', loadChildren: () => import('./basic-ui/basic-ui.module').then(m => m.BasicUiModule) },
  //{ path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsDemoModule) },
  //{ path: 'forms', loadChildren: () => import('./forms/form.module').then(m => m.FormModule) },
  //{ path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  //{ path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  //{ path: 'general-pages', loadChildren: () => import('./general-pages/general-pages.module').then(m => m.GeneralPagesModule) },
  //{ path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
  //{ path: 'user-pages', loadChildren: () => import('./user-pages/user-pages.module').then(m => m.UserPagesModule) },
  //{ path: 'error-pages', loadChildren: () => import('./error-pages/error-pages.module').then(m => m.ErrorPagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
