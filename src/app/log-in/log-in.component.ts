import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { DataServerService } from '../data-server.service';
import { Token } from '@angular/compiler';
import { PreferencesService } from '../preferences.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
private users:any;
 user = {
  email: '',
  password: ''
};
information:any
i:any;
error:string="";
message:string="";

  constructor(private router:Router, private data: DataServerService, private p: PreferencesService) { }
keepLogIn = this.p.getKeepLogIn() //1
  ngOnInit(): void {
    // this.data.getUser().subscribe(
    //   (data)=>{ console.log("data access");
    //   this.users=data;
    //   }
    // )

    if(this.p.getKeepLogIn()){       //2
      const info = localStorage.getItem('info');
      if(info){
        this.information= JSON.parse(info);
        this.user={
          email:this.information.email,
          password:this.information.password
        }

      }else{
        console.log("Error");
      }
    }else{
      this.user = {
        email: '',
        password: ''
      };
    }


  }
//   onSubmit(){
// this.data.getUserId(this.user.email,this.user.password).subscribe(
//   (data)=>{
//     if (data.length==1){
//       localStorage.setItem("info",JSON.stringify(data));
//       console.log(data)
//       this.router.navigate(['/secondPage'])}
//     else{
//       console.log("try again");
//     }
//   }
// )}
moveToHome(id: string){
  this.router.navigate(['/secondPage',id]);
}

onSubmit(){
  this.data.getUserEmail(this.user.email,this.user.password).subscribe(
    {
next: (response: any)=>{
this.error="",
this.message="";
    if (response.length==1){
      localStorage.setItem("info",JSON.stringify(response[0]));
      console.log(response),
      this.p.setKeepLogIn(this.keepLogIn)
      console.log(this.keepLogIn)
      this.moveToHome(response[0].id)
    }
    else{
      console.log("try again");
    }
console.log(response);
},
error:(error: any) =>{
this.message="",
this.error=error
},
complete:()=>{}
}
)
  //3
}

  }

