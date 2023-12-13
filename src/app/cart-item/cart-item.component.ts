import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataServerService } from '../data-server.service';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
carts:any[]=[];
itemes:any;
qty:any;
error:string="";
message:string="";
qtyMap: { [productId: number]: number } = {};
  constructor(private data: DataServerService) { }

  ngOnInit(): void {
    this.data.getItem().subscribe(
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
  this.fetch()
  }

  fetch(){
    this.data.getItem().subscribe(
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

  addToCart(title:string,qty:number){
    this.carts.push({title,qty});
    console.log(this.carts)

  }

}
