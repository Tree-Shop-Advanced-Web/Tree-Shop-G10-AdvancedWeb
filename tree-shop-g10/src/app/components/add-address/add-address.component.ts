import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AddressService } from '../../services/address.service'
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  constructor(private ps: AddressService) { }
  addressForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
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

  resetForm() {
    this.addressForm.reset()
    this.previewLoaded = false
  }
}
