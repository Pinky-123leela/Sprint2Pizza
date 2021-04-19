import { Component,  OnInit } from '@angular/core';
import { OrderService } from './orderService';
import { Order } from './Order'
import { Router } from '@angular/router';
import { Customer } from '../customer/Customer';

@Component({
  
  templateUrl:'./order.component.html'
  
})

export class OrderComponent implements OnInit {
    public orders!:Order[]
    public customer!:Customer
   
    private error! : string
    private id:number=0;
    constructor(private service:OrderService,private _router:Router) { }
     
      ngOnInit(): void {
         this.service.getAllOrders().subscribe(
          (data)=>{
            console.log(data);
          
            this.orders = data;
          },
          (err)=>this.error = err
     
        )  
        
        }
        onBack(){
          this._router.navigate(['admin'])
        }
    
      }



