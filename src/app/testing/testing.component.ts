import { Component, OnInit } from '@angular/core';
import { PreferencesService } from '../preferences.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor(private p: PreferencesService) { }

  ngOnInit(): void {
    this.p.setKeepLogIn(false);
   this.p.getKeepLogIn()
  }

}
