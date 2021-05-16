import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/model/Patient';
import { PatientService } from 'src/app/shared/services/patient/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpatient',
  templateUrl: './createpatient.component.html',
  styleUrls: ['./createpatient.component.scss']
})
export class CreatepatientComponent implements OnInit {
 patient: Patient;
 isSuccess: boolean;
 
  constructor(private patientservice: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.patient= new Patient();
  }

  savePatient(){
    this.patientservice.postpatient(this.patient).subscribe((response) =>console.log("patient has been added"));
    //this.patientservice.patientRemp=this.patient;
    this.isSuccess=true;
  }
  close(){
    setTimeout(() => 
    {
    this.router.navigate(['/consulterPatient']);
    },
    2000);
  }
}
