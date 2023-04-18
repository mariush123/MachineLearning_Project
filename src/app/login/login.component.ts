import { Component,OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private router:Router){
    this.loginForm=new FormGroup({
      email:new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }
  getErrorMessage() {
    if (this.loginForm.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorPassword() {
    return this.loginForm.get('password')?.hasError('minLength') ? "Minimum Length of Password is 8" : "Minimum Length of Password is 8";
  }
  hide:boolean=true;
  password:string='';
  ngOnInit():void{
    this.hide=true;
  }

  onButtonClick(){
    this.router.navigate(['/upload-file'])
  };

}
export class FormFieldPrefixSuffixExample {
  hide = true;
}

