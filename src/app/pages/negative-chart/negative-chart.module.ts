import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NegativeChartRoutingModule } from './negative-chart-routing.module';
import { NegativeChartComponent } from './negative-chart.component';

import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [NegativeChartComponent],
  imports: [
    CommonModule,
    NegativeChartRoutingModule,
    NgApexchartsModule
  ]
})
export class NegativeChartModule { }
