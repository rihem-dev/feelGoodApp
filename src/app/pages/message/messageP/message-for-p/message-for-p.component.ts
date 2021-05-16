import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-for-p',
  templateUrl: './message-for-p.component.html',
  styleUrls: ['./message-for-p.component.scss']
})
export class MessageForPComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  closeMessage(){
    setTimeout(() => 
    {
    this.router.navigate(['/consulterPatient']);
    },
    2000);
  }
}
