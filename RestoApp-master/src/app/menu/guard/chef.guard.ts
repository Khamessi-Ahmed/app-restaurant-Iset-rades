import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

export const chefGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authS = inject(AuthService);

  if(authS.isAuthenticated() && authS.getUserRole() === 'CHEF' || authS.getUserRole()==='ADMIN'){
    return true;
  }else{
    router.navigate(['/login']);
      return false;
  }
 
};