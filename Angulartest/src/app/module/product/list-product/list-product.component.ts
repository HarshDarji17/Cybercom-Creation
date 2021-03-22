import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

 products;

  constructor() { }

  ngOnInit(): void {
   this.products =JSON.parse (localStorage.getItem("user"))
   console.log(this.products)
   
  }

}
