import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/core/services/deactivate/candeactivate.guard';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements CanComponentDeactivate {

  constructor() { }

  canDeactivate(): Observable<boolean> | boolean {
    return confirm('Are you sure you want to Navigate ?');
  }

  ngOnInit(): void {
  }

}
