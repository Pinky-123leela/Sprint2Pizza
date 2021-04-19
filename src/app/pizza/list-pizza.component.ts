import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from './Pizza';
import { PizzaService } from './pizza.service';
import { PizzaCost } from './pizzaCost';
import { Subscription } from 'rxjs';
import { Cart } from '../cart/cart';


@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.css']
})
export class ListPizzaComponent implements OnInit{

  // @Input() pizza !: Pizza

  selectedLevel!:any
  quantity=0
  pizzaSize:string=''
  cost!:number;
  totalCost:number=0;
  cartTotal = 0
  id!:string
  cartItems:Array<Cart> = []
  constructor(private service : PizzaService) { }
  sub!: Subscription;
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    throw new Error('Method not implemented.');
  }
  
  pizzaList !: Pizza[];
  costList !: PizzaCost;

  ngOnInit(): void {
      
      this.sub = this.service.getAllPizzas().subscribe(
      (data)=>{
        console.log(data);
        this.pizzaList = data;
      }
    )
  }
  
//   calculateCost(){
//     this.cartTotal = 0
//     this.cartItems.forEach(item => {
//       this.cartTotal += (item.quantity * this.cost)
//       console.log("cart total :" +this.cartTotal)
//     })
//     console.log(this.cost)
//     this.totalCost+=this.cost
//     console.log(this.totalCost)
//   }
// }

addToCart(pizzaId : number,quantity:number){
  console.log(pizzaId)
  
  localStorage.setItem('pizzaId',JSON.stringify(pizzaId))
  localStorage.setItem('pizzaSize', this.pizzaSize)
  localStorage.setItem('cost', JSON.stringify(this.cost))
  localStorage.setItem('quantity', JSON.stringify(this.quantity))

  var id = Number(localStorage.getItem('pizzaId'))
  let size = String(localStorage.getItem('pizzaSize'))
  let cost = Number(localStorage.getItem('cost'))
  let qty = Number(localStorage.getItem('quantity'))

  
  this.cartItems.push({
    pizzaId : id,
    pizzaSize : size,
    quantity : qty  
  })
  console.log(this.cartItems)
  localStorage.clear()
  localStorage.setItem('cartItems',JSON.stringify(this.cartItems))
}
selected(){
  console.log(this.selectedLevel)
}

sizeClicked(pizzaSize:string,cost:number){
  console.log(pizzaSize, cost);
  this.pizzaSize= pizzaSize;
  this.cost = cost;
  
}


}

