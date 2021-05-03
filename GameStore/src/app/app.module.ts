import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AcceuilAdminComponent } from './acceuil-admin/acceuil-admin.component';
import { CardGameAdminComponent } from './card-game-admin/card-game-admin.component';
import { MajAdminComponent } from './maj-admin/maj-admin.component';
import { AddGameAdminComponent } from './add-game-admin/add-game-admin.component';
import { AccBeforComponent } from './acc-befor/acc-befor.component';
import { CardGameComponent } from './card-game/card-game.component';
import { ProfilComponent } from './profil/profil.component';
import { AllvarService } from './ser/allvar.service';
import { MyaccuntComponent } from './myaccunt/myaccunt.component';
import { CardProfilComponent } from './card-profil/card-profil.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginAdminComponent,
    LoginComponent,
    SignInComponent,
    AcceuilAdminComponent,
    CardGameAdminComponent,
    MajAdminComponent,
    AddGameAdminComponent,
    AccBeforComponent,
    CardGameComponent,
    ProfilComponent,
    MyaccuntComponent,
    CardProfilComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AllvarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
