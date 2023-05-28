import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrformsComponent } from './qrforms.component';

const routes: Routes = [{ path: '', component: QrformsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrformsRoutingModule { }
