import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private local: LocalStorageService) { }

  ngOnInit(): void {
  }

  getRole() {
    if (this.local.get('user') === null) {
      return "notLogin"
    }
    return this.local.get('user').result.role
    
  }
  getUser() {
    return this.local.get('user').result.username
  }
  
}
