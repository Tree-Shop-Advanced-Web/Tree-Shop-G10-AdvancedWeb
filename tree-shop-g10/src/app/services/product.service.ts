import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: any 
  constructor(private http: HttpClient) { }

addProduct(product:any) {
    return this.http.post<any>(' ', product).pipe(map(data => {
      return data
    }))
  }

}
