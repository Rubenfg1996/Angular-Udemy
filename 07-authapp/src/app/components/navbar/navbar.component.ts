import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth: AuthService
    ) {
      auth.handleAuthentication();
    }

  ngOnInit() {
  }

  login () {
    this.auth.login();
  }

  logOut () {
    this.auth.logout();
  }

}
