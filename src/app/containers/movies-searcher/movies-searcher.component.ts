import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service.';

@Component({
  selector: 'mov-movies-searcher',
  templateUrl: './movies-searcher.component.html'
})
export class MoviesSearcherComponent {

  constructor(private movieService: MovieService) { }

  movieSearch: string = '';

  search(): void {
    this.movieService.searchMoviesByTitle(this.movieSearch);
  }

}
