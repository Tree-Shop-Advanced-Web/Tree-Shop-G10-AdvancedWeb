import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AddressService {
  addresses: any 
  constructor(private http: HttpClient) { }

  addAddress(address:any) {
    return this.http.post<any>('http://localhost:3000/api/user/add', address).pipe(map(data => {
      return data
    }))
  }

}
