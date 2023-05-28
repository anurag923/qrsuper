import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{ path: '', component: DashboardComponent, children:[
  { path: 'analytics', loadChildren: () => import('./analytics/analytics.module').then(m => m.AnalyticsModule) },
  { path: 'qrdocs', loadChildren: () => import('./qrdocs/qrdocs.module').then(m => m.QrdocsModule) },
  { path: '', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
  { path: 'qrforms', loadChildren: () => import('./qrforms/qrforms.module').then(m => m.QrformsModule) },
  { path: 'mobileform', loadChildren: () => import('./mobileform/mobileform.module').then(m => m.MobileformModule) },
  { path: 'qrcodes', loadChildren: () => import('./qrcodes/qrcodes.module').then(m => m.QrcodesModule) }
] }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
