import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.css']
})
export class UsersTabComponent implements OnInit {
  usersTab:any=[];
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this.userService.getAllUsers().subscribe((result) => {
      this.usersTab = result.users
    })
  };
  displayUser(id: number) {
    this.router.navigate([`info/${id}`]);
  };
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe((result) => {
      this.getAllUsers();
    });
  };
}

