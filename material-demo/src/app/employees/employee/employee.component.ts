import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {EmployeeService} from '../../shared/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor ( private service:EmployeeService ) { }
   

  form:FormGroup = new FormGroup({
    $key:new FormControl(null),
    fullName:new FormControl(''),
    email:new FormControl(''),
    mobile:new FormControl(''),
    city:new FormControl(''),
    gender:new FormControl(''),
    department:new FormControl('0'),
    hireDate:new FormControl(''),
    isPermanent:new FormControl(false)
  });
  departments = [
    { id:3 , value: 'Dep 1'},
    { id:2 , value: 'Dep 2'},
    { id:3 , value: 'Dep 3'}
  ];

  ngOnInit(): void {
  }

}
