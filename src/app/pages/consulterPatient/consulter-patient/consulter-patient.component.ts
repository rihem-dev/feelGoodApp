import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/Patient';
import { PatientService } from 'src/app/shared/services/patient/patient.service';

@Component({
  selector: 'app-consulter-patient',
  templateUrl: './consulter-patient.component.html',
  styleUrls: ['./consulter-patient.component.scss']
})
export class ConsulterPatientComponent implements OnInit {
  listPatients: Patient[];
  isSuccess: boolean;
  constructor( private router: Router, private servicePatient: PatientService) { }

  ngOnInit(): void {
    this.servicePatient.getPatient().subscribe( (data: Patient[])=> this.listPatients=data);
  }
  addPatient(){
    setTimeout(() => 
    {
     this.router.navigate(['/createPatient']);
    },
    1000);
  }
  deletePatient(patient: Patient){
    this.servicePatient.deletePatient(patient.id).subscribe((response) =>console.log("user has been deleted"));
    this.isSuccess=true;
    setTimeout(() => 
    {
     this.router.navigate(['/messageP']);
    },
    1000);
    console.log('test');
  }
  
  
}
