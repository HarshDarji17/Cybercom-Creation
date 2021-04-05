import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

    // Acess to the outer component with property binding
   @Input() boxColor='';
   @Input() placeholderText='';

   @Output() inputEvent = new EventEmitter()   // child data bind to parent

  count:number = 0;

  constructor() { }

 
  onCreate(inpVal:any){
    if(inpVal.value.length>0) {
      this.count=this.count+1;
      alert(inpVal.value);

      this.inputEvent.emit(inpVal.value)  // send data to parent 
    }
  
  }
}
