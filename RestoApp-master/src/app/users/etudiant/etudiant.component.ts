import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
})
export class EtudiantComponent { 
  solde:number=0;
  private baseUrl = "http://localhost:9092/";
   userId = localStorage.getItem('userId');
    headers=this.auth.createAuthorizationHeader();
  constructor(private auth:AuthService,private http:HttpClient){

  }
  reload() {
    Swal.fire({
      title: 'Enter The Amount',
      input: 'number',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: (solde) => {
        return this.reloadCard(solde);
      },
      allowOutsideClick: () => !Swal.isLoading()
    });
  }
  reloadCard(solde: number) {
    
    const requestData = {
      id:this.userId,
      montant: solde,
      
    };
    
    return this.http.post<any>(this.baseUrl + "rechargerCarte", requestData,{ headers :this.headers!}).subscribe(
      
      response => {
        console.log('Card reloaded successfully:', requestData.montant);
      },
      error => {
        console.error('Error reloading card:', error);
      }
    );
  }


checkBalance() {
  return this.http.get<any>(this.baseUrl + this.userId + "/monsolde", { headers: this.headers }).subscribe(
    response => {
      console.log('Solde:', response);
      this.solde=response;
      this.showBalance();
    },
    error => {
      console.error('Error :', error);
    }
  );
}
async showBalance() {
  Swal.fire({ 
    title:'Your Balance is: '+ this.solde.toString(),
    text: '',
    icon: 'info',
    showConfirmButton: false,
    timer: 1500
  });
}}