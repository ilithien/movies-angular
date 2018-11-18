import { MovieActionTypes } from "../actions/movies";
import Movie from "../../model/movie";

export interface MoviesState {
  data: Movie[],
  loading: boolean,
  error?: String | null
}

const initialState: MoviesState = {
  data: [],
  loading: false
}

export function movieReducer(state = initialState, { type, payload }) {
  switch (type) {
    case MovieActionTypes.START_LOADING_MOVIES:
      return { ...state, loading: true }
    case MovieActionTypes.STOP_LOADING_MOVIES:
      return { ...state, loading: false }
    case MovieActionTypes.LOAD_MOVIES:
      return { ...state, data: payload }
    default:
      return state;
  }
}