import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from './Pizza';
import { MessengerService } from 'src/app/service/messenger.service'
import { Router } from '@angular/router';
import { Cart } from '../cart/cart';
@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css']
})
export class PizzaItemComponent implements OnInit {

  @Input() pizzaItem !: Pizza
  selectedLevel!:any
  qty=0
  pizzaSize:string=''
  cost!:number;
  totalCost:number=0;
  pizza!:Pizza
  constructor(private msg : MessengerService, private route: Router) { }
  cartItems:Array<Cart> = []
  ngOnInit(): void {
  }

  addToCart(pizzaId : number){
    console.log(pizzaId)    
    localStorage.setItem('pizzaId',JSON.stringify(pizzaId))
    localStorage.setItem('pizzaSize', this.pizzaSize)
    localStorage.setItem('cost', JSON.stringify(this.cost))

    this.cartItems.push({
      //cartId : 1,
      pizzaId : this.pizzaItem.id,
      pizzaSize : this.pizzaSize,
      quantity : this.qty+1,
    })
    console.log(this.cartItems)
    console.log("calling cost function")
    //this.calculateCost();
  }
  selected(){
    console.log(this.selectedLevel)
  }

  sizeClicked(pizzaSize:string,cost:number){
    console.log(pizzaSize, cost);
    this.pizzaSize= pizzaSize;
    this.cost = cost;
  }

  // calculateCost(){
   
  //   console.log(this.cost)
  //   this.totalCost+=this.cost
  //   console.log(this.totalCost)
  // }
}

