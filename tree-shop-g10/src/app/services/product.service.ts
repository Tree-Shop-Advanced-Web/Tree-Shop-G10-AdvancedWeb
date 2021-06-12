import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators'
import { LocalStorageService } from 'angular-web-storage'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: any 
  constructor(private http: HttpClient,public local: LocalStorageService) { }

addProduct(product:any) {
  let token = this.local.get('user').token
    return this.http.post<any>('http://localhost:3000/api/products/add', product,
    {
      headers: new HttpHeaders().set('Authorization', token),
    }).pipe(map(data => {
      return data
    }))
  }
}
