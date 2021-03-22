import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
    form;
  constructor( private fb:FormBuilder) { 

  this.form = this.fb.group({
    name:['' , [Validators.required,
             Validators.minLength(5),
             Validators.maxLength(15),
             Validators.pattern("^[a-zA-Z]+(?: [a-z|A-Z]+)*$")]],

    email:['',  [ Validators.required ,
      Validators.pattern("^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$"),
      Validators.email]   
    ],

    
    confirmemail:['', [Validators.required,
      Validators.pattern("^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$")]],
    degree:['',Validators.required],
    date:['',Validators.required],
    country:['',Validators.required],
    state:['',Validators.required],
    city:['',Validators.required]


  });

  }
  ngOnInit(): void {
  }

  
   // get firstname
   get name() {
    return this.form.get('name');
  }
  
  
  
  // get email
  get email() {
    return this.form.get('email');
  }

  // get email
  get confirmemail() {
    return this.form.get('confirmemail');
  }

   // get firstname
   get  degree () {
    return this.form.get(' degree');
  }




  // get Date
  get date() {
    return this.form.get('date');
  }

  // get firstname
  get  country () {
    return this.form.get('country');
  }

  // get firstname
  get  state () {
    return this.form.get(' state');
  }

  // get firstname
  get city  () {
    return this.form.get(' city');
  }

  onSubmit(){
    if(this.form.valid){
    
    console.log(this.form.value);
    }else{
      console.log()
    }

  }

}
