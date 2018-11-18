import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesGridComponent } from './containers/movies-grid/movies-grid.component';
import { MovieDetailComponent } from './containers/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesGridComponent
  },
  {
    path: ':movie',
    component: MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
