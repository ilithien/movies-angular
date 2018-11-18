import { Action } from '@ngrx/store'
import Movie from '../../model/movie';

export const MovieActionTypes = {
  START_LOADING_MOVIES: 'START_LOADING_MOVIES',
  STOP_LOADING_MOVIES: 'STOP_LOADING_MOVIES',
  LOAD_MOVIES: 'LOAD_MOVIES'
}

export class StartLoadingMovies implements Action {
  readonly type = MovieActionTypes.START_LOADING_MOVIES;
  constructor(private payload: string) { }
}

export class StopLoadingMovies implements Action {
  readonly type = MovieActionTypes.STOP_LOADING_MOVIES;
  constructor() { }
}

export class LoadMovies implements Action {
  readonly type = MovieActionTypes.LOAD_MOVIES;
  constructor(private payload: Movie[]) { }
}

