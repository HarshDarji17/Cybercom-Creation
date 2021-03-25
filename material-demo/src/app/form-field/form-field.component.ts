import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';



// Error  dirty, touched, or submitted and email required
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent  {
 
  hide = true;  // used password property
  constructor() { }

  // email required contrls
  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  // show email required
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  //email required
  matcher = new MyErrorStateMatcher(); 
  
  // size changes
  fontSizeControl = new FormControl(28, Validators.min(10)); 
 
  
 
  getFontSize() {
    return Math.max(10, this.fontSizeControl.value);
  }
 

}
