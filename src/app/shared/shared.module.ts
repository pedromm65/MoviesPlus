import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { LazyLoadImageModule } from 'ng-lazyload-image'
@NgModule({
  declarations: [
    MenuComponent,
    ListMoviesComponent,

  ],
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],
  exports: [
      MenuComponent,
      ListMoviesComponent
    ]
})
export class SharedModule { }
