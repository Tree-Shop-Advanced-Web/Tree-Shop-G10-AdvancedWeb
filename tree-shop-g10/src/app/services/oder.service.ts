import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class OderService {
  oders: any 
  constructor(private http: HttpClient) { }
  getOders(){
    return this.http.get<any>('http://localhost:3000/api/order/get').pipe(map(data => {
      if(data){
        this.oders=data
        console.log(this.oders); 
      }
      return this.oders
    }))
  }

  getOdersByUserId(id:string){
    return this.http.get<any>('http://localhost:3000/api/order/get/1').pipe(map(data => {
      if(data){
        console.log(data);
        
        this.oders=data
        console.log(this.oders); 
      }
      return this.oders
    }))
  }

  PutOrder(oder:any){
    return this.http.put<any>('http://localhost:3000/api/order/put',oder).pipe(map(data => {
      if(data){
        this.oders=data
        console.log(this.oders); 
      }
      return this.oders
    }))
  }


}
