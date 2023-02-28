import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateSessionGuard implements CanActivate {

  private cookie:string | null = null; // We would consult to the browser

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  private checkCookie():boolean{
    //return (this.cookie !== null). --> Fancier way to write it

    if (this.cookie !== null) {
      return true;
    } else {
      return true;
    }
  }
  
}
