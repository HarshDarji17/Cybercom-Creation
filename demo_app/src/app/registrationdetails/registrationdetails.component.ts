import { DataService } from './../core/services/data/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrationdetails',
  templateUrl: './registrationdetails.component.html',
  styleUrls: ['./registrationdetails.component.css']
})
export class RegistrationdetailsComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  
  
  // recive data from service
  data = this.dataService.passData();

}
