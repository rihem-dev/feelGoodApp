import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from 'src/app/model/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  url="http://localhost:3000/patients";
  patientRemp: Patient;
  constructor(private http: HttpClient) { }

  postpatient(patient: Patient){
    return this.http.post(this.url, patient);
  }
  getPatient(){
    return this.http.get<Patient[]>(this.url);
  }
  deletePatient(id){
    return this.http.delete(`${this.url}/${id}`)
  }
}
