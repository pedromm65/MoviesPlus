import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faDollarSign, faStar } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  faDollar = faDollarSign
  starIcon = faStar

  public movie: any
  public isLoading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}
  ngOnInit(): void {
    this.getMovie()
  }

  public getMovie() {
    const id = this.activatedRoute.snapshot.params['id']
    const movie = this.apiService.apiMovies(`https://api.themoviedb.org/3/movie/${id}?api_key=75d84e72756f109a90f42aa08e51a909&language=en-US`)

    return movie.subscribe(
      res => {
        this.movie = res
        this.isLoading = true
        console.log(this.movie)
      },
    )
  }
}
