import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, 
  Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ValidateSessionGuard implements CanActivate {

  private cookie:string | null = null;; // We would consult to the browser

  constructor(private router:Router, private cookieService:CookieService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookie();
  }

  private checkCookie():boolean{
    // return (this.cookie !== null). --> Fancier way to write it

    if (this.cookie !== null) {
      return true;
    } else {
      return true;
    }
  }
  
}
