import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css']
})
export class AccountSettingComponent implements OnInit {
c1=1
c2=1
  constructor() { }

  GetValue(value : string){
    return value;
  }

  ngOnInit(): void {
    this.c1 = window.innerWidth / 40;
    this.c2 = window.innerHeight /40;

  }
  @Input() imagesDeals:any="";
  @Input() titleDeals:any="";
  @Input() timeDeals:any="";
  @Input() itemDeal:any="";
  }

