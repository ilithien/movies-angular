import Movie from "./movie";

export interface MoviesResult {
  Search?: Movie[]
  Error?: string
  Response: string
}