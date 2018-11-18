import { Component, OnInit } from '@angular/core';
import Movie from '../../model/movie';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service.';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mov-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {

  movie$: Observable<Movie>;
  loading$: Observable<boolean>
  isFav: boolean

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    const movieID = this.route.snapshot.params.movie;

    this.isFav = !!localStorage.getItem(movieID);
    this.movie$ = this.movieService.loadMovie();
    this.loading$ = this.movieService.isDetailLoading();
    this.movieService.searchMovieById(movieID);
  }

  addToFavorites(movie: Movie): void {
    localStorage.setItem(movie.imdbID, JSON.stringify(movie));
    this.isFav = true;
  }

  removeFromFavorites(movieID: string): void {
    localStorage.removeItem(movieID);
    this.isFav = false;
  }

}
