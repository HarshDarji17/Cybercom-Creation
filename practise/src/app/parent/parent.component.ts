import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentPosts:any[] = [];
   post='';
   
  constructor() { }

  ngOnInit(): void {
  }

  AddPost(post: any){
    console.log(post)
    this.parentPosts.push(post)
  }

  childEvent(){
    alert("child event has  been passed")
  }
 }
