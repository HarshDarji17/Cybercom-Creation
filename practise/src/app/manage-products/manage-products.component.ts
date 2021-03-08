import { ProductsService } from './../appservicses/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  constructor( private  productssevice: ProductsService) { }   // inject the service

  dataTitle = "ABC Products";

  products =[
    {
      id : 'p1',
      name: 'Laptop',
      price : 45000
    },
    {
      id : 'p2',
      name: 'Mobile',
      price : 45000
    },
    {
      id : 'p3',
      name: 'Laptop',
      price : 45000
    },{
      id : 'p4',
      name: 'Mobile',
      price : 13000
    },
  ]

  onAddProduct(id: { value: any; },name: { value: any; },price: { value: any; }){
     this.products.push({
       id: id.value,
       name: name.value,
       price:price.value
     })
  }

  onSaveProduct(){
    this.productssevice.saveProducts(this.products).subscribe(  // generate observbles then not the send data in server use subscribe method.
    (response) =>  console.log(response),
    (err)=>console.log(err)
    )
  }

  onFetchProduct(){
    this.productssevice.fetchProducts().subscribe(
       (response) => { //console.log(response)   // first  objecct to data convert into string json stringlyfy
      const data = JSON.stringify(response)
      // console.log(data)
      this.products = JSON.parse(data)
      },
      (err)=>console.log(err) 
    )
  }

  onDeleteProduct(id: any){
    if(confirm("Do you want to delete this product?")){
       
          this.products.splice(id,1)
    
        }
  }
  ngOnInit(): void {
  }

}
