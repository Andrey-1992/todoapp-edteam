import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private URL = environment.api;
  constructor(private httpClient:HttpClient) { }

  getTask():Observable<any>{
    return this.httpClient.get(
      `${this.URL}/task`
    ).pipe(
      catchError(() => {
        console.log('Algo ocurrio?? fijate')
        return of([])
      })
      // .pipes() => allows you to filter data before coming sending to the subscriber ! Mostly common use the Error Handling
      // aqui es donde puedes interceptar todos los errores de fetch() y manejarlos.
    )
  }
}
