import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [ChartsComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgApexchartsModule
  ]
})
export class ChartsModule { }
