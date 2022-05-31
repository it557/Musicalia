import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MusicaService {
  private MusicaesUrl = 'https://deezerdevs-deezer.p.rapidapi.com/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      'X-RapidAPI-Key': '2643f1419emshbf3ed2c54b53a7bp10c994jsn4905e9f521d3',
    }),
  }; //Aqui se ponen los datos de la API

  constructor(private http: HttpClient) {}

  getsearch(parametro: string): Observable<any> {
    return this.http.get<any>(this.MusicaesUrl + 'search?q=' + parametro,this.httpOptions); //LA CANCION ES LO Q TU PASAS POR PARAMETRO , EL SEARCH ES LO Q SE USA
  }

  getsong(parametro: number): Observable<any> {
    return this.http.get<any>(this.MusicaesUrl + 'track/' + parametro,this.httpOptions); //LA CANCION ES LO Q TU PASAS POR PARAMETRO , EL SEARCH ES LO Q SE USA
  }
  
}
