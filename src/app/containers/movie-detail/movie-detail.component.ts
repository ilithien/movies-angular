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

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.movie$ = this.movieService.loadMovie();
    this.loading$ = this.movieService.isDetailLoading();
    this.movieService.searchMovieById(this.route.snapshot.params.movie);
  }

}
