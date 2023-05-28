import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrcodesRoutingModule } from './qrcodes-routing.module';
import { QrcodesComponent } from './qrcodes.component';


@NgModule({
  declarations: [
    QrcodesComponent
  ],
  imports: [
    CommonModule,
    QrcodesRoutingModule
  ]
})
export class QrcodesModule { }
