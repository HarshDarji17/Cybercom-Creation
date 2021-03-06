import { Component, OnInit , Input , Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {

    name = 'harsh'    
    disabledbox=true;
    show = 'green'
    color ='red'

   error  = 'true';

    enablebox(){
      this.disabledbox = false
    }

  

    updatecolor(){
      this.color="orange"
    }

    // @Input()  hero: any   used for pass data parene to child
    // // simple form to get value
    getUserValue(value: any)
     {
       console.warn(value)
     }


    // @Output() parentcomponent:EventEmitter<any> =new EventEmitter
    //   used to send data child to parent
 constructor() { }

   ngOnInit(): void {

    // this.parentcomponent.emit("{name:'harsh',age:21}")

   }

   senddata(){

    // let item={name:'harsh' , age:21}
    // this.parentcomponent.emit(item)
   }

  }