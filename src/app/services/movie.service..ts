import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MoviesResult } from '../model/omdb';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of'
import Movie from '../model/movie';
import { ApplicationState } from '../store/reducers';
import { Store, select } from '@ngrx/store';
import { catchError, publishReplay, refCount } from 'rxjs/operators';
import { StartLoadingMovies } from '../store/actions/movies';
import { StartLoadingDetail } from '../store/actions/movie-detail';

@Injectable()
export class MovieService {

  constructor(private store: Store<ApplicationState>, private http: HttpClient) { }

  findMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`http://www.omdbapi.com/?apikey=f12ba140&i=${id}&r=full`);
  }


  findMovies(search: string): Observable<MoviesResult> {
    return this.http.get<MoviesResult>(`http://www.omdbapi.com/?apikey=f12ba140&s=${search}&type=movie`);
  }

  loadMovies(): Observable<Movie[]> {
    return this.store.pipe(
      select((state) => state.movies.data),
      publishReplay(1),
      refCount(),
      catchError(() => of(undefined))
    )
  }

  searchMoviesByTitle(search: string): void {
    this.store.dispatch(new StartLoadingMovies(search));
  }

  searchMovieById(id: string): void {
    this.store.dispatch(new StartLoadingDetail(id));
  }

  loadMovie(): Observable<Movie> {
    return this.store.pipe(
      select((state) => state.detail.movie),
      publishReplay(1),
      refCount(),
      catchError(() => of(undefined))
    )
  }

  isLoading(): Observable<boolean> {
    return this.store.pipe(
      select((state) => state.movies.loading),
      publishReplay(1),
      refCount(),
      catchError(() => of(undefined))
    )
  }

  isDetailLoading(): Observable<boolean> {
    return this.store.pipe(
      select((state) => state.detail.loading),
      publishReplay(1),
      refCount(),
      catchError(() => of(undefined))
    )
  }

}
