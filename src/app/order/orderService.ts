import { HttpClient } from '@angular/common/http';
import { ApplicationRef, Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';
import {Order} from './Order'
@Injectable({
  providedIn: 'root'
})
export class OrderService {
public baseUrl:string = "http://localhost:9595/onlinepizza"
  constructor(private http:HttpClient) { }
 
  getAllOrders():Observable<Order[]>{
     return  <Observable<Order[]>>this.http.get(this.baseUrl + "/admin/orders")
    
  }
}