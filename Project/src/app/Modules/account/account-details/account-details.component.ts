import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
     form;
  constructor( private fb:FormBuilder) { 
  this.form = this.fb.group({
    name:['' , Validators.required],

    email:['',  Validators.required]   
    
  });

  }

    
  ngOnInit(): void {
  }
  onSubmit(){

  }
  // get firstname
  get name() {
    return this.form.get('name');
  }
  // get firstname
  get email() {
    return this.form.get('email');
  }

}
