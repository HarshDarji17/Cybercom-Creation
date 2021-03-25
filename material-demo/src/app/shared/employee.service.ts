import { FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
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
}
