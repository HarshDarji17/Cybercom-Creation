import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   
   name = 'harsh darji'
   today =Date.now()
   str = 'hello angular'
   val = '10'

}
