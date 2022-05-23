import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Artista } from './artista';

@Injectable({
  providedIn: 'root'
})

export class ArtistaService {
  private ArtistaesUrl = 'http://localhost:8080/artista/data';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': '*/*',
    'Access-Control-Allow-Origin': '*' })
  };


  constructor(
    private http: HttpClient) { }

  getArtistas(): Observable<Artista[]> {

    return this.http.get<Artista[]>(this.ArtistaesUrl);

  }



}
