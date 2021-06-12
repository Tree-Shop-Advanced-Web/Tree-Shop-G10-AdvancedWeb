import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public local: LocalStorageService) {}

  ngOnInit(): void {
  }
  getRole(){
    if( this.local.get('user') == null){
      return "notLogin"
    }
    return this.local.get('user').result.role
  }
  getUser(){
   return this.local.get('user').result.username
  }
  logout(){
    this.local.clear()
}

}
