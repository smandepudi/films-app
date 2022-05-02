import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { map, catchError} from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Film } from './models/film.model';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private baseUrl = 'http://localhost:3000/films';
  allFilms: Film[] = [];
  constructor(private http: HttpClient) { }

  getAll(): Observable<Film[]> {
   //  return this.http.get<any>(this.baseUrl);
    return this.http.get<Film[]>(this.baseUrl)
    .pipe(
      map(success => {
        this.allFilms = success;
        return this.allFilms;
      }),
    );
  }

  addFilm(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  editFilm(id: any, data: any): Observable<any> {
    return this.http.put(this.baseUrl + `/${id}`, data);
  }

  removeFilm(data: any): Observable<any> {
    return this.http.delete(this.baseUrl + `/${data}`);
  }

}
