import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editProfile!: FormGroup;
  message: any = "";
  decoded: any = {};
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    let token = sessionStorage.getItem("jwt");
    if (token) {
      this.decoded = jwtDecode(token);
      console.log('here decoded token into profile ', this.decoded);

    }
    this.editProfile = this.formBuilder.group({
      TEL: ["", [Validators.required, Validators.pattern("^((\\+216-?)|0)?[0-9]{8}$")]],
      oldPassword: ["", [Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      newPassword: ["", [Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmPassword: ["", [Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    })
  }
  edit(): void {
    console.log('here obj', this.editProfile.value);
    this.editProfile.value.userId = this.decoded.id;
    this.userService.editProfile(this.editProfile.value).subscribe((result) => {
      console.log('here result after edit', result.message);
      this.message = result.message;
    });
  }
//   edit(): void {
//     console.log('here obj', this.editProfile.value);
//     this.editProfile.value.userId = this.decoded.id;
//     this.userService.updateProfile(this.editProfile.value).subscribe((result) => {
//         console.log('here result after edit', result.message);
//         this.message = result.message;
//     });
// }

  mustMatch(): boolean {
    return this.editProfile.value.newPassword != this.editProfile.value.confirmPassword;
  }
}
