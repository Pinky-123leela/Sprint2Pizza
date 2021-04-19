import { Coupon } from "../coupons/Coupon";
import { Customer } from "../customer/Customer";
import { Cart } from "./Cart";

export interface Order{
 
    id:number;
    type:string;
    description:string;
    customer:Customer;
    transactionMode:string;
    localDate:Date;
    cart:Cart[];
    coupan : Coupon;
    totalCost:number;
 
}