import { Action } from '@ngrx/store'
import Movie from '../../model/movie';

export const DetailActionTypes = {
  START_LOADING_DETAIL: 'START_LOADING_DETAIL',
  STOP_LOADING_DETAIL: 'STOP_LOADING_DETAIL',
  LOAD_DETAIL: 'LOAD_DETAIL'
}

export class StartLoadingDetail implements Action {
  readonly type = DetailActionTypes.START_LOADING_DETAIL;
  constructor(private payload: string) { }
}

export class StopLoadingDetail implements Action {
  readonly type = DetailActionTypes.STOP_LOADING_DETAIL;
  constructor() { }
}

export class LoadMovieDetail implements Action {
  readonly type = DetailActionTypes.LOAD_DETAIL;
  constructor(private payload: Movie) { }
}
