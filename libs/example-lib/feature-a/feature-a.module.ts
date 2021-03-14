import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponentComponent } from './components/a-component/a-component.component';

@NgModule({
  declarations: [AComponentComponent],
  imports: [
    CommonModule
  ], exports: [
    AComponentComponent
  ]
})
export class FeatureAModule { }
