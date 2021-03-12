
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  [x: string]: any;

  constructor(private fb: FormBuilder) { }

  //  form


  form = this.fb.group({
    cruis: this.fb.group({
      date: ['', Validators.required],
      participants: ['', Validators.required],
      food: this.fb.group({
        breakfast: [''],
        lunch: [''],
        dinner: ['']
      }),
      chooseOption: ['', Validators.required]
    }),
    contactInformation: this.fb.group({
      fullName: this.fb.group({
        firstName: [''],
        lastName: ['']
      }),
      email: [''],
      phone: this.fb.group({
        code: [''],
        number: ['']
      }),
      additionalRequests: ['']
    })
  });


  // if contact information is yes, then set validation

  onChangeOption() {
    if (this!.chooseOption!.value == 'yes') {
      this!.firstName!.setValidators([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern("^[a-zA-Z]+(?: [a-z|A-Z]+)*$")
      ]);
      this!.firstName!.updateValueAndValidity();

      this!.lastName!!.setValidators([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern("^[a-zA-Z]+(?: [a-z|A-Z]+)*$")
      ]);
      this!.lastName!.updateValueAndValidity();
      this!.email!.setValidators([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
      ]);
      this!.email!.updateValueAndValidity();

      this!.code1.setValidators([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(6),
        Validators.pattern("^[0-9]*$")
      ]);
      this!.code!.updateValueAndValidity();

      this!.number!.setValidators([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^[6-9][0-9]*$")
      ]);
      this!.number!.updateValueAndValidity();
    }
    else {
      this!.firstName!.clearValidators();
      this!.firstName!.updateValueAndValidity();

      this!.lastName!.clearValidators();
      this!.lastName!.updateValueAndValidity();

      this!.email!.clearValidators();
      this!.email!.updateValueAndValidity();

      this!.code!.clearValidators();
      this!.code!.updateValueAndValidity();

      this!.number!.clearValidators();
      this!.number!.updateValueAndValidity();

    }
  }

  onSubmit(){

    alert("Data Submitted Successfully !!")
  }

  ngOnInit(): void {
  }


  // get  form controls:

  get date() {
    return this.form.get('cruis.date');
  }

  get participants() {
    return this.form.get('cruis.participants');
  }
  get food() { return this.form.get('cruis.food')}
  get chooseOption() { return this.form.get('cruis.chooseOption'); }
  get firstName() { return this.form.get('contactInformation.fullName.firstName') }
  get lastName() { return this.form.get('contactInformation.fullName.lastName') }
 
  get email() { return this.form.get('contactInformation.email') }
  get code() { return this.form.get('contactInformation.phone.code') }
  get number() { return this.form.get('contactInformation.phone.number') }
  }