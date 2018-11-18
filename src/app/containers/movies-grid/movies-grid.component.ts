import { Component, OnInit } from '@angular/core';
import Movie from '../../model/movie';
import { MovieService } from '../../services/movie.service.';
import { Observable } from 'rxjs';

@Component({
  selector: 'mov-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.sass']
})
export class MoviesGridComponent implements OnInit {

  movies: Observable<Movie[]>
  loading: Observable<boolean>

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.loading = this.movieService.isLoading();
    this.movies = this.movieService.loadMovies();
  }

}
