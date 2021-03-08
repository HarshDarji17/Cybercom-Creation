import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

   url = 'https://products-22c37-default-rtdb.firebaseio.com/products.json';

      // create custome header for every request for change contant type

      private headers =  new HttpHeaders({'content-Type' : 'application/json'})
  constructor( private http:HttpClient) { }

   // use post() for save data to server  but u can add product then generate the new file.
   // use put()   as a same post method but for u can add more data but store as a one file.

   saveProducts(products:any[]){

     //  return  this.http.post(this.url,products );

    return  this.http.put(this.url,products , {headers : this.headers});
   }

   fetchProducts(){
     return this.http.get(this.url)
   }
   deleteProduct() {
    return this.http.delete(this.url);
  }  
}
