import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrdocsComponent } from './qrdocs.component';

const routes: Routes = [{ path: '', component: QrdocsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrdocsRoutingModule { }
