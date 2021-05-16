import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Router } from '@angular/router';
import { UserPatient } from 'src/app/model/userPatient';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  usrRemp: UserPatient;
  isSuccess: boolean;
  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
    this.usrRemp=this.userservice.userRempl;
  }
  updateUsr(usrRemp){
    this.userservice.updateUsrr(usrRemp).subscribe((response) =>console.log("user has been modified"));
    this.isSuccess=true;
    setTimeout(() => 
    {
    this.router.navigate(['/consulterUser']);
    },
    2000);
  }
}
