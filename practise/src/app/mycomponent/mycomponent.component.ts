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
    // getUserValue(value: any)
    // {
    //   console.warn(value)
    // }


    // @Output() parentcomponent:EventEmitter<any> =new EventEmitter
    //   used to send data child to parent
 

    





    // students=[


    //   {
    //     ID : 'std1' , FirstName: 'Harsh' , LastName:'Darji', Branch:'CSE' , DOB:'17/02/2000',Gender:'Male' 
    //   },
      
    //  {
    //      ID: 'std102', FirstName: 'Anurag', LastName: 'Mohanty', 
    //      Branch: 'ETC', DOB: '23/05/1989', Gender: 'Male'
    //  },
    //  {
    //      ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', 
    //      Branch: 'CSE', DOB: '24/07/1992', Gender: 'Female'
    //  },
    //  {
    //      ID: 'std104', FirstName: 'Navneet', LastName: 'Pal', 
    //      Branch: 'ETC', DOB: '19/08/1990', Gender: 'Female'
    //  },
    //  {
    //      ID: 'std105', FirstName: 'Sambit', LastName: 'Satapathy', 
    //      Branch: 'CSE', DOB: '12/94/1991', Gender: 'Male'
    //   },
      // {
      //   name:'harsh',
      //   age:25
      // },
      // {
      //   name:'tushar',
      //   age:27
      // },
    // ]
 
   constructor() { }

   ngOnInit(): void {

    // this.parentcomponent.emit("{name:'harsh',age:21}")

   }

   senddata(){

    // let item={name:'harsh' , age:21}
    // this.parentcomponent.emit(item)
   }

  }