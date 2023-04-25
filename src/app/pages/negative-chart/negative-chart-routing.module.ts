import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegativeChartComponent } from './negative-chart.component';

const routes: Routes = [{ path: '', component: NegativeChartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NegativeChartRoutingModule { }
