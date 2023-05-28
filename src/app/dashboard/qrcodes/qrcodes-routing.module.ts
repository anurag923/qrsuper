import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrcodesComponent } from './qrcodes.component';

const routes: Routes = [{ path: '', component: QrcodesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrcodesRoutingModule { }
