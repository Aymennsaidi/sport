import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL = 'http://localhost:3000/api/users'
  constructor(private httpClient: HttpClient) { }
  signup(user: any, img: File) {
    let formData = new FormData();
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("role", user.role);
    formData.append("TEL", user.TEL);
    formData.append("img", img);

    return this.httpClient.post<{ message: any }>(this.userURL + '/signup', formData);
  }
  getAllUsers() {
    return this.httpClient.get<{ users: any }>(this.userURL);
  }
  login(userLogin: any) {
    return this.httpClient.post<{ message: string, user: any }>(this.userURL + '/login', userLogin);
  }
  getUserById(id: any) {
    //http://localhost:3000/api/user/1
    return this.httpClient.get<{ user: any }>(`${this.userURL}/${id}`);
  }
  deleteUser(id: any) {
    return this.httpClient.delete<{ user: any }>(`${this.userURL}/${id}`);
  }
  // updateUsers(users: any) {
  //   return this.httpClient.put<{ message: any }>(this.userURL, users);
  // }
  editProfile(user: any) {
    return this.httpClient.put<{ message: any }>(this.userURL, user);
  }
};