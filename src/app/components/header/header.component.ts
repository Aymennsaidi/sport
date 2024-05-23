import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn();
  }
  // Retrieve the JWT token from session storage
  isLoggedIn() {
    const token = sessionStorage.getItem('jwt');
    // console.log('here token' , token);
    if (token) {
      this.user = jwtDecode(token);
    }
    return !!token;
  };
  logout() {
    sessionStorage.removeItem('jwt');
    this.router.navigate(['']);
  }
}
