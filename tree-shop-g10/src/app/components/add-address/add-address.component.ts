import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AddressService } from '../../services/address.service'
import { LocalStorageService } from 'angular-web-storage'

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  local: any;
  constructor(private ps: AddressService) { }
  addressForm = new FormGroup({
    userid : new FormControl(''),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    phonenumber: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  })

  previewLoaded: boolean = false
  ngOnInit(): void {
  }
  addAddress() {
    console.log(this.addressForm.value)
    this.ps.addAddress(this.addressForm.value).subscribe(
      data => {
        console.log(data);
        alert('Address added successfully')
        this.addressForm.reset()
      },
      err => {
        console.log(err);

      }
    )
  }
  getUser() {
    return this.local.get('user').result.username
  }

  
  resetForm() {
    this.addressForm.reset()
    this.previewLoaded = false
  }
}
