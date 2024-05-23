import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { generateId } from 'src/app/shared/genericFunctions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // Form ID
  signupForm!: FormGroup;
  path!: string;
  title!: string;
  user: any = {};
  message: any = "";
  imagePreview: any ;
  constructor(private fbuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.path = this.router.url;
    this.title = (this.path == '/inscription') ? "Signup Clinet" : "Signup Admin";
    console.log('Here into Signup', this.path);
    this.signupForm = this.fbuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(4)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      TEL: ['', [Validators.required, Validators.pattern("^((\\+216-?)|0)?[0-9]{8}$")]],
      img:[],
    });
  }
  // Methode
  signup() {
    let user = this.signupForm.value;
    if (this.path == "/inscription") {
      user.role = 'client';
    } else {
      user.role = 'Admin';
    }
    console.log('Here USER', user);
    this.userService.signup(user,this.signupForm.value.img).subscribe((result) => {
      console.log(result.message);
      this.message = result.message;
    });
  };
  onImageSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length
    > 0) {
    const file = inputElement.files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
    }
    }
    

}
