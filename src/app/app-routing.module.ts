import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/pages/login/login.component';
import { DashboardComponent } from './component/pages/dashboard/dashboard.component';
import { DetailComponent } from './component/pages/detail/detail.component';

const routes: Routes = [
  {
    path : "",
    component : LoginComponent
  },
  {
    path :"dashboard",
    component : DashboardComponent
  },
  {
    path:"detail/:id", component:DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
