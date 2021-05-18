import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoshootsRoutingModule } from './photoshoots-routing.module';
import { PhotoshootsComponent } from './photoshoots.component';


@NgModule({
  declarations: [
    PhotoshootsComponent
  ],
  imports: [
    CommonModule,
    PhotoshootsRoutingModule
  ]
})
export class PhotoshootsModule { }
