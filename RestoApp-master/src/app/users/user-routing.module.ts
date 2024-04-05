import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ChefComponent } from './chef/chef.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { etudiantGuard } from './etudiant/guard/etudiant.guard';
import { adminGuard } from './admin/admin.guard';
import { chefGuard } from '../menu/guard/chef.guard';




const routes: Routes = [
  {path:"admin",component:AdminComponent,canActivate:[adminGuard]},
  {path:"chef",component:ChefComponent,canActivate:[chefGuard]},
  {path:"etudiant",component:EtudiantComponent,canActivate:[etudiantGuard]},
  
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
