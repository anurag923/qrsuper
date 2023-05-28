import { Component } from '@angular/core';
import {  FormBuilder, Validators  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qrforms',
  templateUrl: './qrforms.component.html',
  styleUrls: ['./qrforms.component.css']
})
export class QrformsComponent {
  divContents:any;
  htmldata:any;
  
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder,private _route:ActivatedRoute) {
    this.htmldata = 'https://sportsradiostream.com/qrcode/#/dashboard/mobileform';
  }
  
  printqr() {
    this.divContents = document.getElementById("qrcode")?.innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    // a?.document.write('<html>');
    // a?.document.write('<body > <h1>Div contents are <br>');
    // a?.document.write(this.divContents);
    // a?.document.write('</body></html>');
    // a?.document.close();
    a?.print();
}



}
