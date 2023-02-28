import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {
  private urlTopRated: string = 'https://api.themoviedb.org/3/movie/top_rated?api_key=75d84e72756f109a90f42aa08e51a909&language=en-US&page=1'
  public getTopRatedMovies: any

  constructor(
    private apiService: ApiService
  ) {}
  ngOnInit(): void {
    this.apiService.apiMovies(this.urlTopRated).subscribe(
      res => {
        this.getTopRatedMovies = res.results
      }
    )
  }

}
