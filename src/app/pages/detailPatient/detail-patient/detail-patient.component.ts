import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import { Patient } from 'src/app/model/Patient';
import { PatientService } from 'src/app/shared/services/patient/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.component.html',
  styleUrls: ['./detail-patient.component.scss']
})
export class DetailPatientComponent implements OnInit {
  
  @Input() patientRempl: Patient;
  @Output() objectToSend = new EventEmitter<Patient>();
  constructor(private servicePatient: PatientService , private router: Router) { }

  ngOnInit(): void {
    //this.patientRempl=this.servicePatient.patientRemp;
  }
  consulter(){
    setTimeout(() => 
    {
    this.router.navigate(['/detailPatient']);
    },
    2000);
  }
  sendObject(){
    this.objectToSend.emit(this.patientRempl);
  }

}
