import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileformComponent } from './mobileform.component';

const routes: Routes = [{ path: '', component: MobileformComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileformRoutingModule { }
