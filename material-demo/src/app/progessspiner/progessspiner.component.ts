import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-progessspiner',
  templateUrl: './progessspiner.component.html',
  styleUrls: ['./progessspiner.component.css']
})
export class ProgessspinerComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  showSpinner = false;
  constructor() { }

  ngOnInit(): void {
  }

  loadData() {
    this.showSpinner = true ;

    setTimeout(() => {
      this.showSpinner = false;
    } , 5000);
  }
}
