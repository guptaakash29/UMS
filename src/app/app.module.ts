// import { FrontModuleModule } from './front/front-module/front-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminModuleModule } from './admin/admin-module/admin-module.module';
import {FrontModuleModule} from './front/front-module/front-module.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'front', loadChildren: './front/front-module#FrontModuleModule' },
  { path: 'admin', loadChildren: './admin/admin-module#AdminModuleModule' }
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AdminModuleModule,
    FrontModuleModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
