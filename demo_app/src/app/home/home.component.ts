import { Component, OnInit , Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
   @Input() childpost : any;
    name = 'harsh';
    
  constructor() { }

  ngOnInit(): void {
    // this.a=this.childmsg
  }

}
