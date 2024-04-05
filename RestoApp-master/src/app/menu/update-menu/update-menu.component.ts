import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { MenuService } from '../service/menu.service';
import { Menu } from '../model/menu';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {
  id!: number;
  menu: Menu = new Menu(0,new Date(), '', '', 0, '');

  updateForm: FormGroup; 

  errorMessage: string = '';

  constructor(private ps: MenuService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { 
    this.updateForm = this.fb.group({
      date: [''], 
      description: [''], 
      dessert: [''], 
      qteDisponible: [''],
      supplement: ['']
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ps.getMenuById(this.id).subscribe((data: Menu) => { 
      this.menu = data;
      this.updateForm.patchValue({
        date: this.menu.date,
        description: this.menu.descriptionPlat,
        dessert: this.menu.dessert,
        qteDisponible: this.menu.qteDisponible,
        supplement: this.menu.supplement
      });
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      const menuData: Menu = {
        id: this.id,
        supplement: this.updateForm.value.supplement,
        date: this.updateForm.value.date,
        descriptionPlat: this.updateForm.value.description,
        dessert: this.updateForm.value.dessert,
        qteDisponible: this.updateForm.value.qteDisponible
      };
      
      this.ps.updateMenu(this.id, menuData).subscribe(() => {
        this.router.navigate(['/gestion-menu']);
      }, error => {
        console.error('Error updating menu:', error);
      });
    }
  }
  
}
