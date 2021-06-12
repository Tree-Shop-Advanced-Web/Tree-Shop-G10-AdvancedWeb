import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  signin(){
      this.auth.signin(this.authForm.value).subscribe(
        data => {
          if(data.status == true){
            this.router.navigate([''])
          }else{
            alert('Username or Password is insorrect');
          }
        },
        err => {
          console.log(err);
          alert('Username or Password is insorrect');
        });
  }
  signup(){
    this.router.navigate(['/signup']);
  }
}
