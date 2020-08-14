import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private usersService: UsersService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.usersService.getSession().pipe(
      map((res: any) => {
        if (this.usersService.user && this.usersService.user.id) {
          if (this.usersService.user.is_staff) {
            return true;
          } else {
            this.router.navigateByUrl('/');  
          }
        } else {
          this.router.navigateByUrl('/login');
        }
        return false;
      })
    );
  }
  
}
