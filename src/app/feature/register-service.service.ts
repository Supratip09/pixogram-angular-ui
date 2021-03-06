import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,private router: Router) { }

  register(registerJson){
    return this.http.post("http://localhost:8080/gateway/register",registerJson,this.httpOptions).pipe(
      tap(_ => {
        console.log('Registration Successful');
        this.router.navigateByUrl('login');
      }),
      catchError(this.handleError<any>('updateHero'))
    );;
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
