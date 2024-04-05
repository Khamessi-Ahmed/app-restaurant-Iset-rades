import { CanActivateFn , Router} from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';


export const etudiantGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authS = inject(AuthService);
  if(authS.isAuthenticated() && authS.getUserRole() === 'ETUDIANT'){
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};