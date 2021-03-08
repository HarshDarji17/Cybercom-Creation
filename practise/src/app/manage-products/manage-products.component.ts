import { ProductsService } from './../appservicses/products.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  constructor( private  productssevice: ProductsService) { }   // inject the service

  dataTitle = "ABC Products";

    featching = false;
    @ViewChild('id')
    id!: ElementRef;
    @ViewChild('name')
    name!: ElementRef;
    @ViewChild('price')
    price!: ElementRef;
    
    
    editMode:boolean = false;
    editIndex!: number;
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
     if(this.editMode){

      this.products[this.editIndex] = {
        id : id.value,
        name : name.value,
        price : price.value
      }

      this.editMode = false;
      this.id.nativeElement.value = '';
   this.name.nativeElement.value = '';
   this.price.nativeElement.value = '';
     }
     else{
      this.products.push({
        id: id.value,
        name: name.value,
        price:price.value
      })
     }
     this.onSaveProduct()
  }

  onSaveProduct(){
    this.productssevice.saveProducts(this.products).subscribe(  // generate observbles then not the send data in server use subscribe method.
    (response) =>  console.log(response),
    (err)=>console.log(err)
    )
  }

  onFetchProduct(){
    this.featching = true;
    this.productssevice.fetchProducts().subscribe(
       (response) => { //console.log(response)   // first  objecct to data convert into string json stringlyfy
      const data = JSON.stringify(response)
      // console.log(data)
      this.products = JSON.parse(data)
      this.featching=false
      },
      (err)=>console.log(err) 
    )
  }

  onDeleteProduct(id: any){
    if(confirm("Do you want to delete this product?")){
       
          this.products.splice(id,1)
          this.onSaveProduct();
        }
  }
 

  onEditProduct(index:number){
    this.editMode = true;
    this.editIndex = index;
  console.log(this.products[index])
   this.id.nativeElement.value = this.products[index].id;
   this.name.nativeElement.value = this.products[index].name;
   this.price.nativeElement.value = this.products[index].price;
  }
  
  ngOnInit(): void {
  }

}
