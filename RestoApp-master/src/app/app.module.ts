import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FooterComponent } from './footer/footer.component';
import { GestionMenuComponent } from './menu/gestion-menu/gestion-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AffichageMenuComponent } from './menu/affichage-menu/affichage-menu.component';
import { AddMenuComponent } from './menu/add-menu/add-menu.component';
import { UpdateMenuComponent } from './menu/update-menu/update-menu.component';
import { FormsModule } from '@angular/forms';
import { MenuDetailsComponent } from './menu/menu-details/menu-details.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserRoutingModule } from './users/user-routing.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { RouterModule } from '@angular/router';
import { ChefComponent } from './users/chef/chef.component';
import { EtudiantComponent } from './users/etudiant/etudiant.component';
import { AdminComponent } from './users/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcceuilComponent,
    FooterComponent,
    GestionMenuComponent,
    AffichageMenuComponent,
    AddMenuComponent,
    UpdateMenuComponent,
    MenuDetailsComponent,
    LoginComponent,
    SignupComponent,
    ChefComponent,
  EtudiantComponent,
  AdminComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    UserRoutingModule,
    RouterModule
    
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
