import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {
  private url: string = 'https://api.themoviedb.org/3/movie/popular?api_key=75d84e72756f109a90f42aa08e51a909&language=pt-BR&page=1'
  public getAllMovies: any
  public testUrl: any
  constructor(
    private apiService: ApiService
  ) {}
  ngOnInit(): void {
    this.apiService.apiMovies(this.url).subscribe(
      res => {
        this.getAllMovies = res.results
      }
    )
  }
}
