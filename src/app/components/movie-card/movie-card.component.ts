import { Component, Input } from '@angular/core';
import Movie from '../../model/movie';

@Component({
  selector: 'mov-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass']
})
export class MovieCardComponent {

  @Input()
  movie: Movie
  constructor() { }
}
