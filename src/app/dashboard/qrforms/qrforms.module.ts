import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { QrformsRoutingModule } from './qrforms-routing.module';
import { QrformsComponent } from './qrforms.component';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    QrformsComponent
  ],
  imports: [
    CommonModule,
    QrformsRoutingModule,
    SharedModule,
    QRCodeModule
  ]
})
export class QrformsModule { }
