import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login();
  }

}
