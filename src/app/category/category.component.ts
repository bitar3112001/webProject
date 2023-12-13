import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
array1:any=[
{path:"./assets/images/category/cake.png",name:"cake"},
{path:"./assets/images/category/broccoli.png",name:"broccoli"},
{path:"./assets/images/category/burger.png",name:"burger"},
{path:"./assets/images/category/pizza.png",name:"pizza"},
{path:"./assets/images/category/sushi.png",name:"sushi"},
]
  ngOnInit(): void {
  }

}
