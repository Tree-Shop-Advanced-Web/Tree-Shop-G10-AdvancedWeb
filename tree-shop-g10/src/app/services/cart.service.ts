import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  counter: number = 0;

  constructor() { 
  }

  getCounter(){
    return this.counter;
  }
  
}


