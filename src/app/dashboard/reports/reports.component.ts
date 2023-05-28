import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder ,  Validators} from '@angular/forms';

declare var $:any;

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit{
  users:any;
  registrationform: any
  disabled = true;
  submitted = false;
  password = "";
  passwordval = "password"
  showpassword = false;
  firstnameerr=false;
  lastnameerr= false;
  emailerr=false;

  constructor(private auth:AuthService,private formBuilder: FormBuilder,){

  }

  ngOnInit(): void {
    this.auth.getuserdatas().subscribe((res)=>{
      console.log('res_clients',res);
      this.users = res.result;
    })

    this.registrationform = this.formBuilder.group(
      {
        first_name: ['',Validators.required],
        last_name: ['',Validators.required],
        work_email: ['',Validators.required],
        company_name : ['',Validators.required],
        phonenumber: ['', Validators.required],
        account_type: 1,
        password: ['password']
      }
    )
  }
  genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
    this.password = password;
 }
  get f() {
    return this.registrationform.controls;
  }
  createnew(){
    // this.genPassword();
  }
  register() {
    
    if(!this.registrationform.valid){
      this.submitted = true;
      // this.passwordval = "password";
      // this.registrationform.value.password = "password";
      $('#password').val('password');
      setTimeout(()=>{
        this.passwordval = 'password';
      },1000)
      // this.genPassword();
    }
    else {
      const data = {
        "first_name": "'"+this.registrationform.value.first_name+"'",
        "last_name": "'"+this.registrationform.value.last_name+"'",
        "work_email": "'"+this.registrationform.value.work_email+"'",
        "company_name": "'"+this.registrationform.value.company_name+"'",
        "gst":"'test'",
        "account_type": 1,
        "password": "'"+this.passwordval+"'",
        "phonenumber": "'"+this.registrationform.value.phonenumber+"'"
      }
      console.log('data',data);
      console.log('formvalue', this.registrationform.value);
      this.auth.register(data,'1').subscribe((res) => {
      console.log('registration done');
      this.passwordval = "password";
  //       var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   var passwordLength = 12;
  //   var password = "";
  //   for (var i = 0; i <= passwordLength; i++) {
  //  var randomNumber = Math.floor(Math.random() * chars.length);
  //  password += chars.substring(randomNumber, randomNumber +1);
  // }
  //   this.password = password;
    this.submitted = false;
        this.auth.getuserdatas().subscribe((res)=>{
          console.log(res);
          this.users = res.result;
        })
        // this.toaster.success('you have successfully registered');
        // let data = {
        //   "client_id":res.client_id
        // }
        // this.auth.genqrform(data).subscribe((res1)=>{
        //   console.log(res1);
        //   this.router.navigate(['/'])
        // })
        //$('#register').hide();
      }, (err) => {
        console.log('error', err);
       // this.toaster.error(err.error.response)
        // $('#register').hide();
      });
    }

  }

  agree(event:any){
    console.log(event.target.checked);
    if(event.target.checked){
      this.disabled = false;
    }

    else{
      this.disabled  = true;
    }
  }

  seepassword(event:any){
    if(event.target.checked==true){
      this.showpassword = true;
    }

    else if(event.target.checked==false){
      this.showpassword = false;
    }

  }
}
