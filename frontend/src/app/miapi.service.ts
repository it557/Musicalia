import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MiapiService {
  private MiapiUrl = 'http://localhost:8080'; //URL DE MI API
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    }),
  }; //headers

  constructor(private http: HttpClient) {}

  getsearch(): Observable<any> {
    return this.http.get<any>(this.MiapiUrl + '/songs' ,this.httpOptions); //LA CANCION ES LO Q TU PASAS POR PARAMETRO , EL SEARCH ES LO Q SE USA
  }
  addSong(idsong: number): Observable<any> {

    return this.http.post<any>(this.MiapiUrl + '/songs' ,{"idsong":idsong},this.httpOptions); //LA CANCION ES LO Q TU PASAS POR PARAMETRO , EL SEARCH ES LO Q SE USA
  }
  removeSong(idsong: number) {

    return this.http.delete<any>(this.MiapiUrl +'/songs/'+idsong ,this.httpOptions);
  }
}
