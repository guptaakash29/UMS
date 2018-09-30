
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from '../../admin/login/login.component';
import {AllusersComponent} from '../allusers/allusers.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';

const routes : Routes = [
  {path:'admin/login', component:LoginComponent},
  {path:'admin/dashboard', component:DashboardComponent},
  {path:'admin/allusers', component:AllusersComponent},
  { path: 'admin', redirectTo: 'admin/login', pathMatch: 'full' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    LoginComponent,
    DashboardComponent,
    AllusersComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AdminModuleModule { }
