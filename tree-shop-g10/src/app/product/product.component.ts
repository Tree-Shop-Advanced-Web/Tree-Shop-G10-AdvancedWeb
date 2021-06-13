import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/product.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : any

  constructor(private productsService:ProductsService) { this.onLoading() }

  ngOnInit(): void {
  }
  onLoading(){
    try{
      this.productsService.getProducts().subscribe(
        data =>{
          console.log(data)
          this.products = data
        },
        err =>{
           console.log(err);
        }
      )
    }catch(err){
      console.log(err);
      
    }
  }
}
