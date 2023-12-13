import { Component, OnInit } from '@angular/core';
import { DataServerService } from '../data-server.service';
import { response } from 'express';
import { Subject, debounce, debounceTime, switchMap } from 'rxjs';
import { Result } from 'express-validator';
@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

error:string="";
message:string="";
private searchTerms= new Subject<string>();
searchResult:any;

  constructor(private Data: DataServerService) {

    this.searchTerms.pipe(
      debounceTime(500),
      switchMap(term => this.Data.searchByName(term))
    ).subscribe(Result =>{  this.searchResult= Result; console.log(this.searchResult)})
  }
  onSearchInput(event: any): void {
    this.searchTerms.next(event.target.value);
  }
public itemes:any;
public title:string="";


  ngOnInit(): void {

// this.Data.getItem().subscribe(
//   (data)=>{ console.log("data access");
// this.itemes=data;
// }
// )
this.Data.searchByName(this.title).subscribe(
  {
    next: (response)=>{
this.error=""
this.message=""
this.searchResult=response
},
error: (error: any) =>{
      this.message="",
      this.error=error},
complete: ()=>{}
  })

}
searchItem(){
  this.Data.searchByName(this.title).subscribe(
    {
      next: (response)=>{
  this.error=""
  this.message=""
  this.itemes=response
  },
  error: (error: any) =>{
        this.message="",
        this.error=error},
  complete: ()=>{}
    })
}

}


// yourService.getItem().subscribe(
  //   (data) => {
    //     // Handle successful response
    //     console.log(data);
    //   },
    //   (error) => {
      //     // Handle error
//     console.error(error);
//   }
// );

// dealsArray:any =[{path:"../../assets/images/deals/img.png",title:"Burges&Pizza",time:"40-60 min .$24 min sum",item:{path:"",name:"burger"}},
// {path:"../../assets/images/deals/img mask.png",title:"shushi",time:"30-40 min .$32 min sum",item:{path:"",name:"shishi"}},
// {path:"../../assets/images/deals/img1 mask.png",title:"Ninja sushi",time:"20-40 min .$40 min sum",item:{path:"",name:"sushi"}}
// ]
