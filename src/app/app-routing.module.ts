import { ProfileComponent } from './secure/profile/profile.component';
import { UsersComponent } from './secure/users/users.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { PublicComponent } from './public/public.component';
import { RegisterComponent } from './public/register/register.component';
import { SecureComponent } from './secure/secure.component';
import { LoginComponent } from './public/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    component:SecureComponent,
    children:[
      {path:'',redirectTo:'dashboard',pathMatch:'full'},
      {path:'dashboard',component:DashboardComponent},
      {path: 'users',component:UsersComponent},
      {path: 'profile',component:ProfileComponent},

    ], canActivate: [AuthGuard]
  },
  {
    path:'',
    component:PublicComponent,
    children:[
      {path:'register',component:RegisterComponent},
      {path: 'login',component:LoginComponent},
    ]
  },
  //{path:'', component:SecureComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
