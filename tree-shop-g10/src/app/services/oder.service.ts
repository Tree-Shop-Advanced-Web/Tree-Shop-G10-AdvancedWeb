import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { LocalStorageService } from 'angular-web-storage'

@Injectable({
  providedIn: 'root'
})
export class OderService {
  oders: any 
  constructor(private http: HttpClient,public local: LocalStorageService) { }
   headers = new Headers();

  getOders(){
    return this.http.get<any>('http://localhost:3000/api/order/get').pipe(map(data => {
      if(data){
        this.oders=data
        console.log(this.oders); 
      }
      return this.oders
    }))
  }

  getOdersByUserId(){
    let token = this.local.get('user').token
    let userid = this.local.get('user')._id
    return this.http.get<any>('http://localhost:3000/api/order/get/1',{
      headers: new HttpHeaders().set('Authorization', token),
    }).pipe(map(data => {
      if(data){
        console.log(data);
        
        this.oders=data
        console.log(this.oders); 
      }
      return this.oders
    }))
  }

  PutOrder(oder:any){
    let token = this.local.get('user').token
    return this.http.put<any>('http://localhost:3000/api/order/put',oder,{
      headers: new HttpHeaders().set('Authorization', token),
    }).pipe(map(data => {
      if(data){
        this.oders=data
        console.log(this.oders); 
      }
      return this.oders
    }))
  }

  DeleteOrder(oder:any){
    let token = this.local.get('user').token
    return this.http.delete<any>('http://localhost:3000/api/order/delete/'+oder._id,{
      headers: new HttpHeaders().set('Authorization', token),
    }).pipe(map(data => {
      if(data){
        this.oders=data
        console.log(this.oders); 
      }
      return this.oders
    }))
  }

  PostOrder(oder:any){
    let token = this.local.get('user').token
    return this.http.post<any>('http://localhost:3000/api/order/post/',oder,{
      headers: new HttpHeaders().set('Authorization', token),
    }).pipe(map(data => {
      if(data){
        this.oders=data
        console.log(this.oders); 
      }
      return this.oders
    }))
  }

}
