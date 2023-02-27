import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  public getAllMovies: any
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
// `http://image.tmdb.org/t/p/w500/${this.getAllMovies.backdrop_path}`
