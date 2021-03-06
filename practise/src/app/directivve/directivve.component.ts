import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivve',
  templateUrl: './directivve.component.html',
  styleUrls: ['./directivve.component.css']
})
export class DirectivveComponent implements OnInit {

  Students: any[];
    public choose='';  // defind choose variable in switch dire.
   isvalid:boolean=false;   //defind varible
   changevalue(valid: boolean){        
    this.isvalid=valid;
 

    
     
    

  }
  constructor() { 

     
    this.Students=[
      {
        studentid:1,
        name:'harsh',
        age:23,
        course:'ce'

      },
      {
        studentid:2,
        name:'premal',
        age:25,
        course:'it'

      },
      {
        studentid:3,
        name:'nirav',
        age:27,
        course:'ce'

      },
      {
        studentid:4,
        name:'japs',
        age:25,
        course:'ce'

      },
    ];

  }

  getmorestudents():void{
    this.Students=[
      {
        studentid:1,
        name:'harsh',
        age:23,
        course:'ce'

      },
      {
        studentid:2,
        name:'premal',
        age:25,
        course:'it'

      },
      {
        studentid:3,
        name:'nirav',
        age:27,
        course:'ce'

      },
      {
        studentid:4,
        name:'japs',
        age:25,
        course:'ce'

      },
      {
        studentid:5,
        name:'nir darji',
        age:25,
        course:'ce'

      },
    ];
  }

  ngOnInit(): void {
  }

  
  setvalue(drp:any)  // ngswich fn.
  {
      this.choose=drp.target.value;
  }
}
