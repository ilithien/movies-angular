import { Injectable } from '@angular/core';
import { LoginResponse } from '../model/login';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<{}> {
    return this.http.post('/login', { username, password });
  }
}
