import Movie from "../../model/movie";
import { DetailActionTypes } from "../actions/movie-detail";

export interface DetailState {
  movie: Movie
  loading: boolean
}

const initialDetailState: DetailState = {
  loading: false,
  movie: { Title: '', Year: '', imdbID: '', Poster: '' }
}

export function detailReducer(state = initialDetailState, { type, payload }) {
  switch (type) {
    case DetailActionTypes.START_LOADING_DETAIL:
      return { ...state, loading: true }
    case DetailActionTypes.STOP_LOADING_DETAIL:
      return { ...state, loading: false }
    case DetailActionTypes.LOAD_DETAIL:
      return { ...state, movie: payload }
    default:
      return state;
  }
}