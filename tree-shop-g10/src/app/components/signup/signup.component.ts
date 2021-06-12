import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignupService } from '../../services/signup.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl('')
  });
  constructor(private router: Router,private signup: SignupService) { }

  ngOnInit(): void {
  }
  register(){
    this.signup.signups(this.signupForm.value).subscribe(
      data => {
        if(data.message){
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
}
