import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child-deals',
  templateUrl: './child-deals.component.html',
  styleUrls: ['./child-deals.component.css']
})
export class ChildDealsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() imagesDeals:any="";
@Input() titleDeals:any="";
@Input() timeDeals:any="";
@Input() itemDeal:any="";
}
