import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PrescriptionMakerComponent } from './components/prescription-maker/prescription-maker.component';
import { PrescriptionRoutingModule } from './prescription-routing.module';
import { PrescriptionContainerComponent } from './components/prescription-container/prescription-container.component';



@NgModule({
  declarations: [
    PrescriptionContainerComponent,
    PrescriptionMakerComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    PrescriptionRoutingModule
  ]
})
export class PrescriptionModule { }
