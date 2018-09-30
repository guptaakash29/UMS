import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SettingsComponent } from '../settings/settings.component';
import { HeaderComponent} from '../header/header.component';
import { FooterComponent} from '../footer/footer.component';

const routes : Routes = [
  {path:'login', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'settings', component:SettingsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    SettingsComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class FrontModuleModule { }
