import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url = 'http://localhost:3000/person'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getPersonById(id: number): Observable<Person> {
    return this.httpClient.get<Person>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  savePerson(person: Person): Observable<Person> {
    return this.httpClient.post<Person>(this.url, JSON.stringify(person), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updatePerson(person: Person): Observable<Person> {
    return this.httpClient.put<Person>(this.url + '/' + person.id, JSON.stringify(person), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deletePerson(person: Person) {
    return this.httpClient.delete<Person>(this.url + '/' + person.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}