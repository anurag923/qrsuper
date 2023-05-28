import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
declare var $:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registrationform:any
  constructor(private formBuilder: FormBuilder,private auth:AuthService){

  }
  ngOnInit(): void {
   this.registrationform = this.formBuilder.group(
    {
      firstname:[''],
      lastname:[''],
      email:[''],
      password:['']
    }
   )
  }

  register(){
    console.log('formvalue',this.registrationform.value);
    this.auth.register(this.registrationform.value,'1').subscribe((res)=>{
      console.log('registration done');
      //$('#register').hide();
    },(err)=>{
      console.log('error',err);
      // $('#register').hide();
    });
  }
}
