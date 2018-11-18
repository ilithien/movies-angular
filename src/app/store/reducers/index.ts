import { MoviesState, movieReducer } from "./movies";
import { DetailState, detailReducer } from "./movie-detail";
import { ActionReducerMap } from "@ngrx/store";

export interface ApplicationState {
  movies: MoviesState
  detail: DetailState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  detail: detailReducer,
  movies: movieReducer
}

export const detailSelector = (state: ApplicationState): DetailState => state.detail;
export const moviesSelector = (state: ApplicationState): MoviesState => state.movies;


