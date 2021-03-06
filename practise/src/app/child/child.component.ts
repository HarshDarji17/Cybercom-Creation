import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

 @Input() childposts:any[] =[];   // childposts is input  decorate

 @Output() PassedEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  PassEvent(){
        this.PassedEvent.emit();
  }

}
