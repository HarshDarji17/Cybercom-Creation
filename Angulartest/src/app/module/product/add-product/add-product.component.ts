import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit { 
  form;

  constructor(private fb:FormBuilder) {


    this.form = this.fb.group({
      catagory:['' , Validators.required],

     product :['', Validators.required],
     
     price:['', Validators.required]
  
      
  });

}

  ngOnInit(): void {
  }
  
  get catagory () {
    return this.form.get('catagory');
  }
  get product () {
    return this.form.get('product');
  }
  get price () {
    return this.form.get('price');
  }

  onSubmit(){
    let data  = [] ;

    if(localStorage.getItem('user'))
    {
      data = JSON.parse(localStorage.getItem('user'));
      
    }
    
    const pData = [
      this.form.value
      ]
  
     data.push(pData)
     localStorage.setItem('user', JSON.stringify(data))
      console.log(pData);
      alert('Data submitted Successfully');
      
  }
}
