import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieService } from './services/movie.service.';
import { MoviesGridComponent } from './containers/movies-grid/movies-grid.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { reducers } from './store/reducers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MoviesSearcherComponent } from './containers/movies-searcher/movies-searcher.component';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './store/effects/movies';
import { LoaderComponent } from './components/loader/loader.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailComponent } from './containers/movie-detail/movie-detail.component';
import { LoginInterceptor } from './interceptors/login.interceptor';
import { LoginService } from './services/login.service';
import { LoginFormComponent } from './containers/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesGridComponent,
    MoviesSearcherComponent,
    LoaderComponent,
    MovieCardComponent,
    MovieDetailComponent,
    LoginFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EffectsModule.forRoot([MoviesEffects]),
    StoreModule.forRoot(reducers)
  ],
  providers: [MovieService, LoginService, { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
