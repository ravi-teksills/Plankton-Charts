import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgApexchartsModule } from 'ng-apexcharts';


import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { DragDropModule } from "@angular/cdk/drag-drop";
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    RouterModule,
    NgApexchartsModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxSliderModule,

    DragDropModule
  ]
})
export class HomeModule { }
