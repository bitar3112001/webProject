import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServerService } from '../data-server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
 myForm:any;
 information:any;

  constructor(private formBuilder: FormBuilder,private data: DataServerService,private router: Router) {

   }

  ngOnInit(): void {
    const info = localStorage.getItem('info')
    if(info) {this.information= JSON.parse(info)}

    this.myForm= this.formBuilder.group({
      title: ['',Validators.required],
      time: ['',Validators.required],
      price: ['',Validators.required],
      category: ['',Validators.required],
      user_id:[this.information.id]
    })
  }
  get f(){
    return this.myForm.controls
  }
  onSubmit(){
    this.data.addItem(this.myForm.value).subscribe();
    console.log(this.myForm.value);
    this.myForm= this.formBuilder.group({
      title: ['',Validators.required],
      time: ['',Validators.required],
      price: ['',Validators.required],
      category: ['',Validators.required],
      user_id:[this.information.id]
    })
    this.router.navigate(['/addItem']);

  }

}
