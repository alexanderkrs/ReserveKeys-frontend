import {Chave} from "./chave";
import { Injectable } from '@angular/core';
import {catchError, Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


export class ChaveService {
  private URL_CHAVE_SERVICE: string =    environment.apiURL+'/chave';

  constructor(private http:HttpClient) { }

  private handleError<T>( operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  getChaves(): Observable<Chave[]> {

    return this.http.get<Chave[]>(this.URL_CHAVE_SERVICE).pipe(
      tap((chaves) => console.log('leu Chaves:',chaves)),
      catchError(this.handleError<Chave[]>('getChaves', []) )
    );
  }

}
