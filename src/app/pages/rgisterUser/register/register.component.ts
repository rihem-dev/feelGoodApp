import { Component, OnInit } from '@angular/core';
import { UserPatient } from 'src/app/model/userPatient';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 userPatient: UserPatient;
 isSuccess: boolean;
  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userPatient= new UserPatient();
    this.isSuccess=false;
  }
  findbyemail(){

  }
  saveuser(){
    this.userservice.postuser(this.userPatient).subscribe((response) =>console.log("user has been added"));
    this.isSuccess=true;
    setTimeout(() => 
    {
    this.router.navigate(['/consulterUser']);
    },
    2000);
   
    
  }

}
