import { Component, OnInit } from '@angular/core';
import { DataServerService } from '../data-server.service';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
error:string="";
message:string="";
itemes:any[] =[];
itemesfilter:any[] =[];
public key:any="";
idUser:number=0;
newTime:string="";
userInfo:any;
deletingStatus: { [key: number]: boolean } = {};
  constructor(private data: DataServerService,public route: ActivatedRoute) { }

  ngOnInit(): void {
    const info= localStorage.getItem('info');
    if(info){
      this.userInfo= JSON.parse(info)
    }

  //   this.route.paramMap.subscribe(params =>{
  //     this.key = params.get('id');
  //    // window.alert(key);
  //  })
this.idUser= parseInt(this.userInfo.id)
this.fetch(this.idUser);
}

fetch(id:number){
  this.data.getItemByUserId(id).subscribe(
    {
      next: (response)=>{
        this.error=""
        this.message=""
        this.itemes=response;
      },
      error: (error: any) =>{
        this.message="",
        this.error=error},
        complete: ()=>{}
      });

    }


deleteItem(id:number):void{

    this.data.deleteItem(id).subscribe({
      next: (response)=>{
        this.error=""
        this.message=""
        // this.fetch(this.idUser)
        this.itemes = this.itemes.filter(item => item.id !== id);

        },
        error: (error: any) =>{
              this.message="",
              this.error=error},
        complete: ()=>{}
          }
    );
    // window.location.reload();

  }
  updateTime(id:number,time:string){
    this.data.updateItemTime(id,time).subscribe({
      next: (response)=>{
        this.error=""
        this.message=""
        this.itemes.map(item =>{
          if (item.id==id){
            item.time= time;
          }
        })
        console.log(id,time);
        },
        error: (error: any) =>{
              this.message="",
              this.error=error},
        complete: ()=>{}

        });
    // window.location.reload();

  }


    }



