import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authS = inject(AuthService);
  if(authS.isAuthenticated() && authS.getUserRole() === 'ADMIN'){
    return true;
  } else { if(!authS.isAuthenticated()){
      router.navigate(['/login']);}
      else{if(!(authS.getUserRole() === 'ADMIN')){return false;}}
      return false;
    }
};