import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileformRoutingModule } from './mobileform-routing.module';
import { MobileformComponent } from './mobileform.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    MobileformComponent
  ],
  imports: [
    CommonModule,
    MobileformRoutingModule,
    SharedModule,
    QRCodeModule
  ]
})
export class MobileformModule { }
