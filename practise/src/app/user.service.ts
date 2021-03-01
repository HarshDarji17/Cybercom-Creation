import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {dataType } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // getData(){
  //   const data:dataType={
  //    name:'harsh',
  //    id:1,
  //    indian:true,
  //    address:'vadagam 389230'
  //   }
  //   return data;
  // }


  constructor( private http:HttpClient) { }
  isAdminRights():boolean{
    return false;
  }
  isChildRights():boolean{
    return false;
  }
  getData(){
    let url="https://jsonplaceholder.typicode.com/todos/";
    return this.http.get(url);
  }
}

