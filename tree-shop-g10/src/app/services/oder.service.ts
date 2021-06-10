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
    return this.http.get<any>(' ').pipe(map(data => {
      if(data){
        this.oders=data
        console.log(this.oders); 
      }
      return this.oders
    }))
  }
}
