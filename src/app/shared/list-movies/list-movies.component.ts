import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  public getAllMovies: any
  public getMovieImg: any
  constructor(
    private apiService: ApiService
  ) {}
  ngOnInit(): void {
    this.apiService.apiGetMovies.subscribe(
      res => {
        this.getAllMovies = res.results
        console.log(this.getAllMovies)
      }
    )
  }
}
