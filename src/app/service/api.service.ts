import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = 'https://api.themoviedb.org/3/movie/popular?api_key=75d84e72756f109a90f42aa08e51a909&language=pt-BR&page=1'
  constructor(
    private http: HttpClient
  ) { }

  public apiGetMovies(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(res => res)
    )
  }

}
