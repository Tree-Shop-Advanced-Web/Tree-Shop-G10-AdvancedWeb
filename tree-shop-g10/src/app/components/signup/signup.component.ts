import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../../services/signup.service'
import { Router } from '@angular/router'
import { CartComponent } from '../cart/cart.component';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    role: new FormControl('')
  });
  constructor(private router: Router,private signup: SignupService,private cart:CartService) { }
  ngOnInit(): void {
  }
  register(){  
    this.signup.signups(this.signupForm.value).subscribe(
      data => {
        if(data.message){  
          console.log(data.data);
          this.cart.addCart(data.data).subscribe( 
            data => {
              console.log(data);
            },
            err => {
               console.log(err);   
            }
          )
          this.router.navigate(['/signin']);
        }else{
          alert('Cannot Sign up');
        }
      },
      err => {
        console.log(err);
        alert('Cannot Sign up');
      });
  }


  get fromdata(){
    return this.signupForm.controls
  }

  
  
}
