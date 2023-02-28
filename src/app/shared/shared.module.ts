import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
    LazyLoadImageModule,
    RouterModule
  ],
  exports: [
      MenuComponent,
      ListMoviesComponent
    ]
})
export class SharedModule { }
