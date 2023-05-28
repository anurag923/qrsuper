import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrdocsRoutingModule } from './qrdocs-routing.module';
import { QrdocsComponent } from './qrdocs.component';


@NgModule({
  declarations: [
    QrdocsComponent
  ],
  imports: [
    CommonModule,
    QrdocsRoutingModule
  ]
})
export class QrdocsModule { }
