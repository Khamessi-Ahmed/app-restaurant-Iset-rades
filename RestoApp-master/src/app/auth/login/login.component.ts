import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { SwalComponent, SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginRequest: any = {};

  constructor(private authService: AuthService, private router: Router,private readonly swalTargets: SwalPortalTargets) {}

  login() {
    this.authService.login(this.loginRequest).subscribe(
      response => {
       this.showAlert();
        console.log('Login successful:', response);
        localStorage.setItem('jwt',response.jwt);
        localStorage.setItem('userId', response.etudiantId); 
        const userRole = localStorage.getItem('userRole');
        const userId = localStorage.getItem('userId');
        console.log('User ID:', userId);
        console.log('User role:', userRole);
        if (this.authService.getUserRole()=='CHEF') {
          this.router.navigate(['/chef']);
        } else if (this.authService.getUserRole()==('ETUDIANT')) {
          this.router.navigate(['/etudiant']);
        } else {
          this.router.navigate(['/admin']);
        }
        
      },
      error => {
        this.showAlertError();
        console.error('Login error:', error);

      }
    );
  }
 

  async showAlert() {
  const { value: success } = await Swal.fire({
    title: 'Welcome!',
    text: '',
    icon: 'success',
    showConfirmButton: false,
    timer: 1500 
  });}
  async showAlertError() {
    const { value: error } = await Swal.fire({
      title: 'Wrong Email or Password!',
      text: '',
      icon: 'error',
      showConfirmButton: false,
      timer: 1500 
    });
}
}