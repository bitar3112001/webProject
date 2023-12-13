import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child-category',
  templateUrl: './child-category.component.html',
  styleUrls: ['./child-category.component.css']
})
export class ChildCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

@Input() imagePath=[] ;
@Input() categoryName=[] ;

}
