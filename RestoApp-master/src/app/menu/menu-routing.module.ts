import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionMenuComponent } from './gestion-menu/gestion-menu.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { AffichageMenuComponent } from './affichage-menu/affichage-menu.component';
import { chefGuard } from './guard/chef.guard';

const routes: Routes = [
  {path:"gestion-menu",component:GestionMenuComponent,canActivate:[chefGuard]},
  {path:"add-menu",component:AddMenuComponent,canActivate:[chefGuard]},
  {path:"menu-details/:id",component:MenuDetailsComponent,canActivate:[chefGuard]},
  {path:"update-menu/:id",component:UpdateMenuComponent,canActivate:[chefGuard]},
  {path:"affichage-menu",component:AffichageMenuComponent,canActivate:[chefGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {
 
 }
