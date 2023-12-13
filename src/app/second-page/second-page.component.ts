import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  constructor(public route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
       const key = params.get('id');
      // window.alert(key);
    })
  }




}
