import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-dform',
  templateUrl: './template-dform.component.html',
  styleUrls: ['./template-dform.component.css']
})
export class TemplateDformComponent  {

  
  // dropdown menu data
  contactMethod = [
    { id: 1, name: 'Email1' },
    { id: 2, name: 'Email2' },
    { id: 3, name: 'Email3' },
    { id: 4, name: 'Email4' },
    { id: 5, name: 'Email5' }
  ];

  // radio button
  rMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' }
  ];

  
  // for display entered data
  fn!: String;
  log1(y: String) {
    this.fn = y;
  };

}