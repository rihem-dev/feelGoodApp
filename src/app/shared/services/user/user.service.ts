import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserPatient } from 'src/app/model/userPatient';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:3000/users";
  userRempl: UserPatient;
  constructor(private http: HttpClient) { }
  postuser(user: UserPatient){
    console.log(user);
    return this.http.post(this.url, user);
  }
  getuser(){
    return this.http.get<UserPatient[]>(this.url)
  }
  deleteUser(id){
    return this.http.delete(`${this.url}/${id}`)

  }
  updateUsrr(user: UserPatient){
    return this.http.put(`${this.url}/${user.id}`,user);

  }
}
