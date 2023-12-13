import { Component, OnInit } from '@angular/core';
import { PreferencesService } from 'src/app/preferences.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {

  constructor(private p: PreferencesService) { }

  ngOnInit(): void {
    this.p.getKeepLogIn()
  }

}
