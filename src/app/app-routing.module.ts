import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsulterPatientComponent } from './pages/consulterPatient/consulter-patient/consulter-patient.component';
import { ConsulterUserComponent } from './pages/consulterUser/consulter-user/consulter-user.component';
import { CreatepatientComponent } from './pages/createPatient/createpatient/createpatient.component';
import { DetailPatientComponent } from './pages/detailPatient/detail-patient/detail-patient.component';
import { LoginComponent } from './pages/login/login/login.component';
import { MessageComponent } from './pages/message/message.component';
import { MessageForPComponent } from './pages/message/messageP/message-for-p/message-for-p.component';
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
  {path:'detailPatient', component: DetailPatientComponent},
  {path:'messageP', component: MessageForPComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
