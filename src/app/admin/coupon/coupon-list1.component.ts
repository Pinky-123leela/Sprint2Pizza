import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/coupons/Coupon';
import { CouponService } from 'src/app/coupons/couponService';
 

@Component({
  selector: 'app-coupon-list1',
  templateUrl: './coupon-list1.component.html',
  styleUrls: ['./coupon-list1.component.css']
})
export class AdminCouponListComponent implements OnInit {
  public coupons!:Coupon[]
 
  private error! : string
  private id:number=0;
  constructor(private service:CouponService,private router:Router) { }
   
    ngOnInit(): void {
       this.service.getAllCoupons().subscribe(
        (data)=>this.coupons = data,
        (err)=>this.error = err
   
      )  
   
    }
    onEdit(coupon:Coupon){this.router.navigate(['edit-coupon',coupon.id])}
    
    onDelete(coupon:Coupon):void{
       this.service.deleteCouponById(coupon.id)
          .subscribe( data => {
            console.log("coupon deleted")
                 this.coupons = this.coupons.filter(u => u !== coupon);
                })
            };
    
            
    addCoupon(){
      this.router.navigate(['add-coupon'])
   
    }
          
        
      
    
  }
  

