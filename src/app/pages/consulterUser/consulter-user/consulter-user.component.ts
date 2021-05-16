import { Component, OnInit } from '@angular/core';
import { UserPatient } from 'src/app/model/userPatient';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-consulter-user',
  templateUrl: './consulter-user.component.html',
  styleUrls: ['./consulter-user.component.scss']
})
export class ConsulterUserComponent implements OnInit {
  listUsers: UserPatient[];
  isSuccess: boolean;
  constructor(private userservice: UserService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.userservice.getuser().subscribe( (data: UserPatient[])=> this.listUsers=data);
  }

  delete(id){
    this.userservice.deleteUser(id).subscribe((response) =>console.log("user has been added"))
    this.isSuccess=true;
    setTimeout(() => 
    {
     this.router.navigate(['/message']);
    },
    1000);
    console.log('test');
  }
  addUser(){
    setTimeout(() => 
    {
     this.router.navigate(['/register']);
    },
    1000);
  }
  updateUser(user){
    setTimeout(() => 
    {
     this.router.navigate(['/updateUser']);
    },
    1000);
    this.userservice.userRempl=user;
  }

}
