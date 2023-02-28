import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient
  ) { }

  public apiMovies(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(res => res)
    )
  }

}
