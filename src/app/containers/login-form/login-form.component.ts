import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { LoginResponse } from '../../model/login';

@Component({
  selector: 'mov-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  logged: boolean = false;
  username: string;
  password: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.logged = !!sessionStorage.getItem('SESSION-TOKEN')
    this.username = sessionStorage.getItem("USER");
  }

  login() {
    this.loginService.login(this.username, this.password).subscribe(({ token }: LoginResponse) => {
      sessionStorage.setItem('SESSION-TOKEN', token)
      sessionStorage.setItem('USER', this.username);
    });

    this.logged = true;
  }

  logout() {
    sessionStorage.removeItem("SESSION-TOKEN")
    sessionStorage.removeItem("USER")
    this.logged = false;
  }

}
