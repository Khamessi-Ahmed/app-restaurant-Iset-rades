import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';
@Component({
  selector: 'app-affichage-menu',
  templateUrl: './affichage-menu.component.html',
  styleUrls: ['./affichage-menu.component.css']
})
export class AffichageMenuComponent implements OnInit {
  menu : any;
  constructor(private ms: MenuService){}
  ngOnInit(): void {
    this.ms.getMenuDuJour().subscribe((data)=>{
     this.menu=data;
     console.log(data);
    })
  }
}
