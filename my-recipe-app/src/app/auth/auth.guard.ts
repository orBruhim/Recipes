import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable ({
     providedIn: 'root'
    })
export class AuthGguard implements CanActivate {

   constructor(private authService: AuthService,
               private router: Router) {}
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable <boolean| UrlTree> |
                 Promise <boolean| UrlTree> |
                  boolean |
                   UrlTree {
                       return this.authService.user.pipe(
                           take(1), map (user => {
                               const isAuth = !!user;
                               if (isAuth) {
                                   return true;
                               } else {
                                   return this.router.createUrlTree(['/auth']);
                               }
                           })
                       );
                   }
}
