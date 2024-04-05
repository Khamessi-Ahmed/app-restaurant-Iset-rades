import { Component } from '@angular/core';
import { SignupRequest } from '../model/signup-request';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerRequest: any = {};
  password2='';
  errorMessage: string | undefined;

  constructor(private authService:AuthService, private route:Router) {}
  signupEtudiant(){
    if (this.password2 !== this.registerRequest.password) {
      this.errorMessage = 'Passwords do not match';
      console.log(this.errorMessage);
      this.showAlertError();
    }
    else{
    this.authService.registerStudent(this.registerRequest).subscribe(
      response=>{
        console.log('Signup successful for student:',response);
        this.route.navigate(['/login']);
        this.showAlert();
      },
      error =>{
        console.error('signup error for student:',error);
        this.showAlertError1();
      }
    )
    }
  }

  signupChef(){
    this.authService.registerChef(this.registerRequest).subscribe(
      response=>{
        console.log('Signup successful for Chef:',response);
      },
      error =>{
        console.error('signup error for Chef:',error);
      }
    )
  }
  async showAlertError() {
    const { value: error } = await Swal.fire({
      title: 'Make sure to Confirm password Correctly!',
      text: '',
      icon: 'warning',
      showConfirmButton: false,
      timer: 1500 
    });}
    async showAlertError1() {
      const { value: error } = await Swal.fire({
        title: 'Signup Error !',
        text: 'Try again',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500 
      });}
    async showAlert() {
      const { value: success } = await Swal.fire({
        title: 'Account Created successfully!',
        text: 'Please log in',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500 
      });}
}
