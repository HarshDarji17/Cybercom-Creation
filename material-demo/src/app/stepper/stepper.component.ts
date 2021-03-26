import { FormGroup , FormBuilder,Validators,FormControl} from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  
})
export class StepperComponent implements OnInit {

  profileFormGroup: FormGroup;
  addressFormGroup:FormGroup;
  isLinear = false;
  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {

       // build profileformgroup
    this.profileFormGroup=this.fb.group({
      name:['',Validators.required]
    });

     // build addressformgroup
    this.addressFormGroup=this.fb.group({
      address: ['',Validators.required]
    });
  }

}
