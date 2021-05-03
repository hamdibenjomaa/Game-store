import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccBeforComponent } from './acc-befor/acc-befor.component';
import { AcceuilAdminComponent } from './acceuil-admin/acceuil-admin.component';
import { AddGameAdminComponent } from './add-game-admin/add-game-admin.component';
import { LoginComponent } from './login/login.component';
import { MajAdminComponent } from './maj-admin/maj-admin.component';
import { MyaccuntComponent } from './myaccunt/myaccunt.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  {path:'homeadmin',component:AcceuilAdminComponent},
  {path:'addadmin',component:AddGameAdminComponent },
  {path:'login',component:LoginComponent},
  {path:'homeuser',component:AccBeforComponent},
  {path:'signin',component:SignInComponent},
  {path:'maj',component:MajAdminComponent},
  {path:'profil',component:MyaccuntComponent},
  {path:'homegamer',component:AccBeforComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
