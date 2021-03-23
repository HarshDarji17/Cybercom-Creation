import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ConfirmedValidator } from './../../common/custom.validators';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
    form;
   userSubmittted:boolean;
  constructor( private fb:FormBuilder) { 

  this.form = this.fb.group({
    name:['' , [Validators.required,
             Validators.minLength(5),
             Validators.maxLength(15),
             Validators.pattern("^[a-zA-Z]+(?: [a-z|A-Z]+)*$")]],

    email:['',  [ Validators.required ,
                  Validators.pattern("^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$"),
                  Validators.email,
                  ]   
    ],

    
    confirmemail:['', [Validators.required,
      Validators.pattern("^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$")]],


    degree:['',Validators.required],
    date:['',Validators.required],
    country:['',Validators.required],
    state:['',Validators.required],
    city:['',Validators.required]


  } , {validator : ConfirmedValidator('email', 'confirmemail') } );

  }
  ngOnInit(): void {
  }
     //its not worked
  emailMatchingValidatior(fb:FormBuilder):Validators {
       return fb.control('email').value === fb.control('confirmemail').value?null :
       {notmatched:true};
  }
  
   // get firstname
   get name() {
    return this.form.get('name');
  }
  
  
  
  // get email
  get email() {
    return this.form.get('email');
  }

  // get  confirmemail
  get confirmemail() {
    return this.form.get('confirmemail');
  }

   // get gradution degree 
   get  degree () {
    return this.form.get(' degree');
  }

  // get Date
  get date() {
    return this.form.get('date');
  }

  // get country
  get  country () {
    return this.form.get('country');
  }

  // get state
  get  state () {
    return this.form.get(' state');
  }

  // get city
  get city  () {
    return this.form.get(' city');
  }

  onSubmit(){
    console.log(this.form.value)
    this.userSubmittted=true;
      }
  }

  
 




