import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { DataServerService } from '../data-server.service';

@Component({
  selector: 'app-personal-comp',
  templateUrl: './personal-comp.component.html',
  styleUrls: ['./personal-comp.component.css']
})
export class PersonalCompComponent implements OnInit {

information:any;

users={
  username:"",
  email:"",
  password:"",
}
checket={
  newdeals:false
}
  constructor(private router: Router, private data: DataServerService) { }


  ngOnInit(): void {
   const info = localStorage.getItem('info');
    if(info){
      this.information= JSON.parse(info);
      this.users={
        username:this.information.user,
        email:this.information.email,
        password:this.information.password
      }
    }else{
      console.log("Error");
    }

  }
  logOut(){
    this.router.navigate(['/login']);
    localStorage.removeItem('info');
  }
  onSubmit(){
    console.log(this.checket)
  }

onUpdateData(): void {
  const updatedData= this.users;
  const userId= this.information.id;
  console.log(updatedData);
  console.log(userId)
  this.data.updateUser(userId, updatedData).subscribe({
    next: (response) => {
      console.log('Update successful:', response);

    },
    error: (error) => {
      console.error('Update failed:', error);

    },
    complete: ()=>{}
  }
    );
  }

}
