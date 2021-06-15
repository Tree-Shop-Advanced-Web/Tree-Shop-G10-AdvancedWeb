import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OderService } from 'src/app/services/oder.service';
import { Router } from '@angular/router'
import { LocalStorageService } from 'angular-web-storage'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: any = []
  constructor(private router: Router,private local:LocalStorageService,private cart: CartService, private order: OderService) { this.onLoading() }
  onLoading() {
    try {
      this.cart.getCartByUserId().subscribe(
        data => {
          this.carts = data[0].product
          console.log(this.carts);
        },
        err => {
          console.log(err);
        }
      )
    } catch (err) {
      console.log(err);
    }
  }

  getRole() {
    if (this.local.get('user') === null) {
      return "notLogin"
    }
    return this.local.get('user').result.role
    
  }

  buy() {
    let mystr = ""
    for (let i = 0; i < this.carts.length; i++) {
      let mystr1 = this.carts[i].name + " ราคา " + this.carts[i].price + " จำนวน " + this.carts[i].quantity + "\n||"
      mystr += mystr1
    }
    let data = {
      userid: String,
      detail: mystr,
      price: this.calculate(),
      status: "tranfer"
    }
    this.order.PostOrder(data).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/order']);

      }, err => {
        console.log(err);

      })
  }

  getlengthCart(){
    return this.carts.length
  }
  calculate() {
    let sumprice = 0
    for (let i = 0; i < this.carts.length; i++) {
      let price = this.carts[i].price * this.carts[i].quantity
      sumprice += price
    }
    return sumprice
  }

  deleteProduct(product: String) {
    let mybody = {
      productId: product,
      userId: String
    }
    this.cart.deleteOneProduct(mybody).subscribe(data => {
      console.log(data);
      window.location.reload();
    }, err => {
      console.log(err)
    }
    )
  }

  ngOnInit(): void {
  }

}
