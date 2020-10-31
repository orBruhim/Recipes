import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})


export class AuthComponent implements OnInit {
  @ViewChild ('authForm') SignUpForm: NgForm;
  isLogin = true;
  error: string = null;
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }
  onSwitchMode() {
    this.isLogin = !this.isLogin;
  }
  onSubmit() {
    const email = this.SignUpForm.value.email;
    const password = this.SignUpForm.value.password;
    if (this.isLogin) {
      this.authService.login(email, password).subscribe (responseData => {
        console.log (responseData);
        this.route.navigate (['/recipes']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
      });
    } else {
    this.authService.signUp(email, password).subscribe( responseData => {
      console.log(responseData);
      this.route.navigate (['/recipes']);
    },
     errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage;
    }
    );
    this.SignUpForm.reset();
    }
  }


}
