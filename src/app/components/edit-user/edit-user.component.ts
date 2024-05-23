import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userForm!: FormGroup;
  user: any = {};
  id!: any;
  message: any = "";

  constructor(private activatedRoute: ActivatedRoute, private UserService: UserService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getUserById()
  }
  getUserById() {
    this.UserService.getUserById(this.id).subscribe((result) => {
      this.user = result.user
    })
  };


};
