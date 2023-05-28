import { Component, OnDestroy } from '@angular/core';
import {  FormBuilder, Validators  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-mobileform',
  templateUrl: './mobileform.component.html',
  styleUrls: ['./mobileform.component.css']
})
export class MobileformComponent implements OnDestroy{
  divContents:any;
  htmldata:any;
  // showqr!:boolean;
  
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {
    
    // this._route.queryParams.subscribe((params)=>{
    //   if(params['redirected']=='true'){
    //     this.showqr = false;
    //   }
    //   else{
    //     this.showqr = true;
    //   }
    // })
    this.htmldata = 'https://sportsradiostream.com/qrcode/#/dashboard/qrforms?qr=1';
    $('#sidebar').hide();
    $('#navbar').hide();
    $('body').removeAttr('class','custombody');
  }
  

  ngOnDestroy(): void {
    $('#sidebar').show();
    $('#navbar').show();
    $('body').attr('class','custombody')
  }

  // redirecttoform(event:any){
  //   console.log(event);
  //   window.location.href = "https://sportsradiostream.com/qrcode/#/dashboard/mobileform?redirected=true"
  // }
}
