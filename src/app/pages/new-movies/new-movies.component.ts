import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-new-movies',
  templateUrl: './new-movies.component.html',
  styleUrls: ['./new-movies.component.scss']
})
export class NewMoviesComponent implements OnInit {
  private urlNewMovies: string = 'https://api.themoviedb.org/3/movie/upcoming?api_key=75d84e72756f109a90f42aa08e51a909&language=en-US&page=1'
  public getNewMovies: any

  constructor(
    private apiService: ApiService
  ) {}
  ngOnInit(): void {
    this.apiService.apiMovies(this.urlNewMovies).subscribe(
      res => {
        this.getNewMovies = res.results
        console.log(this.getNewMovies)
      }
    )
  }
}
