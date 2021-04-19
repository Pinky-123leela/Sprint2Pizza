import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from '../pizza/Pizza';
import { Cart } from './cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  // pizzaList!:Pizza[]
  @Input() pizzaItem !: Pizza
  cartItems : Cart[] =[];
  pizzaId!:number;
  constructor() {}

  ngOnInit(): void {
}
}
