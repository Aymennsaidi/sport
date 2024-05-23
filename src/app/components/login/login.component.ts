import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //login : objet initialement vide
  login: any = {};
  //Form ID
  errorMessage: any;
  loginForm!: FormGroup;
  constructor(private userService: UserService,
    private router: Router,) { }

  ngOnInit(): void {
  }
  Login() {
    console.log('Here login object', this.login)
    this.userService.login(this.login).subscribe((data) => {
      // console.log('here res after login', data);
      if (data.message == 'welcome') {
        sessionStorage.setItem('jwt', data.user);
        console.log('here', data.user);

        let decoded: any = jwtDecode(data.user);
        console.log('here decoded', decoded);

        if (decoded.role == 'Admin') {
          this.router.navigate(['Admin']);
        } else {
          this.router.navigate(['']);
        }
      } else {
        this.errorMessage = 'Please chech u re email and password'
      }
    });
  };
}
