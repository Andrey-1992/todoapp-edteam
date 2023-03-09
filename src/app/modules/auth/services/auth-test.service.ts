// import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
// import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class AuthTestService {

  constructor() { 
    uniqueEmailValidator(): AsyncValidatorFn {
      return (control: AbstractControl): Observable<ValidationErrors | null> => {
      //   return of(control.value).pipe(
      //     delay(500),
      //     map((email) => {
      //       const emails = ['test@test.com', 'hola@gmail.com'];
      //       return emails.includes(email);
      //     })
      //   ).pipe(
      //     map((exists) => (exists ? { emailExists: true } : null)),
      //     catchError(async () => null)
      //   );
      };
    }

  }
}
