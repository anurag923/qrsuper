import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginform: any;

  constructor(private router:Router,private formbuilder:FormBuilder, private auth:AuthService){

  }
  ngOnInit(): void {
    this.loginform = this.formbuilder.group({
      email:['settaluri.nandagopalan@gmail.com'],
      // password:['']
    })
  }
  gotodashboard(){
    // console.log('loginformvalue',this.loginform.value);
    // this.router.navigate(['/dashboard']);
    console.log('formvalue',this.loginform.value);
    this.auth.login(this.loginform.value).subscribe((res)=>{
      console.log('res_login',res.result.token);
      localStorage.setItem('token',res.result.token);
      //$('#login').hide();
      this.router.navigate(['/dashboard']);
    },(err)=>{
      // $('#register').hide();
    });
  }

}
