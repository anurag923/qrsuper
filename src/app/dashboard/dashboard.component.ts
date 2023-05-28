import { Component, OnDestroy } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {
  constructor(){
  
    $('body').attr('class','custombody')

  }

  ngOnDestroy(): void {
    $('body').removeAttr('class','custombody')
  }
}
