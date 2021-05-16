import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule, ThemeService } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/rgisterUser/register/register.component';
import { ConsulterUserComponent } from './pages/consulterUser/consulter-user/consulter-user.component';
import { MessageComponent } from './pages/message/message.component';
import { UpdateComponent } from './pages/updateUser/update/update.component';
import { CreatepatientComponent } from './pages/createPatient/createpatient/createpatient.component';
import { ConsulterPatientComponent } from './pages/consulterPatient/consulter-patient/consulter-patient.component';
import { DetailPatientComponent } from './pages/detailPatient/detail-patient/detail-patient.component';
import { MessageForPComponent } from './pages/message/messageP/message-for-p/message-for-p.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    LoginComponent,
    RegisterComponent,
    ConsulterUserComponent,
    MessageComponent,
    UpdateComponent,
    CreatepatientComponent,
    ConsulterPatientComponent,
    DetailPatientComponent,
    MessageForPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    HttpClientModule,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
