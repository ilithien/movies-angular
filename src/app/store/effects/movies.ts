import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { MoviesResult } from '../../model/omdb';
import { MovieActionTypes, StartLoadingMovies, LoadMovies, StopLoadingMovies } from '../actions/movies';
import { MovieService } from '../../services/movie.service.';
import { DetailActionTypes, StartLoadingDetail, StopLoadingDetail, LoadMovieDetail } from '../actions/movie-detail';
import Movie from '../../model/movie';

@Injectable()
export class MoviesEffects {

  constructor(private actions: Actions, private movieService: MovieService) { }

  @Effect()
  findMovies: Observable<{}> = this.actions.pipe(
    ofType(MovieActionTypes.START_LOADING_MOVIES),
    switchMap(({ payload }: StartLoadingMovies) => this.movieService.findMovies(payload)),
    mergeMap(({ Search }: MoviesResult) => [new LoadMovies(Search), new StopLoadingMovies()]),
    catchError(() => of(new StopLoadingMovies()))
  )


  @Effect()
  findMovie: Observable<{}> = this.actions.pipe(
    ofType(DetailActionTypes.START_LOADING_DETAIL),
    switchMap(({ payload }: StartLoadingDetail) => this.movieService.findMovie(payload)),
    mergeMap((movie: Movie) => {
      return [new LoadMovieDetail(movie), new StopLoadingDetail()]
    }),
    catchError(() => of(new StopLoadingDetail()))
  )
}