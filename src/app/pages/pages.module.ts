import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FontAwesomeModule,  } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
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
