import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FontAwesomeModule,  } from '@fortawesome/angular-fontawesome';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { NewMoviesComponent } from './new-movies/new-movies.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    TopRatedComponent,
    NewMoviesComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    LazyLoadImageModule,
    FontAwesomeModule
  ]
})
export class PagesModule {

}
